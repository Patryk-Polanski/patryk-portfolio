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
