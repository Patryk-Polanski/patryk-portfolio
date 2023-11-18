import SectionHome from './sections/Home/Home';
import Menu from './components/navigation/Menu';
import Logo from './components/ui/Logo';

import SectionPortfolio from './sections/Portfolio/Portfolio';
import SectionTechStack from './sections/TechStack/TechStack';
import SectionExperience from './sections/Experience/Experience';
import SectionAbout from './sections/About/About';
import Profile from './sections/Home/Profile';
import Social from './components/ui/Social';
import DownArrow from './sections/Home/DownArrow';

export default function Home() {
  return (
    <main>
      <SectionHome>
        <Menu />
        <Logo />
        <Profile />
        <Social position='top-right' />
        <DownArrow />
      </SectionHome>
      <SectionPortfolio></SectionPortfolio>
      <SectionTechStack></SectionTechStack>
      <SectionExperience></SectionExperience>
      <SectionAbout></SectionAbout>
    </main>
  );
}
