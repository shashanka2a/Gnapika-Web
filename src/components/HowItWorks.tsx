import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface StepProps {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
  index: number;
}

function Step({ number, title, description, isLast = false, index }: StepProps) {
  return (
    <motion.div 
      className="flex-1 relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.2,
        ease: "easeOut"
      }}
    >
      <div className="text-center">
        {/* Step Number */}
        <motion.div 
          className="text-[#800000] mb-6" 
          style={{ 
            fontSize: '4rem', 
            lineHeight: '1',
            fontFamily: 'Playfair Display, Georgia, serif' 
          }}
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.2 + 0.2,
            ease: "backOut"
          }}
        >
          {number}
        </motion.div>

        {/* Step Title */}
        <h3 
          className="text-[#800000] mb-4"
          style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
        >
          {title}
        </h3>

        {/* Step Description */}
        <p 
          className="text-[#5C4033] leading-relaxed max-w-xs mx-auto"
          style={{ fontFamily: 'Lato, sans-serif' }}
        >
          {description}
        </p>
      </div>

      {/* Connecting Line (except for last step) */}
      {!isLast && (
        <div className="hidden lg:block absolute top-12 left-[60%] w-[80%]">
          <svg
            className="w-full h-8"
            viewBox="0 0 200 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M 0 16 Q 100 8, 200 16"
              stroke="#D4AF37"
              strokeWidth="3"
              strokeDasharray="10 8"
              fill="none"
              initial={{ pathLength: 0, strokeDashoffset: 0 }}
              whileInView={{ pathLength: 1, strokeDashoffset: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2 + 0.4,
                ease: "easeInOut"
              }}
              animate={{
                strokeDashoffset: [0, -36]
              }}
              style={{
                transition: 'none'
              }}
              // @ts-ignore
              transition={{
                strokeDashoffset: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            />
          </svg>
        </div>
      )}
    </motion.div>
  );
}

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Select Your Design',
      description: 'Browse our curated collections and choose a handcrafted wooden gift that speaks to you.'
    },
    {
      number: '02',
      title: 'Add Your Touch',
      description: 'Upload your photo, add a name, or write a heartfelt message using our simple customization tool.'
    },
    {
      number: '03',
      title: 'Crafted with Care',
      description: 'Our artisans will meticulously engrave and finish your gift, then deliver it right to your door.'
    }
  ];

  return (
    <section className="w-full bg-[#f7f0e0] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2 
          className="text-center text-[#800000] mb-4 text-4xl"
          style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Crafted Just for You
        </motion.h2>

        {/* Sub-headline */}
        <motion.p 
          className="text-center text-[#5C4033] max-w-2xl mx-auto mb-16 leading-relaxed text-lg"
          style={{ fontFamily: 'Lato, sans-serif' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          We make personalization simple. Follow three easy steps to create your unique gift.
        </motion.p>

        {/* Steps Container */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 relative">
          {steps.map((step, index) => (
            <Step
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
