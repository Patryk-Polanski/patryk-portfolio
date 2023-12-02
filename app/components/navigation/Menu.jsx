'use client';

import LinkHome from '../ui/svg/LinkHome';
import LinkPortfolio from '../ui/svg/LinkPortfolio';
import LinkTechStack from '../ui/svg/LinkTechStack';
import LinkExperience from '../ui/svg/LinkExperience';
import LinkAbout from '../ui/svg/LinkAbout';

import styles from './Menu.module.css';
import MenuLink from './MenuLink';

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

export default function Menu({ onLinkClick, currentSection }) {
  const currentSectionFormatted = currentSection
    ? currentSection.replace('#', '')
    : 'home';

  return (
    <nav className={`${styles.menu} menu`}>
      <ul>
        {links.map((link) => (
          <MenuLink
            key={link.name}
            link={link}
            onLinkClick={onLinkClick}
            currentSectionFormatted={currentSectionFormatted}
          />
        ))}
      </ul>
    </nav>
  );
}
