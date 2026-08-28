'use client';

import { useEffect, useRef, useState } from 'react';

interface CursorState {
  x: number;
  y: number;
  label: string;
  expanded: boolean;
}

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const posRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (window.innerWidth <= 1024) return;

    const onMove = (e: MouseEvent) => {
      posRef.current.tx = e.clientX;
      posRef.current.ty = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }

      // Check what we're hovering
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const isInteractive =
        el?.closest('a, button, [data-cursor], .keypad-key, .stack-toggle, .industry-card, .node-card') !== null;
      const cursorLabel = el?.closest('[data-cursor]')?.getAttribute('data-cursor') || (isInteractive ? 'EXPLORE' : '');

      if (ringRef.current) {
        ringRef.current.classList.toggle('expanded', isInteractive);
      }
      if (labelRef.current) {
        labelRef.current.textContent = cursorLabel;
        labelRef.current.style.opacity = cursorLabel ? '1' : '0';
      }
    };

    const animate = () => {
      const { x, y, tx, ty } = posRef.current;
      const nx = x + (tx - x) * 0.12;
      const ny = y + (ty - y) * 0.12;
      posRef.current.x = nx;
      posRef.current.y = ny;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${nx}px, ${ny}px) translate(-50%, -50%)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{ willChange: 'transform', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <span
          ref={labelRef}
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '0.45rem',
            letterSpacing: '0.12em',
            color: 'var(--c-cyan)',
            opacity: 0,
            transition: 'opacity 0.2s',
            whiteSpace: 'nowrap',
          }}
        />
      </div>
    </>
  );
}
