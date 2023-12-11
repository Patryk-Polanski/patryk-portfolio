import React from 'react';

import ProjectHeader from './ProjectHeader';
import ProjectShowcase from './ProjectShowcase';

export default function ProjectDetailsPage({ params }) {
  const { projectSlug } = params;
  return (
    <>
      <ProjectHeader />
      <main>
        <ProjectShowcase slug={projectSlug} />
      </main>
      <p>This is projectDetailsPage: {projectSlug} </p>
    </>
  );
}
