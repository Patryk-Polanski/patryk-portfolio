'use client';

import Image from 'next/image';

import { motion as m } from 'framer-motion';

const imageAnimations = {
  initial: {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
  },
  animate: {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    transition: { delay: 4, type: 'spring', stiffness: 20 },
  },
};

export default function LandingImage() {
  return (
    <m.div variants={imageAnimations} initial='initial' animate='animate'>
      <Image
        src='/patryk/patryk-dark.jpg'
        width='550'
        height='733'
        alt='Patryk Polanski image'
        priority={true}
      />
    </m.div>
  );
}
