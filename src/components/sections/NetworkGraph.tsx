'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface Node {
  id: string;
  name: string;
  category: string;
  icon: string;
  x: number;
  y: number;
  desc: string;
  href: string;
}

const networkNodes: Node[] = [
  { id: 'pstn', name: 'Carrier Gateway', category: 'Telephony Core', icon: '📡', x: 15, y: 35, desc: 'Tier-1 direct peering with global PSTN & telecom carriers', href: '/dialer-systems/voip' },
  { id: 'sip', name: 'SIP SBC Engine', category: 'Signaling', icon: '🌐', x: 32, y: 22, desc: 'High-density session border controller with TLS/SRTP encryption', href: '/dialer-systems/sip' },
  { id: 'dialer', name: 'Predictive Core', category: 'Dialer Platform', icon: '🎯', x: 50, y: 48, desc: 'Statistical pacing algorithm maximizing active talk-time', href: '/dialer-systems/predictive' },
  { id: 'ai', name: 'Voice AI Engine', category: 'Intelligence', icon: '🤖', x: 68, y: 25, desc: 'Sub-600ms conversational AI voice synthesis & NLU', href: '/ai-solutions/voice-agents' },
  { id: 'crm', name: 'CRM Sync Hub', category: 'Integration', icon: '🗂️', x: 82, y: 42, desc: 'Real-time bidirectional synchronization with Salesforce, HubSpot & Zoho', href: '/call-center/crm' },
  { id: 'acd', name: 'Inbound ACD', category: 'Routing', icon: '📲', x: 30, y: 72, desc: 'Skills-based routing with multi-level IVR and virtual queues', href: '/call-center/inbound' },
  { id: 'analytics', name: 'Telemetry Engine', category: 'Analytics', icon: '📊', x: 65, y: 75, desc: 'Live floor telemetry, audio MOS scoring, and sentiment insights', href: '/call-center/analytics' },
];

const connections = [
  ['pstn', 'sip'],
  ['sip', 'dialer'],
  ['sip', 'acd'],
  ['dialer', 'ai'],
  ['dialer', 'analytics'],
  ['ai', 'crm'],
  ['acd', 'crm'],
  ['analytics', 'crm'],
];

export default function NetworkGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeNode, setActiveNode] = useState<Node>(networkNodes[2]); // Default: Predictive Core

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
    let rafId: number;

    const draw = () => {
      tick++;
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      const getPos = (n: Node) => ({
        x: (n.x / 100) * W,
        y: (n.y / 100) * H,
      });

      // Draw connection lines
      connections.forEach(([id1, id2]) => {
        const n1 = networkNodes.find(n => n.id === id1)!;
        const n2 = networkNodes.find(n => n.id === id2)!;
        const p1 = getPos(n1);
        const p2 = getPos(n2);

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = 'rgba(76, 141, 255, 0.1)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Traveling data packet
        const speed = 0.008;
        const t = (tick * speed + (n1.x + n2.x) * 0.01) % 1;
        const px = p1.x + (p2.x - p1.x) * t;
        const py = p1.y + (p2.y - p1.y) * t;

        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#3AAFA9';
        ctx.fill();
      });

      rafId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section
      style={{
        background: '#0B0F14',
        padding: '6.5rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container-xl">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="eyebrow" style={{ marginBottom: '1rem' }}>Architecture Topology</div>
          <h2 className="text-display-md" style={{ color: '#F4F6F8', marginBottom: '1rem' }}>
            Fully Connected <span className="gradient-text-blue">Telephony Infrastructure</span>
          </h2>
          <p className="text-body-lg" style={{ color: '#9AA6B2', maxWidth: 580, margin: '0 auto' }}>
            Every call event, RTP voice packet, and AI interaction flows seamlessly through our high-throughput communication fabric.
          </p>
        </div>

        {/* Interactive Canvas Graph */}
        <div
          style={{
            position: 'relative',
            height: 480,
            background: '#151D27',
            border: '1px solid rgba(76, 141, 255, 0.12)',
            borderRadius: 24,
            overflow: 'hidden',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.45)',
          }}
        >
          <canvas
            ref={canvasRef}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
          />

          {/* Interactive Nodes */}
          {networkNodes.map(node => {
            const isSelected = activeNode.id === node.id;
            return (
              <button
                key={node.id}
                onClick={() => setActiveNode(node)}
                style={{
                  position: 'absolute',
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  transform: 'translate(-50%, -50%)',
                  background: isSelected ? '#202B38' : '#151D27',
                  border: `1.5px solid ${isSelected ? '#3157D5' : 'rgba(76, 141, 255, 0.18)'}`,
                  borderRadius: 14,
                  padding: '0.625rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  cursor: 'pointer',
                  zIndex: 2,
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isSelected ? '0 8px 24px rgba(49, 87, 213, 0.25)' : 'none',
                }}
              >
                <span style={{ fontSize: '1.125rem' }}>{node.icon}</span>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '0.8125rem', color: isSelected ? '#F4F6F8' : '#9AA6B2' }}>
                    {node.name}
                  </div>
                  <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.5625rem', color: isSelected ? '#4C8DFF' : '#5E6A78', textTransform: 'uppercase' }}>
                    {node.category}
                  </div>
                </div>
              </button>
            );
          })}

          {/* Selected Node Drawer / Tooltip */}
          {activeNode && (
            <div
              style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '1.5rem',
                right: '1.5rem',
                background: '#202B38',
                border: '1px solid rgba(76, 141, 255, 0.2)',
                borderRadius: 14,
                padding: '1.25rem 1.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '2rem',
                zIndex: 10,
                backdropFilter: 'blur(12px)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: 42, height: 42, borderRadius: 10, background: '#151D27', border: '1px solid rgba(76, 141, 255, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }}>
                  {activeNode.icon}
                </div>
                <div>
                  <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '1rem', color: '#F4F6F8', marginBottom: '2px' }}>
                    {activeNode.name} — <span style={{ color: '#4C8DFF', fontSize: '0.8125rem', fontWeight: 500 }}>{activeNode.category}</span>
                  </div>
                  <div style={{ color: '#9AA6B2', fontSize: '0.8125rem' }}>
                    {activeNode.desc}
                  </div>
                </div>
              </div>

              <Link
                href={activeNode.href}
                className="btn-primary"
                style={{ padding: '0.5rem 1.25rem', fontSize: '0.8125rem', whiteSpace: 'nowrap' }}
              >
                View System Specs →
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
