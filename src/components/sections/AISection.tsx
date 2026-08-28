'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const aiServices = [
  { icon: '🎙️', label: 'AI Voice Agents', desc: 'Deploy conversational AI agents that handle inbound and outbound calls with natural language understanding.' },
  { icon: '📞', label: 'AI Call Agents', desc: 'Automate outbound calling campaigns with intelligent AI agents that qualify leads and schedule appointments.' },
  { icon: '💬', label: 'AI Customer Support', desc: 'Provide 24/7 automated customer support across voice and digital channels without additional headcount.' },
  { icon: '🔍', label: 'AI Lead Qualification', desc: 'Score and qualify inbound leads in real time using conversation intelligence and predictive modeling.' },
  { icon: '📅', label: 'AI Appointment Agents', desc: 'Let AI agents handle scheduling, confirmations and reminders across your calendar infrastructure.' },
  { icon: '⚙️', label: 'AI Automation', desc: 'Automate repetitive call-center workflows including disposition logging, follow-up scheduling and CRM updates.' },
];

const flowSteps = [
  { label: 'Customer', icon: '👤', color: '#4A9EFF' },
  { label: 'AI Voice Agent', icon: '🤖', color: '#0066FF' },
  { label: 'Understanding', icon: '🧠', color: '#00D4FF' },
  { label: 'Decision', icon: '⚡', color: '#8B5CF6' },
  { label: 'CRM Update', icon: '🗂️', color: '#00E5A0' },
  { label: 'Resolution', icon: '✅', color: '#00FF88' },
];

export default function AISection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const [activeService, setActiveService] = useState<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let tick = 0;
    const draw = () => {
      tick++;
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // Neural network background
      const cols = 8, rows = 5;
      const nodes: { x: number; y: number }[] = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          nodes.push({
            x: (c / (cols - 1)) * W,
            y: (r / (rows - 1)) * H,
          });
        }
      }

      // Connections
      nodes.forEach((n1, i) => {
        nodes.forEach((n2, j) => {
          if (j <= i) return;
          const dx = n1.x - n2.x, dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > W * 0.3) return;
          const alpha = (1 - dist / (W * 0.3)) * 0.06;
          ctx.beginPath();
          ctx.moveTo(n1.x, n1.y);
          ctx.lineTo(n2.x, n2.y);
          ctx.strokeStyle = `rgba(107,33,232,${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        });
      });

      // Nodes with pulse
      nodes.forEach((n, i) => {
        const pulse = 0.3 + 0.7 * Math.abs(Math.sin(tick * 0.02 + i * 0.5));
        ctx.beginPath();
        ctx.arc(n.x, n.y, 3 * pulse, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(107,33,232,${pulse * 0.4})`;
        ctx.fill();
      });

      // Data wave
      ctx.beginPath();
      ctx.moveTo(0, H / 2);
      for (let x = 0; x < W; x++) {
        const y = H / 2 + Math.sin((x * 0.02) + tick * 0.05) * 20 + Math.sin((x * 0.04) - tick * 0.03) * 10;
        ctx.lineTo(x, y);
      }
      ctx.strokeStyle = 'rgba(0,212,255,0.12)';
      ctx.lineWidth = 2;
      ctx.stroke();

      rafRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="section-padding" style={{
      background: 'rgba(7,13,28,0.98)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Canvas background */}
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} />

      {/* Right glow */}
      <div style={{
        position: 'absolute', right: '-10%', top: '20%',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(107,33,232,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ maxWidth: 640, marginBottom: '4rem' }}>
          <div className="eyebrow" style={{ marginBottom: '1rem' }}>AI Solutions</div>
          <h2 className="text-display-md" style={{ color: '#E8EEFF', marginBottom: '1rem' }}>
            Give Every Conversation<br />
            <span className="gradient-text-violet">Intelligence.</span>
          </h2>
          <p className="text-body-lg" style={{ color: '#8BA3CC', lineHeight: 1.7 }}>
            Deploy AI voice agents, intelligent automation and conversational AI systems that work alongside your call center team — handling routine interactions and amplifying human performance.
          </p>
        </div>

        {/* AI flow visualization */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0',
          marginBottom: '4rem',
          overflowX: 'auto',
          padding: '1.5rem 0',
        }}>
          {flowSteps.map((step, i) => (
            <div key={step.label} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
              {/* Node */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                <div style={{
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  background: `${step.color}18`,
                  border: `2px solid ${step.color}40`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.375rem',
                  boxShadow: `0 0 20px ${step.color}25`,
                  transition: 'all 0.3s',
                }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = 'scale(1.12)';
                    el.style.boxShadow = `0 0 30px ${step.color}50`;
                    el.style.borderColor = step.color;
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = 'scale(1)';
                    el.style.boxShadow = `0 0 20px ${step.color}25`;
                    el.style.borderColor = `${step.color}40`;
                  }}
                >
                  {step.icon}
                </div>
                <span style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '0.6rem',
                  letterSpacing: '0.1em',
                  color: step.color,
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}>
                  {step.label}
                </span>
              </div>

              {/* Arrow */}
              {i < flowSteps.length - 1 && (
                <div style={{ display: 'flex', alignItems: 'center', padding: '0 0.875rem', marginBottom: '1.5rem' }}>
                  <div style={{ width: 40, height: 1, background: `linear-gradient(90deg, ${step.color}40, ${flowSteps[i + 1].color}40)` }} />
                  <div style={{ color: '#4A6A99', fontSize: '0.6rem' }}>›</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Services grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.25rem',
          marginBottom: '3rem',
        }}>
          {aiServices.map((s, i) => (
            <div
              key={s.label}
              onClick={() => setActiveService(activeService === i ? null : i)}
              style={{
                background: activeService === i ? 'rgba(107,33,232,0.1)' : 'rgba(7,13,28,0.8)',
                border: `1px solid ${activeService === i ? 'rgba(107,33,232,0.4)' : 'rgba(0,102,255,0.1)'}`,
                borderRadius: 16,
                padding: '1.5rem',
                cursor: 'none',
                backdropFilter: 'blur(12px)',
                transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                boxShadow: activeService === i ? '0 0 30px rgba(107,33,232,0.15)' : 'none',
              }}
              onMouseEnter={e => {
                if (activeService !== i) {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = 'rgba(107,33,232,0.06)';
                  el.style.borderColor = 'rgba(107,33,232,0.25)';
                  el.style.transform = 'translateY(-4px)';
                }
              }}
              onMouseLeave={e => {
                if (activeService !== i) {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = 'rgba(7,13,28,0.8)';
                  el.style.borderColor = 'rgba(0,102,255,0.1)';
                  el.style.transform = 'translateY(0)';
                }
              }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{s.icon}</div>
              <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 600, fontSize: '1rem', color: '#E8EEFF', marginBottom: '0.5rem' }}>
                {s.label}
              </div>
              <p style={{ color: '#8BA3CC', fontSize: '0.875rem', lineHeight: 1.65, fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/ai-solutions" className="btn-magnetic btn-primary" style={{ textDecoration: 'none' }}>
            <span style={{ position: 'relative', zIndex: 1 }}>Explore AI Solutions</span>
          </Link>
          <Link href="/contact" className="btn-magnetic btn-secondary" style={{ textDecoration: 'none' }}>
            Talk to an AI Expert
          </Link>
        </div>
      </div>
    </section>
  );
}
