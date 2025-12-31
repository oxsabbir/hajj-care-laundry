import { handleWhatsApp } from "@/lib/utils";
import WhatsAppIcon from "./icons/Whatsapp";
import { whatsappMessages } from "@/constants/messages";
import {
  Shirt,
  UserCheck,
  Clock,
  Package,
  DollarSign,
  Wind,
  CheckCircle,
} from "lucide-react";
import { Button } from "./ui/button";

const guideItems = [
  {
    icon: <Shirt className="h-7 w-7 text-primary" />,
    title: "Caring for Your Ihram",
    content:
      "Ihram garments are sacred. To maintain their purity, wash them gently with fragrance-free detergents and air dry them in the shade.",
    tips: [
      "Use a gentle machine cycle or hand wash.",
      "Opt for mild, unscented detergent.",
      "Avoid direct sunlight to prevent yellowing.",
    ],
  },
  {
    icon: <UserCheck className="h-7 w-7 text-primary" />,
    title: "Abaya & Thobe Care",
    content:
      "Your traditional garments require special care. We recommend dry cleaning for delicate items and professional pressing for a crisp look.",
    tips: [
      "Dry clean embroidered or delicate abayas.",
      "Machine wash and press thobes professionally.",
      "Use our express service for urgent needs.",
    ],
  },
  {
    icon: <Clock className="h-7 w-7 text-primary" />,
    title: "Smart Laundry Timing",
    content:
      "Our flexible services are designed around your worship schedule. Plan your laundry efficiently so you can focus on what matters.",
    tips: [
      "Use our same-day service (drop off before 10 AM).",
      "A 3-hour express option is perfect for between rituals.",
      "We offer 24/7 pickup and delivery.",
    ],
  },
  {
    icon: <Package className="h-7 w-7 text-primary" />,
    title: "Packing for Your Pilgrimage",
    content:
      "Packing smart reduces laundry stress. Experienced pilgrims recommend bringing just enough, focusing on lightweight and quick-drying fabrics.",
    tips: [
      "Pack 3-4 sets of Ihram.",
      "Bring 2-3 comfortable thobes or abayas.",
      "Choose light, quick-drying undergarments.",
    ],
  },
  {
    icon: <DollarSign className="h-7 w-7 text-primary" />,
    title: "Understanding Laundry Costs",
    content:
      "Our transparent pricing helps you budget effectively. Hotel laundry can be 3x more expensive, so plan ahead to save.",
    tips: [
      "Expect to pay around 12-18 SAR per kg.",
      "An average 3-5 kg load costs about 45-75 SAR.",
      "Avoid expensive hotel services to save up to 70%.",
    ],
  },
  {
    icon: <Wind className="h-7 w-7 text-primary" />,
    title: "Keeping Clothes Fresh",
    content:
      "Makkah's heat means frequent washing is essential. Airing out clothes and scheduling timely laundry service makes all the difference.",
    tips: [
      "Plan to change Ihram after Tawaf or Sa'i.",
      "Air-dry garments between wears.",
      "Schedule pickups before you leave for the Haram.",
    ],
  },
];

export default function PilgrimGuide() {
  return (
    <section
      className="py-16 sm:py-20 bg-gradient-to-br from-white to-primary/5"
      aria-labelledby="guide-heading"
    >
      <div className="container mx-auto px-4">
        <header className="text-center mb-10 sm:mb-16">
          <h2
            id="guide-heading"
            className="text-3xl sm:text-4xl font-bold mb-4 text-foreground"
          >
            Essential Laundry Guide for Pilgrims
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Let us handle the laundry, so you can focus on your spiritual journey. Here are some essential tips for Hajj & Umrah.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {guideItems.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl shadow-sm overflow-hidden border border-primary/10 transition-all hover:shadow-xl hover:-translate-y-1 duration-300"
            >
              {/* Card Header */}
              <div className="bg-primary/5 p-6 border-b border-primary/10">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-muted-foreground mb-5">{item.content}</p>
                <ul className="space-y-3">
                  {item.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-card border rounded-xl p-6 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-foreground">
              Have More Questions?
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-6">
              Our team understands the unique needs of pilgrims. WhatsApp us
              anytime for personalized laundry advice.
            </p>
            <Button
              onClick={() => handleWhatsApp(whatsappMessages.faq)}
              className="bg-[#25D366] text-white hover:bg-[#128C7E] shadow-lg hover:shadow-xl transition-all h-12 px-6 text-base font-semibold"
            >
              <WhatsAppIcon className="mr-2" />
              Ask a Question on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
