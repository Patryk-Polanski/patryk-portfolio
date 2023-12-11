import React from 'react';

import FadeIn from '../components/wrappers/FadeIn';
import CircularIcon from '../sections/Home/CircularIcon';
import Logo from '../components/ui/Logo';
import MenuTrigger from '../components/ui/MenuTrigger';

import styles from './ProjectHeader.module.css';

export default function ProjectHeader() {
  return (
    <header className={`section wide-container ${styles.projectHeader}`}>
      <FadeIn
        direction='right'
        className={styles.contactWrapper}
        inView={false}
        delay={1}
      >
        <CircularIcon />
      </FadeIn>
      <FadeIn
        direction='down'
        className={styles.logoWrapper}
        inView={false}
        delay={1}
      >
        <Logo />
      </FadeIn>
      <MenuTrigger />
    </header>
  );
}
