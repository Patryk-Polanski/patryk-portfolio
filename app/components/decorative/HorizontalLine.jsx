'use client';

import { motion as m } from 'framer-motion';

import styles from './horizontalLine.module.css';

export default function HorizontalLine({
  xTranslate,
  yTranslate,
  left,
  right,
  top,
  bottom,
  height = '200',
  width = '200',
  delay = 2,
}) {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{
        delay: delay,
        duration: 1,
      }}
      className={`${styles.horizontalLine} horizontal-line`}
      style={{
        transform: `translateX(${xTranslate}vw) translateY(${yTranslate}vh)`,
        left: left || 'unset',
        right: right || 'unset',
        top: top || 'unset',
        bottom: bottom || 'unset',
        height: height + 'vw',
        width: width + 'vw',
      }}
    />
  );
}
