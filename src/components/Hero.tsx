import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-[#800000]">
      {/* Personalized Wooden Gifts Background */}
      <div className="absolute inset-0 opacity-30">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1736967225557-9de5890696e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbGl6ZWQlMjB3b29kZW4lMjBnaWZ0cyUyMGVuZ3JhdmVkfGVufDF8fHx8MTc2MjY1Mjk3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Personalized wooden gifts background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#800000]/60 via-[#800000]/40 to-transparent"></div>

      {/* Content Overlay - Left Aligned */}
      <div className="relative h-full max-w-7xl mx-auto px-6">
        <div className="flex items-center h-full">
          <div className="max-w-2xl">
            {/* Small Tagline */}
            <p 
              className="text-[#f7f0e0] tracking-[0.25em] mb-6 uppercase text-sm"
              style={{ 
                fontFamily: 'Lato, sans-serif',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)' 
              }}
            >
              Crafted with Love, Engraved for Life
            </p>

            {/* Main Headline */}
            <h1 
              className="text-[#f7f0e0] mb-6 leading-tight text-5xl md:text-6xl"
              style={{ 
                fontFamily: 'Playfair Display, Georgia, serif',
                textShadow: '0 2px 8px rgba(0,0,0,0.4)'
              }}
            >
              Create Lasting Memories with Personalized Wooden Gifts
            </h1>

            {/* Sub-headline */}
            <p 
              className="text-[#f7f0e0] mb-10 leading-relaxed tracking-wide max-w-xl text-lg"
              style={{ 
                fontFamily: 'Lato, sans-serif',
                textShadow: '0 1px 4px rgba(0,0,0,0.3)' 
              }}
            >
              From elegant keepsakes to bespoke home decor, discover the timeless beauty of wood, uniquely yours.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Primary CTA - Gold/Ochre with Maroon text */}
              <button 
                className="px-8 py-3.5 bg-[#D4AF37] text-[#800000] rounded-md transition-all duration-300 hover:bg-[#E5C158] hover:shadow-xl transform hover:-translate-y-0.5"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                Shop All Gifts
              </button>

              {/* Secondary CTA - Ghost Button */}
              <button 
                className="px-8 py-3.5 bg-transparent text-[#f7f0e0] border-2 border-[#f7f0e0] rounded-md transition-all duration-300 hover:bg-[#f7f0e0] hover:text-[#800000]"
                style={{ 
                  fontFamily: 'Lato, sans-serif',
                  textShadow: '0 1px 3px rgba(0,0,0,0.3)' 
                }}
              >
                How It Works
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
