'use client';

import { useSectionObserver } from '@/app/utils/hooks/useSectionObserver';

import LinkPortfolio from '@/app/components/ui/svg/LinkPortfolio';
import SectionHeading from '../../components/navigation/Heading';

export default function SectionPortfolio({ children }) {
  const { sectionRef } = useSectionObserver();
  const svgId = 'portfolioPathMenu';

  return (
    <section className='section wide-container' id='portfolio' ref={sectionRef}>
      <SectionHeading
        title='Portfolio'
        svgId={svgId}
        element={<LinkPortfolio />}
        elementActive={<LinkPortfolio id={svgId} />}
      />
      {children}
    </section>
  );
}
