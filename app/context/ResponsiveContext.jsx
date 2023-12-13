'use client';

import { createContext, useContext, useState, useEffect } from 'react';

import { debounceFunction } from '../utils/helpers';

const ResponsiveContext = createContext();

function ResponsiveContextProvider({ children }) {
  const [deviceType, setDeviceType] = useState('desktop');

  useEffect(() => {
    setDeviceType(
      window.innerWidth > 1199
        ? 'desktop'
        : window.innerWidth > 749
        ? 'tablet'
        : 'mobile'
    );

    const determineDevice = () => {
      if (window.innerWidth > 1199) {
        if (deviceType === 'desktop') return;
        setDeviceType('desktop');
      } else if (window.innerWidth > 749) {
        if (deviceType === 'tablet') return;
        setDeviceType('tablet');
      } else if (window.innerWidth < 750) {
        if (deviceType === 'mobile') return;
        setDeviceType('mobile');
      }
    };

    const debounce = debounceFunction(determineDevice, 500);
    window.addEventListener('resize', debounce);

    return () => window.removeEventListener('resize', determineDevice);
  }, [deviceType]);

  return (
    <ResponsiveContext.Provider value={{ deviceType }}>
      {children}
    </ResponsiveContext.Provider>
  );
}

function useResponsiveContext() {
  const context = useContext(ResponsiveContext);

  if (context === undefined) {
    throw new Error(
      'ResponsiveContext was used outside of ThemeContextProvider'
    );
  }

  return context;
}

export { ResponsiveContextProvider, useResponsiveContext };
