import React from 'react';
import { motion as m } from 'framer-motion';

export default function LinkLetter({ index, path }) {
  return (
    <m.path
      key={index}
      d={path}
      stroke='currentColor'
      fillRule='evenodd'
      clipRule='evenodd'
      className='link-letter'
      strokeWidth='2'
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
