import React from 'react';

import { getProject } from '@/app/utils/helpers';

import ProjectShowcase from './ProjectShowcase';
import ProjectTechStack from './ProjectTechStack';
import ProjectDescription from './ProjectDescription';
import ProjectGallery from './ProjectGallery';
import Footer from '../../sections/Footer/Footer';
import FadeIn from '../../components/wrappers/FadeIn';
import CircularIcon from '../../sections/Home/CircularIcon';
import Copyright from '../../sections/Footer/Copyright';

import styles from './ProjectPage.module.css';

export default function ProjectDetailsPage({ params }) {
  const { projectSlug } = params;
  const project = getProject(projectSlug);

  return (
    project && (
      <>
        <main>
          <ProjectShowcase slug={projectSlug} project={project} />
          <ProjectTechStack project={project} />
          <ProjectDescription project={project} />
          <ProjectGallery project={project} />
        </main>
        <Footer>
          <FadeIn direction='left' className={styles.contactWrapperFooter}>
            <CircularIcon />
          </FadeIn>
          <FadeIn direction='down'>
            <Copyright />
          </FadeIn>
        </Footer>
      </>
    )
  );
}