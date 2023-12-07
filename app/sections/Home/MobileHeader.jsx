import Logo from '@/app/components/ui/Logo';
import Profile from './Profile';

import styles from './MobileHeader.module.css';
import FadeIn from '@/app/components/wrappers/FadeIn';

export default function MobileHeader() {
  return (
    <div className={styles.mobileHeader}>
      <FadeIn direction='right' inView={false} delay={2.5}>
        <Profile />
      </FadeIn>

      <FadeIn direction='left' inView={false} delay={2.5}>
        <Logo />
      </FadeIn>
    </div>
  );
}
