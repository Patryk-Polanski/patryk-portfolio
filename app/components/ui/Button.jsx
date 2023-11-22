'use client';

export default function Button({
  children,
  text,
  variation,
  type = 'button',
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
          className={`button button--${variation || ''} ${className || ''}`}
          onClick={onClick}
          aria-label={text}
          type={type}
        >
          {children || slicedText}
          <span className='visually-hidden'>{text}</span>
        </button>
      )}
      {link && (
        <a
          href={link}
          target={newTab ? '_blank' : ''}
          className={`button button--${variation || ''} ${className || ''}`}
          aria-label={text}
        >
          {children || slicedText}
          <span className='visually-hidden'>{text}</span>
        </a>
      )}
    </>
  );
}
