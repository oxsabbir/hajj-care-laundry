import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Input } from "./ui/input";

const areas = [
  {
    emoji: "🕌",
    title: "Haram Area & Abraj Al Bait",
    description:
      "Lightning-fast service for hotels closest to Masjid al-Haram. Specializing in pilgrim laundry needs.",
    locations: [
      { name: "Clock Tower Hotels", time: "5-10 min" },
      { name: "Al Safwah Towers", time: "5-10 min" },
      { name: "Hilton Makkah", time: "8-12 min" },
    ],
  },
  {
    emoji: "🏨",
    title: "Jabal Omar & Aziziyah",
    description:
      "Premium service for luxury hotel districts with 24/7 pickup availability.",
    locations: [
      { name: "Jabal Omar Towers", time: "10-15 min" },
      { name: "Swissotel Makkah", time: "10-15 min" },
      { name: "Aziziyah District", time: "12-18 min" },
    ],
  },
  {
    emoji: "🌆",
    title: "Kudai & Misfalah",
    description:
      "Fast service for mid-range accommodation areas with competitive pricing.",
    locations: [
      { name: "Kudai Area Hotels", time: "15-20 min" },
      { name: "Misfalah District", time: "15-20 min" },
    ],
  },
  {
    emoji: "🏘️",
    title: "Maabda, Al Rusaifah & Al Awali",
    description:
      "Reliable service for all Makkah neighborhoods with same-day delivery guarantee.",
    locations: [
      { name: "Maabda Area", time: "15-25 min" },
      { name: "Al Rusaifah & Al Awali", time: "20-30 min" },
    ],
  },
];

const AreaCoverage = () => {
  const handleCheckArea = () => {
    const message = encodeURIComponent(
      "Hi! I want to check pickup time for my location in Makkah."
    );
    window.open(`https://wa.me/+966539529624?text=${message}`, "_blank");
  };

  return (
    <section className="py-20  bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 sm:mb-12">
          <h2
            id="areas-heading"
            className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4 text-foreground"
          >
            Laundry Service Near Me - All Makkah Areas Covered
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8">
            No matter where you're staying in Makkah - our{" "}
            <strong>Clock tower laundy service</strong> comes to YOU!
            <span className="text-primary font-semibold">
              {" "}
              Our express pickup service covers every hotel, apartment, and area
              near the Haram.
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-border"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-5xl">{area.emoji}</div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground">{area.description}</p>
                </div>
              </div>
              <div className="space-y-3 mt-6">
                {area.locations.map((location, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between bg-muted/50 rounded-lg p-3"
                  >
                    <span className="font-medium text-foreground">
                      {location.name}
                    </span>
                    <Badge className="bg-success text-white">
                      ⚡ {location.time}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="bg-gradient-to-r from-purple-400 to-indigo-500 text-white rounded-2xl p-6 md:p-10 text-center max-w-4xl mx-auto shadow-xl">
          <h3 className=" text-xl md:text-3xl font-bold  ">
            Not Sure About Your Area?
          </h3>
          <p className=" text-lg mt-1.5 text-slate-100">
            Get Instant Confirmation!
          </p>
          <div className="max-w-xl mx-auto mt-5">
            <Input
              type="text"
              placeholder="Enter your hotel/location"
              className="p-5 text-lg font-medium text-black"
            />
          </div>

          <Button
            size="lg"
            onClick={handleCheckArea}
            className=" bg-green-500 text-white text-lg px-8 py-6 mt-4"
          >
            Check My Pickup Time - FREE
          </Button>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-sm">
            <span className="flex items-center gap-1.5">
              <Check size={20} /> <span>Instant response</span>
            </span>
            <span>|</span>
            <span className="flex items-center gap-1.5">
              <Check size={20} /> No commitment needed
            </span>
            <span>|</span>
            <span className="flex items-center gap-1.5">
              <Check size={20} /> Available 24/7
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreaCoverage;
