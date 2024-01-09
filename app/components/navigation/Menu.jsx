'use client';

import { useResponsiveContext } from '@/app/context/ResponsiveContext';

import LinkHome from '../ui/svg/LinkHome';
import LinkPortfolio from '../ui/svg/LinkPortfolio';
import LinkTechStack from '../ui/svg/LinkTechStack';
import LinkExperience from '../ui/svg/LinkExperience';
import LinkAbout from '../ui/svg/LinkAbout';

import styles from './Menu.module.css';
import MenuLink from './MenuLink';

export default function Menu({ onLinkClick, currentSection, idModifier = '' }) {
  const { deviceType } = useResponsiveContext();

  const links = [
    {
      name: 'Home',
      id: 'homePath' + idModifier,
      elementActive: (
        <LinkHome id={'homePath' + idModifier} deviceType={deviceType} />
      ),
      element: <LinkHome deviceType={deviceType} />,
    },
    {
      name: 'Portfolio',
      id: 'portfolioPath' + idModifier,
      elementActive: (
        <LinkPortfolio
          id={`portfolioPath` + idModifier}
          deviceType={deviceType}
        />
      ),
      element: <LinkPortfolio deviceType={deviceType} />,
    },
    {
      name: 'Tech-Stack',
      id: 'techStackPath' + idModifier,
      elementActive: (
        <LinkTechStack
          id={`techStackPath` + idModifier}
          deviceType={deviceType}
        />
      ),
      element: <LinkTechStack deviceType={deviceType} />,
    },
    {
      name: 'Experience',
      id: 'experiencePath' + idModifier,
      elementActive: (
        <LinkExperience
          id={`experiencePath` + idModifier}
          deviceType={deviceType}
        />
      ),
      element: <LinkExperience deviceType={deviceType} />,
    },
    {
      name: 'About',
      id: 'aboutPath' + idModifier,
      elementActive: (
        <LinkAbout id={`aboutPath` + idModifier} deviceType={deviceType} />
      ),
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
