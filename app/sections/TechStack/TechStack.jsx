import SectionHeading from '../Heading';

export default function SectionTechStack({ children }) {
  return (
    <section className='section wide-container' id='tech-stack'>
      <SectionHeading text='Tech Stack' />
      {children}
    </section>
  );
}
