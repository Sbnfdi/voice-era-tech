'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';

interface Node {
  id: string;
  label: string;
  icon: string;
  x: number;
  y: number;
  color: string;
  desc: string;
  detail: string;
}

const nodes: Node[] = [
  { id: 'dialer', label: 'Dialer Engine', icon: '📡', x: 50, y: 50, color: '#0066FF', desc: 'Core dialing system', detail: 'Predictive, Power, Progressive and Preview dialer modes with intelligent pacing algorithms and campaign controls.' },
  { id: 'campaigns', label: 'Campaigns', icon: '🎯', x: 15, y: 20, color: '#00D4FF', desc: 'Campaign management', detail: 'Build, schedule and manage outbound and inbound calling campaigns with targeting rules and time-zone intelligence.' },
  { id: 'agents', label: 'Agents', icon: '👤', x: 85, y: 20, color: '#00E5A0', desc: 'Agent workspace', detail: 'Real-time agent dashboards, skill-based routing, performance monitoring and automated disposition capture.' },
  { id: 'leads', label: 'Leads', icon: '📋', x: 10, y: 55, color: '#FFB800', desc: 'Lead management', detail: 'Import, clean, deduplicate and prioritize lead lists with rules-based assignment and automatic recycling.' },
  { id: 'crm', label: 'CRM', icon: '🗂️', x: 90, y: 55, color: '#8B5CF6', desc: 'CRM integration', detail: 'Bidirectional sync with Salesforce, HubSpot, Zoho and custom CRM systems. Full contact history on every call.' },
  { id: 'voip', label: 'VoIP / SIP', icon: '🌐', x: 18, y: 85, color: '#00D4FF', desc: 'Telephony layer', detail: 'Enterprise SIP trunking, carrier-grade VoIP infrastructure, number management and call quality monitoring.' },
  { id: 'ai', label: 'AI Engine', icon: '🤖', x: 82, y: 85, color: '#6B21E8', desc: 'AI & automation', detail: 'Real-time call transcription, sentiment analysis, AI voice agents, lead scoring and predictive analytics.' },
  { id: 'analytics', label: 'Analytics', icon: '📊', x: 50, y: 88, color: '#FF6B35', desc: 'Performance data', detail: 'Live dashboards, historical reports, call recording analytics, conversion tracking and campaign ROI measurement.' },
  { id: 'cloud', label: 'Cloud', icon: '☁️', x: 50, y: 15, color: '#4A9EFF', desc: 'Cloud infrastructure', detail: 'Auto-scaling cloud infrastructure, multi-region redundancy, uptime monitoring and disaster recovery.' },
];

const connectionPairs = [
  ['dialer', 'campaigns'], ['dialer', 'agents'], ['dialer', 'leads'],
  ['dialer', 'crm'], ['dialer', 'voip'], ['dialer', 'ai'],
  ['dialer', 'analytics'], ['dialer', 'cloud'],
  ['ai', 'crm'], ['agents', 'crm'], ['campaigns', 'leads'],
];

