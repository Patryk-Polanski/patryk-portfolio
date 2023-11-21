import HorizontalLine from '@/app/components/decorative/HorizontalLine';

import styles from './Footer.module.css';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <HorizontalLine
        xTranslate={'-40'}
        yTranslate={'0'}
        left={'0'}
        top={'0'}
        height={'180'}
        width={'180'}
      />
      <small>
        © Copyright {currentYear} by Patryk Polanski | Built with Next.js 🔥
      </small>
    </footer>
  );
}
