import LinkPortfolio from '@/app/components/ui/svg/LinkPortfolio';
import SectionHeading from '../../components/navigation/Heading';

export default function SectionPortfolio({ children }) {
  const svgId = 'portfolioPathMenu';
  return (
    <section className='section wide-container' id='portfolio'>
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
