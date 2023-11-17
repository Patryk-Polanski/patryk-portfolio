import { Advent_Pro, Comfortaa } from 'next/font/google';
import './reset.css';
import './globals.css';

export const AdventProFont = Advent_Pro({
  weight: ['400', '600'],
  subsets: ['latin'],
});

export const ComfortaaFont = Comfortaa({
  weight: ['400', '600'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Patryk Polanski Portfolio',
  description: 'Web developer, React, Next, WordPress, UI, UX',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={ComfortaaFont.className}
        style={{ backgroundImage: 'url(/texture.jpg)' }}
      >
        {children}
      </body>
    </html>
  );
}
