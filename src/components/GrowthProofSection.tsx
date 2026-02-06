import { ShoppingCart } from "lucide-react";

import growth1 from "@/assets/growth-1.jpeg";
import growth2 from "@/assets/growth-2.jpeg";
import growth3 from "@/assets/growth-3.jpeg";
import growth4 from "@/assets/growth-4.jpeg";
import growth5 from "@/assets/growth-5.jpeg";
import growth6 from "@/assets/growth-6.jpeg";
import growth7 from "@/assets/growth-7.jpeg";
import growth8 from "@/assets/growth-8.jpeg";

const growthImages = [
  growth1,
  growth2,
  growth3,
  growth4,
  growth5,
  growth6,
  growth7,
  growth8,
];

const GrowthProofSection = () => {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-10">
          CHECK HOW{" "}
          <span className="text-gradient underline underline-offset-8">
            ANIME REELS
          </span>
          <br />
          CAN GROW YOUR THEME
          <br />
          PAGE QUICKLY
        </h2>

        <div className="border border-white/70 rounded-lg p-6 mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {growthImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Instagram growth proof ${index + 1}`}
                className="rounded-md w-full"
                loading="lazy"
              />
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default GrowthProofSection;
