'use client';

import { useEffect, useRef, useState } from 'react';

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

    const W = canvas.width = 400;
    const H = canvas.height = 400;
    const cx = W / 2, cy = H / 2;

    let startTime = Date.now();
    const duration = 2400;

    const keys = ['1','2','3','4','5','6','7','8','9','*','0','#'];
    const numRadius = 130;

    const draw = () => {
      const elapsed = Date.now() - startTime;
      const t = Math.min(elapsed / duration, 1);
      setProgress(Math.round(t * 100));

      ctx.clearRect(0, 0, W, H);

      // Outer ring
      ctx.beginPath();
      ctx.arc(cx, cy, 160, -Math.PI / 2, -Math.PI / 2 + (Math.PI * 2 * t));
      ctx.strokeStyle = `rgba(0, 212, 255, ${0.6 + 0.4 * Math.sin(elapsed * 0.004)})`;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Inner ring
      ctx.beginPath();
      ctx.arc(cx, cy, 140, -Math.PI / 2, Math.PI * 2 * t - Math.PI / 2);
      ctx.strokeStyle = `rgba(0, 102, 255, 0.4)`;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Outer dashes
      for (let i = 0; i < 36; i++) {
        const angle = (i / 36) * Math.PI * 2;
        const show = i / 36 <= t;
        if (!show) continue;
        const x1 = cx + Math.cos(angle) * 168;
        const y1 = cy + Math.sin(angle) * 168;
        const x2 = cx + Math.cos(angle) * 175;
        const y2 = cy + Math.sin(angle) * 175;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = 'rgba(0, 212, 255, 0.5)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Number dots around circle
      keys.forEach((key, i) => {
        const angle = (i / 12) * Math.PI * 2 - Math.PI / 2;
        const delay = i / 12;
        const appear = Math.max(0, (t - delay * 0.4) * 3);
        const alpha = Math.min(1, appear);
        if (alpha <= 0) return;

        const x = cx + Math.cos(angle) * numRadius;
        const y = cy + Math.sin(angle) * numRadius;

        // Dot
        ctx.beginPath();
        ctx.arc(x, y, 18, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 102, 255, ${0.08 * alpha})`;
        ctx.fill();
        ctx.strokeStyle = `rgba(0, 102, 255, ${0.25 * alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Number
        ctx.fillStyle = `rgba(232, 238, 255, ${alpha})`;
        ctx.font = `600 14px "JetBrains Mono", monospace`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(key, x, y);
      });

      // Signal dot
      if (t > 0.3) {
        const st = (t - 0.3) / 0.7;
        const signalAngle = st * Math.PI * 4 - Math.PI / 2;
        const sx = cx + Math.cos(signalAngle) * 160;
        const sy = cy + Math.sin(signalAngle) * 160;
        const grd = ctx.createRadialGradient(sx, sy, 0, sx, sy, 16);
        grd.addColorStop(0, 'rgba(0, 212, 255, 0.9)');
        grd.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(sx, sy, 16, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(sx, sy, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#00D4FF';
        ctx.fill();
      }

      // Center call icon
      if (t > 0.5) {
        const a = Math.min(1, (t - 0.5) * 4);
        ctx.beginPath();
        ctx.arc(cx, cy, 36, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 102, 255, ${0.15 * a})`;
        ctx.fill();
        ctx.strokeStyle = `rgba(0, 102, 255, ${0.5 * a})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        // Phone icon
        ctx.fillStyle = `rgba(0, 212, 255, ${a})`;
        ctx.font = `${22 * a}px sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('📞', cx, cy);
      }

      if (t < 1) {
        animRef.current = requestAnimationFrame(draw);
      } else {
        setPhase('logo');
        setTimeout(() => {
          setPhase('done');
          setTimeout(onComplete, 600);
        }, 700);
      }
    };

    animRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animRef.current);
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <div
      id="preloader"
      style={{
        position: 'fixed', inset: 0,
        background: '#050A14',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
        opacity: 1,
        transition: 'opacity 0.6s ease',
      }}
    >
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        style={{ width: 220, height: 220 }}
      />

      {/* Logo reveal */}
      <div style={{
        textAlign: 'center',
        opacity: phase === 'logo' ? 1 : 0,
        transform: phase === 'logo' ? 'translateY(0)' : 'translateY(10px)',
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      }}>
        <div style={{
          fontFamily: '"Plus Jakarta Sans", sans-serif',
          fontSize: '1.5rem',
          fontWeight: 800,
          color: '#E8EEFF',
          letterSpacing: '-0.02em',
        }}>
          Voice Era{' '}
          <span style={{ color: '#00D4FF' }}>Tech</span>
        </div>
        <div style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '0.625rem',
          letterSpacing: '0.18em',
          color: '#4A6A99',
          textTransform: 'uppercase',
          marginTop: '0.25rem',
        }}>
          LLC
        </div>
      </div>

      {/* Progress */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
      }}>
        <div style={{ width: 200, height: 1, background: 'rgba(0,102,255,0.15)', borderRadius: 1 }}>
          <div style={{
            height: '100%',
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #0066FF, #00D4FF)',
            borderRadius: 1,
            transition: 'width 0.1s ease',
          }} />
        </div>
        <span style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '0.6875rem',
          color: '#4A6A99',
          letterSpacing: '0.1em',
        }}>
          INITIALIZING SYSTEM {progress}%
        </span>
      </div>
    </div>
  );
}
