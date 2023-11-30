import dynamic from 'next/dynamic';

import SectionHome from './sections/Home/Home';
import Menu from './components/navigation/Menu';
import Logo from './components/ui/Logo';
import Profile from './sections/Home/Profile';
import Social from './components/ui/Social';
import DownArrow from './sections/Home/DownArrow';
import CircularIcon from './sections/Home/CircularIcon';

import SectionPortfolio from './sections/Portfolio/Portfolio';
import PortfolioCarousels from './sections/Portfolio/PortfolioCarousels';

import SectionTechStack from './sections/TechStack/TechStack';
const DynamicSkillsGraph = dynamic(
  () => import('./sections/TechStack/SkillsGraph'),
  { ssr: false }
); // window not defined errors in the library
import SkillsGraphImages from './sections/TechStack/SkillsGraphImages';

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
  return (
    <main>
      <SectionHome>
        <Menu />
        <FadeIn
          direction='down'
          className={styles.logoWrapper}
          inView={false}
          delay={2}
          startingCoords={{ x: '-50%', y: '0' }}
          finalCoords={{ x: '-50%', y: '-50%' }}
        >
          <Logo />
        </FadeIn>

        <FadeIn
          direction='up'
          className={styles.profileWrapper}
          inView={false}
          delay={2}
          startingCoords={{ x: '-50%', y: '-50%' }}
          finalCoords={{ x: '-50%', y: '-50%' }}
        >
          <Profile />
        </FadeIn>

        <FadeIn
          direction='down'
          className={styles.socialWrapper}
          inView={false}
          delay={2}
        >
          <Social />
        </FadeIn>

        <FadeIn
          direction='right'
          className={styles.arrowWrapper}
          inView={false}
          delay={2}
        >
          <DownArrow />
        </FadeIn>

        <FadeIn
          direction='left'
          className={styles.contactWrapper}
          inView={false}
          delay={2}
        >
          <CircularIcon />
        </FadeIn>
      </SectionHome>

      <SectionPortfolio>
        <FadeIn direction='up'>
          <PortfolioCarousels />
        </FadeIn>
      </SectionPortfolio>

      <SectionTechStack>
        <FadeIn direction='up'>
          <DynamicSkillsGraph />
          <SkillsGraphImages />
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

      <Footer>
        <Copyright />
        <CircularIcon />
      </Footer>
    </main>
  );
}
