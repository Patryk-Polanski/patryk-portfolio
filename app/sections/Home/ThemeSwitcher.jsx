'use client';

import { useState } from 'react';

import ThemeLight from '@/app/components/ui/svg/ThemeLight';
import ThemeDark from '@/app/components/ui/svg/ThemeDark';
import ArrowRight from '@/app/components/ui/svg/ArrowRight';

import styles from './ThemeSwitcher.module.css';

export default function ThemeSwitcher() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const handleThemes = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <div className={styles.themeSwitcher} onClick={handleThemes}>
      <ArrowRight big={false} />
      <h5 className={styles.themeSwitcherHeading}>Drag me to switch themes</h5>
      {isDarkTheme ? <ThemeLight /> : <ThemeDark />}
    </div>
  );
}
