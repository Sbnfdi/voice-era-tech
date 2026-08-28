'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    let mouseX = -100;
    let mouseY = -100;
    let trailX = -100;
    let trailY = -100;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setPos({ x: mouseX, y: mouseY });

      const target = e.target as HTMLElement;
      const clickable = target.closest('a, button, [role="button"], input, select, textarea');
      setIsPointer(!!clickable);

      const customLabel = target.closest('[data-cursor]')?.getAttribute('data-cursor');
      setCursorText(customLabel || '');
    };

    const animateTrail = () => {
      trailX += (mouseX - trailX) * 0.18;
      trailY += (mouseY - trailY) * 0.18;
      setTrail({ x: trailX, y: trailY });
      rafId = requestAnimationFrame(animateTrail);
    };

    window.addEventListener('mousemove', onMouseMove);
    rafId = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Precision Dot */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 5,
          height: 5,
          borderRadius: '50%',
          background: '#4C8DFF',
          pointerEvents: 'none',
          zIndex: 99999,
          transform: `translate3d(${pos.x - 2.5}px, ${pos.y - 2.5}px, 0)`,
          transition: 'opacity 0.2s',
        }}
        className="hidden md:block"
      />

      {/* Lagging Ring */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isPointer ? 36 : 22,
          height: isPointer ? 36 : 22,
          borderRadius: '50%',
          border: `1px solid ${isPointer ? 'rgba(76, 141, 255, 0.45)' : 'rgba(76, 141, 255, 0.2)'}`,
          background: isPointer ? 'rgba(49, 87, 213, 0.06)' : 'transparent',
          pointerEvents: 'none',
          zIndex: 99998,
          transform: `translate3d(${trail.x - (isPointer ? 18 : 11)}px, ${trail.y - (isPointer ? 18 : 11)}px, 0)`,
          transition: 'width 0.2s cubic-bezier(0.16, 1, 0.3, 1), height 0.2s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        className="hidden md:flex"
      >
        {cursorText && (
          <span
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '0.5rem',
              color: '#F4F6F8',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}
          >
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
}
