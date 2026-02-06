import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
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

const BonusesSection = () => {
  const bonuses = [
    {
      title: "100 Million Digital Products",
      description:
        "Instant access to a massive library of ready-to-use digital assets to create, grow, and earn online faster.",
      price: "₹499/-",
      originalPrice: "₹24,999/-",
      image: bonus5,
    },
    {
      title: "5000+ AI Story Reels Bundle",
      description:
        "AI-generated story reels designed to capture attention, boost engagement, and go viral across platforms.",
      price: "₹399/-",
      originalPrice: "₹9,999/-",
      image: bonus6,
    },
    {
      title: "25000+ Hot Girls Videos Bundle",
      description:
        "High-engagement viral videos crafted to maximize views and reach on Reels and Shorts.",
      price: "₹4,999/-",
      originalPrice: "₹9,999/-",
      image: bonus7,
    },
    {
      title: "2000+ Food Videos Bundle",
      description:
        "Mouth-watering food videos optimized for virality on Instagram, YouTube Shorts, and TikTok.",
      price: "₹399/-",
      originalPrice: "₹9,999/-",
      image: bonus8,
    },
    {
      title: "2000+ Mini AI Worker Videos Bundle",
      description:
        "Creative AI mini worker reels that add a unique and fun viral element to your content.",
      price: "₹399/-",
      originalPrice: "₹9,999/-",
      image: bonus9,
    },
    {
      title: "Mr. Beast Reel Bundle (5000+ Videos)",
      description:
        "High-energy giveaway and challenge-style reels inspired by viral formats.",
      price: "₹399/-",
      originalPrice: "₹9,999/-",
      image: bonus10,
    },
    {
      title: "2000+ Hindi Viral AI Podcast Reels",
      description:
        "Hindi AI podcast reels designed to boost views, engagement, and virality instantly.",
      price: "₹399/-",
      originalPrice: "₹9,999/-",
      image: bonus11,
    },
    {
      title: "5000+ Anime Reels Bundle",
      description:
        "High-quality anime reels to attract anime lovers and grow your page faster.",
      price: "₹399/-",
      originalPrice: "₹9,999/-",
      image: bonus12,
    },
    {
      title: "5000+ Viral Ghibli Style Reels",
      description:
        "Emotion-rich Ghibli-style reels with a unique artistic and viral appeal.",
      price: "₹399/-",
      originalPrice: "₹9,999/-",
      image: bonus13,
    },
    {
      title: "2000+ AI Hulk Reels Bundle",
      description:
        "Power-packed Hulk-style AI reels designed for instant attention and virality.",
      price: "₹399/-",
      originalPrice: "₹9,999/-",
      image: bonus14,
    },
    {
      title: "Instagram Growth Mastery Course",
      description:
        "Learn proven strategies to grow followers, boost engagement, and monetize Instagram effectively.",
      price: "₹299/-",
      originalPrice: "₹6,999/-",
      image: bonus3,
    },
    {
      title: "YouTube Growth Mastery Course",
      description:
        "Step-by-step system to grow subscribers, increase watch time, and monetize using Shorts and long-form videos.",
      price: "₹299/-",
      originalPrice: "₹6,999/-",
      image: bonus4,
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
              className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl border border-border bg-card shadow-lg"
            >
              {/* IMAGE */}
              <div className="w-full md:w-[240px] flex justify-center items-center">
                <img
                  src={bonus.image}
                  alt={bonus.title}
                  className="h-[220px] object-contain"
                />
              </div>

              {/* CONTENT */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-bold mb-3">{bonus.title}</h4>

                  <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                    {bonus.description}
                  </p>

                  <p className="text-lg font-bold text-red-500 mb-4">
                    {bonus.price}{" "}
                    <span className="text-muted-foreground line-through text-sm ml-2">
                      {bonus.originalPrice}
                    </span>
                  </p>
                </div>

                {/* INDIVIDUAL BUY BUTTON */}
                <Link to="/checkout">
                  <button className="w-full md:w-auto btn-primary-glow text-primary-foreground font-semibold py-2 px-6 rounded-lg flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* MAIN CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-1">
            Get All Bundles In One Mega Deal
          </p>

          <p className="text-gradient font-bold mb-3">
            Total Value Of Bonuses: ₹50,000+
          </p>

          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Buy Everything For Just{" "}
            <span className="text-gradient">₹999/-</span>
          </h3>

          <p className="text-sm text-muted-foreground mb-6">
            Time is running out. Reserve your place now!
          </p>

          <div className="flex justify-center mb-6">
            <CountdownTimer />
          </div>

          <Link to="/checkout">
            <button className="btn-primary-glow text-primary-foreground font-semibold py-4 px-14 rounded-xl flex items-center gap-2 mx-auto text-lg">
              <ShoppingCart className="w-5 h-5" />
              Buy All ₹999
            </button>
          </Link>

          <p className="text-sm text-muted-foreground mt-5">
            Register before{" "}
            <span className="text-primary underline">28 FEB</span>{" "}
            to unlock bonuses worth{" "}
            <span className="text-accent">₹50,000</span>
          </p>

          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              RATED 4.9 OUT OF 5
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusesSection;
