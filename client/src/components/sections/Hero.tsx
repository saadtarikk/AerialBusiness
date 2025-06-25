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

  const description = "Aireal AI helps you connect, manage, and optimize your AI tools effortlessly. Unlock powerful insights and automate complex processes with ease.";

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
    <section id="hero" className="min-h-screen flex flex-col relative overflow-hidden bg-aireal-background pt-[120px]">
      {/* Background gradient orbs */}
      <div className="gradient-orb w-96 h-96 -top-48 -left-48 bg-gradient-to-r from-gradient-blue to-gradient-purple opacity-30"></div>
      <div className="gradient-orb w-80 h-80 -bottom-40 -right-40 bg-gradient-to-r from-gradient-orange to-gradient-pink opacity-25"></div>
      <div className="gradient-orb w-64 h-64 top-1/2 left-1/4 bg-gradient-to-r from-gradient-purple to-gradient-pink opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10 flex-1 flex flex-col">
        {/* Badge and Title Section */}
        <div className="max-w-4xl text-left pt-16 pb-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div variants={badgeVariants}>
              <Badge className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-aireal-primary/70 text-sm font-medium border border-aireal-primary/20">
                ✨ BUSINESS & SOLUTION
              </Badge>
            </motion.div>
            
            {/* Main headline */}
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-aireal-primary leading-tight"
            >
              The AI-powered Customer Service Platform
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-xl text-aireal-primary/70 max-w-2xl leading-relaxed"
            >
              {typedText}
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 pt-4"
            >
              <motion.div variants={buttonVariants} whileHover="hover">
                <Button 
                  size="lg"
                  className="bg-aireal-primary text-white px-8 py-3 text-lg font-medium rounded-lg shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  Get Started
                </Button>
              </motion.div>
              <motion.div variants={buttonVariants} whileHover="hover">
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-aireal-primary text-aireal-primary px-8 py-3 text-lg font-medium rounded-lg hover:bg-aireal-primary/5 transition-all"
                >
                  Book a Demo
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Dashboard Preview */}
        <div className="flex-1 flex items-center justify-center pb-20">
          <motion.div 
            variants={itemVariants}
            style={{ y }}
            className="relative max-w-5xl w-full"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900" 
                alt="AI-powered dashboard interface" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
