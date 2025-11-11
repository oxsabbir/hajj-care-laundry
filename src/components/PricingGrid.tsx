import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pricingItems = [
  {
    emoji: "👕",
    title: "Regular Clothes",
    subtitle: "Shirts, pants, casual wear",
    price: "13 SAR/kg",
    time: "Same day",
  },
  {
    emoji: "👔",
    title: "Formal Wear",
    subtitle: "Suits, dress shirts, formal attire",
    price: "18 SAR/kg",
    time: "Same day",
  },
  {
    emoji: "🕋",
    title: "Ihram Clothes",
    subtitle: "Special care for holy garments",
    price: "15 SAR/piece",
    time: "3 hours",
  },
  {
    emoji: "🧥",
    title: "Heavy Items",
    subtitle: "Jackets, blankets, curtains",
    price: "25 SAR/kg",
    time: "Next day",
  },
  {
    emoji: "👟",
    title: "Shoes Cleaning",
    subtitle: "Professional shoe cleaning service",
    price: "20 SAR/pair",
    time: "4 hours",
  },
  {
    emoji: "🔧",
    title: "Alterations",
    subtitle: "Hemming, repairs, adjustments",
    price: "From 15 SAR",
    time: "Same day",
  },
];

const PricingGrid = () => {
  const handleOrder = () => {
    const message = encodeURIComponent("Hi! I want to order laundry service.");
    window.open(`https://wa.me/+966539529624?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            💰 Transparent Pricing - No Hidden Fees!
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, honest pricing that saves you money. Compare with hotel laundry and see the difference!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pricingItems.map((item, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl group"
            >
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">{item.emoji}</div>
                <CardTitle className="text-2xl mb-2">{item.title}</CardTitle>
                <CardDescription className="text-base">{item.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">{item.price}</div>
                  <div className="text-sm text-muted-foreground">Ready in {item.time}</div>
                </div>
                <Button 
                  onClick={handleOrder}
                  className="w-full bg-success hover:bg-success/90"
                >
                  Order Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingGrid;
