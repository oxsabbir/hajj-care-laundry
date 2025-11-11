import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-laundry.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional laundry service" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
            Makkah Laundry Care
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up animate-delay-100">
            We care for your clothes like our own
          </p>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl animate-slide-up animate-delay-200">
            Professional laundry and dry cleaning service with pickup and delivery. 
            Experience quality care with eco-friendly practices and quick turnaround.
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all animate-slide-up animate-delay-300 group"
            onClick={scrollToContact}
          >
            Book Now
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
      
      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
