import React, { lazy, Suspense, useRef } from 'react';
import { useInView } from 'framer-motion';

interface LazyLoadProps {
  component: React.ComponentType<any>;
  fallback?: React.ReactNode;
}

const LazyLoad: React.FC<LazyLoadProps> = ({ component: Component, fallback = null }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '200px' });

  return (
    <div ref={ref}>
      {isInView ? (
        <Suspense fallback={fallback}>
          <Component />
        </Suspense>
      ) : (
        fallback
      )}
    </div>
  );
};

export default LazyLoad; 