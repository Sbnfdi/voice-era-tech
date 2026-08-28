import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/layout/CustomCursor';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Software & Web Engineering — Custom Software, SaaS & Web Platforms',
  description: 'Voice Era Tech development services: website development, SaaS platforms, custom software, web applications, CRM systems and API engineering.',
};

const services = [
  { name: 'Enterprise Website Development', href: '/development/websites', icon: '🌐', desc: 'Bespoke custom corporate websites designed and engineered for speed, SEO, and brand credibility.' },
  { name: 'Custom Web Applications', href: '/development/web-apps', icon: '💻', desc: 'Complex web platforms with real-time data streaming, granular RBAC, and cloud resilience.' },
  { name: 'B2B SaaS Engineering', href: '/development/saas', icon: '☁️', desc: 'End-to-end Software-as-a-Service product engineering from multi-tenancy to automated billing.' },
  { name: 'Bespoke Enterprise Software', href: '/development/custom', icon: '⚙️', desc: 'Purpose-built software solutions for unique business workflows that standard tools cannot address.' },
  { name: 'Custom CRM Development', href: '/development/crm', icon: '🗂️', desc: 'Tailored CRM systems and CTI integrations built for high-velocity sales and service workflows.' },
  { name: 'API Engineering & Webhooks', href: '/development/api', icon: '🔗', desc: 'RESTful and GraphQL API development, interactive OpenAPI documentation, and event pipelines.' },
  { name: 'UI/UX Product Design', href: '/development/design', icon: '🎨', desc: 'Premium interface design and tokenized design systems created for enterprise usability.' },
];

export default function DevelopmentPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main style={{ minHeight: '100vh', background: '#0B0F14' }}>
        <section style={{ position: 'relative', paddingTop: '9.5rem', paddingBottom: '5rem', overflow: 'hidden' }}>
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.35 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 65% 50% at 50% 0%, rgba(49, 87, 213, 0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
          
          <div className="container-xl" style={{ position: 'relative', textAlign: 'center', zIndex: 1 }}>
            <div className="eyebrow" style={{ color: '#4C8DFF', marginBottom: '1.25rem' }}>Software Engineering</div>
            <h1 className="text-display-lg" style={{ color: '#F4F6F8', marginBottom: '1.25rem' }}>
              Software Engineered for <span className="gradient-text-blue">Modern Enterprise</span>
            </h1>
            <p className="text-body-lg" style={{ color: '#9AA6B2', maxWidth: 560, margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
              From high-performance corporate web platforms to complex B2B SaaS products and bespoke enterprise software — Voice Era Tech delivers digital products that scale.
            </p>
            <Link href="/contact" className="btn-primary" data-cursor="CONNECT">
              Start an Engineering Project →
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
                  className="node-card"
                  style={{
                    padding: '2rem',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
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
