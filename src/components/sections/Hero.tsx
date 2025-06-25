import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { containerVariants, itemVariants, buttonVariants } from '@/components/animations/variants';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 50], { clamp: false });

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  const charVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, y: 50, rotateX: 10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 5,
      transition: { type: "spring", stiffness: 100, damping: 25, delay: 0.8 }
    }
  };
  
  const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 20 }
    }
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 20, delay: 0.5 }
    },
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 300, damping: 15 }
    }
  };

  const titleWords = ['The', 'AI-powered', 'Customer', 'Service', 'Platform'];
  const description = "Aireal helps you connect, manage, and optimize your AI tools effortlessly. Unlock powerful insights and automate complex processes with ease.";
  const descriptionWords = description.split(' ');

  return (
    <div className="flex flex-col items-center justify-start w-full p-4 bg-dark-section">
      <header className="relative w-full max-w-[1920px] mx-auto overflow-hidden rounded-2xl min-h-screen pt-[120px]">
        {/* Background Image */}
        <div className="absolute inset-0 rounded-2xl">
          <img
            src="https://framerusercontent.com/images/vkYLURkIQB3wgCJUD4m2MGdbKg.png"
            alt="Sky background"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/10 rounded-2xl" />
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10 flex flex-col items-start justify-center min-h-screen max-w-6xl mx-auto px-10 py-20 lg:px-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col gap-8 max-w-4xl">
            {/* Badge */}
            <motion.div
              variants={badgeVariants}
            >
              <Badge className="glassmorphism rounded-full px-6 py-2.5 mb-8 text-black/90 text-sm font-medium border border-white/10 bg-white/5 backdrop-blur-sm">
                <svg className="w-3 h-3 flex-shrink-0 fill-black mr-2" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="8" fill="currentColor" />
                </svg>
                business & solution
              </Badge>
            </motion.div>

            {/* Title */}
            <motion.h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium leading-tight text-aireal-primary">
              {titleWords.map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className="inline-block mr-2 sm:mr-3"
                  custom={index}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Description */}
            <motion.p className="text-lg lg:text-xl font-normal leading-relaxed text-aireal-primary max-w-3xl">
              {descriptionWords.map((word, index) => (
                <motion.span
                  key={index}
                  variants={charVariants}
                  custom={index}
                  className="inline-block"
                  style={{ 
                    whiteSpace: word === ' ' ? 'pre' : 'normal' 
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    delay: 0.8 + (index * 0.02)
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={buttonVariants}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  className="inline-flex items-center justify-center px-8 py-4 bg-aireal-primary text-white font-medium rounded-lg backdrop-blur-md shadow-lg border-0 transition-all duration-300 hover:bg-aireal-primary/90 hover:shadow-xl"
                >
                  <span className="relative z-10">Get Started</span>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/26 text-aireal-primary font-medium rounded-lg backdrop-blur-md shadow-md border border-white transition-all duration-300 hover:bg-white/40 hover:shadow-lg"
                >
                  <span className="relative z-10">Book a Demo</span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              variants={imageVariants}
              className="w-full max-w-4xl mt-12 lg:mt-16"
            >
              <motion.div
                className="relative w-full rounded-2xl overflow-hidden shadow-2xl"
                style={{ 
                  y,
                  perspective: '1000px',
                  rotateX: '5deg'
                }}
                whileHover={{
                  rotateX: '0deg',
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <img
                  src="https://framerusercontent.com/images/YgUzdX0IbuuAdlAK9HhOXgkq8.png"
                  alt="Aireal Dashboard Preview"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </header>
    </div>
  );
}
