'use client';

import { useSectionObserver } from '@/app/utils/hooks/useSectionObserver';

import LinkExperience from '@/app/components/ui/svg/LinkExperience';
import SectionHeading from '../../components/navigation/Heading';

export default function SectionExperience({ children }) {
  const { sectionRef } = useSectionObserver();
  const svgId = 'experiencePathMenu';

  return (
    <section
      className='section wide-container'
      id='experience'
      ref={sectionRef}
    >
      <SectionHeading
        title='Portfolio'
        svgId={svgId}
        element={<LinkExperience />}
        elementActive={<LinkExperience id={svgId} />}
      />
      <div className='narrow-container'>{children}</div>
    </section>
  );
}
