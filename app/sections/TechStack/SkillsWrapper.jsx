'use client';

import dynamic from 'next/dynamic';

import SkillsGraphIcons from './SkillsGraphIcons';
import SkillsList from './SkillsList';

const DynamicSkillsGraph = dynamic(() => import('./SkillsGraph'), {
  ssr: false,
}); // window not defined errors in the library

export default function SkillsWrapper({ deviceType }) {
  return deviceType !== 'desktop' ? (
    <SkillsList />
  ) : (
    <>
      <SkillsGraphIcons />
      <DynamicSkillsGraph />
    </>
  );
}
