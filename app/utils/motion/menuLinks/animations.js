export const menuLinkWave = {
  initial: { backgroundPosition: '0px 120px' },
  animate: {
    backgroundPosition: [
      '-100px 120px',
      '-100px -80px',
      '3000px 120px',
      '-100px 120px',
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
      '-100px 120px',
      '-100px -80px',
      '3000px 120px',
      '-100px 120px',
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
