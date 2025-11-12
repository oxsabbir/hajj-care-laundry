import { useState } from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import WhatsAppIcon from "./icons/Whatsapp";
import { motion } from "motion/react";
import brandLogo from "@/assets/logo_light.png";

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
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
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
        {/* Google Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-[300px] rounded-2xl overflow-hidden  border border-border group mb-8"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1857.1341423566648!2d39.822883788746864!3d21.418697342051118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c204c82533f16f%3A0xca0cff6480eeca59!2sThe%20Clock%20Towers!5e0!3m2!1sen!2sbd!4v1762935852300!5m2!1sen!2sbd"
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

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 "
          >
            <div className="w-fit h-[80px] pb-3">
              <a href="/">
                <img
                  src={brandLogo}
                  alt="Clock Tower laundry logo"
                  width={200}
                  height={100}
                  className="w-full h-full object-contain"
                />
              </a>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Professional laundry service in Makkah with 15-minute express
              pickup and 24/7 availability.
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
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <h4 className="text-base font-bold mb-4 text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-sm text-muted-foreground hover:text-success transition-colors hover:translate-x-1 inline-flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-success"></span>
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-sm text-muted-foreground hover:text-success transition-colors hover:translate-x-1 inline-flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-success"></span>
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-sm text-muted-foreground hover:text-success transition-colors hover:translate-x-1 inline-flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-success"></span>
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-sm text-muted-foreground hover:text-success transition-colors hover:translate-x-1 inline-flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-success"></span>
                  Contact Us
                </button>
              </li>
              <li>
                <a
                  href="tel:+966539529624"
                  className="text-sm text-muted-foreground hover:text-success transition-colors hover:translate-x-1 inline-flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-success"></span>
                  Emergency Pickup
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <h4 className="text-base font-bold mb-4 text-foreground">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Clock Tower Area, Makkah, Saudi Arabia
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+966539529624"
                  className="text-sm text-muted-foreground hover:text-success transition-colors"
                >
                  +966 53 952 9624
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@clocktowerlaundry.com"
                  className="text-sm text-muted-foreground hover:text-success transition-colors"
                >
                  info@clocktowerlaundry.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  24/7 Service Available
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Message Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <h4 className="text-base font-bold mb-4 text-foreground">
              Send Message
            </h4>
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                maxLength={100}
                className="bg-background border-border focus:border-success transition-colors h-9 text-sm"
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                maxLength={255}
                className="bg-background border-border focus:border-success transition-colors h-9 text-sm"
              />
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                maxLength={1000}
                rows={3}
                className="bg-background border-border focus:border-success transition-colors resize-none text-sm"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-success hover:bg-success/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all h-9 text-sm"
              >
                <WhatsAppIcon size={16} className="mr-2" />
                {isSubmitting ? "Sending..." : "Send via WhatsApp"}
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>
              © {currentYear} Clock Tower Laundry Service. All rights reserved.
            </p>
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
