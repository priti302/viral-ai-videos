import { ShoppingCart } from "lucide-react";

import facebook3d from "@/assets/facebook-3d.jpg";
import twitter3d from "@/assets/twitter-3d.jpg";
import youtube3d from "@/assets/youtube-3d.jpg";
import instagram3d from "@/assets/instagram-3d.jpg";
import pinterest3d from "@/assets/pinterest-3d.jpg";
import snapchat3d from "@/assets/snapchat-3d.jpg";

import moneyIllustration from "@/assets/make-money.png";

// ✅ BUY LINK
const BUY_LINK = "https://superprofile.bio/vp/ultimate-viral-50000videos";

const PlatformsSection = () => {
  const earningMethods = [
    "Sponsored Posts",
    "Exclusive Content",
    "Sell Your Own Products",
    "Merchandise / Shoutouts",
    "Promote affiliate products and earn commissions.",
    "Earn through YouTube, Instagram, and Snapchat monetization.",
  ];

  const platforms = [
    { name: "Facebook", icon: facebook3d },
    { name: "Twitter", icon: twitter3d },
    { name: "YouTube", icon: youtube3d },
    { name: "Instagram", icon: instagram3d },
    { name: "Pinterest", icon: pinterest3d },
    { name: "Snapchat", icon: snapchat3d },
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto text-center">
        {/* ===== UPLOAD PLATFORMS ===== */}
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Where can I Upload
          <br />
          these Anime Reels
        </h2>

        {/* ===== 3D SOCIAL MEDIA ICONS ===== */}
        <div className="flex items-center justify-center gap-6 mb-8 flex-wrap">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="w-14 h-14 flex items-center justify-center"
            >
              <img
                src={platform.icon}
                alt={`${platform.name} 3D icon`}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* ✅ BUY BUTTON WITH REAL LINK */}
        <a
          href={BUY_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mx-auto mb-20
          btn-primary-glow text-primary-foreground font-semibold
          py-3 px-8 rounded-lg"
        >
          <ShoppingCart className="w-5 h-5" />
          Buy Now ₹999{" "}
          <span className="line-through text-muted-foreground ml-1">
            ₹99999
          </span>
        </a>

        {/* ===== MAKE MONEY SECTION ===== */}
        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          How Can I Make Money By Posting These Reels?
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <img
            src={moneyIllustration}
            alt="Make money with reels"
            className="w-full max-w-md mx-auto"
          />

          {/* RIGHT LIST */}
          <div className="space-y-4 text-left">
            {earningMethods.map((item, index) => (
              <div
                key={index}
                className="border border-primary/40 rounded-lg px-4 py-3 bg-card"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
