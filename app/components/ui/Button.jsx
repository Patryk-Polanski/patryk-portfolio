'use client';

import styles from './Button.module.css';

export default function Button({
  children,
  type,
  link,
  onClick,
  newTab = false,
  className,
}) {
  const buttonType = type === 'primary' ? 'buttonPrimary' : '';

  return (
    <>
      {onClick && (
        <button
          className={`${styles.button} ${styles[buttonType]} ${className}`}
          onClick={onClick}
        >
          {children}
        </button>
      )}
      {link && (
        <a
          href={link}
          target={newTab ? '_blank' : ''}
          className={`${styles.button} ${styles[buttonType]} ${className}`}
        >
          {children}
        </a>
      )}
    </>
  );
}
