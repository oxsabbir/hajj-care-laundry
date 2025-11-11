import { Check, X } from "lucide-react";

const comparisonData = [
  { feature: "Pickup Time", us: "15 Minutes", others: "2-4 Hours" },
  { feature: "Availability", us: "24/7 Service", others: "Business Hours Only" },
  { feature: "Pricing", us: "13 SAR/kg", others: "25-40 SAR/kg" },
  { feature: "Languages", us: "Arabic, English, Urdu", others: "Arabic Only" },
  { feature: "Pickup Fee", us: "100% FREE", others: "10-20 SAR" },
  { feature: "Emergency Service", us: "1 Hour Ready", others: "Next Day Only" },
];

const Comparison = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            🆚 Us vs Other Laundry Services in Makkah
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See why thousands of customers choose us over competitors
          </p>
        </div>

        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-2xl overflow-hidden shadow-xl">
            <thead>
              <tr className="bg-muted">
                <th className="p-6 text-left font-bold text-lg">Feature</th>
                <th className="p-6 text-center font-bold text-lg text-success">✅ US</th>
                <th className="p-6 text-center font-bold text-lg text-destructive">❌ Others</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className="border-t border-border hover:bg-muted/30 transition-colors">
                  <td className="p-6 font-semibold text-foreground">{row.feature}</td>
                  <td className="p-6 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Check className="w-5 h-5 text-success" />
                      <span className="font-semibold text-success">{row.us}</span>
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <X className="w-5 h-5 text-destructive" />
                      <span className="text-muted-foreground">{row.others}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
