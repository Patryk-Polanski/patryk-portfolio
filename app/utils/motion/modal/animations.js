export const modalContactBackdrop = {
  initial: {
    clipPath: 'circle(0px at 50% 50%)',
  },
  animate: (windowSize) => ({
    clipPath: `circle(${windowSize + 300}px at 50% 50%)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  exit: {
    clipPath: 'circle(0px at 50% 50%)',
    transition: {
      delay: 0.2,
      type: 'spring',
      stiffness: 200,
      damping: 40,
    },
  },
};

export const modalContactBoxBackground = {
  initial: {
    clipPath: 'circle(0px at 50% 50%)',
  },
  animate: (windowSize) => ({
    clipPath: `circle(${windowSize + 300}px at 50% 50%)`,
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 10,
      restDelta: 2,
    },
  }),
  exit: {
    clipPath: 'circle(0px at 50% 50%)',
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 40,
    },
  },
};

export const modalContactContent = {
  initial: {
    position: 'relative',
    transform: 'translateY(2rem)',
    opacity: 0,
  },
  animate: (customDelay = 1) => ({
    transform: 'translateY(0)',
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: customDelay,
    },
  }),
  exit: (customDelay = 1) => ({
    transform: 'translateY(2rem)',
    opacity: 0,
    transition: {
      duration: 0.4,
      delay: customDelay * 0.1,
    },
  }),
};

export const modalContactMessage = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.4,
    },
  },
};

export const modalGalleryBackdrop = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 0.4,
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.2,
    },
  },
};

export const modalGallerySlides = {
  initial: {
    opacity: 0,
    transform: 'translateY(4rem)',
  },
  animate: {
    opacity: 1,
    transform: 'translateY(0)',
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transform: 'translateY(4rem)',
  },
};

export const modalGalleryClose = {
  initial: {
    transform: 'translateX(12rem) rotateZ(90deg)',
  },
  animate: {
    transform: 'translateX(0) rotateZ(0deg)',
    transition: {
      delay: 0.4,
      duration: 0.4,
    },
  },
  exit: {
    transform: 'translateX(12rem) rotateZ(90deg)',
    transition: {
      delay: 0.1,
      duration: 0.4,
    },
  },
};
