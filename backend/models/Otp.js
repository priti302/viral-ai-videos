const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    default: null,
  },
  phone: {
    type: String,
    default: null,
  },
  otp: {
    type: String,
    required: true,
  },
  expiresAt: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Otp", otpSchema);