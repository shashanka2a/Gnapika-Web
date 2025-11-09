'use client';

import Image from 'next/image';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = ['Gifts', 'How It Works', 'About'];

  return (
    <nav className="w-full bg-[#f7f0e0] border-b-2 border-[#D4AF37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Left */}
          <div className="flex-shrink-0">
            <a 
              href="/" 
              className="flex items-center gap-2 sm:gap-3 transition-opacity hover:opacity-80"
            >
              <div className="relative w-8 h-8 sm:w-12 sm:h-12 flex-shrink-0">
                <Image
                  src="/gnapika-logo.png"
                  alt="Gnapika Logo"
                  fill
                  className="object-contain"
                  priority
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <span 
                className="text-[#800000] tracking-tight transition-colors hover:text-[#D4AF37] text-base sm:text-lg font-medium"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                Gnapika
              </span>
            </a>
          </div>

          {/* Navigation Links - Center (Desktop) */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="relative text-[#5C4033] tracking-widest transition-colors hover:text-[#D4AF37]"
                style={{ fontFamily: 'var(--font-lato), sans-serif' }}
                onMouseEnter={() => setHoveredLink(link)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {link}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-px bg-[#D4AF37] transform origin-left transition-transform duration-300 ${
                    hoveredLink === link ? 'scale-x-100' : 'scale-x-0'
                  }`}
                  style={{ bottom: '-4px' }}
                />
              </a>
            ))}
          </div>

          {/* CTAs and Icons - Right */}
          <div className="flex items-center space-x-3 sm:space-x-6">
            {/* Search Icon */}
            <button 
              className="text-[#5C4033] transition-colors hover:text-[#D4AF37] p-1"
              aria-label="Search"
            >
              <Search size={18} strokeWidth={1.5} className="sm:w-5 sm:h-5" />
            </button>

            {/* Cart Icon */}
            <button 
              className="text-[#5C4033] transition-colors hover:text-[#D4AF37] p-1"
              aria-label="Shopping cart"
            >
              <ShoppingBag size={18} strokeWidth={1.5} className="sm:w-5 sm:h-5" />
            </button>

            {/* CTA Button (Desktop) */}
            <button 
              className="hidden lg:block px-4 xl:px-6 py-2 xl:py-2.5 bg-[#D4AF37] text-[#800000] rounded-md transition-all duration-300 hover:bg-[#E5C158] hover:shadow-lg text-sm xl:text-base"
              style={{ fontFamily: 'var(--font-lato), sans-serif' }}
            >
              Create Your Gift
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-[#5C4033] transition-colors hover:text-[#D4AF37] p-1"
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X size={24} strokeWidth={1.5} />
              ) : (
                <Menu size={24} strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Links */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <div className="flex flex-col space-y-4 pb-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="relative text-[#5C4033] tracking-widest transition-colors hover:text-[#D4AF37] text-center py-2"
                style={{ fontFamily: 'var(--font-lato), sans-serif' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link}
                <span 
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-px bg-[#D4AF37] transition-all duration-300 group-hover:w-full"
                />
              </a>
            ))}
            {/* Mobile CTA Button */}
            <button 
              className="px-6 py-2.5 bg-[#D4AF37] text-[#800000] rounded-md transition-all duration-300 hover:bg-[#E5C158] hover:shadow-lg mx-auto"
              style={{ fontFamily: 'var(--font-lato), sans-serif' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Create Your Gift
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

