import React from 'react';

export default function LinkMenu({ index, path }) {
  return (
    <path
      key={index}
      d={path}
      stroke='currentColor'
      strokeWidth='1.5'
      style={{
        animationDelay: 1 + index / 4 + 's',
      }}
    />
  );
}
