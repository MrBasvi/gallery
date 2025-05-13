import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };
    document.addEventListener('mousemove', moveCursor);
    return () => document.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: 44,
        height: 44,
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(circle at 30% 30%, #60a5fa 0%, #a5b4fc 100%)',
        boxShadow: '0 0 32px 0 #60a5fa55',
        opacity: 0.25,
        transition: 'background 0.2s, box-shadow 0.2s',
        mixBlendMode: 'lighten',
        willChange: 'transform',
      }}
    />
  );
};

export default CustomCursor; 