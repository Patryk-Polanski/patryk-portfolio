'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

import { debounceFunction } from '@/app/utils/helpers';
import SkillsGraphIcons from './SkillsGraphIcons';
import SkillsList from './SkillsList';

const DynamicSkillsGraph = dynamic(() => import('./SkillsGraph'), {
  ssr: false,
}); // window not defined errors in the library

export default function SkillsWrapper() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const checkWindowSize = () => {
      setWindowWidth(window.innerWidth);
    };
    const debounce = debounceFunction(checkWindowSize, 500);
    window.addEventListener('resize', debounce);

    return () => window.removeEventListener('resize', checkWindowSize);
  }, []);

  return windowWidth < 990 ? (
    <SkillsList />
  ) : (
    <>
      <SkillsGraphIcons />
      <DynamicSkillsGraph />
    </>
  );
}
