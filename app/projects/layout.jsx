import MenuTrigger from '../components/ui/MenuTrigger';
import ProjectNav from './[projectSlug]/ProjectNav';

function ProjectLayout({ children }) {
  return (
    <>
      <MenuTrigger />
      <ProjectNav />
      <main>{children}</main>
    </>
  );
}

export default ProjectLayout;
