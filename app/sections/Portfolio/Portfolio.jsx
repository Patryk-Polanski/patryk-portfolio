'use client';

import { useSectionObserver } from '@/app/utils/hooks/useSectionObserver';
import { useResponsiveContext } from '@/app/context/ResponsiveContext';

import LinkPortfolio from '@/app/components/ui/svg/LinkPortfolio';
import SectionHeading from '../../components/navigation/SectionHeading';

export default function SectionPortfolio({ children }) {
  const { deviceType } = useResponsiveContext();
  const { sectionRef } = useSectionObserver();
  const svgId = 'portfolioPathHeading';

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
