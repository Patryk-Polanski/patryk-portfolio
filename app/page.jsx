import MenuTrigger from './components/ui/MenuTrigger';

import SectionHome from './sections/Home/Home';
import MobileHeader from './sections/Home/MobileHeader';
import Menu from './components/navigation/Menu';
import Logo from './components/ui/Logo';
import LandingImage from './sections/Home/LandingImage';
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
import FadeIn from './components/wrappers/FadeIn';

import styles from './homePage.module.css';

export default function HomePage() {
  return (
    <main>
      <MenuTrigger id='menu-trigger-observed' />
      <SectionHome>
        <MobileHeader />
        <Menu />

        <div className={styles.landingImageWrapper}>
          <LandingImage />
        </div>

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
          <DownArrow target='#portfolio' />
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

      <SectionPortfolio>
        <PortfolioCarousels />
      </SectionPortfolio>

      <SectionTechStack>
        <FadeIn direction='up'>
          <SkillsWrapper />
        </FadeIn>
      </SectionTechStack>

      <SectionExperience>
        <FadeIn direction='up'>
          <ExperienceCarousel />
        </FadeIn>
      </SectionExperience>

      <SectionAbout>
        <Description />
        <FadeIn direction='up'>
          <Testimonials />
        </FadeIn>
        <FadeIn direction='up'>
          <Social />
        </FadeIn>
      </SectionAbout>
    </main>
  );
}
