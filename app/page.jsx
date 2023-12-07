'use client';

import { useState, useEffect } from 'react';

import { debounceFunction } from './utils/helpers';

import MenuTrigger from './components/ui/MenuTrigger';

import SectionHome from './sections/Home/Home';
import MobileHeader from './sections/Home/MobileHeader';
import Menu from './components/navigation/Menu';
import Logo from './components/ui/Logo';
import Profile from './sections/Home/Profile';
import Social from './components/ui/Social';
import DownArrow from './sections/Home/DownArrow';
import CircularIcon from './sections/Home/CircularIcon';

import SectionPortfolio from './sections/Portfolio/Portfolio';
import PortfolioCarousels from './sections/Portfolio/PortfolioCarousels';

import SectionTechStack from './sections/TechStack/TechStack';
import SkillsWrapper from './sections/TechStack/SkillsWrapper';

import SectionExperience from './sections/Experience/Experience';
import ExperienceCarousel from './sections/Experience/ExperienceCarousel';

import SectionAbout from './sections/About/About';
import Description from './sections/About/Description';
import Testimonials from './sections/About/Testimonials';

import Footer from './sections/Footer/Footer';
import Copyright from './sections/Footer/Copyright';
import FadeIn from './components/wrappers/FadeIn';

import styles from './homePage.module.css';

export default function Home() {
  const [menuLinkSize, setMenuLinkSize] = useState('desktop');

  useEffect(() => {
    setMenuLinkSize(
      window.innerWidth > 1199
        ? 'desktop'
        : window.innerWidth > 499
        ? 'tablet'
        : 'mobile'
    );

    const checkWindowSize = () => {
      if (window.innerWidth > 1199) {
        if (menuLinkSize === 'desktop') return;
        setMenuLinkSize('desktop');
      } else if (window.innerWidth > 499) {
        if (menuLinkSize === 'tablet') return;
        setMenuLinkSize('tablet');
      } else if (window.innerWidth < 500) {
        if (menuLinkSize === 'mobile') return;
        setMenuLinkSize('mobile');
      }
    };

    const debounce = debounceFunction(checkWindowSize, 500);
    window.addEventListener('resize', debounce);

    return () => window.removeEventListener('resize', checkWindowSize);
  }, [menuLinkSize]);

  return (
    <main>
      <MenuTrigger menuLinkSize={menuLinkSize} />
      <SectionHome>
        <MobileHeader />

        <Menu menuLinkSize={menuLinkSize} />

        <FadeIn
          direction='down'
          className={styles.logoWrapper}
          inView={false}
          delay={2.5}
          startingCoords={{ x: '-50%', y: '0' }}
          finalCoords={{ x: '-50%', y: '-50%' }}
        >
          <Logo />
        </FadeIn>

        <FadeIn
          direction='up'
          className={styles.profileWrapper}
          inView={false}
          delay={2.5}
          startingCoords={{ x: '-50%', y: '-50%' }}
          finalCoords={{ x: '-50%', y: '-50%' }}
        >
          <Profile />
        </FadeIn>

        <FadeIn
          direction='down'
          className={styles.socialWrapper}
          inView={false}
          delay={2.5}
        >
          <Social />
        </FadeIn>

        <FadeIn
          direction='right'
          className={styles.arrowWrapper}
          inView={false}
          delay={2.5}
        >
          <DownArrow />
        </FadeIn>

        <FadeIn
          direction='left'
          className={styles.contactWrapper}
          inView={false}
          delay={2.5}
        >
          <CircularIcon />
        </FadeIn>
      </SectionHome>

      <SectionPortfolio menuLinkSize={menuLinkSize}>
        <PortfolioCarousels />
      </SectionPortfolio>

      <SectionTechStack menuLinkSize={menuLinkSize}>
        <FadeIn direction='up'>
          <SkillsWrapper />
        </FadeIn>
      </SectionTechStack>

      <SectionExperience menuLinkSize={menuLinkSize}>
        <FadeIn direction='up'>
          <ExperienceCarousel />
        </FadeIn>
      </SectionExperience>

      <SectionAbout menuLinkSize={menuLinkSize}>
        <Description />
        <FadeIn direction='up'>
          <Testimonials />
        </FadeIn>
        <FadeIn direction='up'>
          <Social />
        </FadeIn>
      </SectionAbout>

      <Footer>
        <FadeIn direction='down'>
          <Copyright />
        </FadeIn>
        <FadeIn direction='left' className={styles.contactWrapper}>
          <CircularIcon />
        </FadeIn>
      </Footer>
    </main>
  );
}
