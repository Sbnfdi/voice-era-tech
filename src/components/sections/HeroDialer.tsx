'use client';

import { useEffect, useRef, useState } from 'react';

type CallPhase = 'idle' | 'connecting' | 'routing' | 'connected' | 'active';

const KEYS = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['*', '0', '#'],
];

export default function HeroDialer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
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
      canvas.width = canvas.offsetWidth * (window.devicePixelRatio || 1);
      canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1);
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    };
    resize();
    window.addEventListener('resize', resize);

    const W = () => canvas.offsetWidth;
    const H = () => canvas.offsetHeight;

    interface Particle { x: number; y: number; vx: number; vy: number; alpha: number; size: number; }
    const particles: Particle[] = Array.from({ length: 50 }, () => ({
      x: Math.random() * W(),
      y: Math.random() * H(),
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.3,
      size: Math.random() * 2 + 1,
    }));

    let tick = 0;
    let rafId: number;
    const draw = () => {
      tick++;
      ctx.clearRect(0, 0, W(), H());

      const cx = W() / 2, cy = H() / 2;
      const ringRadius = Math.min(W(), H()) * 0.44;
      const t = tick * 0.005;

      // Outer ring
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(t);
      for (let i = 0; i < 40; i++) {
        const angle = (i / 40) * Math.PI * 2;
        const x1 = Math.cos(angle) * ringRadius;
        const y1 = Math.sin(angle) * ringRadius;
        const x2 = Math.cos(angle) * (ringRadius + 6);
        const y2 = Math.sin(angle) * (ringRadius + 6);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = `rgba(37,99,235,${i % 4 === 0 ? 0.35 : 0.12})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }
      ctx.restore();

      // Nodes
      const nodes = [
        { x: cx - 210, y: cy - 70 },
        { x: cx + 210, y: cy - 70 },
        { x: cx - 180, y: cy + 90 },
        { x: cx + 180, y: cy + 90 },
      ];

      nodes.forEach((n, i) => {
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(n.x, n.y);
        ctx.strokeStyle = 'rgba(37,99,235,0.08)';
        ctx.lineWidth = 1;
        ctx.stroke();

        const packetT = ((tick * 0.008 + i * 0.25) % 1);
        const pkx = cx + (n.x - cx) * packetT;
        const pky = cy + (n.y - cy) * packetT;
        ctx.beginPath();
        ctx.arc(pkx, pky, 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(2,132,199,0.5)';
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
        ctx.fillStyle = `rgba(37,99,235,${p.alpha * 0.5})`;
        ctx.fill();
      });

      rafId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const handleKeyPress = (key: string) => {
    setActiveKey(key);
    setDialedKeys(d => [...d.slice(-9), key]);
    setTimeout(() => setActiveKey(null), 180);
  };

  const handleCall = () => {
    if (callPhase !== 'idle') { setCallPhase('idle'); setDialedKeys([]); return; }
    setCallPhase('connecting');
    setTimeout(() => setCallPhase('routing'), 1000);
    setTimeout(() => setCallPhase('connected'), 2000);
    setTimeout(() => setCallPhase('active'), 2800);
  };

  const phaseColors: Record<CallPhase, string> = {
    idle: '#64748B',
    connecting: '#D97706',
    routing: '#0284C7',
    connected: '#059669',
    active: '#10B981',
  };
  const phaseLabels: Record<CallPhase, string> = {
    idle: 'READY TO DIAL',
    connecting: 'CONNECTING...',
    routing: 'ROUTING SIP...',
    connected: 'AGENT CONNECTED',
    active: 'CALL ACTIVE (HD)',
  };

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 480, margin: '0 auto' }}>
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: '-60px',
          width: 'calc(100% + 120px)',
          height: 'calc(100% + 120px)',
          pointerEvents: 'none',
        }}
      />

      {/* Dialer card */}
      <div
        style={{
          position: 'relative',
          background: '#FFFFFF',
          border: '1px solid rgba(226, 232, 240, 0.9)',
          borderRadius: 24,
          padding: '1.85rem',
          boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(226, 232, 240, 0.8)',
          transition: 'transform 0.15s ease-out',
        }}
      >
        {/* Header display */}
        <div style={{
          background: '#F8FAFC',
          border: '1px solid rgba(226, 232, 240, 0.9)',
          borderRadius: 16,
          padding: '1rem 1.25rem',
          marginBottom: '1.25rem',
          minHeight: 74,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          {/* Status row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{
                width: 7, height: 7, borderRadius: '50%',
                background: phaseColors[callPhase],
                boxShadow: `0 0 8px ${phaseColors[callPhase]}`,
                animation: callPhase !== 'idle' ? 'signal-pulse 1.5s ease-in-out infinite' : 'none',
              }} />
              <span style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.65rem',
                letterSpacing: '0.12em',
                color: phaseColors[callPhase],
                textTransform: 'uppercase',
                fontWeight: 700,
              }}>
                {phaseLabels[callPhase]}
              </span>
            </div>

            <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6rem', color: '#64748B', letterSpacing: '0.08em', fontWeight: 600 }}>
              OPUS-HD • G.711
            </span>
          </div>

          {/* Dialed number */}
          <div style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '1.35rem',
            fontWeight: 700,
            color: dialedKeys.length ? '#0F172A' : '#94A3B8',
            letterSpacing: '0.08em',
            minHeight: '1.8rem',
            marginTop: '0.25rem',
          }}>
            {dialedKeys.length ? dialedKeys.join('') : '+1 (800) _ _ _ - _ _ _ _'}
            {dialedKeys.length > 0 && <span style={{ animation: 'blink 1s step-end infinite', color: '#2563EB' }}>|</span>}
          </div>
        </div>

        {/* Keypad */}
        <div className="keypad-grid" style={{ marginBottom: '1.15rem' }}>
          {KEYS.flat().map(key => (
            <button
              key={key}
              className="keypad-key"
              onClick={() => handleKeyPress(key)}
              style={{
                background: activeKey === key ? 'rgba(37, 99, 235, 0.1)' : '#FFFFFF',
                borderColor: activeKey === key ? '#2563EB' : 'rgba(226, 232, 240, 0.9)',
                color: activeKey === key ? '#2563EB' : '#0F172A',
                transform: activeKey === key ? 'scale(0.95)' : undefined,
              }}
            >
              {key}
            </button>
          ))}
        </div>

        {/* Call button */}
        <button
          onClick={handleCall}
          style={{
            width: '100%',
            padding: '0.875rem',
            borderRadius: 14,
            border: 'none',
            background: callPhase === 'idle'
              ? 'linear-gradient(135deg, #059669 0%, #10B981 100%)'
              : callPhase === 'active'
              ? 'linear-gradient(135deg, #DC2626 0%, #EF4444 100%)'
              : 'linear-gradient(135deg, #2563EB 0%, #0284C7 100%)',
            color: '#FFFFFF',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.625rem',
            boxShadow: '0 4px 14px rgba(15, 23, 42, 0.15)',
          }}
        >
          <span style={{ fontSize: '1.15rem' }}>
            {callPhase === 'idle' ? '📞' : callPhase === 'active' ? '📵' : '⏳'}
          </span>
          <span style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '0.8rem',
            letterSpacing: '0.12em',
            fontWeight: 700,
          }}>
            {callPhase === 'idle' ? 'INITIATE SIMULATED CALL' : callPhase === 'active' ? 'DISCONNECT CALL' : phaseLabels[callPhase]}
          </span>
        </button>

        {/* Footer status */}
        <div style={{
          marginTop: '1.15rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '0.65rem',
        }}>
          {[
            { label: 'AGENTS ONLINE', value: '48', color: '#059669' },
            { label: 'CALLS QUEUED', value: '184', color: '#2563EB' },
            { label: 'ACTIVE CHANNELS', value: '230', color: '#0284C7' },
          ].map(stat => (
            <div key={stat.label} style={{
              background: '#F8FAFC',
              border: '1px solid rgba(226, 232, 240, 0.9)',
              borderRadius: 12,
              padding: '0.65rem 0.5rem',
              textAlign: 'center',
            }}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: '1.1rem', fontWeight: 800, color: stat.color }}>
                {stat.value}
              </div>
              <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.55rem', letterSpacing: '0.08em', color: '#64748B', textTransform: 'uppercase', marginTop: '2px', fontWeight: 600 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
