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

export default function Home() {
  return (
    <main>
      <SectionHome>
        <Menu />
        <Logo />
        <Profile />
        <Social />
        <DownArrow />
        <CircularIcon />
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
