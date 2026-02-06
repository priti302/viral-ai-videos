import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import SampleVideosSection from '@/components/SampleVideosSection';
import GrowthProofSection from '@/components/GrowthProofSection'; // ✅ ADD THIS
import ProofSection from '@/components/ProofSection';
import TargetAudienceSection from '@/components/TargetAudienceSection';
import PlatformsSection from '@/components/PlatformsSection';
import BeforeAfterSection from '@/components/BeforeAfterSection';
import BonusesSection from '@/components/BonusesSection';
import GuaranteeSection from '@/components/GuaranteeSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import StickyBar from '@/components/StickyBar';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <StatsSection />

      {/* SAMPLE VIDEOS */}
      <SampleVideosSection />

      {/* CHECK HOW ANIME REELS CAN GROW YOUR PAGE */}
      <GrowthProofSection />

      <ProofSection />
      <TargetAudienceSection />
      <PlatformsSection />
      <BeforeAfterSection />
      <BonusesSection />
      <GuaranteeSection />
      <FAQSection />
      <Footer />
      <StickyBar />
      <WhatsAppButton />
    </div>
  );
};

export default Index;