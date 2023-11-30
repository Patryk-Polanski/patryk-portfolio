'use client';

import React from 'react';
import { motion as m } from 'framer-motion';

import {
  fadeIn,
  fadeInProps,
  shiftProps,
} from '@/app/utils/motion/shared/animations';

export default function FadeIn({
  children,
  direction,
  className,
  inView = true,
  delay,
  startingCoords,
  finalCoords,
}) {
  const animProps = inView ? fadeInProps : shiftProps;
  return (
    <m.div
      className={className}
      variants={fadeIn(direction, delay, finalCoords, startingCoords)}
      {...animProps}
    >
      {children}
    </m.div>
  );
}
