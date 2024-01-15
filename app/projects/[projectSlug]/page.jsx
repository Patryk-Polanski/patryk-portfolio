'use client';

import { useState } from 'react';

import { getProject } from '@/app/utils/helpers';

import ProjectShowcase from './ProjectShowcase';
import ProjectTechStack from './ProjectTechStack';
import ProjectDescription from './ProjectDescription';
import ProjectGallery from './ProjectGallery';

// import { portfolioData } from '@/app/sections/Portfolio/PortfolioData';

import styles from './ProjectPage.module.css';

// export function generateStaticParams() {
//   return portfolioData.map((project) => ({
//     projectSlug: project.id,
//   }));
// }

export default function ProjectDetailsPage({ params }) {
  const { projectSlug } = params;
  const project = getProject(projectSlug);
  const [isShowcaseReady, setIsShowcaseReady] = useState(false);

  return project ? (
    <>
      <ProjectShowcase
        slug={projectSlug}
        project={project}
        toggleShowcaseState={setIsShowcaseReady}
      />
      <ProjectTechStack project={project} isShowcaseReady={isShowcaseReady} />
      <ProjectDescription project={project} isShowcaseReady={isShowcaseReady} />
      <ProjectGallery project={project} />
    </>
  ) : (
    <div className={styles.projectNotFound}>
      <p>The project could not be found.</p>
      <p>You can access all projects from the above menu.</p>
    </div>
  );
}
