import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cloud Infrastructure & Managed IT Services — Voice Era Tech LLC',
  description: 'High-availability cloud architecture, zero-downtime PBX migration, voice server deployment, security posture, and monitoring.',
};

const services = [
  { name: 'Cloud Infrastructure Configuration', icon: '☁️', color: '#0284C7', href: '/cloud-it/configuration', desc: 'Multi-AZ cloud environments across AWS, GCP, and Azure architected specifically for telephony workloads.' },
  { name: 'Zero-Downtime Cloud Migration', icon: '🚀', color: '#2563EB', href: '/cloud-it/migration', desc: 'Migrate on-premise PBXs, Asterisk, and legacy call centers to cloud infrastructure without dropping calls.' },
  { name: 'Managed Server Deployment & Scaling', icon: '🖥️', color: '#059669', href: '/cloud-it/servers', desc: 'Bare-metal and virtualized servers optimized with voice-tuned Linux kernels for zero packet loss.' },
  { name: 'Enterprise Telephony & Cloud Security', icon: '🔒', color: '#DC2626', href: '/cloud-it/security', desc: 'End-to-end SRTP encryption, SIP toll fraud prevention, DDoS shields, and PCI/HIPAA compliance.' },
  { name: 'Real-Time Infrastructure Monitoring', icon: '📡', color: '#D97706', href: '/cloud-it/monitoring', desc: 'Real-time MOS audio tracking, distributed tracing, and automated PagerDuty/Slack incident alerting.' },
  { name: 'DevOps & CI/CD Telephony Pipelines', icon: '⚙️', color: '#6366F1', href: '/cloud-it/devops', desc: 'Automate build, test, and zero-downtime blue/green deployment pipelines for telephony microservices.' },
  { name: 'Scalable API Infrastructure & Gateways', icon: '🔗', color: '#0284C7', href: '/cloud-it/api', desc: 'High-throughput API gateways and webhook engines capable of processing millions of daily events.' },
];

export default function CloudITPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', background: '#FFFFFF', paddingTop: '8.5rem', paddingBottom: '6rem' }}>
        <section style={{ position: 'relative', paddingBottom: '3.5rem' }}>
          <div className="container-xl" style={{ textAlign: 'center' }}>
            <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>Infrastructure & Networks</div>
            <h1 className="text-display-lg" style={{ color: '#0F172A', marginBottom: '1.25rem' }}>
              Cloud & IT Infrastructure<br />
              <span className="gradient-text-blue">Built for 99.999% SLA Uptime</span>
            </h1>
            <p className="text-body-lg" style={{ color: '#475569', maxWidth: 620, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
              Cloud configuration, SIP Session Border Controllers, and managed IT services designed to support enterprise communication systems.
            </p>
            <Link href="/contact" className="btn-magnetic btn-primary">
              Consult with an Infrastructure Architect →
            </Link>
          </div>
        </section>

        <section style={{ padding: '2rem 0 4rem' }}>
          <div className="container-xl">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
              {services.map(s => (
                <Link key={s.name} href={s.href} className="node-card" style={{ textDecoration: 'none', display: 'block' }}>
                  <div style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>{s.icon}</div>
                  <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '1.2rem', color: '#0F172A', marginBottom: '0.65rem' }}>
                    {s.name}
                  </h2>
                  <p style={{ color: '#475569', fontSize: '0.925rem', lineHeight: 1.65, fontFamily: '"Plus Jakarta Sans", sans-serif', marginBottom: '1.25rem' }}>
                    {s.desc}
                  </p>
                  <span style={{ color: '#2563EB', fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '0.9rem' }}>
                    Explore Infrastructure Blueprint →
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
