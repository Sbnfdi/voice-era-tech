import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/layout/CustomCursor';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Industry Solutions — Tailored Telephony & AI for Every Sector',
  description: 'Explore Voice Era Tech tailored communications and dialer infrastructure across BPOs, Financial Services, Healthcare, Real Estate, Insurance, and E-Commerce.',
};

const industryList = [
  { slug: 'bpo', name: 'BPO & Call Centers', icon: '🏢', color: '#0066FF', desc: 'High-density multi-tenant dialers, white-label client reporting, and automated usage billing.' },
  { slug: 'financial-services', name: 'Financial Services & Debt Recovery', icon: '📈', color: '#00D4FF', desc: 'FDCPA-compliant progressive dialers, TCPA safeguards, and PCI-DSS payment audio muting.' },
  { slug: 'healthcare', name: 'Healthcare & Clinical Outreach', icon: '🏥', color: '#00E5A0', desc: 'HIPAA-compliant patient communications, automated appointment reminders, and recall outreach.' },
  { slug: 'real-estate', name: 'Real Estate & Brokerages', icon: '🏠', color: '#FFB800', desc: 'Sub-60-second speed-to-lead dialing, MLS property context screen-pops, and circle prospecting.' },
  { slug: 'insurance', name: 'Insurance Agencies & Carriers', icon: '🛡️', color: '#8B5CF6', desc: 'Multi-line power dialing, compliant policy disclosure recording, and warm live-transfers.' },
  { slug: 'ecommerce', name: 'E-Commerce & Retail Brands', icon: '🛒', color: '#FF6B35', desc: 'Omnichannel customer support, 24/7 AI order lookup IVR, and automated SMS cart recovery.' },
];

export default function IndustriesPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main style={{ minHeight: '100vh', background: 'var(--c-bg)' }}>
        <section style={{ position: 'relative', paddingTop: '9.5rem', paddingBottom: '5rem', overflow: 'hidden' }}>
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 65% 55% at 50% 0%, rgba(0,102,255,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
          
          <div className="container-xl" style={{ position: 'relative', textAlign: 'center' }}>
            <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>Industry Verticals</div>
            <h1 className="text-display-lg" style={{ color: '#E8EEFF', marginBottom: '1.25rem' }}>
              Tailored Telephony for<br />
              <span className="gradient-text-blue">Every Industry</span>
            </h1>
            <p className="text-body-lg" style={{ color: '#8BA3CC', maxWidth: 600, margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
              Communication requirements differ across sectors. Voice Era Tech engineers specialized dialer routing, compliance safeguards, and CRM integrations built specifically for your vertical.
            </p>
            <Link href="/contact" className="btn-magnetic btn-primary" style={{ textDecoration: 'none' }} data-cursor="CONNECT">
              <span style={{ position: 'relative', zIndex: 1 }}>Discuss Your Use Case →</span>
            </Link>
          </div>
        </section>

        <section style={{ padding: '3rem 0 7rem' }}>
          <div className="container-xl">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
              {industryList.map(ind => (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="node-card"
                  style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                >
                  <div>
                    <div style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>{ind.icon}</div>
                    <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '1.25rem', color: '#E8EEFF', marginBottom: '0.75rem' }}>
                      {ind.name}
                    </h3>
                    <p style={{ color: '#8BA3CC', fontSize: '0.9375rem', lineHeight: 1.65, fontFamily: '"Plus Jakarta Sans", sans-serif', marginBottom: '1.5rem' }}>
                      {ind.desc}
                    </p>
                  </div>
                  <span style={{ color: ind.color, fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 600, fontSize: '0.875rem' }}>
                    Explore Vertical Solution →
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
