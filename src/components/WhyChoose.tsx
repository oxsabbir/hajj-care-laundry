import { Zap, DollarSign, Clock, Shield, Languages, Users } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Lightning Fast Service",
    description: "15-minute pickup guarantee. Others take hours - we take minutes. Perfect for urgent situations.",
  },
  {
    icon: DollarSign,
    title: "Best Prices in Makkah",
    description: "Starting at just 13 SAR/kg with FREE pickup/delivery. Save up to 50% compared to hotel laundry.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Need laundry at 3 AM? No problem! We're the only service in Makkah available round the clock.",
  },
  {
    icon: Shield,
    title: "100% Safe & Secure",
    description: "Your clothes are tracked, insured, and handled by professional staff. Money-back guarantee.",
  },
  {
    icon: Languages,
    title: "Multilingual Support",
    description: "Speak Arabic, English, or Urdu? Our team communicates in your preferred language.",
  },
  {
    icon: Users,
    title: "5000+ Happy Customers",
    description: "Trusted by pilgrims from 50+ countries. 4.9/5 star rating with verified reviews.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why Choose Makkah Laundry Care?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with professional service trusted by thousands
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-border group hover:border-primary"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
