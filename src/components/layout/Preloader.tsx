'use client';

import { useEffect, useState, useRef } from 'react';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'assembling' | 'logo' | 'done'>('assembling');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 240;
    canvas.height = 240;

    let frame = 0;
    const totalFrames = 45;

    const animate = () => {
      frame++;
      const currentProgress = Math.min(Math.round((frame / totalFrames) * 100), 100);
      setProgress(currentProgress);

      ctx.clearRect(0, 0, 240, 240);
      const cx = 120, cy = 120, r = 70;

      // Background Track
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(226, 232, 240, 0.9)';
      ctx.lineWidth = 4;
      ctx.stroke();

      // Progress Arc
      const startAngle = -Math.PI / 2;
      const endAngle = startAngle + (Math.PI * 2 * (currentProgress / 100));
      ctx.beginPath();
      ctx.arc(cx, cy, r, startAngle, endAngle);
      ctx.strokeStyle = '#2563EB';
      ctx.lineWidth = 4;
      ctx.lineCap = 'round';
      ctx.stroke();

      if (frame < totalFrames) {
        animRef.current = requestAnimationFrame(animate);
      } else {
        setPhase('done');
        onComplete();
      }
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <div
      id="preloader"
      style={{
        position: 'fixed',
        inset: 0,
        background: '#FFFFFF',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
      }}
    >
      <div style={{ position: 'relative', width: 240, height: 240 }}>
        <canvas ref={canvasRef} style={{ width: 240, height: 240 }} />
        {/* Center content */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.25rem',
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: 'linear-gradient(135deg, #2563EB 0%, #0284C7 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(37, 99, 235, 0.25)',
              marginBottom: '0.25rem',
            }}
          >
            <span style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1.2rem' }}>V</span>
          </div>
          <span
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '1rem',
              fontWeight: 700,
              color: '#0F172A',
            }}
          >
            {progress}%
          </span>
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: '0.95rem',
            fontWeight: 800,
            letterSpacing: '0.05em',
            color: '#0F172A',
            marginBottom: '0.25rem',
          }}
        >
          VOICE ERA TECH
        </div>
        <div
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '0.675rem',
            letterSpacing: '0.12em',
            color: '#2563EB',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          Initializing Telephony Mesh...
        </div>
      </div>
    </div>
  );
}
