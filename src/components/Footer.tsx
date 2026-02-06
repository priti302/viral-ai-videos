import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white py-10 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* COPYRIGHT */}
        <h3 className="text-2xl font-semibold text-gray-900 mb-1">
          Copyright © 2026 The Viral AI Videos
        </h3>

        {/* LINKS */}
        <div className="flex items-center justify-center gap-2 text-sm mb-4">
          <Link
            to="/privacy-policy"
            className="text-blue-600 hover:underline"
          >
            Privacy Policy
          </Link>

          <span className="text-gray-500">|</span>

          <Link
            to="/terms"
            className="text-blue-600 hover:underline"
          >
            Terms and Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;