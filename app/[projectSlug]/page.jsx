import React from 'react';

import MenuTrigger from '../components/ui/MenuTrigger';
import ProjectShowcase from './ProjectShowcase';
import ProjectNav from './ProjectNav';
import ProjectDescription from './ProjectDescription';
import ProjectGallery from './ProjectGallery';
import Footer from '../sections/Footer/Footer';
import FadeIn from '../components/wrappers/FadeIn';
import CircularIcon from '../sections/Home/CircularIcon';
import Copyright from '../sections/Footer/Copyright';

import styles from './ProjectPage.module.css';

export default function ProjectDetailsPage({ params }) {
  const { projectSlug } = params;
  return (
    <>
      <MenuTrigger />
      <main>
        <ProjectNav />
        <ProjectShowcase slug={projectSlug} />
        <ProjectDescription />
        <ProjectGallery />
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
  );
}
