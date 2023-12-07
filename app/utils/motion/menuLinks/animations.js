export const menuLinkWave = (svgVariant) => {
  const startingPosition =
    svgVariant === 'desktop'
      ? '-100px 120px'
      : svgVariant === 'tablet'
      ? '-80px 96px'
      : '-64px 72px';
  const middlePosition =
    svgVariant === 'desktop'
      ? '-100px -80px'
      : svgVariant === 'tablet'
      ? '-80px -64px'
      : '-64px -52px';
  const finalPosition =
    svgVariant === 'desktop'
      ? '3000px 120px'
      : svgVariant === 'tablet'
      ? '2400px 96px'
      : '1900px 78px';

  return {
    initial: { backgroundPosition: '0px 120px' },
    animate: {
      backgroundPosition: [
        startingPosition,
        middlePosition,
        finalPosition,
        startingPosition,
      ],
      transition: {
        duration: 18,
        delay: 3.2,
        repeat: Infinity,
        times: [0, 0.2, 0.92, 1],
      },
    },
    hover: {
      backgroundPosition: [
        startingPosition,
        middlePosition,
        finalPosition,
        startingPosition,
      ],
      transition: {
        duration: 18,
        delay: 0,
        repeat: Infinity,
        times: [0, 0.2, 0.92, 1],
      },
    },
    hoverOut: {
      backgroundPosition: '-100px 120px',
      transition: {
        duration: 2,
      },
    },
  };
};
