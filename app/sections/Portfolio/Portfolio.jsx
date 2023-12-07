'use client';

import { useSectionObserver } from '@/app/utils/hooks/useSectionObserver';

import LinkPortfolio from '@/app/components/ui/svg/LinkPortfolio';
import SectionHeading from '../../components/navigation/Heading';

export default function SectionPortfolio({ children, menuLinkSize }) {
  const { sectionRef } = useSectionObserver();
  const svgId = 'portfolioPathMenu';

  return (
    <section className='section wide-container' id='portfolio' ref={sectionRef}>
      <SectionHeading
        title='Portfolio'
        svgId={svgId}
        menuLinkSize={menuLinkSize}
        element={<LinkPortfolio menuLinkSize={menuLinkSize} />}
        elementActive={<LinkPortfolio id={svgId} menuLinkSize={menuLinkSize} />}
      />
      {children}
    </section>
  );
}
