'use client';

import { motion as m } from 'framer-motion';

import { menuLinkWave } from '@/app/utils/motion/menuLinks/animations';

import styles from './Menu.module.css';

export default function SectionHeading({
  title,
  svgId,
  deviceType,
  element,
  elementActive,
}) {
  return (
    <h2 className={`${styles.menuLink} ${styles.menuLinkActive}`}>
      <span className='visually-hidden'>{title}</span>
      <div className={`${styles.menuLinkText} ${styles.menuLinkTextActive}`}>
        {element}
      </div>
      <div className={styles.menuLinkTextClipped}>{elementActive}</div>
      <m.div
        className={`${styles.menuImage} ${styles.menuImageVisible}`}
        style={{
          backgroundImage: 'url(/wave.svg)',
          clipPath: `url(#${svgId})`,
        }}
        variants={menuLinkWave(deviceType)}
        initial='initial'
        animate={'animate'}
      />
    </h2>
  );
}
