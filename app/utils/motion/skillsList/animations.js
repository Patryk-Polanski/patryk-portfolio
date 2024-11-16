export const skillsListAnim = {
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 0.4 },
  },
};

export const skillAnim = {
  initial: { scale: 0, rotate: 360 },
  visible: {
    rotate: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 40,
    },
  },
};
