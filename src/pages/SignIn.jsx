import { useState } from "react";
import skillsCartLogo from "@/assets/logo.png";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [step, setStep] = useState(1); // 1 = email input, 2 = otp
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // =====================
  // SEND OTP (EMAIL ONLY)
  // =====================
  const sendOtp = async () => {
    if (!email) {
      setError("Please enter your email");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await fetch("http://localhost:5000/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to send OTP");
      }

      setStep(2);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // =====================
  // VERIFY OTP
  // =====================
 const verifyOtp = async () => {
  const code = otp.join("");

  if (code.length !== 6) {
    setError("Enter complete OTP");
    return;
  }

  try {
    setLoading(true);
    setError("");

    const res = await fetch("http://localhost:5000/api/auth/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email.trim().toLowerCase(),
        otp: code,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Invalid OTP");
    }

    // ✅ SAVE USER
    localStorage.setItem("user", JSON.stringify(data.user));

    // ✅ REDIRECT TO SUPERPROFILE STORE DASHBOARD
    navigate("/dashboard");

  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};


  // =====================
  // OTP INPUT HANDLER
  // =====================
  const handleOtpChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* LEFT SECTION */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 bg-white">
        <div className="w-full max-w-md text-center">

          {/* LOGO */}
          <div className="flex justify-center mb-6">
            <img src={skillsCartLogo} alt="logo" className="w-14 h-14" />
          </div>

          {/* ERROR */}
          {error && (
            <p className="text-red-500 text-sm mb-4">{error}</p>
          )}

          {/* STEP 1 : EMAIL */}
          {step === 1 && (
            <>
              <h1 className="text-3xl font-semibold mb-2 text-black">
                Welcome
              </h1>
              <p className="text-gray-600 mb-8">
                Sign in to access your purchased content
              </p>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-md px-4 py-3 mb-4 focus:ring-2 focus:ring-black outline-none text-black"
              />

              <button
                onClick={sendOtp}
                disabled={loading}
                className="w-full bg-black text-white py-3 rounded-full font-medium disabled:opacity-60"
              >
                {loading ? "Sending OTP..." : "Continue"}
              </button>
            </>
          )}

          {/* STEP 2 : OTP */}
          {step === 2 && (
            <>
              <h1 className="text-2xl font-semibold mb-2 text-black">
                Enter OTP
              </h1>

              <p className="text-gray-600 mb-6 text-sm">
                Sent to <span className="font-medium">{email}</span>
              </p>

              <div className="flex justify-center gap-2 mb-6">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    value={digit}
                    onChange={(e) =>
                      handleOtpChange(e.target.value, index)
                    }
                    maxLength={1}
                    className="w-12 h-12 border rounded-md text-center text-xl focus:ring-2 focus:ring-black outline-none text-black"
                  />
                ))}
              </div>

              <button
                onClick={verifyOtp}
                disabled={loading}
                className="w-full bg-black text-white py-3 rounded-full font-medium mb-4 disabled:opacity-60"
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>

              <button
                onClick={() => {
                  setStep(1);
                  setOtp(["", "", "", "", "", ""]);
                  setError("");
                }}
                className="text-sm text-gray-600"
              >
                ← Back
              </button>
            </>
          )}
        </div>
      </div>

      {/* RIGHT GRADIENT */}
      <div className="hidden lg:block lg:w-1/2">
        <div className="h-full w-full bg-gradient-to-b from-sky-400 via-purple-400 to-pink-500"></div>
      </div>
    </div>
  );
};

export default SignIn;