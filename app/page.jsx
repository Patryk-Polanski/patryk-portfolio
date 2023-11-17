import SectionHome from './sections/Home';
import Menu from './components/navigation/Menu';
import Logo from './components/ui/Logo';

import SectionPortfolio from './sections/Portfolio';
import SectionTechStack from './sections/TechStack';
import SectionExperience from './sections/Experience';
import SectionAbout from './sections/About';

export default function Home() {
  return (
    <main className='wide-container'>
      <SectionHome>
        <Menu />
        <Logo />
      </SectionHome>
      <SectionPortfolio></SectionPortfolio>
      <SectionTechStack></SectionTechStack>
      <SectionExperience></SectionExperience>
      <SectionAbout></SectionAbout>
    </main>
  );
}
