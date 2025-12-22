import { useState } from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Send,
} from "lucide-react";
// import TikTokIcon from "./icons/Tiktok";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import WhatsAppIcon from "./icons/Whatsapp";
import { motion } from "motion/react"; // Ensure this matches your installed package (framer-motion vs motion)
import brandLogo from "@/assets/logo_zam_zam.webp"; // Ensure you have a version that looks good on dark bg, or use filter invert
import { managerInfo } from "@/constants";
// import SnapChatIcon from "./icons/SnapChat";

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

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields so we can help you.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    const message = encodeURIComponent(
      `*New Website Inquiry*\n\n👤 *Name:* ${formData.name}\n📧 *Email:* ${formData.email}\n📝 *Message:* ${formData.message}`
    );
    window.open(
      `https://wa.me/+${managerInfo.onlyNumber.whatsApp}?text=${message}`,
      "_blank"
    );

    toast({
      title: "Message Prepared!",
      description: "Opening WhatsApp to send your message...",
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
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300  mt-20 relative overflow-hidden">
      {/* Background Decorators */}

      {/* Map Section - Full Width Banner Style */}

      <div className="w-full h-[400px] relative transition-all duration-700 ease-in-out group">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.540485662498!2d39.839833464146956!3d21.40799065987119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c204da19a032d7%3A0x1173a9c883805875!2sAjyad%20St%2C%20Makkah%20Saudi%20Arabia!5e0!3m2!1sen!2sbd!4v1766408778335!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full opacity-80 group-hover:opacity-100 border-0 transition-opacity"
          title="Clock Tower Laundry Location"
        />
      </div>

      <div className="container mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-56 mb-6">
                {/* Ensure logo works on dark bg, or use a white version */}
                <img
                  src={brandLogo}
                  alt="Clock Tower laundry logo"
                  className="w-full h-auto "
                />
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                The most trusted laundry service in Makkah. specialized in
                caring for Pilgrim garments with speed, purity, and precision.
              </p>

              <div className="flex gap-3">
                {[
                  {
                    icon: Facebook,
                    href: "https://www.facebook.com/profile.php?id=61585129567887",
                  },
                  {
                    icon: Instagram,
                    href: "https://www.instagram.com/laundrymakkah?igsh=dW5sOTY4N2hsaG42",
                  },
                  // {
                  //   icon: TikTokIcon,
                  //   href: "https://www.tiktok.com/@makkah.laundry.se0?_r=1&_t=ZS-92HdhQG1ORo",
                  // },
                  // {
                  //   icon: SnapChatIcon,
                  //   href: "https://www.snapchat.com/add/makkahlaundry25?share_id=OrEFm2HyfsE&locale=en-US",
                  // },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-slate-900 to-slate-700 border border-slate-800 rounded-xl flex items-center justify-center hover:bg-emerald-600 hover:border-emerald-500 hover:text-white transition-all duration-300 group"
                  >
                    <social.icon
                      size={20}
                      className="group-hover:scale-110  transition-transform"
                    />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Column (2 Cols) */}
          <div className="lg:col-span-2 pt-2">
            <h4 className="text-white font-bold text-xl mb-6">Company</h4>
            <ul className="space-y-4">
              {[
                { label: "Our Services", id: "services" },
                { label: "Pricing Plan", id: "pricing" },
                { label: "Testimonials", id: "testimonials" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  {link.id ? (
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-slate-00 hover:text-emerald-400 hover:translate-x-1 transition-all duration-300 flex items-center gap-2"
                    >
                      <ArrowRight
                        size={14}
                        className="opacity-0 hover:opacity-100 -ml-4 hover:ml-0 transition-all"
                      />
                      {link.label}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="text-slate-00 hover:text-emerald-400 hover:translate-x-1 transition-all duration-300 flex items-center gap-2"
                    >
                      <ArrowRight
                        size={14}
                        className="opacity-0 hover:opacity-100 -ml-4 hover:ml-0 transition-all"
                      />
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info (2 Cols) */}
          <div className="lg:col-span-3 pt-2">
            <h4 className="text-white font-bold text-xl mb-6">Reach Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-slate-900 to-slate-700 border border-slate-800 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-sm text-slate-300 mb-1">
                    Phone / WhatsApp
                  </div>
                  <a
                    href={`tel:+${managerInfo.onlyNumber.whatsApp}`}
                    className="text-white hover:text-emerald-400 transition-colors font-medium text-lg"
                  >
                    {managerInfo.whatsApp}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-slate-900 to-slate-700 border border-slate-800 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-sm text-slate-300 mb-1">
                    Email Support
                  </div>
                  <a
                    href={`mailto:${managerInfo.email}`}
                    className="text-white hover:text-emerald-400 transition-colors font-medium"
                  >
                    {managerInfo.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-slate-900 to-slate-700 border border-slate-800 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <Clock size={18} />
                </div>
                <div>
                  <div className="text-sm text-slate-300 mb-1">
                    Working Hours
                  </div>
                  <div className="text-white font-medium">
                    24 Hours / 7 Days
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Form Column (3 Cols) */}
          <div className="lg:col-span-3">
            <div className="bg-gradient-to-r from-slate-900 to-slate-700 p-6 rounded-2xl border border-slate-800 shadow-xl">
              <h4 className="text-white font-bold text-lg mb-2">
                Quick Message
              </h4>
              <p className="text-slate-300 text-sm mb-4">
                We reply via WhatsApp instantly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-slate-800 border-slate-800 text-slate-200 placeholder:text-slate-500 focus:border-emerald-500 h-11"
                />
                <Input
                  placeholder="Phone or Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-slate-800 border-slate-800 text-slate-200 placeholder:text-slate-500 focus:border-emerald-500 h-11"
                />
                <Textarea
                  placeholder="How can we help?"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-slate-800 border-slate-800 text-slate-200 placeholder:text-slate-500 focus:border-emerald-500 min-h-[100px] resize-none"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold h-11 rounded-lg transition-all"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <span className="flex items-center gap-2">
                      Send to WhatsApp <Send size={16} />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-800 border-t border-slate-900 py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-300 text-sm">
            © {currentYear} Makkah Laudry Service. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm font-medium">
            <a
              href="/privacy-policy"
              className="text-slate-300 hover:text-emerald-500 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-slate-300 hover:text-emerald-500 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
