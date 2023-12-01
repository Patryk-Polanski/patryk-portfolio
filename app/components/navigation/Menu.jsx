'use client';

import { motion as m } from 'framer-motion';

import { menuLinkWave } from '@/app/utils/motion/menuLinks/animations';

import LinkHome from '../ui/svg/LinkHome';
import LinkPortfolio from '../ui/svg/LinkPortfolio';
import LinkTechStack from '../ui/svg/LinkTechStack';
import LinkExperience from '../ui/svg/LinkExperience';
import LinkAbout from '../ui/svg/LinkAbout';

import styles from './Menu.module.css';

const links = [
  {
    name: 'Home',
    id: 'homePath',
    elementActive: <LinkHome id='homePath' />,
    element: <LinkHome />,
  },
  {
    name: 'Portfolio',
    id: 'portfolioPath',
    elementActive: <LinkPortfolio id='portfolioPath' />,
    element: <LinkPortfolio />,
  },
  {
    name: 'Tech-Stack',
    id: 'techStackPath',
    elementActive: <LinkTechStack id='techStackPath' />,
    element: <LinkTechStack />,
  },
  {
    name: 'Experience',
    id: 'experiencePath',
    elementActive: <LinkExperience id='experiencePath' />,
    element: <LinkExperience />,
  },
  {
    name: 'About',
    id: 'aboutPath',
    elementActive: <LinkAbout id='aboutPath' />,
    element: <LinkAbout />,
  },
];

export default function Menu({ onLinkClick, hash }) {
  const hashFormatted = hash ? hash.replace('#', '') : 'home';

  return (
    <nav className={`${styles.menu} menu`}>
      <ul>
        {links.map((link) => (
          <li key={link.name}>
            <a
              onClick={onLinkClick}
              className={`${styles.menuLink} ${
                link.name.toLocaleLowerCase() === hashFormatted &&
                styles.menuLinkActive
              }`}
              href={`#${link.name.toLowerCase().replace(' ', '-')}`}
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
              <div className={styles.menuLinkTextClipped}>
                {link.elementActive}
              </div>
              <m.div
                className={`${styles.menuImage} ${
                  link.name.toLocaleLowerCase() === hashFormatted &&
                  styles.menuImageVisible
                }`}
                style={{ clipPath: `url(#${link.id})` }}
                variants={menuLinkWave}
                initial='initial'
                animate={
                  link.name.toLocaleLowerCase() === hashFormatted
                    ? 'animate'
                    : {}
                }
                whileHover={
                  link.name.toLocaleLowerCase() !== hashFormatted ? 'hover' : {}
                }
                onPointerDownCapture={(e) => e.stopPropagation()}
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
