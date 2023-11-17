import SectionHeading from './Heading';

export default function SectionPortfolio({ children }) {
  return (
    <section className='section' id='portfolio'>
      <SectionHeading text='Portfolio' />
      {children}
    </section>
  );
}
