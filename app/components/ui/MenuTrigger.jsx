'use client';

import { useState } from 'react';

import Button from './Button';
import MenuModal from '../modal/MenuModal';

import styles from './MenuTrigger.module.css';
import { AnimatePresence } from 'framer-motion';

export default function MenuTrigger({ deviceType }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenu() {
    setIsMenuOpen((prevVal) => !prevVal);
    if (document.body.classList.contains('frozen')) {
      document.body.classList.remove('frozen');
    } else {
      document.body.classList.add('frozen');
    }
  }

  return (
    <>
      <div
        className={styles.menuTrigger}
        id='menu-trigger'
        style={{ position: 'fixed', right: '-10rem', top: '3rem', opacity: 0 }}
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
