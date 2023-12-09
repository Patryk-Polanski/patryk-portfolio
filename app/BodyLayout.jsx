'use client';

import { Advent_Pro, Comfortaa } from 'next/font/google';

import { useThemeContext } from './context/ThemeContext';

import CustomCursor from './components/decorative/CustomCursor';

export const AdventProFont = Advent_Pro({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-advent-pro',
});

export const ComfortaaFont = Comfortaa({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-comfortaa',
});

export default function BodyLayout({ children }) {
  const { isDarkTheme } = useThemeContext();

  return (
    <body
      className={`${ComfortaaFont.variable} ${AdventProFont.variable}`}
      style={{
        backgroundImage: isDarkTheme
          ? 'url(/texture-dark-theme.jpg)'
          : 'url(/texture-light-theme.jpg',
      }}
    >
      <CustomCursor />
      {children}
      <div id='modal-slot'></div>
    </body>
  );
}
