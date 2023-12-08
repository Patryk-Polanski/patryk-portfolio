'use client';

import { useSectionObserver } from '@/app/utils/hooks/useSectionObserver';

import LinkTechStack from '@/app/components/ui/svg/LinkTechStack';
import SectionHeading from '../../components/navigation/Heading';

export default function SectionTechStack({ children, deviceType }) {
  const { sectionRef } = useSectionObserver();
  const svgId = 'techStackPathMenu';

  return (
    <section
      className='section wide-container'
      id='tech-stack'
      ref={sectionRef}
    >
      <SectionHeading
        title='Portfolio'
        svgId={svgId}
        deviceType={deviceType}
        element={<LinkTechStack deviceType={deviceType} />}
        elementActive={<LinkTechStack id={svgId} deviceType={deviceType} />}
      />
      {children}
    </section>
  );
}
