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

export default function HomePage() {
  const [deviceType, setDeviceType] = useState('desktop');

  useEffect(() => {
    setDeviceType(
      window.innerWidth > 1199
        ? 'desktop'
        : window.innerWidth > 749
        ? 'tablet'
        : 'mobile'
    );

    const determineDevice = () => {
      if (window.innerWidth > 1199) {
        if (deviceType === 'desktop') return;
        setDeviceType('desktop');
      } else if (window.innerWidth > 749) {
        if (deviceType === 'tablet') return;
        setDeviceType('tablet');
      } else if (window.innerWidth < 750) {
        if (deviceType === 'mobile') return;
        setDeviceType('mobile');
      }
    };

    const debounce = debounceFunction(determineDevice, 500);
    window.addEventListener('resize', debounce);

    return () => window.removeEventListener('resize', determineDevice);
  }, [deviceType]);

  return (
    <main>
      <MenuTrigger deviceType={deviceType} id='menu-trigger-observed' />
      <SectionHome>
        <MobileHeader />

        <Menu deviceType={deviceType} />

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

      <SectionPortfolio deviceType={deviceType}>
        <PortfolioCarousels deviceType={deviceType} />
      </SectionPortfolio>

      <SectionTechStack deviceType={deviceType}>
        <FadeIn direction='up'>
          <SkillsWrapper deviceType={deviceType} />
        </FadeIn>
      </SectionTechStack>

      <SectionExperience deviceType={deviceType}>
        <FadeIn direction='up'>
          <ExperienceCarousel />
        </FadeIn>
      </SectionExperience>

      <SectionAbout deviceType={deviceType}>
        <Description />
        <FadeIn direction='up'>
          <Testimonials />
        </FadeIn>
        <FadeIn direction='up'>
          <Social />
        </FadeIn>
      </SectionAbout>

      <Footer>
        <FadeIn direction='left' className={styles.contactWrapperFooter}>
          <CircularIcon />
        </FadeIn>
        <FadeIn direction='down'>
          <Copyright />
        </FadeIn>
      </Footer>
    </main>
  );
}
