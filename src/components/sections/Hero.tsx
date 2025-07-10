import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { useLenis } from '@studio-freight/react-lenis';
import { Bot, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { containerVariants, itemVariants, buttonVariants } from '@/components/animations/variants';
import heroBg from '@/assets/vkYLURkIQB3wgCJUD4m2MGdbKg.png';
import dashboardPreview from '@/assets/YgUzdX0IbuuAdlAK9HhOXgkq8.png';

export default function Hero() {
  const { scrollY } = useScroll();
  
  // Layer transforms
  const yBg = useTransform(scrollY, [0, 800], [0, 40], { clamp: false });
  const yDashboard = useTransform(scrollY, [0, 800], [0, 120], { clamp: false });

  // Foreground icon transforms
  const yIcon2 = useTransform(scrollY, [0, 800], [0, -400]);
  const scaleIcon2 = useTransform(scrollY, [0, 800], [1, 1.5]);
  const rotateIcon2 = useTransform(scrollY, [0, 800], [0, 25]);
  
  const lenis = useLenis();

  const handleScrollTo = (target: string) => {
    lenis?.scrollTo(target, {
      offset: -100,
      duration: 2,
      easing: (t) => t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2, // easeInOutQuint
    });
  };

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
  
  const descriptionVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20, delay: 0.4 }
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

  const titleWords = "We design and build digital experiences that help businesses move faster, work smarter, and sell more.".split(' ');
  const description = "Whether it's a standout website, a powerful platform, or an AI-powered app.";

  return (
    <div id="hero" className="flex flex-col items-center justify-start w-full p-2 lg:p-4 bg-dark-section">
      <header className="relative w-full max-w-[1920px] mx-auto overflow-hidden rounded-2xl min-h-screen pt-[120px]">
        {/* Background Image */}
        <motion.div 
          className="absolute inset-0 rounded-2xl"
          style={{ y: yBg }}
        >
          <img
            src={heroBg}
            alt="Sky background"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/10 rounded-2xl" />
        </motion.div>

        {/* Floating Icons - Foreground */}
        <motion.div 
            className="absolute top-[50%] right-[10%] z-20 hidden lg:block"
            style={{ y: yIcon2, scale: scaleIcon2, rotate: rotateIcon2 }}
        >
            <div className="glassmorphism-card rounded-full p-6 shadow-lg">
                <TrendingUp className="w-16 h-16 text-white/80" />
            </div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="relative z-10 flex flex-col items-start justify-center min-h-screen max-w-6xl mx-auto px-8 lg:px-20 py-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col items-center lg:items-start gap-8 max-w-4xl">
            {/* Badge */}
            <motion.div
              variants={badgeVariants}
            >
              <Badge variant="glass_hero">
                <svg className="w-3 h-3 flex-shrink-0 fill-black mr-2" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="8" fill="currentColor" />
                </svg>
                business & solution
              </Badge>
            </motion.div>

            {/* Title */}
            <motion.h1 className="text-4xl lg:text-5xl font-medium leading-tight text-aireal-primary text-center lg:text-left">
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
            <motion.p
              className="text-lg lg:text-xl font-normal leading-relaxed text-aireal-primary max-w-3xl text-center lg:text-left"
              variants={descriptionVariants}
            >
              {description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={buttonVariants}
              className="flex flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={() => handleScrollTo('#pricing')}
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
                  y: yDashboard,
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
                  src={dashboardPreview}
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
