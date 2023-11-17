import SectionHeading from './Heading';

export default function SectionAbout({ children }) {
  return (
    <section className='section' id='about'>
      <SectionHeading text='About' />
      {children}
    </section>
  );
}
