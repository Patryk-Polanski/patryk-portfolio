'use client';

import styles from './Button.module.css';

export default function Button({ children, type, onClick }) {
  const buttonType = type === 'primary' ? 'buttonPrimary' : '';

  return (
    <button
      className={`${styles.button} ${styles[buttonType]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
