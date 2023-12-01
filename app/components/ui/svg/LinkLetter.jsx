import React from 'react';
import { motion as m } from 'framer-motion';

export default function LinkLetter({ index, path }) {
  return (
    <m.path
      key={index}
      d={path}
      stroke='currentColor'
      strokeWidth='1.5'
      initial={{
        strokeDashoffset: 500,
        strokeDasharray: 500,
        strokeLinecap: 'round',
      }}
      animate={{
        strokeDashoffset: 0,
      }}
      transition={{
        delay: 1 + index / 4,
        duration: 6,
      }}
    />
  );
}
