import { ShoppingCart } from "lucide-react";

// ✅ BUY LINK
const BUY_LINK = "https://superprofile.bio/vp/ultimate-viral-50000videos";

const BeforeAfterSection = () => {
  return (
    <section className="py-12 px-4">
      <div className="text-center mt-8">
        <a
          href={BUY_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2
          px-5 py-2 text-sm font-semibold rounded-lg
          bg-gradient-to-r from-purple-600 to-pink-600
          text-white hover:opacity-90 mx-auto"
        >
          <ShoppingCart className="w-4 h-4" />
          Buy Now ₹999{" "}
          <span className="line-through text-xs opacity-70 ml-1">
            ₹99999
          </span>
        </a>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
