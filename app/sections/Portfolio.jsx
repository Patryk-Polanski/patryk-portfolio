import SectionHeading from './Heading';

export default function SectionPortfolio({ children }) {
  return (
    <section className='section wide-container' id='portfolio'>
      <SectionHeading text='Portfolio' />
      {children}
    </section>
  );
}
