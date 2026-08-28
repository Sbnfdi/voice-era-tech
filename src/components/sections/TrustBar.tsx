'use client';

const items = [
  { icon: '📡', label: 'PREDICTIVE & POWER DIALERS' },
  { icon: '🤖', label: 'AUTONOMOUS VOICE AI AGENTS' },
  { icon: '🌐', label: 'TIER-1 CARRIER SIP TRUNKING' },
  { icon: '🏢', label: 'MULTI-TENANT BPO PLATFORM' },
  { icon: '☁️', label: 'AUTO-SCALING CLOUD INFRA' },
  { icon: '⚡', label: 'SUB-SECOND CRM DISPOSITION' },
  { icon: '🔒', label: 'STIR/SHAKEN A-ATTESTATION' },
  { icon: '📊', label: 'REAL-TIME MOS OBSERVE' },
];

export default function TrustBar() {
  return (
    <section
      style={{
        background: '#F8FAFC',
        borderTop: '1px solid rgba(226, 232, 240, 0.9)',
        borderBottom: '1px solid rgba(226, 232, 240, 0.9)',
        padding: '1.25rem 0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div style={{ display: 'flex', width: 'max-content', gap: '3rem', animation: 'marquee 35s linear infinite' }}>
        {[...items, ...items, ...items].map((item, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              whiteSpace: 'nowrap',
            }}
          >
            <span style={{ fontSize: '1rem' }}>{item.icon}</span>
            <span
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.725rem',
                letterSpacing: '0.12em',
                color: '#334155',
                fontWeight: 600,
              }}
            >
              {item.label}
            </span>
            <span style={{ color: '#CBD5E1', margin: '0 0.5rem' }}>•</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}
