import HeroNew from "@/components/HeroNew";
import AreaCoverage from "@/components/AreaCoverage";
import Comparison from "@/components/Comparison";
import WhyChoose from "@/components/WhyChoose";
import PricingGrid from "@/components/PricingGrid";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PickupManager from "@/components/PickupManager";
import UrgentService from "@/components/UrgentService";
import PricingSection from "@/components/PricingSection";
import FinalCTO from "@/components/FinalCTO";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroNew />
      <UrgentService />
      <AreaCoverage />
      <Comparison />
      {/* <WhyChoose /> */}
      <PricingGrid />
      <HowItWorks />
      <PricingSection />

      <Testimonials />
      <FinalCTO />
      <PickupManager />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
