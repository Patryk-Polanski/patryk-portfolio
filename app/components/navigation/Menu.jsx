'use client';

import LinkHome from '../ui/svg/LinkHome';
import LinkPortfolio from '../ui/svg/LinkPortfolio';
import LinkTechStack from '../ui/svg/LinkTechStack';
import LinkExperience from '../ui/svg/LinkExperience';
import LinkAbout from '../ui/svg/LinkAbout';

import styles from './Menu.module.css';
import MenuLink from './MenuLink';

export default function Menu({ onLinkClick, currentSection, deviceType }) {
  const links = [
    {
      name: 'Home',
      id: 'homePath',
      elementActive: <LinkHome id='homePath' deviceType={deviceType} />,
      element: <LinkHome deviceType={deviceType} />,
    },
    {
      name: 'Portfolio',
      id: 'portfolioPath',
      elementActive: (
        <LinkPortfolio id='portfolioPath' deviceType={deviceType} />
      ),
      element: <LinkPortfolio deviceType={deviceType} />,
    },
    {
      name: 'Tech-Stack',
      id: 'techStackPath',
      elementActive: (
        <LinkTechStack id='techStackPath' deviceType={deviceType} />
      ),
      element: <LinkTechStack deviceType={deviceType} />,
    },
    {
      name: 'Experience',
      id: 'experiencePath',
      elementActive: (
        <LinkExperience id='experiencePath' deviceType={deviceType} />
      ),
      element: <LinkExperience deviceType={deviceType} />,
    },
    {
      name: 'About',
      id: 'aboutPath',
      elementActive: <LinkAbout id='aboutPath' deviceType={deviceType} />,
      element: <LinkAbout deviceType={deviceType} />,
    },
  ];

  const currentSectionFormatted = currentSection
    ? currentSection.replace('#', '')
    : 'home';

  return (
    <header className={styles.menuHeader}>
      <nav className={`${styles.menu} menu`}>
        <ul>
          {links.map((link) => (
            <MenuLink
              key={link.name}
              deviceType={deviceType}
              link={link}
              onLinkClick={onLinkClick}
              currentSectionFormatted={currentSectionFormatted}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
}
