export const genericAnimProps = {
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
};

export const fadeInProps = {
  initial: 'hidden',
  whileInView: 'visible',
  // viewport: { once: true },
};

export const shiftProps = {
  initial: 'hidden',
  animate: 'visible',
};

/* starting and final coords are sometimes needed for absolutely positioned elements */
export const fadeIn = (
  direction,
  delay = 0.2,
  startingCoords = {},
  finalCoords = {}
) => {
  return {
    hidden: {
      x:
        direction === 'left'
          ? 80
          : direction === 'right'
          ? -80
          : startingCoords.x || 0,
      y:
        direction === 'up'
          ? 80
          : direction === 'down'
          ? -80
          : startingCoords.y || 0,
      opacity: 0,
      transition: {
        type: 'tween',
        duration: 1.5,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    visible: {
      x: finalCoords.x || 0,
      y: finalCoords.y || 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.4,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
