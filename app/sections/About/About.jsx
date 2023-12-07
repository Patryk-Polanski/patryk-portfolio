'use client';

import { useSectionObserver } from '@/app/utils/hooks/useSectionObserver';

import LinkAbout from '@/app/components/ui/svg/LinkAbout';
import SectionHeading from '../../components/navigation/Heading';

export default function SectionAbout({ children, menuLinkSize }) {
  const { sectionRef } = useSectionObserver();
  const svgId = 'aboutPathMenu';

  return (
    <section className='section wide-container' id='about' ref={sectionRef}>
      <SectionHeading
        title='Portfolio'
        svgId={svgId}
        menuLinkSize={menuLinkSize}
        element={<LinkAbout menuLinkSize={menuLinkSize} />}
        elementActive={<LinkAbout id={svgId} menuLinkSize={menuLinkSize} />}
      />
      {children}
    </section>
  );
}
