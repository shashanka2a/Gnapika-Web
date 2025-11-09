'use client';

import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
  alt: string;
}

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative transition-all duration-300 bg-[#f7f0e0] rounded-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered 
          ? '0 12px 40px rgba(128, 0, 0, 0.2)' 
          : '0 2px 10px rgba(0, 0, 0, 0.08)',
        border: '3px solid #D4AF37'
      }}
    >
      {/* Decorative Gold Corners */}
      <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-[#D4AF37] rounded-tl-lg z-10"></div>
      <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-[#D4AF37] rounded-tr-lg z-10"></div>
      <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-[#D4AF37] rounded-bl-lg z-10"></div>
      <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-[#D4AF37] rounded-br-lg z-10"></div>

      {/* Product Image */}
      <div className="relative overflow-hidden m-3 h-72">
        <ImageWithFallback
          src={product.imageUrl}
          alt={product.alt}
          fill
          className="object-cover rounded"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        
        {/* Shop Now Button - Fades in on hover */}
        <div 
          className="absolute bottom-0 left-0 right-0 p-4 transition-all duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateY(0)' : 'translateY(10px)'
          }}
        >
          <button 
            className="w-full px-6 py-3 bg-[#800000] text-[#f7f0e0] rounded-md transition-all duration-300 hover:bg-[#A00000] hover:shadow-lg"
            style={{ fontFamily: 'var(--font-lato), sans-serif' }}
          >
            Shop Now
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="text-center px-4 pb-5">
        {/* Product Name */}
        <h3 
          className="text-[#5C4033] mb-2"
          style={{ fontFamily: 'var(--font-lato), sans-serif' }}
        >
          {product.name}
        </h3>

        {/* Product Price */}
        <p 
          className="text-[#800000]"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
        >
          {product.price}
        </p>
      </div>
    </div>
  );
}

export function BestSellers() {
  const products: Product[] = [
    {
      id: 1,
      name: 'Engraved Acacia Cutting Board',
      price: '$49.95',
      imageUrl: 'https://images.unsplash.com/photo-1626081063434-79a2169791b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBjdXR0aW5nJTIwYm9hcmQlMjBzdHVkaW98ZW58MXx8fHwxNzYyNjUxNjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Handcrafted wooden cutting board'
    },
    {
      id: 2,
      name: 'Personalized Keepsake Box',
      price: '$64.95',
      imageUrl: 'https://images.unsplash.com/photo-1631561381314-588b8a5f1070?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBqZXdlbHJ5JTIwYm94JTIwcHJvZHVjdHxlbnwxfHx8fDE3NjI2NTE2NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Elegant wooden jewelry box'
    },
    {
      id: 3,
      name: 'Custom Wooden Photo Frame',
      price: '$39.95',
      imageUrl: 'https://images.unsplash.com/photo-1598266629277-22f259f8049b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBwaG90byUyMGZyYW1lJTIwZWxlZ2FudHxlbnwxfHx8fDE3NjI2NTE2NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Rustic wooden photo frame'
    },
    {
      id: 4,
      name: 'Artisan Serving Tray',
      price: '$54.95',
      imageUrl: 'https://images.unsplash.com/photo-1617695615794-a5abcece0f48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBzZXJ2aW5nJTIwdHJheSUyMHByb2R1Y3R8ZW58MXx8fHwxNzYyNjUxNjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Handcrafted wooden serving tray'
    }
  ];

  return (
    <section className="w-full bg-[#f7f0e0] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 
          className="text-center text-[#800000] mb-16 text-4xl"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
        >
          Our Most-Loved Gifts
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

