import CountdownTimer from "./CountdownTimer";

// BONUS IMAGES
import bonus3 from "@/assets/Instagram BUNDLE.jpg";
import bonus4 from "@/assets/YOUTUBE MASTERY COURSE BUNDLE.jpg";
import bonus5 from "@/assets/DIGITAL PRODUCTS BUNDLE.jpg";
import bonus6 from "@/assets/AI STORY REELS.jpg";
import bonus7 from "@/assets/25000+ HOT GIRLS VIDEO BUNDLE.jpg";
import bonus8 from "@/assets/FOOD VIDEOS BUNDLE.jpg";
import bonus9 from "@/assets/MINI AI WORKERS VIDEOS BUNDLE.jpg";
import bonus10 from "@/assets/THE ULTIMATE VIRAL  BUNDLE.jpg";
import bonus11 from "@/assets/2000+ AI VIRAL PODCAST.jpg";
import bonus12 from "@/assets/ANIME REELS BUNDLE.jpg";
import bonus13 from "@/assets/GHIBLI STYLE REEL BUNDLE.jpg";
import bonus14 from "@/assets/HULK BUNDLE POSTER.jpg";

// ✅ REAL BUY LINK
const HULK_BUY_LINK =
  "https://superprofile.bio/vp/ai-viral-videos-–-ready-to-post-viral-content";

const DEMO_LINK = "#";

// ✅ ONE COMPACT BUTTON STYLE (REFERENCE IMAGE MATCH)
const buyBtnClass =
  "!inline-flex !w-fit px-6 py-2 text-sm font-semibold rounded-lg " +
  "bg-gradient-to-r from-purple-600 to-pink-600 text-white " +
  "hover:opacity-90 transition-all duration-200";

const BonusesSection = () => {
  const bonuses = [
    {
      title: "100 Million Digital Products",
      description:
        "Instant access to a massive library of ready-to-use digital assets to create, grow, and earn online faster.",
      image: bonus5,
      buyLink: DEMO_LINK,
    },
    {
      title: "5000+ AI Story Reels Bundle",
      description:
        "AI-generated story reels designed to capture attention, boost engagement, and go viral across platforms.",
      image: bonus6,
      buyLink: DEMO_LINK,
    },
    {
      title: "25000+ Hot Girls Videos Bundle",
      description:
        "High-engagement viral videos crafted to maximize views and reach on Reels and Shorts.",
      image: bonus7,
      buyLink: DEMO_LINK,
    },
    {
      title: "2000+ Food Videos Bundle",
      description:
        "Mouth-watering food videos optimized for virality on Instagram, YouTube Shorts, and TikTok.",
      image: bonus8,
      buyLink: DEMO_LINK,
    },
    {
      title: "2000+ Mini AI Worker Videos Bundle",
      description:
        "Creative AI mini worker reels that add a unique and fun viral element to your content.",
      image: bonus9,
      buyLink: DEMO_LINK,
    },
    {
      title: "Mr. Beast Reel Bundle (5000+ Videos)",
      description:
        "High-energy giveaway and challenge-style reels inspired by viral formats.",
      image: bonus10,
      buyLink: DEMO_LINK,
    },
    {
      title: "2000+ Hindi Viral AI Podcast Reels",
      description:
        "Hindi AI podcast reels designed to boost views, engagement, and virality instantly.",
      image: bonus11,
      buyLink: DEMO_LINK,
    },
    {
      title: "5000+ Anime Reels Bundle",
      description:
        "High-quality anime reels to attract anime lovers and grow your page faster.",
      image: bonus12,
      buyLink: DEMO_LINK,
    },
    {
      title: "5000+ Viral Ghibli Style Reels",
      description:
        "Emotion-rich Ghibli-style reels with a unique artistic and viral appeal.",
      image: bonus13,
      buyLink: DEMO_LINK,
    },
    {
      title: "2000+ AI Hulk Reels Bundle",
      description:
        "Power-packed Hulk-style AI reels designed for instant attention and virality.",
      image: bonus14,
      buyLink: HULK_BUY_LINK,
      highlight: true,
    },
    {
      title: "Instagram Growth Mastery Course",
      description:
        "Learn proven strategies to grow followers, boost engagement, and monetize Instagram effectively.",
      image: bonus3,
      buyLink: DEMO_LINK,
    },
    {
      title: "YouTube Growth Mastery Course",
      description:
        "Step-by-step system to grow subscribers, increase watch time, and monetize using Shorts and long-form videos.",
      image: bonus4,
      buyLink: DEMO_LINK,
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* HEADING */}
        <h3 className="text-xl md:text-2xl font-bold text-center mb-10">
          You Can Unlock These{" "}
          <span className="text-destructive">
            12 Premium Bonuses Worth ₹50,000+
          </span>
          <br />
          <span className="text-primary">For Absolutely FREE</span>
        </h3>

        {/* BONUS CARDS */}
        <div className="space-y-8">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row gap-6 p-6 rounded-2xl border bg-card shadow-lg ${
                bonus.highlight
                  ? "border-primary ring-2 ring-primary/30"
                  : "border-border"
              }`}
            >
              {/* IMAGE */}
              <div className="w-full md:w-[220px] flex justify-center">
                <img
                  src={bonus.image}
                  alt={bonus.title}
                  className="h-[200px] object-contain"
                />
              </div>

              {/* CONTENT */}
              <div className="flex-1 flex flex-col gap-4">
                <div>
                  <h4 className="text-lg font-bold mb-1">{bonus.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {bonus.description}
                  </p>
                </div>

                {/* ✅ COMPACT BUY BUTTON */}
                <a
                  href={bonus.buyLink}
                  target={bonus.buyLink !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={buyBtnClass}
                >
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* MAIN CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-2 text-sm">
            Get All Bundles In One Mega Deal
          </p>

          <h3 className="text-xl md:text-2xl font-bold mb-6">
            Buy Everything For Just{" "}
            <span className="text-gradient">₹999/-</span>
          </h3>

          <div className="flex justify-center mb-6">
            <CountdownTimer />
          </div>

          {/* ✅ SAME COMPACT BUTTON */}
         <a
  href="https://superprofile.bio/vp/ultimate-viral-50000videos"
  target="_blank"
  rel="noopener noreferrer"
  className={`${buyBtnClass} mx-auto`}
>
  Buy Now
</a>

        </div>
      </div>
    </section>
  );
};

export default BonusesSection;
