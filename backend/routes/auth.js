const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const Otp = require("../models/Otp");
const User = require("../models/User");

// =======================
// EMAIL CONFIG
// =======================
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// =======================
// SEND OTP (EMAIL ONLY)
// =======================
router.post("/send-otp", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    await Otp.deleteMany({ email: normalizedEmail });

    await Otp.create({
      email: normalizedEmail,
      otp,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000),
    });

    await transporter.sendMail({
      from: `"Skills Cart" <${process.env.EMAIL_USER}>`,
      to: normalizedEmail,
      subject: "Your OTP Code",
      html: `<h2>Your OTP is: ${otp}</h2><p>Valid for 5 minutes</p>`,
    });

    console.log("OTP SENT:", otp); // remove in production

    res.json({ message: "OTP sent successfully" });

  } catch (error) {
    console.error("SEND OTP ERROR:", error);
    res.status(500).json({ message: "Failed to send OTP" });
  }
});

// =======================
// VERIFY OTP (EMAIL ONLY)
// =======================
router.post("/verify-otp", async (req, res) => {
  try {
    const email = req.body.email?.trim().toLowerCase();
    const { otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({ message: "Email and OTP required" });
    }

    const record = await Otp.findOne({ email });

    if (!record) {
      return res.status(400).json({ message: "OTP not found" });
    }

    if (record.expiresAt < new Date()) {
      await Otp.deleteOne({ email });
      return res.status(400).json({ message: "OTP expired" });
    }

    if (record.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    await Otp.deleteOne({ email });

   let user = await User.findOne({ email });
console.log("USER FOUND:", user);

if (!user) {
  user = await User.create({ email });
  console.log("USER CREATED:", user);
}


    res.json({
      message: "Login successful",
      user,
    });

  } catch (error) {
    console.error("VERIFY OTP ERROR:", error);
    res.status(500).json({ message: "Verification failed" });
  }
});

// =======================
// GET LOGGED-IN USER
// =======================
router.get("/me", async (req, res) => {
  try {
    const email = req.query.email?.trim().toLowerCase();

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);

  } catch (error) {
    console.error("GET ME ERROR:", error);
    res.status(500).json({ message: "Failed to fetch user" });
  }
});

// =======================
// UPDATE USER PROFILE
// =======================
router.put("/me", async (req, res) => {
  try {
    const { email, firstName, lastName, phone } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const user = await User.findOneAndUpdate(
      { email: normalizedEmail },
      { firstName, lastName, phone },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      message: "Profile updated successfully",
      user,
    });

  } catch (error) {
    console.error("UPDATE PROFILE ERROR:", error);
    res.status(500).json({ message: "Failed to update profile" });
  }
});

module.exports = router;
