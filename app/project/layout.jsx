import MenuTrigger from '../components/ui/MenuTrigger';
import ProjectNav from './[projectSlug]/ProjectNav';

function ProjectLayout({ children }) {
  return (
    <div>
      <MenuTrigger />
      <ProjectNav />
      <main>{children}</main>
    </div>
  );
}

export default ProjectLayout;
