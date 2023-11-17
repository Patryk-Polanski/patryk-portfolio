'use client';

import styles from './Button.module.css';

export default function Button({ children, type, link, onClick }) {
  const buttonType = type === 'primary' ? 'buttonPrimary' : '';

  return (
    <>
      {onClick && (
        <button
          className={`${styles.button} ${styles[buttonType]}`}
          onClick={onClick}
        >
          {children}
        </button>
      )}
      {link && (
        <a
          href={link}
          target='_blank'
          className={`${styles.button} ${styles[buttonType]}`}
        >
          {children}
        </a>
      )}
    </>
  );
}
