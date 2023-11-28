export const modalMenuBackground = {
  initial: {
    clipPath: 'circle(40px at 100% 0)',
  },
  animate: {
    clipPath: `circle(${
      (window ? window.innerHeight : 1000) * 2 + 200
    }px at 100% 0)`,
    transition: {
      type: 'spring',
      stiffness: 80,
      restDelta: 2,
    },
  },
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
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.4,
      delay: 0.4,
    },
  },
  exit: {
    opacity: 0,
  },
};
