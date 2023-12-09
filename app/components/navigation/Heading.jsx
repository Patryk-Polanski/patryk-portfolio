'use client';

import { motion as m } from 'framer-motion';

import { useThemeContext } from '@/app/context/ThemeContext';

import { menuLinkWave } from '@/app/utils/motion/menuLinks/animations';

import styles from './Menu.module.css';

export default function SectionHeading({
  title,
  svgId,
  deviceType,
  element,
  elementActive,
}) {
  const { isDarkTheme } = useThemeContext();

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
          backgroundImage: isDarkTheme
            ? 'url(/wave-dark-theme.svg)'
            : 'url(/wave-light-theme.svg)',
          clipPath: `url(#${svgId})`,
        }}
        variants={menuLinkWave(deviceType)}
        initial='initial'
        animate={'animate'}
      />
    </h2>
  );
}
