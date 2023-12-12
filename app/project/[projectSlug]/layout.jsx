import MenuTrigger from '../../components/ui/MenuTrigger';
import ProjectNav from './ProjectNav';

export default function ProjectLayout({ children }) {
  return (
    <>
      <MenuTrigger />
      <ProjectNav />
      {children}
    </>
  );
}
