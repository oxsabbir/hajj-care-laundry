import { Shirt, Sparkles, Wind, Truck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Sparkles,
    title: "Dry Cleaning",
    description: "Professional dry cleaning for delicate fabrics and special garments. We use gentle, eco-friendly solvents to remove stains while preserving fabric quality.",
  },
  {
    icon: Shirt,
    title: "Wash & Fold",
    description: "Complete washing, drying, and folding service for your everyday clothes. Fresh, clean laundry delivered back to you perfectly folded.",
  },
  {
    icon: Wind,
    title: "Ironing & Pressing",
    description: "Expert ironing and pressing service to keep your clothes crisp and wrinkle-free. Perfect for business attire and formal wear.",
  },
  {
    icon: Truck,
    title: "Pickup & Delivery",
    description: "Convenient pickup and delivery service at your doorstep. Schedule a time that works for you and we'll handle the rest.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive laundry solutions tailored to meet all your garment care needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg animate-slide-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
