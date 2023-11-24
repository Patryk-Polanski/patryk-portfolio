import HorizontalLine from '../decorative/HorizontalLine';
import Menu from '../navigation/Menu';
import Social from '../ui/Social';

import styles from './MenuModal.module.css';

export default function MenuModal() {
  return (
    <div
      className={`wide-container ${styles.menuModal}`}
      style={{ backgroundImage: 'url(/texture.jpg)' }}
    >
      <HorizontalLine
        xTranslate={'20'}
        yTranslate={'-20'}
        left={'0'}
        bottom={'0'}
        height={'120'}
        width={'120'}
      />
      <Menu />
      <Social className={styles.menuModalSocial} />
    </div>
  );
}
