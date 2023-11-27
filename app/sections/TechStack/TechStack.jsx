import LinkTechStack from '@/app/components/ui/svg/LinkTechStack';
import SectionHeading from '../../components/navigation/Heading';

export default function SectionTechStack({ children }) {
  const svgId = 'techStackPathMenu';
  return (
    <section className='section wide-container' id='tech-stack'>
      <SectionHeading
        title='Portfolio'
        svgId={svgId}
        element={<LinkTechStack />}
        elementActive={<LinkTechStack id={svgId} />}
      />
      {children}
    </section>
  );
}
