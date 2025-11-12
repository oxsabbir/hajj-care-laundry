import { useState } from "react";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import WhatsAppIcon from "./icons/Whatsapp";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate inputs
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Send to WhatsApp
    const message = encodeURIComponent(
      `New Message from Website:\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/+966539529624?text=${message}`, "_blank");

    toast({
      title: "Message Sent!",
      description: "We'll get back to you shortly via WhatsApp",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-background to-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Left Side: Map + Contact Info */}
          <div className="space-y-6">
            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl border border-border group"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3713.5654543157845!2d39.82384731493825!3d21.418749885665584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c204b74c5e3b5f%3A0xf91c85eb0c926c2!2sAbraj%20Al%20Bait%20Towers!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                title="Clock Tower Laundry Location"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-success/50 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center group-hover:bg-success/20 transition-colors">
                  <MapPin className="w-5 h-5 text-success" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">Location</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Clock Tower Area, Makkah, Saudi Arabia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-success/50 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center group-hover:bg-success/20 transition-colors">
                  <Phone className="w-5 h-5 text-success" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">Phone</h4>
                  <a
                    href="tel:+966539529624"
                    className="text-xs text-muted-foreground hover:text-success transition-colors"
                  >
                    +966 53 952 9624
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-success/50 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center group-hover:bg-success/20 transition-colors">
                  <Clock className="w-5 h-5 text-success" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">Hours</h4>
                  <p className="text-xs text-muted-foreground">
                    24/7 Service Available
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-success/50 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center group-hover:bg-success/20 transition-colors">
                  <Mail className="w-5 h-5 text-success" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">Email</h4>
                  <a
                    href="mailto:info@clocktowerlaundry.com"
                    className="text-xs text-muted-foreground hover:text-success transition-colors"
                  >
                    info@clocktowerlaundry.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Quick Links + Message Form */}
          <div className="space-y-6">
            {/* Quick Links & Brand Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {/* Brand */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-success to-primary flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">CT</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground leading-tight">
                      Clock Tower
                    </h3>
                    <p className="text-xs text-success font-semibold">
                      Laundry Service
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Professional laundry service in Makkah with 15-minute express pickup and 24/7 availability.
                </p>
                {/* Social Links */}
                <div className="flex gap-2">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-card border border-border hover:border-success hover:bg-success/10 rounded-lg flex items-center justify-center transition-all group"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4 text-muted-foreground group-hover:text-success transition-colors" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-card border border-border hover:border-success hover:bg-success/10 rounded-lg flex items-center justify-center transition-all group"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4 text-muted-foreground group-hover:text-success transition-colors" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-card border border-border hover:border-success hover:bg-success/10 rounded-lg flex items-center justify-center transition-all group"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-4 h-4 text-muted-foreground group-hover:text-success transition-colors" />
                  </a>
                  <a
                    href="https://wa.me/+966539529624"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-success hover:bg-success/90 rounded-lg flex items-center justify-center transition-all shadow-lg"
                    aria-label="WhatsApp"
                  >
                    <WhatsAppIcon size={18} className="text-white" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-base font-bold mb-4 text-foreground">Quick Links</h4>
                <ul className="space-y-2.5">
                  <li>
                    <button
                      onClick={() => scrollToSection("services")}
                      className="text-sm text-muted-foreground hover:text-success transition-colors hover:translate-x-1 inline-block"
                    >
                      → Our Services
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("pricing")}
                      className="text-sm text-muted-foreground hover:text-success transition-colors hover:translate-x-1 inline-block"
                    >
                      → Pricing
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("testimonials")}
                      className="text-sm text-muted-foreground hover:text-success transition-colors hover:translate-x-1 inline-block"
                    >
                      → Testimonials
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="text-sm text-muted-foreground hover:text-success transition-colors hover:translate-x-1 inline-block"
                    >
                      → Contact Us
                    </button>
                  </li>
                  <li>
                    <a
                      href="tel:+966539529624"
                      className="text-sm text-muted-foreground hover:text-success transition-colors hover:translate-x-1 inline-block"
                    >
                      → Emergency Pickup
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Message Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-card via-card to-success/5 border border-border shadow-lg"
            >
              <h4 className="text-base font-bold mb-4 text-foreground flex items-center gap-2">
                <Mail className="w-5 h-5 text-success" />
                Send us a Message
              </h4>
              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  maxLength={100}
                  className="bg-background border-border focus:border-success transition-colors"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  maxLength={255}
                  className="bg-background border-border focus:border-success transition-colors"
                />
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  maxLength={1000}
                  rows={3}
                  className="bg-background border-border focus:border-success transition-colors resize-none"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-success hover:bg-success/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  <WhatsAppIcon size={18} className="mr-2" />
                  {isSubmitting ? "Sending..." : "Send via WhatsApp"}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Clock Tower Laundry Service. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-success transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-success transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
