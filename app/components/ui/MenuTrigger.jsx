'use client';

import { useState } from 'react';

import { useResponsiveContext } from '@/app/context/ResponsiveContext';

import Button from './Button';
import MenuModal from '../modal/MenuModal';

import styles from './MenuTrigger.module.css';
import { AnimatePresence } from 'framer-motion';

export default function MenuTrigger({ id = 'menu-trigger' }) {
  const { deviceType } = useResponsiveContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenu() {
    setIsMenuOpen((prevVal) => !prevVal);
    if (document.body.parentElement.classList.contains('frozen')) {
      document.body.parentElement.classList.remove('frozen');
    } else {
      document.body.parentElement.classList.add('frozen');
    }
  }

  return (
    <>
      <div
        className={`${styles.menuTrigger} ${
          id === 'menu-trigger' && 'menuTriggerIsVisible'
        } `}
        id={id}
        style={{
          animationDelay: id === 'menu-trigger' ? '1.6s' : '0',
          position: 'fixed',
          right: '-10rem',
          top: '3rem',
          opacity: id === 'menu-trigger' ? 1 : 0,
        }}
      >
        <Button
          variation='menu'
          className={`${styles.menuTriggerButton} ${
            isMenuOpen && 'button--menu-is-open'
          }`}
          onClick={handleMenu}
        >
          <span className='button--menu-line'></span>
          <span className='button--menu-line'></span>
          <span className='button--menu-line'></span>
          <span className='visually-hidden'>open menu</span>
        </Button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <MenuModal
            key='menu-modal'
            onMenuClose={handleMenu}
            deviceType={deviceType}
          />
        )}
      </AnimatePresence>
    </>
  );
}
