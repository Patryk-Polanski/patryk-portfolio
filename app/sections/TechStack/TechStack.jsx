'use client';

import { useSectionObserver } from '@/app/utils/hooks/useSectionObserver';
import { useResponsiveContext } from '@/app/context/ResponsiveContext';

import LinkTechStack from '@/app/components/ui/svg/LinkTechStack';
import SectionHeading from '../../components/navigation/SectionHeading';

export default function SectionTechStack({ children }) {
  const { deviceType } = useResponsiveContext();
  const { sectionRef } = useSectionObserver();
  const svgId = 'techStackPathHeading';

  return (
    <section
      className='section wide-container'
      id='tech-stack'
      ref={sectionRef}
    >
      <SectionHeading
        title='Tech Stack'
        svgId={svgId}
        deviceType={deviceType}
        element={<LinkTechStack deviceType={deviceType} />}
        elementActive={<LinkTechStack id={svgId} deviceType={deviceType} />}
      />
      {children}
    </section>
  );
}
