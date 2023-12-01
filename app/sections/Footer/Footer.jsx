import HorizontalLine from '@/app/components/decorative/HorizontalLine';

import styles from './Footer.module.css';

export default function Footer({ children }) {
  return (
    <footer className={styles.footer}>
      <HorizontalLine
        xTranslate={'-40'}
        yTranslate={'5'}
        left={'0'}
        top={'0'}
        height={'180'}
        width={'180'}
      />
      {children}
    </footer>
  );
}
