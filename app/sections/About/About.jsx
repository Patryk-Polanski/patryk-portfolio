'use client';

import { useSectionObserver } from '@/app/utils/hooks/useSectionObserver';

import LinkAbout from '@/app/components/ui/svg/LinkAbout';
import SectionHeading from '../../components/navigation/Heading';

export default function SectionAbout({ children, deviceType }) {
  const { sectionRef } = useSectionObserver();
  const svgId = 'aboutPathMenu';

  return (
    <section className='section wide-container' id='about' ref={sectionRef}>
      <SectionHeading
        title='Portfolio'
        svgId={svgId}
        deviceType={deviceType}
        element={<LinkAbout deviceType={deviceType} />}
        elementActive={<LinkAbout id={svgId} deviceType={deviceType} />}
      />
      {children}
    </section>
  );
}
