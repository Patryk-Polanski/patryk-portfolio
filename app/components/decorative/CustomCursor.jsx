'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [cursorCoords, setCursorCords] = useState({ left: 0, top: 0 });
  const [cursorStyle, setCursorStyle] = useState('opaque');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorCords({ left: e.clientX, top: e.clientY });
      if (
        e.target.closest('button') ||
        e.target.closest('a') ||
        e.target.closest('canvas') ||
        e.target.closest('.hide-cursor')
      ) {
        setCursorStyle('opaque');
      } else {
        setCursorStyle('');
      }
    };

    window.addEventListener('mousemove', (e) => handleMouseMove(e));

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className='outer-cursor-wrapper'
        style={{
          transform: `translate(${cursorCoords.left}px, ${cursorCoords.top}px)`,
        }}
      >
        <div className={`outer-cursor cursor--${cursorStyle}`} />
      </div>
      <div
        className='inner-cursor-wrapper'
        style={{
          transform: `translate(${cursorCoords.left}px, ${cursorCoords.top}px)`,
        }}
      >
        <div className={`inner-cursor cursor--${cursorStyle}`} />
      </div>
    </>
  );
}
