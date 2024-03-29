'use client';

import { useSectionObserver } from '@/app/utils/hooks/useSectionObserver';
import { useResponsiveContext } from '@/app/context/ResponsiveContext';

import LinkAbout from '@/app/components/ui/svg/LinkAbout';
import SectionHeading from '../../components/navigation/SectionHeading';

export default function SectionAbout({ children }) {
  const { deviceType } = useResponsiveContext();
  const { sectionRef } = useSectionObserver();
  const svgId = 'aboutPathHeading';

  return (
    <section className='section wide-container' id='about' ref={sectionRef}>
      <SectionHeading
        title='About'
        svgId={svgId}
        deviceType={deviceType}
        element={<LinkAbout deviceType={deviceType} />}
        elementActive={<LinkAbout id={svgId} deviceType={deviceType} />}
      />
      {children}
    </section>
  );
}
