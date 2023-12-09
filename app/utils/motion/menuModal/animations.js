export const modalMenuBackground = {
  initial: {
    clipPath: 'circle(40px at 100% 0)',
  },
  animate: (windowSize) => ({
    clipPath: `circle(${windowSize + 400}px at 100% 0)`,
    transition: {
      type: 'spring',
      stiffness: 80,
      restDelta: 2,
    },
  }),
  exit: {
    clipPath: 'circle(40px at 100% 0)',
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 40,
    },
  },
};

export const modalMenuMarquee = {
  initial: {
    transform: 'translateX(calc(100% + 5rem))',
  },
  animate: {
    transform: 'translateX(0)',
    transition: {
      duration: 0.6,
      delay: 0.4,
    },
  },
  exit: {
    transform: 'translateX(calc(100% + 5rem))',
  },
};

export const modalMenuSocial = {
  initial: {
    transform: 'translateY(calc(100% + 5rem))',
  },
  animate: {
    transform: 'translateY(0)',
    transition: {
      duration: 0.3,
      delay: 0.6,
    },
  },
  exit: {
    transform: 'translateY(calc(100% + 5rem))',
  },
};

export const modalMenuLinks = {
  initial: {
    opacity: 0,
    transform: 'translateY(4rem)',
  },
  animate: {
    opacity: 1,
    transform: 'translateY(0)',
    transition: {
      duration: 1,
      delay: 0.4,
    },
  },
  exit: {
    opacity: 0,
    transform: 'translateY(4rem)',
  },
};

export const modalMenuLine = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, delay: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};
