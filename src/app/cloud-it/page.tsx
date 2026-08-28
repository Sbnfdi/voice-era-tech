import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/layout/CustomCursor';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cloud & IT Services — Cloud Configuration, Migration & Bare-Metal Infrastructure',
  description: 'Voice Era Tech cloud and IT services: cloud configuration, bare-metal server deployment, PBX migration, security, telemetry monitoring, and API infrastructure.',
};

const services = [
  { name: 'Cloud Configuration', href: '/cloud-it/configuration', icon: '☁️', desc: 'Expert configuration of multi-region cloud environments including compute, VPCs, and auto-scaling.' },
  { name: 'Zero-Downtime Migration', href: '/cloud-it/migration', icon: '🚀', desc: 'Seamless migration of legacy PBX systems, databases, and telephony workloads to cloud infrastructure.' },
  { name: 'Bare-Metal Server Fleet', href: '/cloud-it/servers', icon: '🖥️', desc: 'Managed high-throughput bare-metal servers optimized for low-latency audio packet processing.' },
  { name: 'Enterprise Security & Defense', href: '/cloud-it/security', icon: '🔒', desc: 'SOC-2 Type II, HIPAA, and PCI-DSS compliant security architectures with TLS 1.3 voice encryption.' },
  { name: '24/7 MOS Telemetry NOC', href: '/cloud-it/monitoring', icon: '📡', desc: 'Real-time infrastructure monitoring, SIP error alerting, and Mean Opinion Score (MOS) tracking.' },
  { name: 'DevOps & CI/CD Pipelines', href: '/cloud-it/devops', icon: '⚙️', desc: 'Continuous integration, containerized microservices, and infrastructure-as-code automation.' },
  { name: 'High-Throughput API Gateways', href: '/cloud-it/api', icon: '🔗', desc: 'Scalable API gateway architecture, token-bucket rate limiting, and WebSocket brokers.' },
];

export default function CloudITPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main style={{ minHeight: '100vh', background: '#0B0F14' }}>
        <section style={{ position: 'relative', paddingTop: '9.5rem', paddingBottom: '5rem', overflow: 'hidden' }}>
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.35 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 65% 50% at 50% 0%, rgba(49, 87, 213, 0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
          
          <div className="container-xl" style={{ position: 'relative', textAlign: 'center', zIndex: 1 }}>
            <div className="eyebrow" style={{ color: '#4C8DFF', marginBottom: '1.25rem' }}>Infrastructure Services</div>
            <h1 className="text-display-lg" style={{ color: '#F4F6F8', marginBottom: '1.25rem' }}>
              Engineered for <span className="gradient-text-blue">Five-Nines Availability</span>
            </h1>
            <p className="text-body-lg" style={{ color: '#9AA6B2', maxWidth: 560, margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
              Cloud configuration, bare-metal server deployment, and enterprise IT infrastructure built specifically to support high-throughput telecommunications workloads.
            </p>
            <Link href="/contact" className="btn-primary" data-cursor="CONNECT">
              Discuss Your Cloud Infrastructure →
            </Link>
          </div>
        </section>

        <section style={{ padding: '0 0 7rem' }}>
          <div className="container-xl">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
              {services.map((s) => (
                <Link
                  key={s.name}
                  href={s.href}
                  style={{
                    background: '#151D27',
                    border: '1px solid rgba(76, 141, 255, 0.12)',
                    borderRadius: 16,
                    padding: '2rem',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = '#202B38';
                    el.style.borderColor = 'rgba(76, 141, 255, 0.3)';
                    el.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = '#151D27';
                    el.style.borderColor = 'rgba(76, 141, 255, 0.12)';
                    el.style.transform = 'none';
                  }}
                >
                  <div>
                    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{s.icon}</div>
                    <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '1.125rem', color: '#F4F6F8', marginBottom: '0.5rem' }}>
                      {s.name}
                    </h3>
                    <p style={{ color: '#9AA6B2', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                      {s.desc}
                    </p>
                  </div>
                  <span style={{ color: '#4C8DFF', fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 600, fontSize: '0.8125rem' }}>
                    View Cloud Specifications →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
