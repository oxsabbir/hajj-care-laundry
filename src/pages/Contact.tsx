import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import WhatsAppIcon from "@/components/icons/Whatsapp";
import { managerInfo } from "@/constants";

const Contact = () => {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We're here to help with all your laundry needs in Makkah. Reach
              out anytime — we're available 24/7!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            <motion.a
              href={`https://wa.me/${managerInfo.onlyNumber.whatsApp}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group bg-success hover:bg-success/90 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <WhatsAppIcon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
              <p className="text-white/90 text-sm mb-3">Quick responses</p>
              <p className="text-white font-semibold">{managerInfo.whatsApp}</p>
            </motion.a>

            <motion.a
              href={`tel:${managerInfo.onlyNumber.phoneNumber}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group bg-card hover:bg-muted/50 p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all hover:scale-105"
            >
              <div className="w-14 h-14 bg-success/10 rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-7 h-7 text-success" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Phone</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Call us directly
              </p>
              <p className="text-foreground font-semibold">
                {managerInfo.phoneNumber}
              </p>
            </motion.a>

            <motion.a
              href="mailto:info@clocktowerlaundryservice.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group bg-card hover:bg-muted/50 p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all hover:scale-105"
            >
              <div className="w-14 h-14 bg-success/10 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-7 h-7 text-success" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Send us a message
              </p>
              <p className="text-foreground font-semibold text-sm break-all">
                {managerInfo.email}
              </p>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card p-8 rounded-2xl border border-border shadow-sm"
            >
              <div className="w-14 h-14 bg-success/10 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-success" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Hours</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Always available
              </p>
              <p className="text-foreground font-semibold">24/7 Service</p>
            </motion.div>
          </div>

          {/* Book a Pickup Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <div className="bg-gradient-to-r from-primary/10 to-success/10 p-10 rounded-3xl border border-border">
              <MessageCircle className="w-16 h-16 text-success mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Book Your Pickup Now
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Ready for express laundry service? Contact us via WhatsApp and
                we'll be at your location in just 15 minutes. Available 24/7 for
                your convenience.
              </p>
              <a
                href={`https://wa.me/${
                  managerInfo.onlyNumber.whatsApp
                }?text=${encodeURIComponent(
                  "Hi! I'd like to book a laundry pickup."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-success hover:bg-success/90 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <WhatsAppIcon size={24} />
                Book Pickup via WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
