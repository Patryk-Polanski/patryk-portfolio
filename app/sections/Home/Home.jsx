import HorizontalLine from '../../components/decorative/HorizontalLine';

export default function SectionHome({ children }) {
  return (
    <section id='home'>
      <HorizontalLine
        xTranslate={'-30'}
        yTranslate={'12'}
        left={'0'}
        top={'0'}
        height={'180'}
        width={'180'}
      />
      <HorizontalLine
        xTranslate={'-5'}
        yTranslate={'-10'}
        right={'0'}
        bottom={'0'}
        height={'140'}
        width={'140'}
      />
      <div className='section wide-container'>{children}</div>
    </section>
  );
}
