import React from 'react';

import MenuTrigger from '../components/ui/MenuTrigger';

import styles from './ProjectHeader.module.css';

export default function ProjectHeader() {
  return (
    <header className={`wide-container ${styles.projectHeader}`}>
      <MenuTrigger />
    </header>
  );
}
