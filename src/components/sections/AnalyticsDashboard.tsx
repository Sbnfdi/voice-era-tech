'use client';

import { useRef, useState, useEffect } from 'react';

interface Metric {
  label: string;
  value: string;
  unit: string;
  color: string;
  trend: string;
  trendUp: boolean;
}

const metrics: Metric[] = [
  { label: 'Active Campaigns', value: '14', unit: '', color: '#0066FF', trend: '+2 today', trendUp: true },
  { label: 'Connected Agents', value: '87', unit: '', color: '#00D4FF', trend: '92% online', trendUp: true },
  { label: 'Calls in Progress', value: '234', unit: '', color: '#00E5A0', trend: 'Live', trendUp: true },
  { label: 'Answer Rate', value: '68.4', unit: '%', color: '#FFB800', trend: '+3.2% vs avg', trendUp: true },
  { label: 'Avg Call Duration', value: '4:12', unit: 'min', color: '#8B5CF6', trend: 'On target', trendUp: true },
  { label: 'Queue Depth', value: '1,847', unit: 'leads', color: '#FF6B35', trend: 'Trending down', trendUp: false },
];

const callVolumeData = [42, 67, 89, 78, 94, 112, 98, 134, 156, 142, 168, 179, 145, 162, 188, 174, 195, 211, 198, 223, 208, 187, 165, 142];

export default function AnalyticsDashboard() {
  const [animatedBars, setAnimatedBars] = useState<number[]>(callVolumeData.map(() => 0));

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedBars(callVolumeData);
    }, 400);
    return () => clearTimeout(timeout);
  }, []);

  const maxVal = Math.max(...callVolumeData);

  return (
    <section className="section-padding" style={{
      background: 'var(--c-bg)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />

      <div className="container-xl" style={{ position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="eyebrow" style={{ marginBottom: '1rem' }}>Platform Analytics</div>
          <h2 className="text-display-md" style={{ color: '#E8EEFF', marginBottom: '0.75rem' }}>
            Complete Visibility Into<br />
            <span className="gradient-text-blue">Your Operations</span>
          </h2>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.375rem 1rem',
            borderRadius: '100px',
            background: 'rgba(255,184,0,0.1)',
            border: '1px solid rgba(255,184,0,0.2)',
            marginTop: '0.75rem',
          }}>
            <span style={{ fontSize: '0.75rem' }}>⚠️</span>
            <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem', letterSpacing: '0.1em', color: '#FFB800' }}>
              DEMO INTERFACE — SAMPLE DATA
            </span>
          </div>
        </div>

        {/* Dashboard card */}
        <div style={{
          background: 'rgba(7,13,28,0.95)',
          border: '1px solid rgba(0,102,255,0.15)',
          borderRadius: 24,
          overflow: 'hidden',
          boxShadow: '0 40px 80px rgba(0,0,0,0.4)',
        }}>
          {/* Dashboard top bar */}
          <div style={{
            background: 'rgba(0,102,255,0.06)',
            borderBottom: '1px solid rgba(0,102,255,0.1)',
            padding: '0.875rem 1.75rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}>
            <div style={{ display: 'flex', gap: '0.4rem' }}>
              {['#FF3B5C', '#FFB800', '#00E5A0'].map(c => (
                <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.7 }} />
              ))}
            </div>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem', letterSpacing: '0.1em', color: '#4A6A99' }}>
                VOICEERATECH — PLATFORM DASHBOARD v3.2
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#00E5A0', animation: 'signal-pulse 2s ease-in-out infinite' }} />
              <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6rem', color: '#00E5A0', letterSpacing: '0.08em' }}>LIVE</span>
            </div>
          </div>

          <div style={{ padding: '1.75rem' }}>
            {/* Metrics row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              gap: '1rem',
              marginBottom: '1.75rem',
            }}>
              {metrics.map(m => (
                <div key={m.label} className="dashboard-metric" style={{ borderColor: `${m.color}15` }}>
                  <div className="value" style={{ color: m.color }}>
                    {m.value}<span style={{ fontSize: '0.875rem', color: '#8BA3CC' }}>{m.unit}</span>
                  </div>
                  <div className="label">{m.label}</div>
                  <div className={`trend ${m.trendUp ? 'trend-up' : 'trend-neutral'}`}>{m.trend}</div>
                </div>
              ))}
            </div>

            {/* Charts row */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.25rem' }}>
              {/* Call volume chart */}
              <div style={{
                background: 'rgba(0,102,255,0.04)',
                border: '1px solid rgba(0,102,255,0.1)',
                borderRadius: 16,
                padding: '1.25rem',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 600, fontSize: '0.875rem', color: '#E8EEFF' }}>
                    Call Volume — Last 24h
                  </div>
                  <div style={{
                    padding: '0.25rem 0.625rem',
                    borderRadius: '100px',
                    background: 'rgba(0,230,160,0.1)',
                    border: '1px solid rgba(0,230,160,0.2)',
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '0.6rem',
                    color: '#00E5A0',
                    letterSpacing: '0.08em',
                  }}>
                    ↑ 18% vs yesterday
                  </div>
                </div>
                {/* Bar chart */}
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: 80 }}>
                  {animatedBars.map((h, i) => (
                    <div
                      key={i}
                      className="chart-bar"
                      style={{
                        flex: 1,
                        height: `${(h / maxVal) * 100}%`,
                        transition: `height ${0.5 + i * 0.02}s cubic-bezier(0.16,1,0.3,1)`,
                        opacity: h > 180 ? 1 : 0.6,
                      }}
                    />
                  ))}
                </div>
                {/* X axis */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem' }}>
                  {['12AM', '6AM', '12PM', '6PM', 'Now'].map(t => (
                    <span key={t} style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.5rem', color: '#4A6A99', letterSpacing: '0.05em' }}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Agent activity */}
              <div style={{
                background: 'rgba(0,102,255,0.04)',
                border: '1px solid rgba(0,102,255,0.1)',
                borderRadius: 16,
                padding: '1.25rem',
              }}>
                <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 600, fontSize: '0.875rem', color: '#E8EEFF', marginBottom: '1rem' }}>
                  Agent Status
                </div>
                {[
                  { status: 'On Call', count: 62, pct: 71, color: '#00E5A0' },
                  { status: 'Available', count: 19, pct: 22, color: '#0066FF' },
                  { status: 'In Wrap-Up', count: 6, pct: 7, color: '#FFB800' },
                ].map(a => (
                  <div key={a.status} style={{ marginBottom: '0.75rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                      <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: '0.75rem', color: '#8BA3CC' }}>{a.status}</span>
                      <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.7rem', color: a.color }}>{a.count}</span>
                    </div>
                    <div style={{ height: 4, borderRadius: 2, background: 'rgba(0,102,255,0.1)' }}>
                      <div style={{
                        height: '100%',
                        width: `${a.pct}%`,
                        background: a.color,
                        borderRadius: 2,
                        transition: 'width 0.8s cubic-bezier(0.16,1,0.3,1)',
                        boxShadow: `0 0 8px ${a.color}50`,
                      }} />
                    </div>
                  </div>
                ))}

                <div style={{
                  marginTop: '1rem',
                  padding: '0.75rem',
                  borderRadius: 10,
                  background: 'rgba(0,230,160,0.05)',
                  border: '1px solid rgba(0,230,160,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#00E5A0', animation: 'signal-pulse 2s ease-in-out infinite' }} />
                  <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6rem', color: '#00E5A0', letterSpacing: '0.08em' }}>
                    ALL SYSTEMS ACTIVE
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
