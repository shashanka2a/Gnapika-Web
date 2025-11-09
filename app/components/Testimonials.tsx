'use client';

import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
}

export function Testimonials() {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "The personalized cutting board we ordered was absolutely stunning. The craftsmanship is impeccable, and the engraving was perfect. It made a wonderful wedding gift!",
      author: "Priya Sharma",
      role: "Happy Customer"
    },
    {
      id: 2,
      quote: "I've ordered several items from Gnapika, and each one has exceeded my expectations. The quality of the wood and attention to detail is remarkable.",
      author: "Rajesh Kumar",
      role: "Repeat Customer"
    },
    {
      id: 3,
      quote: "The custom photo frame arrived beautifully packaged and was even more beautiful than I imagined. It's now a cherished piece in our home.",
      author: "Ananya Patel",
      role: "Satisfied Client"
    },
    {
      id: 4,
      quote: "Exceptional quality and service! The personalized jewelry box I ordered for my wife was delivered quickly and looked even better than the photos. She absolutely loved it!",
      author: "Vikram Reddy",
      role: "Delighted Customer"
    },
    {
      id: 5,
      quote: "The engraving is so detailed and precise. I've recommended Gnapika to all my friends and family. A truly special way to give meaningful gifts.",
      author: "Kavya Menon",
      role: "Loyal Fan"
    }
  ];

  return (
    <section className="w-full bg-[#800000] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 
          className="text-center text-[#f7f0e0] mb-16 text-4xl"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
        >
          What Our Customers Say
        </h2>

        {/* Testimonials Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2 h-full">
                  <div
                    className="relative bg-[#f7f0e0] p-8 rounded-lg flex flex-col min-h-[420px]"
                    style={{
                      border: '2px solid #D4AF37'
                    }}
                  >
                    {/* Decorative Gold Corners */}
                    <div className="absolute top-0 left-0 w-12 h-12 border-t-3 border-l-3 border-[#D4AF37]"></div>
                    <div className="absolute bottom-0 right-0 w-12 h-12 border-b-3 border-r-3 border-[#D4AF37]"></div>

                    {/* Quote Icon */}
                    <div className="text-[#D4AF37] mb-4">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                      </svg>
                    </div>

                    {/* Quote Text */}
                    <p 
                      className="text-[#5C4033] mb-6 leading-relaxed italic flex-grow"
                      style={{ fontFamily: 'var(--font-lato), sans-serif' }}
                    >
                      "{testimonial.quote}"
                    </p>

                    {/* Author */}
                    <div className="border-t-2 border-[#D4AF37] pt-4 mt-auto">
                      <p 
                        className="text-[#800000] mb-1"
                        style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                      >
                        {testimonial.author}
                      </p>
                      <p 
                        className="text-[#5C4033]"
                        style={{ fontFamily: 'var(--font-lato), sans-serif' }}
                      >
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Carousel Indicator Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.slice(0, 3).map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-[#D4AF37] opacity-50"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

