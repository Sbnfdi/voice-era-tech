import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Custom Software & Web Development — Voice Era Tech LLC',
  description: 'Enterprise website development, complex web applications, SaaS engineering, bespoke CRM systems, and API development.',
};

const services = [
  { name: 'Enterprise Website Development', icon: '🌐', color: '#0D9488', href: '/development/websites', desc: 'World-class corporate websites engineered with Next.js, 3D WebGL visuals, and 100/100 Core Web Vitals.' },
  { name: 'Complex Web Application Engineering', icon: '💻', color: '#2563EB', href: '/development/web-apps', desc: 'Real-time WebSocket web applications, agent softphone dashboards, and reactive customer portals.' },
  { name: 'SaaS Product Architecture & Engineering', icon: '☁️', color: '#0284C7', href: '/development/saas', desc: 'Turnkey Software-as-a-Service engineering with multi-tenant isolation, Stripe billing, and user auth.' },
  { name: 'Custom Enterprise Software', icon: '⚙️', color: '#6366F1', href: '/development/custom', desc: 'Bespoke software platforms built from scratch for proprietary business processes with full IP ownership.' },
  { name: 'Custom CRM Development & Modernization', icon: '🗂️', color: '#D97706', href: '/development/crm', desc: 'Ultra-fast custom CRM workspaces with native embedded dialers, lead routing, and instant screen pops.' },
  { name: 'Custom API Engineering & Integrations', icon: '🔗', color: '#DC2626', href: '/development/api', desc: 'High-throughput RESTful and GraphQL APIs, Kafka event streams, and third-party SaaS connectors.' },
  { name: 'Enterprise UI/UX Design & Design Systems', icon: '🎨', color: '#0284C7', href: '/development/design', desc: 'Intuitive user interface design, interactive Figma prototypes, and complete tokenized design systems.' },
];

export default function DevelopmentPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', background: '#FFFFFF', paddingTop: '8.5rem', paddingBottom: '6rem' }}>
        <section style={{ position: 'relative', paddingBottom: '3.5rem' }}>
          <div className="container-xl" style={{ textAlign: 'center' }}>
            <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>Engineering & Digital Platforms</div>
            <h1 className="text-display-lg" style={{ color: '#0F172A', marginBottom: '1.25rem' }}>
              Software & Web Engineering<br />
              <span className="gradient-text-blue">Built for Enterprise Scale</span>
            </h1>
            <p className="text-body-lg" style={{ color: '#475569', maxWidth: 620, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
              From high-converting corporate web portals to complex SaaS architectures and custom enterprise software — Voice Era Tech builds software that performs.
            </p>
            <Link href="/contact" className="btn-magnetic btn-primary">
              Start a Software Project →
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
                    View Engineering Specs →
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
