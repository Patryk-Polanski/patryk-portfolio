import React from 'react';

export const DotButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button type='button' {...restProps}>
      {children}
    </button>
  );
};

export const PrevButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className='embla__button embla__button--prev'
      type='button'
      {...restProps}
    >
      {children}
    </button>
  );
};

export const NextButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className='embla__button embla__button--next'
      type='button'
      {...restProps}
    >
      {children}
    </button>
  );
};

export const Thumb = (props) => {
  const { selected, imgSrc, title, onClick } = props;

  return (
    <div
      className={'embla-thumbs__slide'.concat(
        selected ? ' embla-thumbs__slide--selected' : ''
      )}
    >
      <button
        onClick={onClick}
        className='embla-thumbs__slide__button'
        type='button'
      >
        <div className='embla-thumbs__slide__number'>
          <span>{title}</span>
        </div>
        {/* <img
          className='embla-thumbs__slide__img'
          src={imgSrc}
          alt='Your alt text'
        /> */}
      </button>
    </div>
  );
};
