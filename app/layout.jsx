import { Advent_Pro, Comfortaa } from 'next/font/google';

import { ResponsiveContextProvider } from './context/ResponsiveContext';

import CustomCursor from './components/decorative/CustomCursor';
import Footer from './sections/Footer/Footer';
import CircularIcon from './sections/Home/CircularIcon';
import Copyright from './sections/Footer/Copyright';
import FadeIn from './components/wrappers/FadeIn';

const AdventProFont = Advent_Pro({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-advent-pro',
});

const ComfortaaFont = Comfortaa({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-comfortaa',
});

import './reset.css';
import './globals.css';
import './embla.css';
import './components/ui/button.css';

export const metadata = {
  title: 'Patryk Polanski Portfolio',
  description: 'Web developer, React, Next.js, Node.js, WordPress, UI, UX',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`${ComfortaaFont.variable} ${AdventProFont.variable}`}
    >
      <body
        style={{
          backgroundImage: 'url(/decorative/texture.webp)',
        }}
      >
        <CustomCursor />
        <ResponsiveContextProvider>
          <h1
            style={{
              opacity: 0.1,
              fontSize: '10px',
              position: 'absolute',
              zIndex: -1,
            }}
          >
            Patryk Polanski programming portfolio
          </h1>
          {children}
          <div id='modal-slot'></div>
        </ResponsiveContextProvider>
        <Footer>
          <FadeIn direction='left' className='contact-footer'>
            <CircularIcon />
          </FadeIn>
          <FadeIn direction='down'>
            <Copyright />
          </FadeIn>
        </Footer>
      </body>
    </html>
  );
}
