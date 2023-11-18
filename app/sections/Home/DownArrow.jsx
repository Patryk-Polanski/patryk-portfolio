import ArrowDown from '@/app/components/ui/svg/ArrowDown';
import Button from '@/app/components/ui/Button';

import styles from './DownArrow.module.css';

export default function DownArrow() {
  return (
    <Button className={styles.downArrow} link='#portfolio'>
      <ArrowDown />
    </Button>
  );
}
