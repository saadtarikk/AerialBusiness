import { motion } from 'framer-motion';

export default function AnimatedGlowBackground() {
  return (
    <div className="absolute inset-0 -z-0" aria-hidden="true">
      <motion.div
        className="absolute top-[-20rem] left-[-20rem] w-[50rem] h-[50rem] bg-aireal-purple/30 rounded-full filter blur-3xl"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.8, 1],
          rotate: [0, 45, -30, 0],
        }}
        transition={{
          duration: 40,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'mirror',
        }}
      />
      <motion.div
        className="absolute bottom-[-25rem] right-[-25rem] w-[50rem] h-[50rem] bg-gradient-pink/30 rounded-full filter blur-3xl"
        animate={{
          x: [0, -80, 40, 0],
          y: [0, 120, -60, 0],
          scale: [1, 0.9, 1.3, 1],
          rotate: [0, -30, 60, 0],
        }}
        transition={{
          duration: 35,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'mirror',
          delay: 7,
        }}
      />
    </div>
  );
} 