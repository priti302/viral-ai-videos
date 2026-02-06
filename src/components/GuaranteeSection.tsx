import guaranteeBadge from '@/assets/guarantee-badge.png';

const GuaranteeSection = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-lg p-10 text-center bg-card border-2 border-primary" style={{
          background: 'linear-gradient(135deg, hsl(0 0% 10%) 0%, hsl(0 0% 8%) 50%, hsl(0 0% 6%) 100%)',
          boxShadow: '0 0 30px hsl(270 91% 65% / 0.3), inset 0 0 60px hsl(0 0% 0% / 0.5)'
        }}>
          {/* Grid pattern background */}
          <div 
            className="absolute inset-0 opacity-20 rounded-lg"
            style={{
              backgroundImage: `
                linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
                linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          />
          
          <div className="relative z-10">
            <img 
              src={guaranteeBadge} 
              alt="100% Satisfaction Guaranteed" 
              className="w-40 h-40 mx-auto mb-6 object-contain"
            />
            
            <h2 className="text-2xl md:text-3xl font-bold italic text-gradient mb-4">
              100% Satisfaction Guarantee
            </h2>
            
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We're Confident You'll Love Our Anime Reels Bundle. If You're Not Completely Satisfied, We'll Make It Right — Your Success
              And Happiness Are Our Top Priority.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
