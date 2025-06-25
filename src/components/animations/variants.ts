export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

export const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
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

export const wordVariants = {
  hidden: { 
    opacity: 0.1,
    filter: 'blur(2px)'
  },
  visible: { 
    opacity: 1,
    filter: 'blur(0px)',
    transition: { 
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

export const badgeVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    filter: 'blur(4px)'
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { 
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

export const buttonVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.9,
    filter: 'blur(4px)'
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { 
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 }
  }
};

export const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95,
    filter: 'blur(4px)'
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { 
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1]
    }
  },
  hover: {
    scale: 1.02,
    y: -5,
    transition: { 
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};
