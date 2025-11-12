import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const testimonials = [
  {
    name: "Ahmed Al-Rashid",
    location: "Clock Tower Hotel, Makkah",
    country: "Saudi Arabia",
    rating: 5,
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
    review:
      "Amazing service! They picked up my laundry within 10 minutes and returned everything perfectly clean and pressed. The prices are much better than hotel laundry. Will use again!",
    avatar: "FH",
    flag: "🇪🇬",
  },
  {
    name: "Muhammad Khan",
    location: "Jabal Omar Towers",
    country: "Pakistan",
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
    rating: 5,
    review:
      "Outstanding experience! They handled my delicate abayas with great care. Fast pickup, professional service, and reasonable prices. This is the only laundry service you need in Makkah!",
    avatar: "MA",
    flag: "🇲🇾",
  },
  {
    name: "Hassan Mahmoud",
    location: "Kudai Area",
    country: "Turkey",
    rating: 5,
    review:
      "Quick, efficient and trustworthy! They tracked everything and sent updates on WhatsApp. My clothes came back fresher than new. Excellent service for the price!",
    avatar: "HM",
    flag: "🇹🇷",
  },
  {
    name: "Khadija Rahman",
    location: "Misfalah District",
    country: "Bangladesh",
    rating: 5,
    review:
      "Finally found a reliable laundry service in Makkah! They speak Urdu which made communication easy. Same day service as promised and my formal wear was perfectly pressed!",
    avatar: "KR",
    flag: "🇧🇩",
  },
];

const Testimonials = () => {
  const plugin = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    import("embla-carousel-autoplay").then((AutoplayPlugin) => {
      plugin.current = AutoplayPlugin.default({ 
        delay: 3000, 
        stopOnInteraction: false,
        stopOnMouseEnter: true 
      });
    });
  }, []);

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
            animate={isInView ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            What Our Customers Say
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            5000+ happy customers from 50+ countries trust us with their laundry
          </motion.p>
          <motion.div 
            className="flex items-center justify-center gap-2 mt-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-xl font-bold text-foreground">4.9/5</span>
            <span className="text-muted-foreground">(5000+ reviews)</span>
          </motion.div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={plugin.current ? [plugin.current] : []}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <motion.div 
                    className="p-2 h-full"
                    initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                    animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 50, filter: "blur(10px)" }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  >
                    <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full group">
                      <div className="absolute inset-0 bg-gradient-to-br from-success/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <CardContent className="p-6 relative z-10">
                        {/* Quote Icon with gradient background */}
                        <div className="mb-4 relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-success/20 to-primary/20 rounded-full blur-xl" />
                          <Quote className="w-10 h-10 text-success relative z-10" />
                        </div>

                        {/* Rating with glow effect */}
                        <div className="flex gap-1 mb-4">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-5 h-5 transition-all duration-300 ${
                                star <= testimonial.rating
                                  ? "fill-accent text-accent drop-shadow-[0_0_8px_hsl(var(--accent))]"
                                  : "text-muted"
                              }`}
                            />
                          ))}
                        </div>

                        {/* Review Text with better typography */}
                        <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                          "{testimonial.review}"
                        </p>

                        {/* Customer Info with enhanced styling */}
                        <div className="flex items-start gap-3 pt-4 border-t border-border/50">
                          <Avatar className="w-12 h-12 border-2 border-success/50 shadow-lg ring-2 ring-success/10">
                            <AvatarImage src="" />
                            <AvatarFallback className="bg-gradient-to-br from-success/20 to-primary/20 text-success font-bold text-sm">
                              {testimonial.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-foreground flex items-center gap-2 text-sm">
                              {testimonial.name}
                              <span className="text-lg">
                                {testimonial.flag}
                              </span>
                            </div>
                            <div className="text-xs text-muted-foreground font-medium">
                              {testimonial.location}
                            </div>
                            <div className="text-xs text-muted-foreground/70">
                              {testimonial.country}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
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
                `https://wa.me/+966539529624?text=${message}`,
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
