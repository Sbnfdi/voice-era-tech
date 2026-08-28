import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/layout/CustomCursor';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Software & Website Development — Custom Software, SaaS & Web Applications',
  description: 'Voice Era Tech development services: website development, SaaS platforms, custom software, web applications, CRM development and API engineering.',
};

const services = [
  { name: 'Website Development', icon: '🌐', color: '#00E5A0', desc: 'Premium custom websites designed and built for performance, conversion and brand credibility.' },
  { name: 'Web Applications', icon: '💻', color: '#0066FF', desc: 'Complex web application platforms with authentication, databases, APIs and real-time functionality.' },
  { name: 'SaaS Development', icon: '☁️', color: '#00D4FF', desc: 'End-to-end Software-as-a-Service product development from architecture to deployment.' },
  { name: 'Custom Software', icon: '⚙️', color: '#8B5CF6', desc: 'Purpose-built software solutions for unique business requirements that off-the-shelf products cannot address.' },
  { name: 'CRM Development', icon: '🗂️', color: '#FFB800', desc: 'Custom CRM systems and CRM integrations built for your specific sales and customer management workflows.' },
  { name: 'API Development', icon: '🔗', color: '#FF6B35', desc: 'RESTful and GraphQL API development, documentation and integration services.' },
  { name: 'UI/UX Design', icon: '🎨', color: '#4A9EFF', desc: 'Premium interface design for digital products — focused on usability, visual quality and conversion.' },
];

export default function DevelopmentPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main style={{ minHeight: '100vh', background: 'var(--c-bg)' }}>
        <section style={{ position: 'relative', paddingTop: '9rem', paddingBottom: '5rem', overflow: 'hidden' }}>
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,229,160,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="container-xl" style={{ position: 'relative', textAlign: 'center' }}>
            <div className="eyebrow" style={{ color: '#00E5A0', marginBottom: '1.25rem' }}>Development Services</div>
            <h1 className="text-display-lg" style={{ color: '#E8EEFF', marginBottom: '1.25rem' }}>
              Software Built for<br />
              <span className="gradient-text-blue">Modern Businesses</span>
            </h1>
            <p className="text-body-lg" style={{ color: '#8BA3CC', maxWidth: 560, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
              From premium websites to complex SaaS platforms and custom enterprise software — Voice Era Tech delivers digital products that perform.
            </p>
            <Link href="/contact" className="btn-magnetic btn-primary" style={{ textDecoration: 'none' }}>
              <span style={{ position: 'relative', zIndex: 1 }}>Start a Project</span>
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
