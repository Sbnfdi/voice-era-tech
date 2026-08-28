'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

type CallPhase = 'idle' | 'connecting' | 'routing' | 'connected' | 'active';

const KEYS = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['*', '0', '#'],
];

export default function HeroDialer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rotRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  const rafRef = useRef<number>(0);
  const [callPhase, setCallPhase] = useState<CallPhase>('idle');
  const [dialedKeys, setDialedKeys] = useState<string[]>([]);
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [waveHeights, setWaveHeights] = useState<number[]>(Array.from({ length: 18 }, () => 4));

  // Waveform animation
  useEffect(() => {
    if (callPhase !== 'active') return;
    const iv = setInterval(() => {
      setWaveHeights(h => h.map(() => 4 + Math.random() * 22));
    }, 100);
    return () => clearInterval(iv);
  }, [callPhase]);

  // Canvas — background particle field + rotating ring
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * devicePixelRatio;
      canvas.height = canvas.offsetHeight * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    const W = () => canvas.offsetWidth;
    const H = () => canvas.offsetHeight;

    // Particles
    interface Particle { x: number; y: number; vx: number; vy: number; alpha: number; size: number; }
    const particles: Particle[] = Array.from({ length: 80 }, () => ({
      x: Math.random() * W(),
      y: Math.random() * H(),
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.4,
      size: Math.random() * 1.5 + 0.5,
    }));

    let tick = 0;
    const draw = () => {
      tick++;
      ctx.clearRect(0, 0, W(), H());

      const cx = W() / 2, cy = H() / 2;

      // Rotating outer ring
      const ringRadius = Math.min(W(), H()) * 0.42;
      const t = tick * 0.006;

      // Outer dashed ring
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(t);
      for (let i = 0; i < 48; i++) {
        const angle = (i / 48) * Math.PI * 2;
        const x1 = Math.cos(angle) * ringRadius;
        const y1 = Math.sin(angle) * ringRadius;
        const x2 = Math.cos(angle) * (ringRadius + 8);
        const y2 = Math.sin(angle) * (ringRadius + 8);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = `rgba(0,102,255,${i % 3 === 0 ? 0.35 : 0.1})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      ctx.restore();

      // Counter-rotating inner ring
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-t * 0.5);
      ctx.beginPath();
      ctx.arc(0, 0, ringRadius * 0.75, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0,212,255,0.06)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();

      // Signal pulse on ring
      const pulseAngle = (tick * 0.04) % (Math.PI * 2);
      const px = cx + Math.cos(pulseAngle) * ringRadius;
      const py = cy + Math.sin(pulseAngle) * ringRadius;
      const grad = ctx.createRadialGradient(px, py, 0, px, py, 20);
      grad.addColorStop(0, 'rgba(0,212,255,0.7)');
      grad.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(px, py, 20, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(px, py, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#00D4FF';
      ctx.fill();

      // Node connections (routing lines)
      const nodes = [
        { x: cx - 220, y: cy - 80, label: 'Campaigns' },
        { x: cx + 220, y: cy - 80, label: 'Agents' },
        { x: cx - 200, y: cy + 100, label: 'CRM' },
        { x: cx + 200, y: cy + 100, label: 'Analytics' },
        { x: cx, y: cy - 200, label: 'AI' },
        { x: cx, y: cy + 200, label: 'Cloud' },
      ];

      nodes.forEach((n, i) => {
        // Line to center
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(n.x, n.y);
        ctx.strokeStyle = `rgba(0,102,255,0.08)`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Data packet on line
        const packetT = ((tick * 0.008 + i * 0.2) % 1);
        const pkx = cx + (n.x - cx) * packetT;
        const pky = cy + (n.y - cy) * packetT;
        ctx.beginPath();
        ctx.arc(pkx, pky, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0,212,255,0.5)';
        ctx.fill();

        // Node dot
        ctx.beginPath();
        ctx.arc(n.x, n.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,102,255,0.5)`;
        ctx.fill();
      });

      // Particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W();
        if (p.x > W()) p.x = 0;
        if (p.y < 0) p.y = H();
        if (p.y > H()) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 102, 255, ${p.alpha})`;
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const handleKeyPress = (key: string) => {
    setActiveKey(key);
    setDialedKeys(d => [...d.slice(-9), key]);
    setTimeout(() => setActiveKey(null), 200);
  };

  const handleCall = () => {
    if (callPhase !== 'idle') { setCallPhase('idle'); setDialedKeys([]); return; }
    setCallPhase('connecting');
    setTimeout(() => setCallPhase('routing'), 1200);
    setTimeout(() => setCallPhase('connected'), 2400);
    setTimeout(() => setCallPhase('active'), 3200);
  };

  const phaseColors: Record<CallPhase, string> = {
    idle: '#4A6A99',
    connecting: '#FFB800',
    routing: '#00D4FF',
    connected: '#00E5A0',
    active: '#00FF88',
  };
  const phaseLabels: Record<CallPhase, string> = {
    idle: 'PRESS CALL',
    connecting: 'CONNECTING...',
    routing: 'ROUTING...',
    connected: 'AGENT CONNECTED',
    active: 'CALL ACTIVE',
  };

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 540, margin: '0 auto' }}>
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: '-80px',
          width: 'calc(100% + 160px)',
          height: 'calc(100% + 160px)',
          pointerEvents: 'none',
        }}
      />

      {/* Dialer card */}
      <div
        style={{
          position: 'relative',
          background: 'rgba(7, 13, 28, 0.92)',
          border: '1px solid rgba(0,102,255,0.2)',
          borderRadius: 28,
          padding: '2rem',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)',
          transform: 'perspective(1000px)',
          transition: 'transform 0.1s ease-out',
        }}
        onMouseMove={e => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
          const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
          e.currentTarget.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${y}deg)`;
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
        }}
      >
        {/* Header display */}
        <div style={{
          background: 'rgba(0,102,255,0.06)',
          border: '1px solid rgba(0,102,255,0.12)',
          borderRadius: 16,
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem',
          minHeight: 72,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          {/* Status row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{
                width: 6, height: 6, borderRadius: '50%',
                background: phaseColors[callPhase],
                boxShadow: `0 0 8px ${phaseColors[callPhase]}`,
                animation: callPhase !== 'idle' ? 'signal-pulse 1.5s ease-in-out infinite' : 'none',
              }} />
              <span style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.6rem',
                letterSpacing: '0.15em',
                color: phaseColors[callPhase],
                textTransform: 'uppercase',
                transition: 'color 0.3s',
              }}>
                {phaseLabels[callPhase]}
              </span>
            </div>
            {/* Waveform (active call) */}
            {callPhase === 'active' && (
              <div className="waveform">
                {waveHeights.map((h, i) => (
                  <div key={i} className="waveform-bar" style={{ height: h, animationDelay: `${i * 0.04}s` }} />
                ))}
              </div>
            )}
            {callPhase === 'idle' && (
              <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6rem', color: '#4A6A99', letterSpacing: '0.1em' }}>
                VET-DIALER-v3.2
              </span>
            )}
          </div>

          {/* Dialed number */}
          <div style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '1.375rem',
            fontWeight: 600,
            color: dialedKeys.length ? '#E8EEFF' : '#2A3A5A',
            letterSpacing: '0.08em',
            minHeight: '1.8rem',
            transition: 'all 0.1s',
          }}>
            {dialedKeys.length ? dialedKeys.join('') : '_ _ _ _ _'}
            {dialedKeys.length > 0 && <span style={{ animation: 'blink 1s step-end infinite', color: '#00D4FF' }}>|</span>}
          </div>
        </div>

        {/* Keypad */}
        <div className="keypad-grid" style={{ marginBottom: '1rem' }}>
          {KEYS.flat().map(key => (
            <button
              key={key}
              className="keypad-key"
              onClick={() => handleKeyPress(key)}
              style={{
                background: activeKey === key
                  ? 'rgba(0,212,255,0.15)'
                  : 'rgba(0,102,255,0.06)',
                borderColor: activeKey === key ? 'var(--c-cyan)' : undefined,
                color: activeKey === key ? '#00D4FF' : undefined,
                transform: activeKey === key ? 'scale(0.94)' : undefined,
                boxShadow: activeKey === key ? '0 0 20px rgba(0,212,255,0.3)' : undefined,
              }}
            >
              {key}
            </button>
          ))}
        </div>

        {/* Call button */}
        <button
          onClick={handleCall}
          data-cursor="CONNECT"
          style={{
            width: '100%',
            padding: '0.875rem',
            borderRadius: 14,
            border: 'none',
            background: callPhase === 'idle'
              ? 'linear-gradient(135deg, #00AA44 0%, #00E567 100%)'
              : callPhase === 'active'
              ? 'linear-gradient(135deg, #CC2233 0%, #FF3B5C 100%)'
              : 'linear-gradient(135deg, #0066FF 0%, #00D4FF 100%)',
            cursor: 'none',
            transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.625rem',
            boxShadow: callPhase === 'active'
              ? '0 0 30px rgba(255,59,92,0.4)'
              : callPhase === 'idle'
              ? '0 0 30px rgba(0,229,103,0.3)'
              : '0 0 30px rgba(0,212,255,0.35)',
          }}
        >
          <span style={{ fontSize: '1.25rem' }}>
            {callPhase === 'idle' ? '📞' : callPhase === 'active' ? '📵' : '⏳'}
          </span>
          <span style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '0.75rem',
            letterSpacing: '0.12em',
            fontWeight: 600,
            color: '#fff',
          }}>
            {callPhase === 'idle' ? 'CALL' : callPhase === 'active' ? 'END CALL' : phaseLabels[callPhase]}
          </span>
        </button>

        {/* Footer status */}
        <div style={{
          marginTop: '1rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '0.5rem',
        }}>
          {[
            { label: 'AGENTS', value: '24', color: '#00E5A0' },
            { label: 'QUEUED', value: '156', color: '#00D4FF' },
            { label: 'ACTIVE', value: '18', color: '#0080FF' },
          ].map(stat => (
            <div key={stat.label} style={{
              background: 'rgba(0,102,255,0.04)',
              border: '1px solid rgba(0,102,255,0.08)',
              borderRadius: 10,
              padding: '0.5rem 0.75rem',
              textAlign: 'center',
            }}>
              <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '1rem', fontWeight: 700, color: stat.color }}>
                {stat.value}
              </div>
              <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.5rem', letterSpacing: '0.12em', color: '#4A6A99', textTransform: 'uppercase', marginTop: '2px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
