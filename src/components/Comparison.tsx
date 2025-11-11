import { Check, X } from "lucide-react";

const comparisonData = [
  { feature: "Pickup Time", us: "15 Minutes", others: "2-4 Hours" },
  {
    feature: "Availability",
    us: "24/7 Service",
    others: "Business Hours Only",
  },
  { feature: "Pricing", us: "13 SAR/kg", others: "25-40 SAR/kg" },
  { feature: "Languages", us: "Arabic, English, Urdu", others: "Arabic Only" },
  { feature: "Pickup Fee", us: "100% FREE", others: "10-20 SAR" },
  { feature: "Emergency Service", us: "1 Hour Ready", others: "Next Day Only" },
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
            Why Clock Tower Laundry Service Is the Best Choice
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what makes our{" "}
            <strong>laundry service in Makkah</strong> the #1 choice for
            <span className="text-primary font-semibold">
              {" "}
              pilgrims and locals near the Haram
            </span>
          </p>
        </header>
        <div className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 rounded-xl sm:rounded-2xl p-4 sm:p-8 mb-8 sm:mb-12 max-w-6xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-white">
            Our Services and Other Makkah Laundry Providers
          </h3>
          <div className="overflow-x-auto">
            <div className="min-w-[400px]">
              <div className="grid grid-cols-3  gap-2 sm:gap-4 text-center">
                <div className="font-semibold  text-sm sm:text-base text-white">
                  Feature
                </div>
                <div className="font-bold text-sm sm:text-base text-primary bg-primary/10 rounded-lg p-2">
                  US
                </div>
                <div className="font-semibold text-sm sm:text-base text-white">
                  Others
                </div>
                {comparisonData.map((item, i) => (
                  <>
                    <div className="text-xs font-semibold sm:text-sm font-mediumbaktext-white text-[#E7E7E7] p-2">
                      {item.feature}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-primary bg-green-50 dark:bg-green-900/20 rounded-lg p-2">
                      {item.us}
                    </div>
                    <div className="text-xs sm:text-sm text-red-600 bg-red-100 dark:bg-red-900/20 rounded-lg p-2">
                      {item.others}
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-primary/20">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4">
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
                  className="lucide lucide-zap w-8 h-8 sm:w-10 sm:h-10 text-accent"
                >
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Lightning Fast Service
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                15-minute pickup guarantee. Others take hours - we take minutes.
                Perfect for urgent situations.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-primary/20">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4">
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
                  className="lucide lucide-dollar-sign w-8 h-8 sm:w-10 sm:h-10 text-green-500"
                >
                  <line x1="12" x2="12" y1="2" y2="22"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Best Prices in Makkah
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Starting at just 13 SAR/kg with FREE pickup/delivery. Save up to
                50% compared to hotel laundry.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-primary/20">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4">
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
                  className="lucide lucide-clock w-8 h-8 sm:w-10 sm:h-10 text-primary"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                24/7 Availability
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Need laundry at 3 AM? No problem! We're the only service in
                Makkah available round the clock.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-primary/20">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4">
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
                  className="lucide lucide-shield w-8 h-8 sm:w-10 sm:h-10 text-blue-500"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                100% Safe &amp; Secure
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Your clothes are tracked, insured, and handled by professional
                staff. Money-back guarantee.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-primary/20">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4">
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
                  className="lucide lucide-users w-8 h-8 sm:w-10 sm:h-10 text-purple-500"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Multilingual Support
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Speak Arabic, English, or Urdu? Our team communicates in your
                preferred language.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-primary/20">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4">
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
                  className="lucide lucide-award w-8 h-8 sm:w-10 sm:h-10 text-orange-500"
                >
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                  <circle cx="12" cy="8" r="6"></circle>
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                5000+ Happy Customers
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Trusted by pilgrims from 50+ countries. 4.9/5 star rating with
                verified reviews.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
