import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { wordVariants } from '@/components/animations/variants';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [visibleWords, setVisibleWords] = useState<number>(0);

  const aboutText = [
    'Aireal', 'is', 'crafted', 'to', 'elevate', 'how', 'businesses', 'showcase', 'their', 'AI', 'solutions.',
    'With', 'a', 'focus', 'on', 'clean', 'design,', 'it', 'helps', 'brands', 'engage', 'and', 'convert.'
  ];

  const stats = [
    { value: '99%', label: 'Customer Satisfaction' },
    { value: '24/7', label: 'AI Support Available' },
    { value: '50%', label: 'Faster Response Times' }
  ];

  useEffect(() => {
    if (isInView) {
      aboutText.forEach((_, index) => {
        setTimeout(() => {
          setVisibleWords(index + 1);
        }, index * 150);
      });
    }
  }, [isInView]);

  return (
    <section id="about" className="py-20 bg-aireal-primary relative overflow-hidden">
      {/* Animated gradient backgrounds */}
      <div className="gradient-orb w-96 h-96 -top-48 -left-48 bg-gradient-to-r from-gradient-blue via-gradient-purple to-gradient-orange opacity-30"></div>
      <div className="gradient-orb w-80 h-80 -bottom-40 -right-40 bg-gradient-to-r from-gradient-pink via-aireal-purple to-gradient-blue opacity-25"></div>
      <div className="gradient-orb w-64 h-64 top-1/2 right-1/4 bg-gradient-to-r from-gradient-orange to-gradient-pink opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge className="glassmorphism-dark rounded-full px-6 py-2 mb-8 text-white/90 text-sm font-medium">
              ✨ about
            </Badge>
          </motion.div>
          
          <div ref={ref} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-12">
            {aboutText.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                initial="hidden"
                animate={index < visibleWords ? "visible" : "hidden"}
                className="inline-block mr-2 mb-2"
              >
                {word}
                {(index === 10 || index === 22) && <br />}
              </motion.span>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 4 + index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
