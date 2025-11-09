import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

interface CategoryCardProps {
  title: string;
  imageUrl: string;
  alt: string;
}

function CategoryCard({ title, imageUrl, alt }: CategoryCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 bg-[#f7f0e0]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered 
          ? '0 10px 30px rgba(128, 0, 0, 0.2)' 
          : '0 2px 8px rgba(0, 0, 0, 0.08)',
        border: '3px solid #D4AF37',
        borderRadius: '12px'
      }}
    >
      {/* Decorative Gold Corner */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#D4AF37] rounded-tl-lg z-10"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#D4AF37] rounded-br-lg z-10"></div>

      {/* Image Container */}
      <div className="relative h-[400px] overflow-hidden rounded-lg m-2">
        <ImageWithFallback
          src={imageUrl}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 ease-out"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
        
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#800000]/70 via-[#800000]/30 to-transparent"></div>
      </div>

      {/* Text Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 
          className="text-[#f7f0e0] mb-3"
          style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
        >
          {title}
        </h3>
        
        {/* CTA Link */}
        <div className="flex items-center">
          <span 
            className="tracking-widest transition-colors duration-300"
            style={{
              fontFamily: 'Lato, sans-serif',
              color: isHovered ? '#D4AF37' : '#f7f0e0'
            }}
          >
            Shop Now
          </span>
          <svg
            className="ml-2 transition-transform duration-300"
            style={{
              transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
              stroke: isHovered ? '#D4AF37' : '#f7f0e0'
            }}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
}

export function FeaturedCategories() {
  const categories = [
    {
      title: 'Gifts for Her',
      imageUrl: 'https://images.unsplash.com/photo-1761110518837-689557b142bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBqZXdlbHJ5JTIwYm94JTIwZWxlZ2FudHxlbnwxfHx8fDE3NjI2NTE0MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Elegant wooden jewelry box for women'
    },
    {
      title: 'Gifts for Him',
      imageUrl: 'https://images.unsplash.com/photo-1606077089838-0ac4a27fc96f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBjcmFmdHMlMjBhcnRpc2FuJTIwd2FybXxlbnwxfHx8fDE3NjI2NTE3OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Masculine wooden crafts'
    },
    {
      title: 'Home & Decor',
      imageUrl: 'https://images.unsplash.com/photo-1737534884876-426964ba462a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBob21lJTIwZGVjb3IlMjBhcnRpc2FufGVufDF8fHx8MTc2MjY1MTc5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Artisan wooden home decor'
    }
  ];

  return (
    <section className="w-full bg-[#f7f0e0] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 
          className="text-center text-[#800000] mb-16 text-4xl"
          style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
        >
          Discover Our Handcrafted Collections
        </h2>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              imageUrl={category.imageUrl}
              alt={category.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
