import SectionHeading from './Heading';

export default function SectionExperience({ children }) {
  return (
    <section className='section' id='experience'>
      <SectionHeading text='Experience' />
      {children}
    </section>
  );
}
