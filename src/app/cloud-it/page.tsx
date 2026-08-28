import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/layout/CustomCursor';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cloud & IT Services — Cloud Configuration, Migration & Infrastructure',
  description: 'Voice Era Tech cloud and IT services: cloud configuration, server deployment, migration, security, monitoring and API infrastructure for businesses.',
};

const services = [
  { name: 'Cloud Configuration', icon: '☁️', color: '#4A9EFF', desc: 'Expert configuration of cloud environments including compute, networking, storage and security policies.' },
  { name: 'Cloud Migration', icon: '🚀', color: '#0066FF', desc: 'Seamless migration of workloads, databases and applications from on-premise or legacy cloud environments.' },
  { name: 'Server Deployment', icon: '🖥️', color: '#00D4FF', desc: 'Managed server deployment, configuration and optimization for your application and communication workloads.' },
  { name: 'Security', icon: '🔒', color: '#FF3B5C', desc: 'Enterprise security architecture including access controls, network security, encryption and compliance.' },
  { name: 'Monitoring', icon: '📡', color: '#00E5A0', desc: 'Real-time infrastructure monitoring, alerting, uptime tracking and performance visibility across your stack.' },
  { name: 'DevOps', icon: '⚙️', color: '#FFB800', desc: 'CI/CD pipelines, containerization, infrastructure-as-code and automated deployment workflows.' },
  { name: 'API Infrastructure', icon: '🔗', color: '#8B5CF6', desc: 'Scalable API gateway architecture, rate limiting, authentication and integration connectivity.' },
];

export default function CloudITPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main style={{ minHeight: '100vh', background: 'var(--c-bg)' }}>
        <section style={{ position: 'relative', paddingTop: '9rem', paddingBottom: '5rem', overflow: 'hidden' }}>
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(74,158,255,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="container-xl" style={{ position: 'relative', textAlign: 'center' }}>
            <div className="eyebrow" style={{ color: '#4A9EFF', marginBottom: '1.25rem' }}>Cloud & IT</div>
            <h1 className="text-display-lg" style={{ color: '#E8EEFF', marginBottom: '1.25rem' }}>
              Designed for<br />
              <span className="gradient-text-blue">High Availability</span>
            </h1>
            <p className="text-body-lg" style={{ color: '#8BA3CC', maxWidth: 560, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
              Cloud configuration, infrastructure deployment and IT services built to support enterprise communication systems, dialer platforms and business applications.
            </p>
            <Link href="/contact" className="btn-magnetic btn-primary" style={{ textDecoration: 'none' }}>
              <span style={{ position: 'relative', zIndex: 1 }}>Discuss Your Infrastructure</span>
            </Link>
          </div>
        </section>
        <section style={{ padding: '4rem 0 7rem' }}>
          <div className="container-xl">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
              {services.map(s => (
                <div key={s.name} className="node-card">
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{s.icon}</div>
                  <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '1.125rem', color: '#E8EEFF', marginBottom: '0.5rem' }}>{s.name}</div>
                  <p style={{ color: '#8BA3CC', fontSize: '0.875rem', lineHeight: 1.65, fontFamily: '"Plus Jakarta Sans", sans-serif', marginBottom: '1rem' }}>{s.desc}</p>
                  <Link href="/contact" style={{ color: s.color, textDecoration: 'none', fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 600, fontSize: '0.875rem' }}>Learn more →</Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
