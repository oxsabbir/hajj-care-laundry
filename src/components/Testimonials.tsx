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

const testimonials = [
  {
    name: "Ahmed Al-Rashid",
    location: "Clock Tower Hotel, Makkah",
    country: "Saudi Arabia",
    rating: 5,
    review: "Perfect for pilgrims! Clean clothes in just 15 minutes. Exactly what we needed in Makkah! The team was professional and the service was incredibly fast. Highly recommended!",
    avatar: "AR",
    flag: "🇸🇦",
  },
  {
    name: "Fatima Hassan",
    location: "Hilton Makkah",
    country: "Egypt",
    rating: 5,
    review: "Amazing service! They picked up my laundry within 10 minutes and returned everything perfectly clean and pressed. The prices are much better than hotel laundry. Will use again!",
    avatar: "FH",
    flag: "🇪🇬",
  },
  {
    name: "Muhammad Khan",
    location: "Jabal Omar Towers",
    country: "Pakistan",
    rating: 5,
    review: "Best laundry service in Makkah! They understand pilgrims' needs and work around prayer times. My Ihram clothes were treated with care and returned spotless. 5 stars!",
    avatar: "MK",
    flag: "🇵🇰",
  },
  {
    name: "Aisha Abdullah",
    location: "Swissotel Makkah",
    country: "UAE",
    rating: 5,
    review: "Exceptional service! Available 24/7 and they speak English perfectly. I needed emergency laundry at 2 AM and they delivered. Saved my trip! Thank you so much.",
    avatar: "AA",
    flag: "🇦🇪",
  },
  {
    name: "Ibrahim Yusuf",
    location: "Aziziyah District",
    country: "Indonesia",
    rating: 5,
    review: "Very reliable and affordable! Half the price of hotel laundry with better quality. The WhatsApp booking is so convenient. I recommend this to all pilgrims!",
    avatar: "IY",
    flag: "🇮🇩",
  },
  {
    name: "Mariam Ali",
    location: "Al Safwah Towers",
    country: "Malaysia",
    rating: 5,
    review: "Outstanding experience! They handled my delicate abayas with great care. Fast pickup, professional service, and reasonable prices. This is the only laundry service you need in Makkah!",
    avatar: "MA",
    flag: "🇲🇾",
  },
  {
    name: "Hassan Mahmoud",
    location: "Kudai Area",
    country: "Turkey",
    rating: 5,
    review: "Quick, efficient and trustworthy! They tracked everything and sent updates on WhatsApp. My clothes came back fresher than new. Excellent service for the price!",
    avatar: "HM",
    flag: "🇹🇷",
  },
  {
    name: "Khadija Rahman",
    location: "Misfalah District",
    country: "Bangladesh",
    rating: 5,
    review: "Finally found a reliable laundry service in Makkah! They speak Urdu which made communication easy. Same day service as promised and my formal wear was perfectly pressed!",
    avatar: "KR",
    flag: "🇧🇩",
  },
];

const Testimonials = () => {
  const plugin = useRef(
    // @ts-ignore - Autoplay plugin will be loaded dynamically
    null
  );

  useEffect(() => {
    import("embla-carousel-autoplay").then((AutoplayPlugin) => {
      plugin.current = AutoplayPlugin.default({ delay: 5000 });
    });
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            ⭐ What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            5000+ happy customers from 50+ countries trust us with their laundry
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-xl font-bold text-foreground">4.9/5</span>
            <span className="text-muted-foreground">(5000+ reviews)</span>
          </div>
        </div>

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
                  <div className="p-2">
                    <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl h-full">
                      <CardContent className="p-6">
                        {/* Quote Icon */}
                        <div className="mb-4">
                          <Quote className="w-10 h-10 text-primary/30" />
                        </div>

                        {/* Rating */}
                        <div className="flex gap-1 mb-4">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-5 h-5 ${
                                star <= testimonial.rating
                                  ? "fill-accent text-accent"
                                  : "text-muted"
                              }`}
                            />
                          ))}
                        </div>

                        {/* Review Text */}
                        <p className="text-muted-foreground mb-6 leading-relaxed italic">
                          "{testimonial.review}"
                        </p>

                        {/* Customer Info */}
                        <div className="flex items-start gap-3 pt-4 border-t border-border">
                          <Avatar className="w-12 h-12 border-2 border-primary">
                            <AvatarImage src="" />
                            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                              {testimonial.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-foreground flex items-center gap-2">
                              {testimonial.name}
                              <span className="text-xl">{testimonial.flag}</span>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {testimonial.location}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {testimonial.country}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
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
            Join thousands of satisfied customers who trust us with their laundry!
          </p>
          <button
            onClick={() => {
              const message = encodeURIComponent("Hi! I want to book your 5-star laundry service.");
              window.open(`https://wa.me/+966539529624?text=${message}`, '_blank');
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
