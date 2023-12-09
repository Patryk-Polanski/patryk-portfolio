'use client';

import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    if (isDarkTheme) document.documentElement.classList.add('light-mode');
    else document.documentElement.classList.remove('light-mode');
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useThemeContext() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('ThemeContext was used outside of ThemeContextProvider');
  }

  return context;
}

export { ThemeContextProvider, useThemeContext };
