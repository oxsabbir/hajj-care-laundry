import { Button } from "./ui/button";

export default function PricingSection() {
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
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 relative hover:shadow-xl transition-all hover:-translate-y-1 border border-primary/20">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-foreground">
                Basic
              </h3>
              <div className="mb-4">
                <span className="text-3xl sm:text-4xl font-bold text-primary">
                  13 SAR
                </span>
                <span className="text-sm text-muted-foreground ml-1">
                  per kg
                </span>
              </div>
              <ul className="space-y-2 mb-6 text-left">
                <li className="text-sm sm:text-base text-muted-foreground">
                  ✅ Regular clothes wash &amp; dry
                </li>
                <li className="text-sm sm:text-base text-muted-foreground">
                  ✅ FREE pickup &amp; delivery
                </li>
                <li className="text-sm sm:text-base text-muted-foreground">
                  ✅ Same day service
                </li>
                <li className="text-sm sm:text-base text-muted-foreground">
                  ✅ Basic pressing included
                </li>
                <li className="text-sm sm:text-base text-muted-foreground">
                  ✅ 24/7 availability
                </li>
              </ul>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
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
                Premium
              </h3>
              <div className="mb-4">
                <span className="text-3xl sm:text-4xl font-bold text-primary">
                  18 SAR
                </span>
                <span className="text-sm text-muted-foreground ml-1">
                  per kg
                </span>
              </div>
              <ul className="space-y-2 mb-6 text-left">
                <li className="text-sm sm:text-base text-muted-foreground">
                  ✅ Everything in Basic
                </li>
                <li className="text-sm sm:text-base text-muted-foreground">
                  ✅ Professional pressing
                </li>
                <li className="text-sm sm:text-base text-muted-foreground">
                  ✅ Stain removal treatment
                </li>
                <li className="text-sm sm:text-base text-muted-foreground">
                  ✅ Fabric conditioner
                </li>
                <li className="text-sm sm:text-base text-muted-foreground">
                  ✅ Plastic packaging
                </li>
                <li className="text-sm sm:text-base text-muted-foreground">
                  ✅ 3-hour express option
                </li>
              </ul>

              <Button className=" bg-primary">Choose Premium</Button>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 relative hover:shadow-xl transition-all hover:-translate-y-1 border border-primary/20">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-foreground">
                VIP
              </h3>
              <div className="mb-4">
                <span className="text-3xl sm:text-4xl font-bold text-primary">
                  25 SAR
                </span>
                <span className="text-sm text-muted-foreground ml-1">
                  per kg
                </span>
              </div>
              <ul className="space-y-2 mb-6 text-left">
                <li className="text-sm sm:text-base text-muted-foreground">
                  ✅ Everything in Premium
                </li>
                <li className="text-sm sm:text-base text-muted-foreground">
                  ✅ Premium detergents
                </li>
                <li className="text-sm sm:text-base text-muted-foreground">
                  ✅ Hand-finished pressing
                </li>
                <li className="text-sm sm:text-base text-muted-foreground">
                  ✅ 1-hour emergency service
                </li>
                <li className="text-sm sm:text-base text-muted-foreground">
                  ✅ Special garment care
                </li>
                <li className="text-sm sm:text-base text-muted-foreground">
                  ✅ Delivery scheduling
                </li>
              </ul>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
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
