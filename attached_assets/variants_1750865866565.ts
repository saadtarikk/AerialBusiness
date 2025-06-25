// Animation variants for Framer Motion
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

export const wordVariants = {
  hidden: { opacity: 0.1, filter: 'blur(2px)' },
  visible: { 
    opacity: 1, 
    filter: 'blur(0px)',
    transition: { duration: 0.3, ease: 'easeOut' }
  }
}

export const charVariants = {
  hidden: { opacity: 0, filter: 'blur(2px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.1, ease: 'easeOut' }
  }
}

export const badgeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

export const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

export const imageVariants = {
  hidden: { opacity: 0, y: 50, rotateX: 10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 5,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
}

// Stagger animation for children
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Fade in up animation
export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

// Scale animation for hover effects
export const scaleHover = {
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2 }
  },
  tap: { 
    scale: 0.95 
  }
} 