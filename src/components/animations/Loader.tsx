import { useEffect, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// Variants for the container that wraps the letters.
// This controls the staggered animation of each letter.
const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Variants for each individual letter of the logo.
const letterVariants: Variants = {
  hidden: {
    y: 20,
    opacity: 0,
    color: '#A0A0A0', // Start with light grey color
  },
  visible: {
    y: 0,
    opacity: 1,
    color: 'rgba(0,0,0,0)', // Animate to transparent to reveal gradient
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// The animated splash screen component.
// Handles the animated logo and exit transition after timeout.
function Loader({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // Notify parent to remove loader
    }, 2500); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, [onFinish]);

  const text = 'Aireal';
  const letters = Array.from(text);

  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center z-[9999]"
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      exit={{ y: '-100vh', transition: { duration: 1, ease: 'easeInOut' } }}
    >
      <motion.h1
        className="text-7xl font-bold tracking-widest bg-gradient-to-r from-aireal-purple to-gradient-pink bg-clip-text text-transparent flex overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {letters.map((letter, index) => (
          <motion.span key={index} variants={letterVariants}>
            {letter}
          </motion.span>
        ))}
      </motion.h1>
    </motion.div>
  );
}

// The main wrapper component.
// Controls whether to show the loader or the landing page.
export default function LoaderWithReveal() {
  const [showLoader, setShowLoader] = useState(true);

  return (
    <div className="relative min-h-screen">
      <AnimatePresence>
        {showLoader && <Loader onFinish={() => setShowLoader(false)} />}
      </AnimatePresence>

      {/* Landing page content below */}
      {!showLoader && (
        <main className="min-h-screen flex items-center justify-center bg-white transition-opacity duration-1000">
          <h1 className="text-4xl font-semibold text-gray-900">Welcome to Aireal</h1>
        </main>
      )}
    </div>
  );
}
