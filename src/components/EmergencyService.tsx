import { Check, MessageCircleMore } from "lucide-react";
import WhatsAppIcon from "./icons/Whatsapp";
import { handleWhatsApp } from "@/lib/utils";
import { whatsappMessages } from "@/constants/messages";

export default function EmergencyService() {
  return (
    <section className="py-8 sm:py-16 bg-gradient-to-br from-red-50 to-amber-50/10">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-red-500 rounded-full w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 flex items-center justify-center animate-pulse">
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
              className="lucide lucide-zap w-8 h-8 sm:w-10 sm:h-10 text-white"
            >
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
            </svg>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-red-700 dark:text-red-300">
            🚨 Emergency Laundry Service - 24/7!
          </h2>
          <p className="text-base sm:text-lg text-red-600 dark:text-red-400 mb-6 max-w-2xl mx-auto">
            Spilled something important? Flight tomorrow morning? Wedding
            emergency?
            <span className="font-bold">
              {" "}
              We've got you covered with 1-hour emergency service!
            </span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
            <div className="rounded-lg border text-card-foreground shadow-sm p-4 bg-white dark:bg-gray-800 border-r-primary/40 border-l-primary/40">
              <div className="text-center">
                <div className="text-2xl mb-2">⚡</div>
                <h3 className="font-bold text-foreground">1-Hour Service</h3>
                <p className="text-sm text-muted-foreground">
                  Emergency cleaning &amp; pressing
                </p>
              </div>
            </div>
            <div className="rounded-lg border text-card-foreground shadow-sm p-4 bg-white dark:bg-gray-800 border-r-primary/40 border-l-primary/40">
              <div className="text-center">
                <div className="text-2xl mb-2">🌙</div>
                <h3 className="font-bold text-foreground">3 AM? No Problem</h3>
                <p className="text-sm text-muted-foreground">
                  Available 24/7, even holidays
                </p>
              </div>
            </div>
            <div className="rounded-lg border text-card-foreground shadow-sm p-4 bg-white dark:bg-gray-800 border-r-primary/40 border-l-primary/40">
              <div className="text-center">
                <div className="text-2xl mb-2">💯</div>
                <h3 className="font-bold text-foreground">
                  Emergency Guarantee
                </h3>
                <p className="text-sm text-muted-foreground">
                  Perfect results or money back
                </p>
              </div>
            </div>
          </div>
          <div className="border  bg-white rounded-xl p-4 sm:p-8 mb-6">
            <h3 className="text-lg  sm:text-2xl font-bold text-red-700 dark:text-red-300 mb-6">
              Common Emergency Situations We Handle
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 text-left gap-3 text-sm">
              <div className="text-green-600 flex items-center gap-2 ">
                <Check size={20} />
                Flight tomorrow
              </div>
              <div className="text-green-600 flex items-center gap-2 ">
                <Check size={20} />
                Wedding emergency
              </div>
              <div className="text-green-600 flex items-center gap-2 ">
                <Check size={20} />
                Business meeting
              </div>
              <div className="text-green-600 flex items-center gap-2 ">
                <Check size={20} />
                Stain removal
              </div>
              <div className="text-green-600 flex items-center gap-2 ">
                <Check size={20} />
                Special occasions
              </div>
              <div className="text-green-600 flex items-center gap-2 ">
                <Check size={20} />
                Ihram urgency
              </div>
              <div className="text-green-600 flex items-center gap-2 ">
                <Check size={20} />
                Spills &amp; accidents
              </div>
              <div className="text-green-600 flex items-center gap-2 ">
                <Check size={20} />
                Last-minute needs
              </div>
            </div>
          </div>
          <button
            onClick={() => handleWhatsApp(whatsappMessages.emergency, true)}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 w-full sm:w-auto px-8 py-4 text-lg font-bold"
          >
            <WhatsAppIcon size={22} />
            EMERGENCY PICKUP - CALL NOW!
          </button>
          <p className="text-xs sm:text-sm text-red-600 dark:text-red-400 mt-3">
            Emergency service available 24/7 | Extra charges apply for 1-hour
            service
          </p>
        </div>
      </div>
    </section>
  );
}
