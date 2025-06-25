import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

export default function About() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  
  // Track scroll progress through the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.7", "end 0.3"]
  });

  // Text content split into words
  const text = "Aireal is crafted to elevate how businesses showcase their AI solutions. With a focus on clean design, it helps brands engage and convert.";
  const words = text.split(' ');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const badgeVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      filter: 'blur(4px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  // Create progress values for each word based on scroll
  const getWordProgress = (index: number) => {
    const startProgress = index / words.length * 0.8;
    const endProgress = (index + 1) / words.length * 0.8;
    return useTransform(scrollYProgress, [startProgress, endProgress], [0, 1]);
  };

  // Word component with scroll-based animation
  const ScrollWord = ({ word, index }: { word: string; index: number }) => {
    const progress = getWordProgress(index);
    const opacity = useTransform(progress, [0, 1], [0.15, 1]);
    const filter = useTransform(progress, [0, 1], ["blur(2px)", "blur(0px)"]);
    
    return (
      <motion.span
        className="inline-block mr-2 sm:mr-3"
        style={{
          opacity,
          filter,
        }}
        transition={{
          duration: 0.3,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        {word}
      </motion.span>
    );
  };

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative w-full min-h-[200vh] overflow-hidden bg-aireal-primary"
    >
      {/* Background with gradients */}
      <div className="absolute inset-0 bg-aireal-primary">
        {/* Gradient Ellipse 1 */}
        <div 
          className="absolute w-[658px] h-[548px] rounded-full opacity-[0.08] blur-[80px]"
          style={{
            background: 'linear-gradient(143.24deg, rgb(128, 170, 253), rgb(211, 123, 255) 31.09%, rgb(252, 172, 132) 70.46%, rgb(255, 130, 225))',
            left: '-246px',
            top: '-186px'
          }}
        />
        
        {/* Gradient Ellipse 2 */}
        <div 
          className="absolute w-[658px] h-[548px] rounded-full opacity-[0.06] blur-[80px]"
          style={{
            background: 'linear-gradient(140.02deg, #EFE8F6, #D588FB 60.83%, rgb(255, 130, 225))',
            right: '-96px',
            bottom: '-100px'
          }}
        />
        
        {/* Gradient Ellipse 3 */}
        <div 
          className="absolute w-[658px] h-[548px] rounded-full opacity-[0.05] blur-[80px]"
          style={{
            background: 'linear-gradient(143.24deg, rgb(128, 170, 253), rgb(211, 123, 255) 31.09%, rgb(252, 172, 132) 70.46%, rgb(255, 130, 225))',
            left: '20%',
            bottom: '-200px'
          }}
        />
      </div>

      {/* Sticky Content Container */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center px-10 lg:px-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Title Container */}
          <div className="flex flex-col items-start justify-center gap-4 max-w-4xl w-full">
            
            {/* Badge */}
            <motion.div
              variants={badgeVariants}
              className="inline-flex items-center px-5 py-2 border border-white/20 bg-white/10 rounded-full shadow-lg mb-5 glassmorphism"
            >
              <p className="text-sm font-medium text-white/90 lowercase">
                about
              </p>
            </motion.div>

            {/* Scroll-triggered Text */}
            <div 
              ref={textRef}
              className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.2] text-white select-none"
            >
              {words.map((word, index) => (
                <ScrollWord key={index} word={word} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
