import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Makkah Laundry Care
            </h3>
            <p className="text-muted-foreground">
              Professional laundry and dry cleaning service with care you can trust.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="text-muted-foreground hover:text-primary transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>© {currentYear} Makkah Laundry Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
