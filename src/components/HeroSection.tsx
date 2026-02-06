import { useEffect, useState } from 'react';
import { Star, Video, Globe, Clock, Check, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import CountdownTimer from './CountdownTimer';
import productBox from '@/assets/product-box1.jpeg';

const buyerNames = [
  'Sahil',
  'Aman',
  'Rohit',
  'Neha',
  'Kunal',
  'Priya',
  'Arjun',
  'Rahul',
  'Ankit',
  'Pooja',
];

// Auto date (tomorrow)
const getTomorrowDate = () => {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
  });
};

const HeroSection = () => {
  const [buyer, setBuyer] = useState(buyerNames[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomName =
        buyerNames[Math.floor(Math.random() * buyerNames.length)];
      setBuyer(randomName);
    }, 5000); // change name every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: Video,  sublabel: 'Bas Download Karo' },
    { icon: Globe, sublabel: 'Daily Post Karo' },
    { icon: Video,  sublabel: 'Views, Followers & Income Grow Karo' },
  
  ];

  const benefits = [
    '5000+ Mr. Beast Style Reels',
    '2000+ AI Hulk Reels Bundle',
    '25000+ Hot Viral Reels',
    '2000+ Mini AI Worker Videos',
    '2000+ Hindi Viral AI Podcast Reels',
    '2000+ Food Viral Reels',
    '5000+ Ghibli Style Reels',
    '3000+ Anime Reels',
     'Instagram Growth Mastery Course ',
    'YouTube Growth Mastery Course',
    '5000+ AI Story Reels',
    '100 Million+ Digital Products BONUS',
  ];

  return (
    <section className="py-8 px-4">
      {/* Top Banner */}
      <div className="bg-primary/20 text-center py-2 mb-8 rounded-lg border border-primary/30">
        <p className="text-sm text-primary">
          ⚡ Launch offer Expiring in 24 Hours. Get Instant Access Now. Hurry Up!
        </p>
      </div>

      {/* Title */}
     <div className="text-center mb-8 max-w-2xl mx-auto gradient-border p-6">
  <h1 className="text-3xl md:text-5xl font-bold leading-tight">
    <span className="text-gradient">
      TURN AI REELS INTO A <br />
      1–5 LAKH/MONTH INCOME STREAM
    </span>

    {/* ROCKET OUTSIDE GRADIENT */}
    <span className="ml-2">🚀</span>
  </h1>

  <h1 className="mt-4">
    No Skills. No Editing. Just Upload & Earn with Viral AI Reels
  </h1>
</div>


      {/* Rating */}
      <div className="flex items-center justify-center gap-2 mb-8">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>
        <span className="text-sm text-muted-foreground">
          Rating: 4.8 | 100+ Reviews
        </span>
      </div>

      {/* Main Box */}
      <div className="max-w-5xl mx-auto neon-border rounded-lg p-6 bg-card">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative">
            <img
              src={productBox}
              alt="3000+ Anime Reels Bundle"
              className="w-full max-w-sm mx-auto animate-float"
            />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-card/90 backdrop-blur px-4 py-2 rounded-full border border-primary/50 flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-primary/50 border border-primary" />
                <div className="w-6 h-6 rounded-full bg-secondary/50 border border-secondary" />
              </div>
              <span className="text-xs text-muted-foreground">
                Recently Purchased by{' '}
                <span className="text-primary font-medium">{buyer}</span>
              </span>
            </div>
          </div>

          {/* Right Content */}
          <div>
            {/* Features */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {features.map((feature, index) => (
                <div key={index} className="feature-card flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {}
                    </p>
                    <p className="text-base font-medium">
                      {feature.sublabel}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="space-y-2 mb-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-base">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Countdown */}
            <CountdownTimer />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground mb-2">
            ONLY 69/- TODAY
          </p>

          <p className="mb-4">
            Delivered Instantly. Start Using Right Now!
            <br />
            <span className="text-primary">~Perfect For Beginners~</span>
          </p>

          <Link to="/checkout">
            <button className="btn-primary-glow text-primary-foreground font-semibold py-4 px-8 rounded-lg flex items-center gap-2 mx-auto animate-pulse-glow">
              <ShoppingCart className="w-5 h-5" />
              Buy Now ₹999{' '}
              <span className="line-through text-muted-foreground">
                ₹99999
              </span>
            </button>
          </Link>

          <p className="text-sm text-muted-foreground mt-4">
            Register before{' '}
            <span className="text-primary underline">
              {getTomorrowDate()}
            </span>{' '}
            To unlock bonuses worth{' '}
            <span className="text-accent">₹50,000</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;