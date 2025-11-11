import HeroNew from "@/components/HeroNew";
import ServiceTimes from "@/components/ServiceTimes";
import AreaCoverage from "@/components/AreaCoverage";
import Comparison from "@/components/Comparison";
import WhyChoose from "@/components/WhyChoose";
import PricingGrid from "@/components/PricingGrid";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PickupManager from "@/components/PickupManager";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroNew />
      <ServiceTimes />
      <AreaCoverage />
      <Comparison />
      <WhyChoose />
      <PricingGrid />
      <HowItWorks />
      <PickupManager />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
