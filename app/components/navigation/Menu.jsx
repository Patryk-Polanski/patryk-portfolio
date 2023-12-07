'use client';

import { useState, useEffect } from 'react';

import { debounceFunction } from '@/app/utils/helpers';

import LinkHome from '../ui/svg/LinkHome';
import LinkPortfolio from '../ui/svg/LinkPortfolio';
import LinkTechStack from '../ui/svg/LinkTechStack';
import LinkExperience from '../ui/svg/LinkExperience';
import LinkAbout from '../ui/svg/LinkAbout';

import styles from './Menu.module.css';
import MenuLink from './MenuLink';

export default function Menu({ onLinkClick, currentSection, menuLinkSize }) {
  const links = [
    {
      name: 'Home',
      id: 'homePath',
      elementActive: <LinkHome id='homePath' menuLinkSize={menuLinkSize} />,
      element: <LinkHome menuLinkSize={menuLinkSize} />,
    },
    {
      name: 'Portfolio',
      id: 'portfolioPath',
      elementActive: (
        <LinkPortfolio id='portfolioPath' menuLinkSize={menuLinkSize} />
      ),
      element: <LinkPortfolio menuLinkSize={menuLinkSize} />,
    },
    {
      name: 'Tech-Stack',
      id: 'techStackPath',
      elementActive: (
        <LinkTechStack id='techStackPath' menuLinkSize={menuLinkSize} />
      ),
      element: <LinkTechStack menuLinkSize={menuLinkSize} />,
    },
    {
      name: 'Experience',
      id: 'experiencePath',
      elementActive: (
        <LinkExperience id='experiencePath' menuLinkSize={menuLinkSize} />
      ),
      element: <LinkExperience menuLinkSize={menuLinkSize} />,
    },
    {
      name: 'About',
      id: 'aboutPath',
      elementActive: <LinkAbout id='aboutPath' menuLinkSize={menuLinkSize} />,
      element: <LinkAbout menuLinkSize={menuLinkSize} />,
    },
  ];

  const currentSectionFormatted = currentSection
    ? currentSection.replace('#', '')
    : 'home';

  return (
    <header>
      <nav className={`${styles.menu} menu`}>
        <ul>
          {links.map((link) => (
            <MenuLink
              key={link.name}
              menuLinkSize={menuLinkSize}
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
