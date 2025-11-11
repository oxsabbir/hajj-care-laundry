import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Phone } from "lucide-react";
import heroImage from "@/assets/hero.png";

const HeroNew = () => {
  const handleWhatsApp = () => {
    // Replace with actual WhatsApp number
    const message = encodeURIComponent(
      "Hi! I need laundry service in Makkah. Please send pickup details."
    );
    window.open(`https://wa.me/+966539529624?text=${message}`, "_blank");
  };

  return (
    <section className="relative overflow-hidden bg-black/80 min-h-screen flex items-center">
      <img
        src={heroImage}
        alt="Professional makkahlaundryservice - Express laundry pickup and delivery in Makkah for pilgrims"
        className="absolute inset-0 w-full h-full object-cover opacity-25"
        loading="eager"
        fetchPriority="high"
        width="1920"
        height="1080"
      />
      <div className="relative container mx-auto px-3 py-6 sm:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 mb-4 sm:mb-6 bg-red-500 text-white text-xs sm:text-base px-3 sm:px-4 py-2 animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-zap w-3 h-3 sm:w-5 sm:h-5 mr-1 sm:mr-2"
            >
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
            </svg>
            🚨 URGENT LAUNDRY? 15-MIN PICKUP GUARANTEED!
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-primary-foreground mb-3 sm:mb-6 leading-tight">
            <span className="block text-xl sm:text-2xl lg:text-3xl mb-1 sm:mb-2 text-accent">
              Makkah Laundry Service
            </span>
            <span className="text-accent">15 Minutes</span> Express Pickup -
            Best Laundry Near Haram!
          </h1>
          <div className="bg-black/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 mb-4 sm:mb-8">
            <div className="flex items-center justify-center mb-2 sm:mb-3">
              <div className="flex text-yellow-400 text-sm sm:text-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-star w-4 h-4 sm:w-5 sm:h-5 fill-current"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-star w-4 h-4 sm:w-5 sm:h-5 fill-current"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-star w-4 h-4 sm:w-5 sm:h-5 fill-current"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-star w-4 h-4 sm:w-5 sm:h-5 fill-current"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-star w-4 h-4 sm:w-5 sm:h-5 fill-current"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                </svg>
              </div>
              <span className="text-primary-foreground ml-2 font-bold text-sm sm:text-base">
                5000+ Happy Customers
              </span>
            </div>
            <p className="text-sm sm:text-xl text-primary-foreground/95 font-medium mb-3 sm:mb-4 px-2">
              "Perfect for pilgrims! Clean clothes in just 15 minutes.
              <span className="text-accent font-bold">
                {" "}
                Exactly what we needed in Makkah!"
              </span>
            </p>
            <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
              <div className="bg-accent/20 rounded-lg p-2 sm:p-3">
                <div className="text-lg sm:text-2xl font-bold text-accent">
                  13 SAR
                </div>
                <div className="text-xs sm:text-sm text-primary-foreground/80">
                  Starting/kg
                </div>
              </div>
              <div className="bg-accent/20 rounded-lg p-2 sm:p-3">
                <div className="text-lg sm:text-2xl font-bold text-accent">
                  15 Min
                </div>
                <div className="text-xs sm:text-sm text-primary-foreground/80">
                  Pickup Time
                </div>
              </div>
              <div className="bg-accent/20 rounded-lg p-2 sm:p-3">
                <div className="text-lg sm:text-2xl font-bold text-accent">
                  FREE
                </div>
                <div className="text-xs sm:text-sm text-primary-foreground/80">
                  Pickup/Drop
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-3 sm:space-y-4 px-2">
            <a
              href="https://wa.me/+966539529624?text=Hi! I need laundry service in Makkah. Please send pickup details."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-[#25D366] text-white hover:bg-[#128C7E] hover:shadow-xl transition-all w-full text-base sm:text-xl px-6 py-4 sm:py-6 h-auto rounded-xl font-bold shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-message-circle w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3"
              >
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
              </svg>
              📱 WhatsApp NOW - 15 Min Pickup!
            </a>
            <div className="text-primary-foreground/90 text-xs sm:text-base">
              ⏰ 24/7 Service | 🆓 Free Quotes | 💯 Money-Back Guarantee
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroNew;
