import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Rocket, Sparkles } from "lucide-react";

const services = [
  {
    icon: Zap,
    time: "1 Hour",
    title: "Emergency Service",
    description: "For urgent situations",
    emoji: "⚡",
  },
  {
    icon: Rocket,
    time: "5 Hours",
    title: "Express Service",
    description: "Between prayers",
    emoji: "🚀",
  },
  {
    icon: Sparkles,
    time: "12 Hours",
    title: "Same Day Service",
    description: "Standard turnaround",
    emoji: "✨",
  },
];

const ServiceTimes = () => {
  const handleBooking = () => {
    const message = encodeURIComponent("Hi! I want to book laundry service.");
    window.open(`https://wa.me/+966539529624?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-xl group"
              >
                <CardHeader className="text-center">
                  <div className="text-5xl mb-4">{service.emoji}</div>
                  <div className="text-4xl font-bold text-accent mb-2">{service.time}</div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button 
                    onClick={handleBooking}
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceTimes;
