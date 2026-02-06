import { Link } from "react-router-dom";

const StickyBar = () => {
  return (
    <div className="sticky-bar">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold">
            Hurry Up!{" "}
            <span className="text-accent">
              Only 9 Bundle Left
            </span>
          </p>
          <p className="text-xs text-muted-foreground">
            Offer ends{" "}
            <span className="text-primary underline">Today</span>
          </p>
        </div>

        <Link to="/checkout">
          <button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold py-2 px-6 rounded-lg text-sm hover:opacity-90 transition-opacity">
            Download Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default StickyBar;
