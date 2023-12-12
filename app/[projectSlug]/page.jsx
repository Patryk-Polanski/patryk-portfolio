import React from 'react';

import ProjectHeader from './ProjectHeader';
import ProjectShowcase from './ProjectShowcase';
import ProjectDescription from './ProjectDescription';
import Footer from '../sections/Footer/Footer';
import FadeIn from '../components/wrappers/FadeIn';
import CircularIcon from '../sections/Home/CircularIcon';
import Copyright from '../sections/Footer/Copyright';

import styles from './ProjectPage.module.css';

export default function ProjectDetailsPage({ params }) {
  const { projectSlug } = params;
  return (
    <>
      <ProjectHeader />
      <main>
        <ProjectShowcase slug={projectSlug} />
        <ProjectDescription />
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
