import { useState } from "react";
import animeBundle from "@/assets/product-box1.jpeg";
import aiBabyBundle from "@/assets/bonus.png";
import skillsCartLogo from "@/assets/logo.png";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [addon, setAddon] = useState(false);
  const isEmailError = email.trim() === "";
  const isPhoneError = phone.trim() === "";
    // PRICING
  const BASE_PRICE = 69;
  const ADDON_PRICE = 31;

  const totalAmount = addon ? BASE_PRICE + ADDON_PRICE : BASE_PRICE;

  // PAYMENT MODAL STATE
  const [showPayment, setShowPayment] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <div className="bg-white min-h-screen">
       {showSignIn && (
        <SignInModal onClose={() => setShowSignIn(false)} />
      )}

      {/* MAIN CHECKOUT */}
      <div className="flex justify-center py-10 px-4">
        <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg grid grid-cols-1 lg:grid-cols-2 overflow-hidden">

          {/* LEFT SECTION */}
          <div className="p-8 flex flex-col items-start">
            <img
              src={skillsCartLogo}
              alt="Skills Cart"
              className="w-20 mb-6"
            />

            <h1 className="text-2xl font-bold mb-6 text-black">
              Get 3000+ Viral Anime Reels Bundle Now!
            </h1>

            <img
              src={animeBundle}
              alt="3000+ Anime Reels Bundle"
              className="w-full max-w-md"
            />
          </div>

          {/* RIGHT SECTION */}
          <div className="p-8 bg-white border-l">
            <p className="text-sm mb-2 text-black">
              Access to this purchase will be sent to this email
            </p>

                        {/* Email */}
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full border rounded-md px-4 py-3 mb-1 text-black ${
                isEmailError ? "border-red-500" : "border-gray-300"
              }`}
            />

            {isEmailError && (
              <p className="text-xs text-red-500 mb-4">
                This field is mandatory
              </p>
            )}

            {/* Phone */}
            <div
              className={`flex rounded-md overflow-hidden mb-1 text-black border ${
                isPhoneError ? "border-red-500" : "border-gray-300"
              }`}
            >
              <span className="px-4 flex items-center bg-white border-r text-black">
                +91
              </span>
              <input
                type="tel"
                placeholder="Phone number *"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 outline-none"
              />
            </div>

            {isPhoneError && (
              <p className="text-xs text-red-500 mb-4">
                This field is mandatory
              </p>
            )}

            {/* ADDON CARD */}
            <div className="border-2 border-dashed border-blue-400 rounded-lg p-4 bg-blue-50 mb-6">
              <div className="flex gap-4">
                <img
                  src={aiBabyBundle}
                  alt="AI Baby Reels"
                  className="w-20 h-20 rounded-md"
                />

                <div className="flex-1">
                  <h3 className="font-semibold mb-2 text-black">
                    1000+ Ai Baby Reels Bundle
                  </h3>

                  <ul className="text-sm text-gray-700 space-y-1 mb-2 text-black">
                    <li>• Get 1000+ Ai Baby Readymade Reels Videos</li>
                    <li>• Ready-Made Reels Without logo & Watermark...</li>
                  </ul>

                  <p className="font-semibold mb-2 text-black">
                    ₹31 <span className="line-through text-gray-400 text-black">₹300</span>
                  </p>

                  <label className="flex items-center gap-2 text-sm cursor-pointer text-black">
                    <input
                      type="checkbox"
                      checked={addon}
                      onChange={() => setAddon(!addon)}
                      className="w-4 h-4"
                    />
                    Yes, I Want This!
                  </label>
                </div>
              </div>
            </div>

            {/* PRICE */}
            <div className="flex justify-between text-sm mb-2 text-black">
              <span>Sub Total</span>
              <span>
                ₹69 <span className="line-through text-gray-400">₹699</span>
              </span>
            </div>

           <div className="flex justify-between font-semibold text-lg mb-6 text-black">
  <span>Total</span>
  <span>₹{totalAmount}</span>
</div>

            {/* CTA */}
           <button
  onClick={() => setShowPayment(true)}
  className="w-full bg-[#7B5AA6] hover:bg-[#6b4c96] text-white py-4 rounded-lg font-semibold"
>
  Get it now →
</button>
          </div>
        </div>
      </div>

      {/* EXTRA DETAILS SECTION */}
      <div className="max-w-6xl mx-auto bg-white mt-10 rounded-xl shadow-sm p-8 text-black">
        <h2 className="font-semibold mb-4">Description</h2>

        <ul className="space-y-2 text-sm">
          <li>✅ Instant Access – Get your bundle right after payment.</li>
          <li>🔒 100% Secure Payment – Your details are safe and encrypted.</li>
          <li>🎁 Includes Free Bonuses Worth ₹10,000.</li>
          <li>♾️ Lifetime Access – Use the bundle anytime, forever.</li>
          <li>📥 Easy Download – Works on all devices.</li>
          <li>💯 100% Satisfaction Guarantee – Love it.</li>
          <li>🌍 Suitable for Beginners & Professionals.</li>
          <li>⏳ Limited-Time Offer – Price may increase soon!</li>
          <li>✅ Anime bundle and all bonuses are in one file.</li>
        </ul>

        <h3 className="font-semibold mt-8 mb-3">What you’ll get</h3>

        <div className="border rounded-lg overflow-hidden text-sm">
          <div className="flex justify-between px-4 py-3 border-b">
            <span>Number of resources</span>
            <span>1</span>
          </div>
          <div className="flex justify-between px-4 py-3 border-b">
            <span>Resource content</span>
            <span>File</span>
          </div>
          <div className="flex justify-between px-4 py-3">
            <span>Total file size</span>
            <span>6.16 MB</span>
          </div>
        </div>

        <h3 className="font-semibold mt-8 mb-2">Contact Us</h3>
        <p className="text-sm">✉️ withmetech20@gmail.com</p>

        <div className="mt-4 text-sm font-medium cursor-pointer">
          ＋ Terms and conditions
        </div>

        <div className="mt-6 p-4 bg-gray-100 rounded-lg text-sm">
          Already made a payment on this page?
          <span
  onClick={() => setShowSignIn(true)}
  className="text-blue-600 cursor-pointer ml-1"
>
  Sign in to view details
</span>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg text-xs text-gray-600">
          <strong>Disclaimer</strong><br />
          CosmoFeed Technologies Pvt. Ltd. shall not be held liable for any content.
          <span className="text-blue-600 cursor-pointer ml-1">Learn more</span>
        </div>
      </div>
      

    </div>
    
  );
};
const SignInModal = ({ onClose }) => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden relative shadow-xl">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-full border flex items-center justify-center text-gray-600 hover:bg-gray-100"
        >
          ✕
        </button>

        {/* Header */}
        <div className="bg-[#B7D4FF] py-8 flex justify-center">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow">
            <img src={skillsCartLogo} alt="Skills Cart" className="w-14" />
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-6 text-center">
          <h2 className="text-lg font-semibold mb-2 text-black">
            Sign in to Digital Aura’s Store
          </h2>

          <p className="text-sm text-gray-600 mb-6">
            Access all your previous purchases, manage your account details,
            and more
          </p>

          <button
            onClick={() => {
              onClose();
              navigate("/signin");
            }}
            className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-900"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};
       
export default Checkout;