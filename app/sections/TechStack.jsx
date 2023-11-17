import SectionHeading from './Heading';

export default function SectionTechStack({ children }) {
  return (
    <section className='section' id='tech-stack'>
      <SectionHeading text='Tech Stack' />
      {children}
    </section>
  );
}
