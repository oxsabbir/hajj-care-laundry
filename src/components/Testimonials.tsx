import { Star, Quote } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { managerInfo } from "@/constants";

const testimonials = [
  {
    name: "Ahmed Al-Rashid",
    location: "Clock Tower Hotel, Makkah",
    country: "Saudi Arabia",
    rating: 5,
    service: "Irham Cleaning",
    review:
      "Perfect for pilgrims! Clean clothes in just 15 minutes. Exactly what we needed in Makkah! The team was professional and the service was incredibly fast. Highly recommended!",
    avatar: "AR",
    flag: "🇸🇦",
  },
  {
    name: "Fatima Hassan",
    location: "Hilton Makkah",
    country: "Egypt",
    rating: 5,
    service: "Regular Customer",

    review:
      "Amazing service! They picked up my laundry within 10 minutes and returned everything perfectly clean and pressed. The prices are much better than hotel laundry. Will use again!",
    avatar: "FH",
    flag: "🇪🇬",
  },
  {
    name: "Muhammad Khan",
    location: "Jabal Omar Towers",
    country: "Pakistan",
    service: "Formal Wear",

    rating: 5,
    review:
      "Best laundry service in Makkah! They understand pilgrims' needs and work around prayer times. My Ihram clothes were treated with care and returned spotless. 5 stars!",
    avatar: "MK",
    flag: "🇵🇰",
  },
  {
    name: "Aisha Abdullah",
    location: "Swissotel Makkah",
    country: "UAE",
    service: "Heavy Items",
    rating: 5,
    review:
      "Exceptional service! Available 24/7 and they speak English perfectly. I needed emergency laundry at 2 AM and they delivered. Saved my trip! Thank you so much.",
    avatar: "AA",
    flag: "🇦🇪",
  },
  {
    name: "Ibrahim Yusuf",
    location: "Aziziyah District",
    country: "Indonesia",
    service: "Regular Customer",
    rating: 5,
    review:
      "Very reliable and affordable! Half the price of hotel laundry with better quality. The WhatsApp booking is so convenient. I recommend this to all pilgrims!",
    avatar: "IY",
    flag: "🇮🇩",
  },
  {
    name: "Mariam Ali",
    location: "Al Safwah Towers",
    country: "Malaysia",
    service: "Irham Cleaning",

    rating: 5,
    review:
      "Outstanding experience! They handled my delicate abayas with great care. Fast pickup, professional service, and reasonable prices. This is the only laundry service you need in Makkah!",
    avatar: "MA",
    flag: "🇲🇾",
  },
  {
    name: "Omar Farooq",
    location: "Elaf Kinda Hotel, Makkah",
    country: "UK",
    rating: 5,
    service: "Ihram Cleaning",
    review:
      "During my Umrah, Hajj Care Laundry was a lifesaver! Their prompt service and attention to detail for my Ihram clothes were exceptional. Truly a 5-star experience.",
    avatar: "OF",
    flag: "🇬🇧",
  },
  {
    name: "Hajar Bint Abdullah",
    location: "Makkah Hotel",
    country: "Jordan",
    rating: 5,
    service: "Abaya Cleaning",
    review:
      "I was so impressed with Hajj Care Laundry's efficiency. They picked up my abayas and returned them perfectly clean and pressed, allowing me to focus completely on my worship. Highly recommend their services to all pilgrims.",
    avatar: "HB",
    flag: "🇯🇴",
  },
  {
    name: "Dr. Faisal Rahman",
    location: "Hilton Suites Makkah",
    country: "Bangladesh",
    rating: 5,
    service: "Regular Customer",
    review:
      "As a frequent visitor for Hajj and Umrah, I've tried many laundry services. Hajj Care Laundry stands out for its quality and reliability. Their 24/7 service is a blessing. Will definitely use them again!",
    avatar: "FR",
    flag: "🇧🇩",
  },
];

const Testimonials = () => {
  const plugin = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-4xl font-bold mb-4 text-foreground"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={
              isInView
                ? { opacity: 1, filter: "blur(0px)" }
                : { opacity: 0, filter: "blur(10px)" }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Words from Our Valued Customers
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            7500+ happy pilgrims from over 50 countries have trusted us with their laundry needs.
          </motion.p>
          <motion.div
            className="flex items-center justify-center gap-2 mt-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-xl font-bold text-foreground">4.9/5</span>
            <span className="text-muted-foreground">(7500+ reviews)</span>
          </motion.div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {testimonials.map((review, i) => (
              <div
                key={i}
                className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-lg transition-all border border-primary/20"
              >
                <div className="mb-3">
                  <div className="flex text-yellow-400  mb-2">
                    <Star fill="rgb(250, 204, 21)" size={24} />
                    <Star fill="rgb(250, 204, 21)" size={24} />
                    <Star fill="rgb(250, 204, 21)" size={24} />
                    <Star fill="rgb(250, 204, 21)" size={24} />
                    <Star fill="rgb(250, 204, 21)" size={24} />
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground italic mb-3">
                    {review.review}
                  </p>
                </div>
                <div className="border-t pt-3">
                  <div className="font-semibold text-foreground">
                    {review.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {review.flag} {review.location}
                  </div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 mt-1 text-xs bg-primary/10 text-primary">
                    {review.service}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-xl text-foreground font-semibold mb-4">
            Join thousands of satisfied customers who trust us with their
            laundry!
          </p>
          <button
            onClick={() => {
              const message = encodeURIComponent(
                "Hi! I want to book your 5-star laundry service."
              );
              window.open(
                `https://wa.me/${managerInfo.onlyNumber.whatsApp}?text=${message}`,
                "_blank"
              );
            }}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-success hover:bg-success/90 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Get Your 5-Star Service Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
