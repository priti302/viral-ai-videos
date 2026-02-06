const Otp = require("../models/Otp");

// ======================
// SEND OTP (EMAIL)
// ======================
exports.sendOtp = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // delete old OTP
    await Otp.deleteMany({ email });

    // save new OTP WITH EMAIL
    await Otp.create({
      email: email,                 // ⭐ VERY IMPORTANT
      otp: otp,
      expiresAt: Date.now() + 5 * 60 * 1000,
    });

    console.log("OTP SENT:", otp); // for testing

    res.json({ message: "OTP sent successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ======================
// VERIFY OTP
// ======================
exports.verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const record = await Otp.findOne({ email });

    if (!record) {
      return res.status(400).json({ message: "OTP expired or not found" });
    }

    if (record.expiresAt < Date.now()) {
      await Otp.deleteOne({ email });
      return res.status(400).json({ message: "OTP expired" });
    }

    if (record.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    await Otp.deleteOne({ email });

    res.json({ message: "Login successful" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
