'use client';

import React from 'react';
import { motion as m } from 'framer-motion';

import { fadeIn, fadeInProps } from '@/app/utils/motion/shared/animations';

export default function FadeIn({ children, direction }) {
  return (
    <m.div variants={fadeIn(direction)} {...fadeInProps}>
      {children}
    </m.div>
  );
}
