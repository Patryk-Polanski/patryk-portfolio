'use client';

import { useState } from 'react';
import { motion as m } from 'framer-motion';

import { menuLinkWave } from '@/app/utils/motion/menuLinks/animations';

import styles from './Menu.module.css';

export default function MenuLink({
  link,
  deviceType,
  onLinkClick,
  currentSectionFormatted,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li key={link.name}>
      <a
        onClick={onLinkClick}
        className={`${styles.menuLink} ${
          link.name.toLocaleLowerCase() === currentSectionFormatted &&
          styles.menuLinkActive
        }`}
        href={`#${link.name.toLowerCase().replace(' ', '-')}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className='visually-hidden'>{link.name}</span>
        <div
          className={`${styles.menuLinkText} ${
            link.name.toLocaleLowerCase() === currentSectionFormatted &&
            styles.menuLinkTextActive
          }`}
        >
          {link.element}
        </div>
        <m.div
          className={`${styles.menuImage} ${
            link.name.toLocaleLowerCase() === currentSectionFormatted &&
            styles.menuImageVisible
          } menuImage`}
          style={{
            backgroundImage: 'url(/wave.svg)',
            clipPath: `url(#${link.id})`,
          }}
          variants={menuLinkWave(deviceType)}
          initial='initial'
          animate={
            link.name.toLocaleLowerCase() === currentSectionFormatted
              ? 'animate'
              : isHovered
              ? 'hover'
              : 'hoverOut'
          }
        />
        <div className={styles.menuLinkTextClipped}>{link.elementActive}</div>
      </a>
    </li>
  );
}
