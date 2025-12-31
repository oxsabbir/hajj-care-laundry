import { handleCall, handleWhatsApp } from "@/lib/utils";
import WhatsAppIcon from "./icons/Whatsapp";
import { whatsappMessages } from "@/constants/messages";

export default function Faq() {
  return (
    <section className="py-8 sm:py-16 bg-muted">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-foreground">
            Your Questions Answered
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are answers to some of the most common questions we receive from pilgrims.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="rounded-lg bg-card text-card-foreground shadow-md p-4 sm:p-6 hover:shadow-lg transition-all border border-primary/10 transform hover:-translate-y-1">
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Q: Do you really pickup in 15 minutes?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                A: Yes! 15-minute pickup is our guarantee for all areas in
                Makkah. If we're late, your service is FREE.
              </p>
            </div>
            <div className="rounded-lg bg-card text-card-foreground shadow-md p-4 sm:p-6 hover:shadow-lg transition-all border border-primary/10 transform hover:-translate-y-1">
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Q: Is pickup and delivery really free?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                A: Absolutely! No hidden fees, no minimum orders. Free pickup
                and delivery is included in all our services.
              </p>
            </div>
            <div className="rounded-lg bg-card text-card-foreground shadow-md p-4 sm:p-6 hover:shadow-lg transition-all border border-primary/10 transform hover:-translate-y-1">
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Q: Do you work 24/7?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                A: Yes, we're available 24/7 including weekends and holidays.
                Perfect for emergency situations and busy schedules.
              </p>
            </div>
            <div className="rounded-lg bg-card text-card-foreground shadow-md p-4 sm:p-6 hover:shadow-lg transition-all border border-primary/10 transform hover:-translate-y-1">
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Q: What if my clothes get damaged?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                A: We offer 100% insurance on all items. If anything gets
                damaged, we'll compensate you fully or replace the item.
              </p>
            </div>
            <div className="rounded-lg bg-card text-card-foreground shadow-md p-4 sm:p-6 hover:shadow-lg transition-all border border-primary/10 transform hover:-translate-y-1">
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Q: What are your prices for thobes and abayas?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                A: We offer special care for traditional wear. Thobes are 15 SAR per piece and abayas are 20 SAR per piece, including professional steam pressing.
              </p>
            </div>
            <div className="rounded-lg bg-card text-card-foreground shadow-md p-4 sm:p-6 hover:shadow-lg transition-all border border-primary/10 transform hover:-translate-y-1">
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Q: Do you offer carpet and rug cleaning?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                A: Yes, we offer professional cleaning for all types of carpets
                and rugs. Prices vary by size and material.
              </p>
            </div>
            <div className="rounded-lg bg-card text-card-foreground shadow-md p-4 sm:p-6 hover:shadow-lg transition-all border border-primary/10 transform hover:-translate-y-1">
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Q: What's your turnaround for large family orders?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                A: We prioritize large orders. Most are ready within 24-48
                hours, depending on the items and services required.
              </p>
            </div>
            <div className="rounded-lg bg-card text-card-foreground shadow-md p-4 sm:p-6 hover:shadow-lg transition-all border border-primary/10 transform hover:-translate-y-1">
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Q: Do you clean delicate items like bishts or shemaghs?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                A: Absolutely. We are experts in cleaning traditional Saudi
                garments, ensuring they are handled with the utmost care.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm mt-8 sm:mt-12 bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary/30">
            <div className="p-4 sm:p-6 text-center">
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-foreground">
                💬 Still Have Questions?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                Our friendly team is available 24/7 to answer any questions in
                Arabic, English, or Urdu.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => handleWhatsApp(whatsappMessages.faq)}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-[#25D366] text-white hover:bg-[#128C7E] shadow-lg hover:shadow-xl transition-all h-10 px-4 py-2 w-full"
                >
                  <WhatsAppIcon />
                  WhatsApp Your Question
                </button>
                <button
                  onClick={handleCall}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-phone w-4 h-4 mr-2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  Call Us Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
