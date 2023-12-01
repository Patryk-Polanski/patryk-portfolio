'use client';

import { motion } from 'framer-motion';

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
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 1.5,
      }}
      className={styles.horizontalLine}
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
