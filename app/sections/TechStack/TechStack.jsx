'use client';

import { useSectionObserver } from '@/app/utils/hooks/useSectionObserver';

import LinkTechStack from '@/app/components/ui/svg/LinkTechStack';
import SectionHeading from '../../components/navigation/Heading';

export default function SectionTechStack({ children, menuLinkSize }) {
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
        menuLinkSize={menuLinkSize}
        element={<LinkTechStack menuLinkSize={menuLinkSize} />}
        elementActive={<LinkTechStack id={svgId} menuLinkSize={menuLinkSize} />}
      />
      {children}
    </section>
  );
}
