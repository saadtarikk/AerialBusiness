import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { containerVariants, itemVariants, badgeVariants, buttonVariants } from '@/components/animations/variants';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const description = "Transform your customer support with advanced AI technology that delivers instant, personalized responses and seamless service experiences.";

  useEffect(() => {
    const timer = setTimeout(() => {
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < description.length) {
          setTypedText(description.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typeInterval);
        }
      }, 30);

      return () => clearInterval(typeInterval);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-aireal-primary">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Modern tech startup office" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-aireal-primary/90 via-aireal-primary/80 to-aireal-purple/70"></div>
      </div>
      
      {/* Animated gradient orbs */}
      <div className="gradient-orb w-96 h-96 -top-48 -left-48 bg-gradient-to-r from-gradient-blue to-gradient-purple opacity-60"></div>
      <div className="gradient-orb w-80 h-80 -bottom-40 -right-40 bg-gradient-to-r from-gradient-orange to-gradient-pink opacity-50"></div>
      <div className="gradient-orb w-64 h-64 top-1/2 left-1/4 bg-gradient-to-r from-gradient-purple to-gradient-pink opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Glassmorphism badge */}
          <motion.div variants={badgeVariants}>
            <Badge className="glassmorphism rounded-full px-6 py-2 text-white/90 text-sm font-medium border-white/25">
              ✨ business & solution
            </Badge>
          </motion.div>
          
          {/* Animated headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            <span className="block">The AI-powered</span>
            <span className="block bg-gradient-to-r from-gradient-blue via-aireal-purple to-gradient-pink bg-clip-text text-transparent">
              Customer Service
            </span>
            <span className="block">Platform</span>
          </motion.h1>
          
          {/* Animated description */}
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed min-h-[3rem]"
          >
            {typedText}
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <motion.div variants={buttonVariants} whileHover="hover">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-aireal-purple to-gradient-pink text-white px-8 py-4 text-lg font-semibold shadow-lg"
              >
                Get Started Free
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants} whileHover="hover">
              <Button 
                variant="outline"
                size="lg"
                className="glassmorphism text-white border-white/25 px-8 py-4 text-lg font-semibold hover:bg-white/10"
              >
                <Play className="mr-2 h-4 w-4" />
                Book a Demo
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Dashboard Preview */}
          <motion.div 
            variants={itemVariants}
            style={{ y }}
            className="relative max-w-4xl mx-auto mt-12"
          >
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900" 
              alt="AI-powered dashboard interface" 
              className="parallax-img rounded-2xl shadow-2xl glassmorphism hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
