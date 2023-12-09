'use client';

import Image from 'next/image';

import { useThemeContext } from '@/app/context/ThemeContext';

export default function Logo() {
  const { isDarkTheme } = useThemeContext();

  return (
    <Image
      className='logo'
      src={isDarkTheme ? '/logo-dark-theme.png' : '/logo-light-theme.png'}
      alt='Patryk Polanski logo'
      width={30}
      height={50}
    />
  );
}
