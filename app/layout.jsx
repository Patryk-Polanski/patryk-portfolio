import { Advent_Pro, Comfortaa } from 'next/font/google';
import './reset.css';
import './globals.css';
import './embla.css';
import './components/ui/button.css';
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

export const metadata = {
  title: 'Patryk Polanski Portfolio',
  description: 'Web developer, React, Next, WordPress, UI, UX',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${ComfortaaFont.variable} ${AdventProFont.variable}`}
        style={{ backgroundImage: 'url(/texture.jpg)' }}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
