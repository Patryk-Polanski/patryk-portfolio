'use client';

import { useState } from 'react';
import { motion as m } from 'framer-motion';

import { menuLinkWave } from '@/app/utils/motion/menuLinks/animations';

import styles from './Menu.module.css';

export default function MenuLink({ link, onLinkClick, hashFormatted }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li key={link.name}>
      <a
        onClick={onLinkClick}
        className={`${styles.menuLink} ${
          link.name.toLocaleLowerCase() === hashFormatted &&
          styles.menuLinkActive
        }`}
        href={`#${link.name.toLowerCase().replace(' ', '-')}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className='visually-hidden'>{link.name}</span>
        <div
          className={`${styles.menuLinkText} ${
            link.name.toLocaleLowerCase() === hashFormatted &&
            styles.menuLinkTextActive
          }`}
        >
          {link.element}
        </div>
        <m.div
          className={`${styles.menuImage} ${
            link.name.toLocaleLowerCase() === hashFormatted &&
            styles.menuImageVisible
          } menuImage`}
          style={{ clipPath: `url(#${link.id})` }}
          variants={menuLinkWave}
          initial='initial'
          animate={
            link.name.toLocaleLowerCase() === hashFormatted
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
