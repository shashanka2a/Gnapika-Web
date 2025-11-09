'use client';

import { Search, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <nav className="w-full bg-[#f7f0e0] border-b-2 border-[#D4AF37]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Left */}
          <div className="flex-shrink-0">
            <a 
              href="/" 
              className="text-[#800000] tracking-tight transition-colors hover:text-[#D4AF37]"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Gnapika
            </a>
          </div>

          {/* Navigation Links - Center */}
          <div className="hidden md:flex items-center space-x-12">
            {['Gifts', 'How It Works', 'About'].map((link) => (
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
          <div className="flex items-center space-x-6">
            {/* Search Icon */}
            <button 
              className="text-[#5C4033] transition-colors hover:text-[#D4AF37]"
              aria-label="Search"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>

            {/* Cart Icon */}
            <button 
              className="text-[#5C4033] transition-colors hover:text-[#D4AF37]"
              aria-label="Shopping cart"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
            </button>

            {/* CTA Button */}
            <button 
              className="hidden sm:block px-6 py-2.5 bg-[#D4AF37] text-[#800000] rounded-md transition-all duration-300 hover:bg-[#E5C158] hover:shadow-lg"
              style={{ fontFamily: 'var(--font-lato), sans-serif' }}
            >
              Create Your Gift
            </button>
          </div>
        </div>

        {/* Mobile Menu Links */}
        <div className="md:hidden mt-4 flex justify-center space-x-8">
          {['Gifts', 'How It Works', 'About'].map((link) => (
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
      </div>
    </nav>
  );
}

