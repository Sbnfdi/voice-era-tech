'use client';

const badges = [
  { label: 'Carrier-Grade Telephony', sub: 'Tier-1 Direct Peering', icon: '📡' },
  { label: 'TCPA & STIR/SHAKEN', sub: 'A-Level Attestation', icon: '🛡️' },
  { label: 'Sub-35ms Latency', sub: 'Low Jitter RTP Engine', icon: '⚡' },
  { label: 'SOC-2 Type II Audited', sub: 'Enterprise Security', icon: '🔒' },
  { label: '99.999% SLA Uptime', sub: 'Multi-Region Failover', icon: '☁️' },
];

export default function TrustBar() {
  return (
    <section
      style={{
        background: '#151D27',
        borderTop: '1px solid rgba(76, 141, 255, 0.08)',
        borderBottom: '1px solid rgba(76, 141, 255, 0.08)',
        padding: '2.5rem 0',
      }}
    >
      <div className="container-xl">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: '1.25rem',
            alignItems: 'center',
          }}
        >
          {badges.map(b => (
            <div
              key={b.label}
              style={{
                background: '#202B38',
                border: '1px solid rgba(76, 141, 255, 0.1)',
                borderRadius: 12,
                padding: '1rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.875rem',
                transition: 'all 0.2s ease',
              }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  background: 'rgba(49, 87, 213, 0.12)',
                  border: '1px solid rgba(49, 87, 213, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.125rem',
                  flexShrink: 0,
                }}
              >
                {b.icon}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontWeight: 700,
                    fontSize: '0.8125rem',
                    color: '#F4F6F8',
                    lineHeight: 1.25,
                    marginBottom: '2px',
                  }}
                >
                  {b.label}
                </div>
                <div
                  style={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '0.625rem',
                    color: '#9AA6B2',
                    letterSpacing: '0.04em',
                  }}
                >
                  {b.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
