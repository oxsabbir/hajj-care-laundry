import { Clock, Leaf, DollarSign, Award, Shield, Users } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Same-day and next-day service available for your convenience",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "We use environmentally safe detergents and sustainable practices",
  },
  {
    icon: DollarSign,
    title: "Affordable Rates",
    description: "Competitive pricing without compromising on quality",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "We stand behind our work with a 100% satisfaction guarantee",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Your clothes are handled with care and tracked throughout the process",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Trained professionals with years of experience in garment care",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with our professional laundry care service
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="flex gap-4 p-6 rounded-xl bg-card hover:shadow-lg transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
