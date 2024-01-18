'use client';

import Image from 'next/image';
import { motion as m } from 'framer-motion';

import styles from './LandingImage.module.css';

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
    <m.div className={styles.landingImage}>
      <m.div variants={imageAnimations} initial='initial' animate='animate'>
        <Image
          src='/patryk/patryk-dark.webp'
          width='825'
          height='1100'
          alt='Patryk Polanski image'
          priority={true}
          quality={100}
        />
      </m.div>
      <m.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{
          delay: 5,
          duration: 1,
        }}
      />
      <m.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{
          delay: 5,
          duration: 1,
        }}
      />
    </m.div>
  );
}
