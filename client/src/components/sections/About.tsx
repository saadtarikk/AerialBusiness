import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

export default function About() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
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

      {/* Content Container */}
      <motion.div
        ref={ref}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-10 py-20 lg:px-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Title Container */}
        <div className="flex flex-col items-start justify-center gap-4 max-w-4xl w-full">
          
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
          <div className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight text-white select-none">
            {words.map((word, index) => (
              <span
                key={index}
                className={`inline-block mr-1 transition-all duration-200 ease-out ${
                  index < currentWordIndex 
                    ? 'opacity-100 blur-0' 
                    : 'opacity-10 blur-sm'
                }`}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
