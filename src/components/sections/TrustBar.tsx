'use client';

const capabilities = [
  { icon: '📡', label: 'Call Center Infrastructure', desc: 'Enterprise-scale dialer systems' },
  { icon: '📞', label: 'VoIP / SIP', desc: 'Internet-based calling protocols' },
  { icon: '☁️', label: 'Cloud', desc: 'Scalable cloud architecture' },
  { icon: '🤖', label: 'AI Agents', desc: 'Intelligent voice automation' },
  { icon: '⚙️', label: 'Automation', desc: 'Workflow optimization' },
  { icon: '📊', label: 'CRM Integration', desc: 'Connected customer data' },
  { icon: '🔗', label: 'APIs', desc: 'Seamless integrations' },
  { icon: '💻', label: 'Enterprise Software', desc: 'Custom technology solutions' },
];

export default function TrustBar() {
  return (
    <section style={{
      padding: '3rem 0',
      background: 'rgba(7,13,28,0.8)',
      borderTop: '1px solid rgba(0,102,255,0.08)',
      borderBottom: '1px solid rgba(0,102,255,0.08)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(90deg, transparent 0%, rgba(0,102,255,0.03) 50%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      <div className="container-xl" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="eyebrow">Technology Built for Modern Communication</div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem',
        }}>
          {capabilities.map((cap, i) => (
            <div
              key={cap.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.875rem',
                padding: '1rem 1.25rem',
                borderRadius: 14,
                background: 'rgba(0,102,255,0.04)',
                border: '1px solid rgba(0,102,255,0.08)',
                transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                animationDelay: `${i * 0.08}s`,
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'rgba(0,102,255,0.09)';
                el.style.borderColor = 'rgba(0,212,255,0.2)';
                el.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'rgba(0,102,255,0.04)';
                el.style.borderColor = 'rgba(0,102,255,0.08)';
                el.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: 'rgba(0,102,255,0.1)',
                border: '1px solid rgba(0,102,255,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.125rem',
                flexShrink: 0,
              }}>
                {cap.icon}
              </div>
              <div>
                <div style={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  color: '#E8EEFF',
                  marginBottom: '2px',
                }}>
                  {cap.label}
                </div>
                <div style={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: '0.75rem',
                  color: '#4A6A99',
                }}>
                  {cap.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .trust-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 500px) {
          .trust-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
