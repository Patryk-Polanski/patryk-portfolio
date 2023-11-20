'use client';

export default function Button({
  children,
  text,
  type,
  link,
  onClick,
  newTab = false,
  className,
}) {
  const letters = text?.split('');

  const slicedText = (
    <div className='sliced-text'>
      {letters?.map((letter, index) => (
        <span
          key={index}
          className='sliced-text-letter'
          style={{
            visibility: letter !== ' ' ? 'visible' : 'hidden',
            transitionDelay: '0.07' * index + 's',
          }}
        >
          {letter !== ' ' ? letter : '|'}
          <span
            className='sliced-text-letter-copy'
            style={{
              visibility: letter !== ' ' ? 'visible' : 'hidden',
              transitionDelay: '0.07' * index + 's',
            }}
          >
            {letter !== ' ' ? letter : '|'}
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <>
      {onClick && (
        <button
          className={`button button--${type || ''} ${className || ''}`}
          onClick={onClick}
          aria-label={text}
        >
          {children || slicedText}
        </button>
      )}
      {link && (
        <a
          href={link}
          target={newTab ? '_blank' : ''}
          className={`button button--${type || ''} ${className || ''}`}
          aria-label={text}
        >
          {children || slicedText}
        </a>
      )}
    </>
  );
}
