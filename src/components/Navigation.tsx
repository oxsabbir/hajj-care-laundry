import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import WhatsAppIcon from "./icons/Whatsapp";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi! I need laundry service in Makkah. Please send pickup details."
    );
    window.open(`https://wa.me/+966539529624?text=${message}`, "_blank");
  };

  const menuItems = [
    { label: "Services", id: "services" },
    { label: "Pricing", id: "pricing" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-success to-primary flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <span className="text-white font-bold text-lg">CT</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-foreground font-bold text-lg leading-tight">
                Clock Tower
              </div>
              <div className="text-success text-xs font-semibold">
                Laundry Service
              </div>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-success hover:bg-success/10 transition-all font-medium"
              >
                {item.label}
              </Button>
            ))}
            <Button
              onClick={handleWhatsApp}
              className="ml-2 bg-success hover:bg-success/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <WhatsAppIcon size={18} className="mr-2" />
              Book Now
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground hover:bg-success/10"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-background border-l border-border"
            >
              <div className="flex flex-col gap-6 mt-8">
                {/* Mobile Logo */}
                <div className="flex items-center gap-2 pb-4 border-b border-border">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-success to-primary flex items-center justify-center">
                    <span className="text-white font-bold text-lg">CT</span>
                  </div>
                  <div>
                    <div className="text-foreground font-bold text-base leading-tight">
                      Clock Tower
                    </div>
                    <div className="text-success text-xs font-semibold">
                      Laundry Service
                    </div>
                  </div>
                </div>

                {/* Mobile Menu Items */}
                <div className="flex flex-col gap-2">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Button
                        variant="ghost"
                        onClick={() => scrollToSection(item.id)}
                        className="w-full justify-start text-lg font-medium hover:bg-success/10 hover:text-success transition-all"
                      >
                        {item.label}
                      </Button>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4"
                >
                  <Button
                    onClick={handleWhatsApp}
                    className="w-full bg-success hover:bg-success/90 text-white font-semibold shadow-lg text-base h-12"
                  >
                    <WhatsAppIcon size={20} className="mr-2" />
                    Book Now on WhatsApp
                  </Button>
                </motion.div>

                {/* Quick Contact Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-auto pt-6 border-t border-border text-sm text-muted-foreground"
                >
                  <div className="space-y-2">
                    <p className="font-semibold text-foreground">
                      24/7 Service Available
                    </p>
                    <p>📞 +966 53 952 9624</p>
                    <p>⏱️ 15 Min Pickup Time</p>
                  </div>
                </motion.div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
