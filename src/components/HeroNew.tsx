import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Phone } from "lucide-react";
import heroImage from "@/assets/hero-laundry.jpg";

const HeroNew = () => {
  const handleWhatsApp = () => {
    // Replace with actual WhatsApp number
    const message = encodeURIComponent("Hi! I need laundry service in Makkah. Please send pickup details.");
    window.open(`https://wa.me/+966539529624?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional laundry service" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgent Badge */}
          <Badge className="mb-6 text-base px-6 py-3 bg-urgent text-urgent-foreground hover:bg-urgent/90 animate-pulse">
            🚨 URGENT LAUNDRY? 15-MIN PICKUP GUARANTEED!
          </Badge>
          
          {/* Main Heading */}
          <div className="mb-6 animate-fade-in">
            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-accent">
              Makkah Laundry Service
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="text-accent">15 Minutes</span> Express Pickup
              <br />
              <span className="text-white">- Best Laundry Near Haram!</span>
            </h1>
          </div>

          {/* Social Proof */}
          <div className="mb-6 animate-slide-up bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto border border-white/20">
            <div className="flex items-center justify-center gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-accent text-accent" />
              ))}
              <span className="ml-2 text-white font-semibold">5000+ Happy Customers</span>
            </div>
            <p className="text-white text-lg">
              "Perfect for pilgrims! Clean clothes in just 15 minutes. 
              <span className="text-accent font-semibold"> Exactly what we needed in Makkah!</span>"
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto animate-slide-up animate-delay-200">
            <div className="bg-secondary/80 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">13 SAR</div>
              <div className="text-white text-sm">Starting/kg</div>
            </div>
            <div className="bg-secondary/80 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">15 Min</div>
              <div className="text-white text-sm">Pickup Time</div>
            </div>
            <div className="bg-secondary/80 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">FREE</div>
              <div className="text-white text-sm">Pickup/Drop</div>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            size="lg"
            onClick={handleWhatsApp}
            className="text-lg px-12 py-7 rounded-full bg-success hover:bg-success/90 text-white shadow-2xl hover:shadow-success/50 transition-all animate-slide-up animate-delay-300 mb-6 group"
          >
            <Phone className="mr-2 h-6 w-6" />
            📱 WhatsApp NOW - 15 Min Pickup!
          </Button>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-white text-sm animate-slide-up animate-delay-400">
            <span className="flex items-center gap-2">
              ⏰ 24/7 Service
            </span>
            <span>|</span>
            <span className="flex items-center gap-2">
              🆓 Free Quotes
            </span>
            <span>|</span>
            <span className="flex items-center gap-2">
              💯 Money-Back Guarantee
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroNew;
