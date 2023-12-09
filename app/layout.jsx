import { ThemeContextProvider } from './context/ThemeContext';
import BodyLayout from './BodyLayout';

import './reset.css';
import './globals.css';
import './embla.css';
import './components/ui/button.css';

export const metadata = {
  title: 'Patryk Polanski Portfolio',
  description: 'Web developer, React, Next, WordPress, UI, UX',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <ThemeContextProvider>
        <BodyLayout>{children}</BodyLayout>
      </ThemeContextProvider>
    </html>
  );
}
