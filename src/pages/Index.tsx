import Navigation from "@/components/Navigation";
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
import PilgrimGuide from "@/components/PilgrimGuide";
import Faq from "@/components/Faq";
import EmergencyService from "@/components/EmergencyService";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroNew />
      <div id="services">
        <UrgentService />
      </div>
      <AreaCoverage />
      <Comparison />
      <div id="pricing">
        <PricingGrid />
      </div>
      <HowItWorks />
      <PricingSection />
      <PilgrimGuide />
      <div id="testimonials">
        <Testimonials />
      </div>
      <Faq />
      <EmergencyService />
      <FinalCTO />
      <div id="contact">
        <PickupManager />
      </div>
    </main>
  );
};

export default Index;
