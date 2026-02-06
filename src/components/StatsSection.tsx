import { Users, Instagram, IndianRupee, TrendingUp } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { icon: Users, value: '1000+', label: 'Buyers' },
    { icon: Instagram, value: '100M+', label: 'Views Generated' },
    { icon: IndianRupee, value: '₹100,000', label: 'Earn Every Month More Than' },
    { icon: TrendingUp, value: '50x', label: 'Grow Your Followers' },
  ];

  return (
    <section className="py-12 px-4 border-y border-border/50">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="feature-card text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-base text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
