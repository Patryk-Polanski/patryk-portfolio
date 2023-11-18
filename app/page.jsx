import SectionHome from './sections/Home';
import Menu from './components/navigation/Menu';
import Logo from './components/ui/Logo';

import SectionPortfolio from './sections/Portfolio';
import SectionTechStack from './sections/TechStack';
import SectionExperience from './sections/Experience';
import SectionAbout from './sections/About';
import Profile from './components/ui/Profile';
import Social from './components/ui/Social';

export default function Home() {
  return (
    <main>
      <SectionHome>
        <Menu />
        <Logo />
        <Profile />
        <Social position='top-right' />
      </SectionHome>
      <SectionPortfolio></SectionPortfolio>
      <SectionTechStack></SectionTechStack>
      <SectionExperience></SectionExperience>
      <SectionAbout></SectionAbout>
    </main>
  );
}
