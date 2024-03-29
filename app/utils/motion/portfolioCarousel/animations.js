export const portfolioThumbs = (stagger = 0.4) => {
  return {
    hidden: {
      x: 80,
      y: 0,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1,
        ease: [0.25, 0.6, 0.3, 0.8],
        staggerChildren: stagger,
        delayChildren: 0.2,
      },
    },
  };
};
