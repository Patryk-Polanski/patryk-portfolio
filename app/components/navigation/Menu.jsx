'use client';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

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

export default function Menu({ onLinkClick }) {
  const searchParams = useSearchParams();

  console.log(searchParams);
  return (
    <nav className={styles.menu}>
      <ul>
        {links.map((link) => (
          <li key={link.name}>
            <a
              onClick={onLinkClick}
              className={`${styles.menuLink} ${
                link.name.toLocaleLowerCase() === 'portfolio' &&
                styles.menuLinkActive
              }`}
              // className={`d1 outlined-text ${
              //   link.toLocaleLowerCase() === 'home'
              //     ? 'outlined-text--active'
              //     : ''
              // }`}
              href={`#${link.name.toLowerCase().replace(' ', '-')}`}
            >
              <span className='visually-hidden'>{link.name}</span>
              {link.element}
              {link.elementActive}
              {link.name.toLocaleLowerCase() === 'portfolio' && (
                <div
                  className={styles.menuImage}
                  style={{ clipPath: `url(#${link.id})` }}
                />
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
