'use client';

import { useSectionObserver } from '@/app/utils/hooks/useSectionObserver';

import LinkPortfolio from '@/app/components/ui/svg/LinkPortfolio';
import SectionHeading from '../../components/navigation/Heading';

export default function SectionPortfolio({ children, deviceType }) {
  const { sectionRef } = useSectionObserver();
  const svgId = 'portfolioPathMenu';

  return (
    <section className='section wide-container' id='portfolio' ref={sectionRef}>
      <SectionHeading
        title='Portfolio'
        svgId={svgId}
        deviceType={deviceType}
        element={<LinkPortfolio deviceType={deviceType} />}
        elementActive={<LinkPortfolio id={svgId} deviceType={deviceType} />}
      />
      {children}
    </section>
  );
}
