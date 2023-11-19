'use client';

export default function Button({
  children,
  type,
  link,
  onClick,
  newTab = false,
  className,
}) {
  return (
    <>
      {onClick && (
        <button
          className={`button button--${type || ''} ${className || ''}`}
          onClick={onClick}
        >
          {children}
        </button>
      )}
      {link && (
        <a
          href={link}
          target={newTab ? '_blank' : ''}
          className={`button button--${type || ''} ${className || ''}`}
        >
          {children}
        </a>
      )}
    </>
  );
}
