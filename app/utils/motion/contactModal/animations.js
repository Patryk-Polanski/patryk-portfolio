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
