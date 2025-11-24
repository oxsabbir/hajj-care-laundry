import { Check, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { whatsappMessages } from "@/constants/messages";
import { handleWhatsApp } from "@/lib/utils";

const pricePlan = {
  basic: {
    title: "Basic",
    price: 13,
    feature: [
      "Regular clothes wash & dry",
      "FREE pickup & delivery",
      "Same day service",
      "Basic pressing included",
      "24/7 availability",
    ],
  },
  premium: {
    title: "Premium",
    price: 18,
    feature: [
      "Everything in Basic",
      "Professional pressing",
      "Stain removal treatment",
      "Fabric conditioner",
      "Plastic packaging",
      "3-hour express option",
    ],
  },
  vip: {
    title: "VIP",
    price: 25,
    feature: [
      "Everything in Premium",
      "Premium detergents",
      "Hand-finished pressing",
      "1-hour emergency service",
      "Special garment care",
      "Delivery scheduling",
    ],
  },
};

export default function PricingSection() {
  const handlePlanBooking = (price: number, plan: string) => {
    const message = whatsappMessages.pricePlan
      .replace("<price>", String(price))
      .replace("<plan>", plan);

    handleWhatsApp(message, true);
  };

  return (
    <section className="py-8 sm:py-16 bg-muted">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-foreground">
            Transparent Pricing - No Hidden Fees!
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Simple, honest pricing that saves you money.
            <span className="text-primary font-semibold">
              {" "}
              Compare with hotel laundry and see the difference!
            </span>
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 relative  hover:shadow-xl transition-all hover:-translate-y-1 border border-primary/80">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-foreground">
                {pricePlan.basic.title}
              </h3>
              <div className="mb-4">
                <span className="text-3xl sm:text-4xl font-bold text-primary">
                  {pricePlan.basic.price} SAR
                </span>
                <span className="text-sm text-muted-foreground ml-1">
                  per kg
                </span>
              </div>
              <ul className="space-y-2 mb-6 text-left ">
                {pricePlan.basic.feature.map((feature, i) => (
                  <li
                    key={i}
                    className="text-sm flex items-center gap-2 py-1 sm:text-base text-muted-foreground"
                  >
                    <CheckCircle className="text-primary" size={18} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                id="generate_lead"
                onClick={() =>
                  handlePlanBooking(
                    pricePlan.basic.price,
                    pricePlan.basic.title
                  )
                }
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full"
              >
                Choose Basic
              </button>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 relative hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-primary shadow-accent/20">
            <div className="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent  absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white text-accent-foreground px-4 py-1">
              MOST POPULAR
            </div>
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-foreground">
                {pricePlan.premium.title}
              </h3>
              <div className="mb-4">
                <span className="text-3xl sm:text-4xl font-bold text-primary">
                  {pricePlan.premium.price} SAR
                </span>
                <span className="text-sm text-muted-foreground ml-1">
                  per kg
                </span>
              </div>
              <ul className="space-y-2 mb-6 text-left">
                {pricePlan.premium.feature.map((feature, i) => (
                  <li
                    key={i}
                    className="text-sm flex items-center gap-2 py-1 sm:text-base text-muted-foreground"
                  >
                    <CheckCircle className="text-primary" size={18} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                id="generate_lead"
                onClick={() =>
                  handlePlanBooking(
                    pricePlan.premium.price,
                    pricePlan.premium.title
                  )
                }
                className=" bg-primary"
              >
                Choose Premium
              </Button>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 relative hover:shadow-xl transition-all hover:-translate-y-1 border border-primary/80">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-foreground">
                {pricePlan.vip.title}
              </h3>
              <div className="mb-4">
                <span className="text-3xl sm:text-4xl font-bold text-primary">
                  {pricePlan.vip.price} SAR
                </span>
                <span className="text-sm text-muted-foreground ml-1">
                  per kg
                </span>
              </div>
              <ul className="space-y-2 mb-6 text-left">
                {pricePlan.vip.feature.map((feature, i) => (
                  <li
                    key={i}
                    className="text-sm flex items-center gap-2 py-1 sm:text-base text-muted-foreground"
                  >
                    <CheckCircle className="text-primary" size={18} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                id="generate_lead"
                onClick={() =>
                  handlePlanBooking(pricePlan.vip.price, pricePlan.vip.title)
                }
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full"
              >
                Choose VIP
              </button>
            </div>
          </div>
        </div>
        {/* <div className="text-center mt-8 sm:mt-12">
          <div className="rounded-lg border text-card-foreground shadow-sm max-w-2xl mx-auto bg-gradient-to-tr from-slate-300 via-zinc-200 to-gray-300">
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-red-700 dark:text-red-300">
                💸 Hotel Laundry vs Our Service
              </h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="font-semibold text-red-600">
                    🏨 Hotel Laundry
                  </div>
                  <div className="text-2xl font-bold text-red-700 mt-2">
                    45-80 SAR
                  </div>
                  <div className="text-sm text-red-600">per kg + fees</div>
                </div>
                <div>
                  <div className="font-semibold text-green-600">
                    ✅ Our Service
                  </div>
                  <div className="text-2xl font-bold text-green-700 mt-2">
                    13-25 SAR
                  </div>
                  <div className="text-sm text-green-600">per kg, no fees</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <span className="font-bold text-green-600">Save up to 70%</span>{" "}
                compared to hotel laundry services!
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
