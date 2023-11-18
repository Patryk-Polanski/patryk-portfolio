import SectionHeading from '../Heading';

export default function SectionAbout({ children }) {
  return (
    <section className='section wide-container' id='about'>
      <SectionHeading text='About' />
      {children}
    </section>
  );
}
