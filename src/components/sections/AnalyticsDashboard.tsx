'use client';

import { useState, useEffect } from 'react';

interface Metric {
  label: string;
  value: string;
  unit: string;
  color: string;
  trend: string;
  trendUp: boolean;
}

const metrics: Metric[] = [
  { label: 'Active Campaigns', value: '14', unit: '', color: '#0284C7', trend: '+2 today', trendUp: true },
  { label: 'Connected Agents', value: '87', unit: '', color: '#2563EB', trend: '92% online', trendUp: true },
  { label: 'Live Calls in Progress', value: '234', unit: '', color: '#059669', trend: 'Active Stream', trendUp: true },
  { label: 'Live Answer Rate', value: '68.4', unit: '%', color: '#D97706', trend: '+3.2% vs avg', trendUp: true },
  { label: 'Avg Talk Duration', value: '4:12', unit: 'min', color: '#6366F1', trend: 'Optimal Range', trendUp: true },
  { label: 'Queue Abandonment', value: '1.2', unit: '%', color: '#059669', trend: '-0.8% today', trendUp: true },
];

const callVolumeData = [42, 67, 89, 78, 94, 112, 98, 134, 156, 142, 168, 179, 145, 162, 188, 174, 195, 211, 198, 223, 208, 187, 165, 142];

export default function AnalyticsDashboard() {
  const [animatedBars, setAnimatedBars] = useState<number[]>(callVolumeData.map(() => 0));

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedBars(callVolumeData);
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  const maxVal = Math.max(...callVolumeData);

  return (
    <section className="section-padding" style={{ background: '#F8FAFC', position: 'relative' }}>
      <div className="container-xl">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="eyebrow" style={{ marginBottom: '1rem' }}>Platform Telemetry & Observability</div>
          <h2 className="text-display-md" style={{ color: '#0F172A', marginBottom: '0.75rem' }}>
            Complete 360° Visibility Into<br />
            <span className="gradient-text-blue">Your Calling Operations</span>
          </h2>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.375rem 1rem',
            borderRadius: '100px',
            background: 'rgba(217, 119, 6, 0.08)',
            border: '1px solid rgba(217, 119, 6, 0.2)',
            marginTop: '0.75rem',
          }}>
            <span style={{ fontSize: '0.75rem' }}>ℹ️</span>
            <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.675rem', letterSpacing: '0.08em', color: '#D97706', fontWeight: 600 }}>
              DEMO INTERFACE — LIVE SAMPLE DATA FEED
            </span>
          </div>
        </div>

        {/* Dashboard card */}
        <div style={{
          background: '#FFFFFF',
          border: '1px solid rgba(226, 232, 240, 0.9)',
          borderRadius: 24,
          overflow: 'hidden',
          boxShadow: 'var(--shadow-card)',
        }}>
          {/* Dashboard top bar */}
          <div style={{
            background: '#F8FAFC',
            borderBottom: '1px solid rgba(226, 232, 240, 0.9)',
            padding: '0.875rem 1.75rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}>
            <div style={{ display: 'flex', gap: '0.4rem' }}>
              {['#EF4444', '#F59E0B', '#10B981'].map(c => (
                <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
              ))}
            </div>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.7rem', letterSpacing: '0.1em', color: '#64748B', fontWeight: 600 }}>
                VOICE ERA TECH — ENTERPRISE TELEMETRY DASHBOARD v3.2
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#059669', animation: 'signal-pulse 2s ease-in-out infinite' }} />
              <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem', color: '#059669', letterSpacing: '0.08em', fontWeight: 700 }}>LIVE MESH</span>
            </div>
          </div>

          <div style={{ padding: '2rem' }}>
            {/* Metrics row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
              gap: '1rem',
              marginBottom: '2rem',
            }}>
              {metrics.map(m => (
                <div key={m.label} className="dashboard-metric">
                  <div className="value" style={{ color: m.color }}>
                    {m.value}<span style={{ fontSize: '0.9rem', color: '#64748B' }}>{m.unit}</span>
                  </div>
                  <div className="label">{m.label}</div>
                  <div className={`trend ${m.trendUp ? 'trend-up' : 'trend-neutral'}`}>{m.trend}</div>
                </div>
              ))}
            </div>

            {/* Charts row */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }} className="flex flex-col lg:grid">
              {/* Call volume chart */}
              <div style={{
                background: '#F8FAFC',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                borderRadius: 18,
                padding: '1.5rem',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#0F172A' }}>
                    Call Volume Activity — Last 24 Hours
                  </div>
                  <div style={{
                    padding: '0.25rem 0.65rem',
                    borderRadius: '100px',
                    background: 'rgba(5, 150, 105, 0.1)',
                    border: '1px solid rgba(5, 150, 105, 0.2)',
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '0.65rem',
                    color: '#059669',
                    fontWeight: 700,
                  }}>
                    ↑ 18.4% Outbound Traffic
                  </div>
                </div>
                {/* Bar chart */}
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: 90 }}>
                  {animatedBars.map((h, i) => (
                    <div
                      key={i}
                      className="chart-bar"
                      style={{
                        flex: 1,
                        height: `${(h / maxVal) * 100}%`,
                        transition: `height ${0.4 + i * 0.02}s cubic-bezier(0.16,1,0.3,1)`,
                        opacity: h > 180 ? 1 : 0.7,
                      }}
                    />
                  ))}
                </div>
                {/* X axis */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.65rem' }}>
                  {['12:00 AM', '06:00 AM', '12:00 PM', '06:00 PM', 'Current Live'].map(t => (
                    <span key={t} style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.55rem', color: '#64748B', fontWeight: 600 }}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Agent status */}
              <div style={{
                background: '#F8FAFC',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                borderRadius: 18,
                padding: '1.5rem',
              }}>
                <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#0F172A', marginBottom: '1.25rem' }}>
                  Live Agent Allocation
                </div>
                {[
                  { status: 'Active on Calls', count: 62, pct: 71, color: '#059669' },
                  { status: 'Available in Queue', count: 19, pct: 22, color: '#2563EB' },
                  { status: 'Wrap-Up / Disposition', count: 6, pct: 7, color: '#D97706' },
                ].map(a => (
                  <div key={a.status} style={{ marginBottom: '0.85rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                      <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: '0.8rem', color: '#334155', fontWeight: 500 }}>{a.status}</span>
                      <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.75rem', color: a.color, fontWeight: 700 }}>{a.count} ({a.pct}%)</span>
                    </div>
                    <div style={{ height: 6, borderRadius: 3, background: '#E2E8F0' }}>
                      <div style={{
                        height: '100%',
                        width: `${a.pct}%`,
                        background: a.color,
                        borderRadius: 3,
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
