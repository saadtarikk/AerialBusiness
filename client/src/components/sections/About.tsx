import { useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef } from 'react';
import { Badge } from '@/components/ui/badge';

export default function About() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  // Text content split into words
  const text = "Aireal is crafted to elevate how businesses showcase their AI solutions. With a focus on clean design, it helps brands engage and convert.";
  const words = text.split(' ');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0.1, filter: 'blur(2px)' },
    visible: { 
      opacity: 1, 
      filter: 'blur(0px)',
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  };

  // Word animation cycle effect
  useEffect(() => {
    if (!isInView) return;

    const animateWords = () => {
      // Reset all words
      setCurrentWordIndex(0);
      
      const animateNext = (index: number) => {
        if (index < words.length) {
          setCurrentWordIndex(index + 1);
          setTimeout(() => animateNext(index + 1), 150);
        } else {
          // Reset after a pause and restart
          setTimeout(() => {
            setCurrentWordIndex(0);
            setTimeout(() => animateWords(), 500);
          }, 3000);
        }
      };
      
      animateNext(0);
    };

    const timeout = setTimeout(animateWords, 500);
    return () => clearTimeout(timeout);
  }, [isInView, words.length]);

  return (
    <section 
      id="about" 
      className="relative w-full max-w-[1920px] mx-auto overflow-hidden"
    >
      {/* Background with gradients */}
      <div className="absolute inset-0 bg-aireal-primary rounded-2xl">
        {/* Gradient Ellipse 1 */}
        <div 
          className="absolute w-[658px] h-[548px] rounded-full opacity-15 blur-[80px]"
          style={{
            background: 'linear-gradient(143.24deg, rgb(128, 170, 253), rgb(211, 123, 255) 31.09%, rgb(252, 172, 132) 70.46%, rgb(255, 130, 225))',
            left: '-246px',
            top: '-186px'
          }}
        />
        
        {/* Gradient Ellipse 2 */}
        <div 
          className="absolute w-[658px] h-[548px] rounded-full opacity-13 blur-[80px]"
          style={{
            background: 'linear-gradient(140.02deg, #EFE8F6, #D588FB 60.83%, rgb(255, 130, 225))',
            right: '-96px',
            top: '520px'
          }}
        />
        
        {/* Gradient Ellipse 3 */}
        <div 
          className="absolute w-[658px] h-[548px] rounded-full opacity-12 blur-[80px]"
          style={{
            background: 'linear-gradient(143.24deg, rgb(128, 170, 253), rgb(211, 123, 255) 31.09%, rgb(252, 172, 132) 70.46%, rgb(255, 130, 225))',
            left: '83px',
            top: '1394px'
          }}
        />
      </div>

      {/* Content Container */}
      <motion.div
        ref={ref}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-10 py-20 lg:px-20"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Sticky Title Container */}
        <div className="sticky top-0 flex flex-col items-start justify-center gap-4 h-screen max-w-4xl w-full">
          
          {/* Badge */}
          <motion.div
            variants={badgeVariants}
            className="inline-flex items-center px-5 py-2 border border-aireal-purple bg-white rounded-full shadow-lg mb-5"
          >
            <p className="text-sm font-medium text-aireal-primary lowercase">
              about
            </p>
          </motion.div>

          {/* Animated Text */}
          <motion.div
            className="sticky top-0 text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight text-white select-none"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                className={`inline-block mr-1 transition-all duration-200 ease-out ${
                  index < currentWordIndex 
                    ? 'opacity-100 blur-0' 
                    : 'opacity-10 blur-sm'
                }`}
                variants={wordVariants}
                custom={index}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
