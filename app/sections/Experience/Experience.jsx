import SectionHeading from '../Heading';

export default function SectionExperience({ children }) {
  return (
    <section className='section wide-container' id='experience'>
      <SectionHeading text='Experience' />
      {children}
    </section>
  );
}
