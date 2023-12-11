import React from 'react';

import ProjectHeader from './ProjectHeader';

export default function ProjectDetailsPage({ params }) {
  return (
    <>
      <ProjectHeader />
      <main></main>
      <p>This is projectDetailsPage: {params.projectSlug} </p>
    </>
  );
}
