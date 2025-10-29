import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* ALCHEMIX */}
          <div>
            <h3 className="text-xl font-bold mb-4">ALCHEMIX</h3>
            <p className="text-sm text-background/80 mb-4">
              Annual Conference on Chemical Engineering at RDIT
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-primary transition-colors">
                  Event Details
                </a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-primary transition-colors">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-background/80">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>alchemix@rdit.ac.in</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>+91 9876543210</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Department of Chemical Engineering, RDIT</span>
              </li>
            </ul>
          </div>

          {/* Event Details */}
          <div>
            <h3 className="text-lg font-bold mb-4">Event Details</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>📅 Nov 14-15, 2025</li>
              <li>📍 HL, RDIT Campus</li>
              <li>🎓 B.E / M.E / PhD Students</li>
              <li>💼 Faculty & Industry</li>
            </ul>
          </div>
        </div>

        <div className="border-top border-background/20 pt-8 text-center text-sm text-background/80">
          <p>© 2025 Department of Chemical Engineering. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
