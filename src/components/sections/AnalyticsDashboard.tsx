'use client';

import { useState, useEffect } from 'react';

const callVolumeData = [35, 48, 62, 58, 72, 85, 76, 92, 105, 98, 115, 128, 110, 122, 138, 130, 142, 155, 148, 162, 150, 138, 120, 105];

export default function AnalyticsDashboard() {
  const [animatedBars, setAnimatedBars] = useState<number[]>(callVolumeData.map(() => 0));

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedBars(callVolumeData);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const maxVal = Math.max(...callVolumeData);

  return (
    <section
      style={{
        background: '#151D27',
        padding: '6.5rem 0',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(76, 141, 255, 0.08)',
        borderBottom: '1px solid rgba(76, 141, 255, 0.08)',
      }}
    >
      <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="eyebrow" style={{ marginBottom: '1rem' }}>Operational Telemetry</div>
          <h2 className="text-display-md" style={{ color: '#F4F6F8', marginBottom: '0.75rem' }}>
            Mission-Control Telemetry &amp; <span className="gradient-text-blue">Performance Analytics</span>
          </h2>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.25rem 0.75rem',
              borderRadius: '100px',
              background: 'rgba(201, 169, 110, 0.08)',
              border: '1px solid rgba(201, 169, 110, 0.22)',
              marginTop: '0.5rem',
            }}
          >
            <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.625rem', color: '#C9A96E', letterSpacing: '0.08em' }}>
              DEMO INTERFACE — LIVE SAMPLE DATA STREAM
            </span>
          </div>
        </div>

        {/* Dashboard Console Shell */}
        <div
          style={{
            background: '#202B38',
            border: '1px solid rgba(76, 141, 255, 0.16)',
            borderRadius: 20,
            overflow: 'hidden',
            boxShadow: '0 32px 80px rgba(0, 0, 0, 0.5)',
          }}
        >
          {/* Console Top Bar */}
          <div
            style={{
              background: '#151D27',
              borderBottom: '1px solid rgba(76, 141, 255, 0.1)',
              padding: '0.875rem 1.75rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: 9, height: 9, borderRadius: '50%', background: 'rgba(154, 166, 178, 0.3)' }} />
              <div style={{ width: 9, height: 9, borderRadius: '50%', background: 'rgba(154, 166, 178, 0.3)' }} />
              <div style={{ width: 9, height: 9, borderRadius: '50%', background: 'rgba(154, 166, 178, 0.3)' }} />
              <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6875rem', color: '#9AA6B2', marginLeft: '0.5rem', letterSpacing: '0.06em' }}>
                VOICE ERA TECH — TELEMETRY NOC v4.1
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div className="status-operational" />
              <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.625rem', color: '#3AAFA9', letterSpacing: '0.1em' }}>
                LIVE STREAMING
              </span>
            </div>
          </div>

          <div style={{ padding: '2rem' }}>
            {/* Top 4 Metrics Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.25rem',
                marginBottom: '2rem',
              }}
            >
              {[
                { label: 'Active Outbound Lines', value: '482', sub: '+14% pacing', color: '#3157D5' },
                { label: 'Carrier Answer Rate', value: '71.4%', sub: 'STIR/SHAKEN A-Level', color: '#3AAFA9' },
                { label: 'Average Handle Time', value: '3m 42s', sub: 'Target: 4m 00s', color: '#4C8DFF' },
                { label: 'System MOS Score', value: '4.42', sub: 'Pristine HD Audio', color: '#C9A96E' },
              ].map((m) => (
                <div
                  key={m.label}
                  style={{
                    background: '#151D27',
                    border: '1px solid rgba(76, 141, 255, 0.1)',
                    borderRadius: 14,
                    padding: '1.25rem',
                  }}
                >
                  <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.625rem', color: '#9AA6B2', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
                    {m.label}
                  </div>
                  <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: '1.75rem', fontWeight: 800, color: '#F4F6F8', marginBottom: '0.2rem' }}>
                    {m.value}
                  </div>
                  <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: '0.75rem', color: m.color, fontWeight: 500 }}>
                    {m.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Primary & Secondary Charts Row */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
              {/* Call Volume (Royal Blue to Soft Azure) */}
              <div
                style={{
                  background: '#151D27',
                  border: '1px solid rgba(76, 141, 255, 0.1)',
                  borderRadius: 14,
                  padding: '1.5rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div>
                    <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '0.9375rem', color: '#F4F6F8' }}>
                      24-Hour Telephony Concurrency
                    </div>
                    <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.625rem', color: '#9AA6B2' }}>
                      Peak Throughput: 162 Concurrent Calls / Cluster
                    </div>
                  </div>
                  <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6875rem', color: '#4C8DFF' }}>
                    ● Royal Blue Engine
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: 110 }}>
                  {animatedBars.map((h, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        height: `${(h / maxVal) * 100}%`,
                        background: '#3157D5',
                        borderRadius: '3px 3px 0 0',
                        transition: `height ${0.3 + i * 0.02}s cubic-bezier(0.16, 1, 0.3, 1)`,
                        opacity: h > 130 ? 1 : 0.6,
                      }}
                    />
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.5625rem', color: '#5E6A78' }}>
                  <span>00:00</span>
                  <span>06:00</span>
                  <span>12:00</span>
                  <span>18:00</span>
                  <span>23:59</span>
                </div>
              </div>

              {/* Agent Floor Telemetry */}
              <div
                style={{
                  background: '#151D27',
                  border: '1px solid rgba(76, 141, 255, 0.1)',
                  borderRadius: 14,
                  padding: '1.5rem',
                }}
              >
                <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '0.9375rem', color: '#F4F6F8', marginBottom: '1rem' }}>
                  Floor Agent Allocation
                </div>

                {[
                  { label: 'Active on Call', pct: 72, count: '68 Reps', color: '#3AAFA9' },
                  { label: 'Waiting for Connect', pct: 18, count: '17 Reps', color: '#3157D5' },
                  { label: 'Post-Call ACW', pct: 10, count: '9 Reps', color: '#4C8DFF' },
                ].map((item) => (
                  <div key={item.label} style={{ marginBottom: '0.875rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                      <span style={{ color: '#9AA6B2' }}>{item.label}</span>
                      <span style={{ fontFamily: '"JetBrains Mono", monospace', color: '#F4F6F8' }}>{item.count}</span>
                    </div>
                    <div style={{ height: 5, borderRadius: 3, background: 'rgba(11, 15, 20, 0.8)', overflow: 'hidden' }}>
                      <div
                        style={{
                          height: '100%',
                          width: `${item.pct}%`,
                          background: item.color,
                          borderRadius: 3,
                        }}
                      />
                    </div>
                  </div>
                ))}

                <div
                  style={{
                    marginTop: '1.25rem',
                    padding: '0.625rem 0.875rem',
                    borderRadius: 8,
                    background: 'rgba(58, 175, 169, 0.08)',
                    border: '1px solid rgba(58, 175, 169, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <div className="status-operational" />
                  <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.625rem', color: '#3AAFA9' }}>
                    ZERO JITTER DETECTED (0.4ms)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
