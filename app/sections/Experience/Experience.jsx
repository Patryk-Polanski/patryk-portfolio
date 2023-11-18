import SectionHeading from '../Heading';

export default function SectionExperience({ children }) {
  return (
    <section className='section wide-container' id='experience'>
      <SectionHeading text='Experience' />
      <div className='narrow-container'>{children}</div>
    </section>
  );
}