export default function NetworkGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeNode, setActiveNode] = useState<Node | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const tickRef = useRef(0);
  const rafRef = useRef<number>(0);

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

    const packets: { from: string; to: string; t: number; speed: number }[] = [];
    connectionPairs.forEach(([from, to]) => {
      packets.push({ from, to, t: Math.random(), speed: 0.003 + Math.random() * 0.003 });
    });

    const draw = () => {
      tickRef.current++;
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      const getPos = (n: Node) => ({
        x: (n.x / 100) * W,
        y: (n.y / 100) * H,
      });

      // Draw connections
      connectionPairs.forEach(([fromId, toId]) => {
        const from = nodes.find(n => n.id === fromId)!;
        const to = nodes.find(n => n.id === toId)!;
        const fp = getPos(from), tp = getPos(to);
        const isActive = fromId === hoveredNode || toId === hoveredNode;

        ctx.beginPath();
        ctx.moveTo(fp.x, fp.y);
        ctx.lineTo(tp.x, tp.y);
        ctx.strokeStyle = isActive ? 'rgba(0,212,255,0.25)' : 'rgba(0,102,255,0.1)';
        ctx.lineWidth = isActive ? 1.5 : 1;
        ctx.stroke();
      });

      // Draw packets
      packets.forEach(pkt => {
        pkt.t = (pkt.t + pkt.speed) % 1;
        const from = nodes.find(n => n.id === pkt.from)!;
        const to = nodes.find(n => n.id === pkt.to)!;
        const fp = getPos(from), tp = getPos(to);
        const px = fp.x + (tp.x - fp.x) * pkt.t;
        const py = fp.y + (tp.y - fp.y) * pkt.t;
        const alpha = Math.sin(pkt.t * Math.PI);
        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,212,255,${alpha * 0.7})`;
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [hoveredNode]);

  return (
    <section className="section-padding" style={{ background: 'var(--c-bg)', position: 'relative', overflow: 'hidden' }}>
      <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,102,255,0.07) 0%, transparent 70%)' }} />

      <div className="container-xl" style={{ position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="eyebrow" style={{ marginBottom: '1rem' }}>Dialer Infrastructure</div>
          <h2 className="text-display-md" style={{ color: '#E8EEFF', marginBottom: '1rem' }}>
            Your Calls. Your Campaigns.<br />
            <span className="gradient-text-blue">Your Control.</span>
          </h2>
          <p className="text-body-lg" style={{ color: '#8BA3CC', maxWidth: 560, margin: '0 auto' }}>
            Every component of your call center infrastructure — connected, orchestrated and visible from one platform.
          </p>
        </div>

        {/* Graph + detail panel */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '3rem', alignItems: 'start' }}>
          {/* Relative container for canvas + node buttons */}
          <div style={{ position: 'relative', aspectRatio: '4/3', minHeight: 500 }}>
            <canvas
              ref={canvasRef}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
            />

            {/* Node buttons */}
            {nodes.map(node => (
              <button
                key={node.id}
                onClick={() => setActiveNode(activeNode?.id === node.id ? null : node)}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                style={{
                  position: 'absolute',
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  transform: 'translate(-50%, -50%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.375rem',
                  background: 'none',
                  border: 'none',
                  cursor: 'none',
                  zIndex: 10,
                }}
                data-cursor="EXPLORE"
              >
                {/* Node circle */}
                <div style={{
                  width: node.id === 'dialer' ? 72 : 52,
                  height: node.id === 'dialer' ? 72 : 52,
                  borderRadius: '50%',
                  background: activeNode?.id === node.id
                    ? node.color
                    : `${node.color}22`,
                  border: `${node.id === 'dialer' ? 2 : 1.5}px solid ${activeNode?.id === node.id ? node.color : `${node.color}55`}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: node.id === 'dialer' ? '1.5rem' : '1.125rem',
                  boxShadow: hoveredNode === node.id || activeNode?.id === node.id
                    ? `0 0 24px ${node.color}55`
                    : 'none',
                  transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                  transform: hoveredNode === node.id ? 'scale(1.12)' : 'scale(1)',
                  animation: node.id === 'dialer' ? 'signal-pulse 3s ease-in-out infinite' : 'none',
                }}>
                  {node.icon}
                </div>
                {/* Label */}
                <span style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '0.6rem',
                  letterSpacing: '0.08em',
                  color: hoveredNode === node.id || activeNode?.id === node.id ? node.color : '#4A6A99',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  transition: 'color 0.2s',
                }}>
                  {node.label}
                </span>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div>
            {activeNode ? (
              <div style={{
                background: 'rgba(7,13,28,0.9)',
                border: `1px solid ${activeNode.color}33`,
                borderRadius: 20,
                padding: '2rem',
                backdropFilter: 'blur(16px)',
                animation: 'fade-up 0.3s cubic-bezier(0.16,1,0.3,1)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: `${activeNode.color}15`,
                    border: `1px solid ${activeNode.color}33`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                  }}>
                    {activeNode.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '1.125rem', color: '#E8EEFF' }}>
                      {activeNode.label}
                    </div>
                    <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem', letterSpacing: '0.1em', color: '#4A6A99', textTransform: 'uppercase' }}>
                      {activeNode.desc}
                    </div>
                  </div>
                </div>
                <p style={{ color: '#8BA3CC', fontSize: '0.9375rem', lineHeight: 1.7, fontFamily: '"Plus Jakarta Sans", sans-serif', marginBottom: '1.5rem' }}>
                  {activeNode.detail}
                </p>
                <Link
                  href="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: activeNode.color,
                    textDecoration: 'none',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                  }}
                >
                  Learn more →
                </Link>
              </div>
            ) : (
              <div style={{
                background: 'rgba(7,13,28,0.6)',
                border: '1px solid rgba(0,102,255,0.1)',
                borderRadius: 20,
                padding: '2rem',
                backdropFilter: 'blur(16px)',
              }}>
                <div className="eyebrow" style={{ marginBottom: '1rem' }}>Interactive Map</div>
                <p style={{ color: '#8BA3CC', fontSize: '0.9375rem', lineHeight: 1.7, fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                  Click any component on the infrastructure map to explore how each part of the Voice Era Tech platform works together.
                </p>
                <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                  {nodes.slice(0, 5).map(n => (
                    <button
                      key={n.id}
                      onClick={() => setActiveNode(n)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        background: 'none',
                        border: 'none',
                        cursor: 'none',
                        padding: '0.5rem 0',
                        textAlign: 'left',
                      }}
                    >
                      <div style={{
                        width: 8, height: 8, borderRadius: '50%',
                        background: n.color,
                        boxShadow: `0 0 6px ${n.color}`,
                        flexShrink: 0,
                      }} />
                      <span style={{
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        fontSize: '0.875rem',
                        color: '#8BA3CC',
                      }}>
                        {n.label}
                      </span>
                      <span style={{ marginLeft: 'auto', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem', color: '#4A6A99' }}>
                        →
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem' }}>
              <Link href="/dialer-systems" className="btn-magnetic btn-primary" style={{ flex: 1, textDecoration: 'none', textAlign: 'center', fontSize: '0.875rem' }}>
                <span style={{ position: 'relative', zIndex: 1 }}>Explore Dialer Systems</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
