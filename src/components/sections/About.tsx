import { useRef } from 'react';
import { motion, useInView, Variants, useMotionValue, useTransform } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Mouse position for parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    mouseX.set(event.clientX - left - width / 2);
    mouseY.set(event.clientY - top - height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Parallax transforms for background gradients
  const parallaxX1 = useTransform(mouseX, [-200, 200], [-15, 15]);
  const parallaxY1 = useTransform(mouseY, [-200, 200], [-10, 10]);
  const parallaxX2 = useTransform(mouseX, [-200, 200], [15, -15]);
  const parallaxY2 = useTransform(mouseY, [-200, 200], [10, -10]);

  const paragraphs = [
    "Most of our projects start the same way: a digital product that's underperforming, a stalled roadmap, or a team that needs to pick up speed. Whether it's an outdated platform, a failed build, or an idea that's never left the ground, we're brought in to cut through the noise and make things work.",
    "We thrive with teams that are ambitious but under pressure — founders racing to launch, marketers eager to modernise, IT leads rebuilding without disrupting operations. People who don't just want to hand over a brief and walk away; they want a partner who'll think critically, challenge ideas, and deliver side by side."
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: i * 0.2 }
    })
  };

  const wordVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };
  
  const badgeVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section className="flex flex-col items-center justify-start w-full p-2 lg:p-4 bg-dark-section">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        id="about"
        className="relative w-full max-w-[1920px] mx-auto overflow-hidden"
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-aireal-primary rounded-2xl">
          <motion.div 
            className="absolute w-[658px] h-[548px] rounded-full opacity-[0.08] blur-[80px]"
            style={{
              background: 'linear-gradient(143.24deg, rgb(128, 170, 253), rgb(211, 123, 255) 31.09%, rgb(252, 172, 132) 70.46%, rgb(255, 130, 225))',
              left: '-246px',
              top: '-186px',
              x: parallaxX1,
              y: parallaxY1,
              transition: 'transform 0.2s ease-out'
            }}
          />
          
          <motion.div 
            className="absolute w-[658px] h-[548px] rounded-full opacity-[0.06] blur-[80px]"
            style={{
              background: 'linear-gradient(140.02deg, #EFE8F6, #D588FB 60.83%, rgb(255, 130, 225))',
              right: '-96px',
              bottom: '-100px',
              x: parallaxX2,
              y: parallaxY2,
              transition: 'transform 0.2s ease-out'
            }}
          />
        </div>

        <div
          className="relative z-10 flex flex-col items-center justify-center min-h-screen px-10 py-20 lg:px-20"
        >
          <div className="flex flex-col items-start justify-center gap-8 max-w-4xl w-full">
            <motion.div
              variants={badgeVariants}
              whileHover={{ scale: 1.05, y: -2, rotate: -2 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="inline-flex items-center px-5 py-2 border border-white/20 bg-white/10 rounded-full shadow-lg mb-5 glassmorphism"
            >
              <p className="text-sm font-medium text-white/90 lowercase">
                about
              </p>
            </motion.div>

            <div className="space-y-8">
              {paragraphs.map((paragraph, pIndex) => (
                <motion.p 
                  key={pIndex}
                  className="text-2xl lg:text-3xl font-medium leading-relaxed text-white/90 select-none"
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  {paragraph.split(' ').map((word, wIndex) => (
                    <motion.span
                      key={wIndex}
                      variants={wordVariants}
                      className="inline-block mr-1.5"
                      whileHover={{ scale: 1.1, y: -2, color: '#ffffff' }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
