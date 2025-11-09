import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-[#800000] border-t-4 border-[#D4AF37]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 
              className="text-[#f7f0e0] mb-4"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              Gnapika
            </h3>
            <p 
              className="text-[#f7f0e0] leading-relaxed mb-4"
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              Crafting personalized wooden gifts with love and care since 2020.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-[#f7f0e0] hover:text-[#D4AF37] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-[#f7f0e0] hover:text-[#D4AF37] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-[#f7f0e0] hover:text-[#D4AF37] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              className="text-[#f7f0e0] mb-4"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['About Us', 'Our Story', 'Careers', 'Blog'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-[#f7f0e0] hover:text-[#D4AF37] transition-colors"
                    style={{ fontFamily: 'Lato, sans-serif' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 
              className="text-[#f7f0e0] mb-4"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              Customer Service
            </h4>
            <ul className="space-y-2">
              {['Contact Us', 'Shipping Info', 'Returns', 'FAQ'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-[#f7f0e0] hover:text-[#D4AF37] transition-colors"
                    style={{ fontFamily: 'Lato, sans-serif' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 
              className="text-[#f7f0e0] mb-4"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start text-[#f7f0e0]">
                <Mail size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span style={{ fontFamily: 'Lato, sans-serif' }}>
                  hello@gnapika.com
                </span>
              </li>
              <li className="flex items-start text-[#f7f0e0]">
                <Phone size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span style={{ fontFamily: 'Lato, sans-serif' }}>
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="flex items-start text-[#f7f0e0]">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span style={{ fontFamily: 'Lato, sans-serif' }}>
                  123 Craft Lane, Artisan City, AC 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#D4AF37] pt-6 text-center">
          <p 
            className="text-[#f7f0e0]"
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            © 2025 Gnapika. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
