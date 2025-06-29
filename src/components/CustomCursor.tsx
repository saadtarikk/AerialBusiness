"use client"

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

const spring = {
  damping: 25,
  stiffness: 300,
  restDelta: 0.001
};

export function useFollowPointer() {
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handlePointerMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener('pointermove', handlePointerMove);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, [x, y, mouseX, mouseY]);
  
  const background = useTransform(
    [mouseX, mouseY],
    ([newX, newY]) => {
      const xPx = typeof newX === 'number' ? `${newX}px` : '0px';
      const yPx = typeof newY === 'number' ? `${newY}px` : '0px';
      return `radial-gradient(circle at ${xPx} ${yPx}, rgba(206, 172, 255, 0.045), transparent 80%)`;
    }
  );

  return { x, y, background };
}

export default function CustomCursor() {
  const { x, y, background } = useFollowPointer();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    const updateIsDesktop = () => setIsDesktop(mediaQuery.matches);
    
    updateIsDesktop();
    mediaQuery.addEventListener('change', updateIsDesktop);
    
    return () => mediaQuery.removeEventListener('change', updateIsDesktop);
  }, []);

  if (!isDesktop) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed inset-0 pointer-events-none z-[9998]"
        style={{ background }}
      />
      <motion.div
        style={{
          x,
          y,
        }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 backdrop-blur-md bg-gradient-to-r from-aireal-purple to-gradient-pink border border-white/20"
      />
    </>
  );
} 