import {
  Award,
  Check,
  Clock,
  DollarSign,
  Shield,
  Users,
  X,
  Zap,
} from "lucide-react";

const comparisonData = [
  {
    feature: "Pickup Time",
    us: "In as little as 15 Minutes",
    others: "Typically 2-4 Hours",
  },
  {
    feature: "Operating Hours",
    us: "24/7 (Always Open)",
    others: "Standard Business Hours",
  },
  {
    feature: "Starting Price",
    us: "From 12 SAR/kg (Hotel prices are typically 25 SAR/kg)",
    others: "Often Higher (e.g., 25 SAR/kg at hotels)",
  },
  {
    feature: "Customer Support",
    us: "Multi-language (English, Arabic, Urdu)",
    others: "Limited Language Options",
  },
  {
    feature: "Delivery Charge",
    us: "Always FREE",
    others: "Additional Charges Apply",
  },
  {
    feature: "Urgent Orders",
    us: "Fresh & Ready in 1 Hour",
    others: "24-Hour Minimum Wait",
  },
];

const Comparison = () => {
  return (
    <section className="py-8 sm:py-16" aria-labelledby="benefits-heading">
      <div className="container mx-auto px-3 sm:px-4">
        <header className="text-center mb-8 sm:mb-12">
          <h2
            id="benefits-heading"
            className="text-2xl sm:text-4xl font-bold mb-4 text-foreground"
          >
            The Hajj Care Laundry Difference: A Clear Choice
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover why Hajj Care Laundry stands out from other services in
            Makkah, offering unparalleled convenience and value for pilgrims.
          </p>
        </header>
        <div className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 rounded-xl sm:rounded-2xl p-4 sm:p-8 mb-8 sm:mb-12 max-w-6xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-white">
            Hajj Care Laundry vs. Other Services
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center font-bold text-sm sm:text-base text-slate-300">
              <div>Feature</div>
              <div>Hajj Care Laundry</div>
              <div>Other Services</div>
            </div>
            {comparisonData.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-3 gap-2 sm:gap-4 items-center text-center border-t border-slate-600 pt-4"
              >
                <div className="text-sm font-semibold text-left text-slate-100">
                  {item.feature}
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-green-400 font-bold text-xs sm:text-sm">
                  <Check size={16} className="shrink-0" />
                  <span>{item.us}</span>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-red-400 font-semibold text-xs sm:text-sm">
                  <X size={16} className="shrink-0" />
                  <span>{item.others}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-border">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4">
                <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Rapid Pickup & Delivery
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Guaranteed pickup in just 15 minutes, ensuring your laundry is
                handled with unmatched speed and efficiency.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-border">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4">
                <DollarSign className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Economical & Transparent
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Start from 12 SAR/kg with free pickup and delivery. Save
                significantly compared to hotel laundry services.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-border">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4">
                <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                24/7 Availability
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                We're here whenever you need us, day or night, ensuring your
                laundry needs are met around the clock.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-border">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4">
                <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Secure & Reliable Service
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Your garments are safe with us, handled by professionals and
                backed by our commitment to quality and money-back guarantee.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-border">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-purple-500" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Multilingual Support
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Our dedicated team offers support in English, Arabic, and Urdu
                for seamless communication and service.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-border">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Highly Rated by Pilgrims
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Trusted by over 7,500 pilgrims from 50+ countries with a stellar
                4.9-star rating.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
