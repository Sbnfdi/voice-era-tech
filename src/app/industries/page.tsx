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
  { slug: 'bpo', name: 'BPO & Call Centers', icon: '🏢', desc: 'High-density multi-tenant dialers, white-label client reporting, and automated usage billing.' },
  { slug: 'financial-services', name: 'Financial Services & Debt Recovery', icon: '📈', desc: 'FDCPA-compliant progressive dialers, TCPA safeguards, and PCI-DSS payment audio muting.' },
  { slug: 'healthcare', name: 'Healthcare & Clinical Outreach', icon: '🏥', desc: 'HIPAA-compliant patient communications, automated appointment reminders, and recall outreach.' },
  { slug: 'real-estate', name: 'Real Estate & Brokerages', icon: '🏠', desc: 'Sub-60-second speed-to-lead dialing, MLS property context screen-pops, and circle prospecting.' },
  { slug: 'insurance', name: 'Insurance Agencies & Carriers', icon: '🛡️', desc: 'Multi-line power dialing, compliant policy disclosure recording, and warm live-transfers.' },
  { slug: 'ecommerce', name: 'E-Commerce & Retail Brands', icon: '🛒', desc: 'Omnichannel customer support, 24/7 AI order lookup IVR, and automated SMS cart recovery.' },
];

export default function IndustriesPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main style={{ minHeight: '100vh', background: '#0B0F14' }}>
        <section style={{ position: 'relative', paddingTop: '9.5rem', paddingBottom: '5rem', overflow: 'hidden' }}>
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.35 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 65% 50% at 50% 0%, rgba(49, 87, 213, 0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
          
          <div className="container-xl" style={{ position: 'relative', textAlign: 'center', zIndex: 1 }}>
            <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>Industry Verticals</div>
            <h1 className="text-display-lg" style={{ color: '#F4F6F8', marginBottom: '1.25rem' }}>
              Tailored Telephony for<br />
              <span className="gradient-text-blue">Every Industry</span>
            </h1>
            <p className="text-body-lg" style={{ color: '#9AA6B2', maxWidth: 580, margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
              Communication requirements differ across business models. Voice Era Tech engineers specialized dialer routing, compliance safeguards, and CRM integrations built specifically for your vertical.
            </p>
            <Link href="/contact" className="btn-primary" data-cursor="CONNECT">
              Discuss Your Use Case →
            </Link>
          </div>
        </section>

        <section style={{ padding: '0 0 7rem' }}>
          <div className="container-xl">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
              {industryList.map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  style={{
                    background: '#151D27',
                    border: '1px solid rgba(76, 141, 255, 0.12)',
                    borderRadius: 16,
                    padding: '2rem',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
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
                    <div style={{ fontSize: '2.25rem', marginBottom: '1.25rem' }}>{ind.icon}</div>
                    <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '1.1875rem', color: '#F4F6F8', marginBottom: '0.625rem' }}>
                      {ind.name}
                    </h3>
                    <p style={{ color: '#9AA6B2', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                      {ind.desc}
                    </p>
                  </div>
                  <span style={{ color: '#4C8DFF', fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 600, fontSize: '0.8125rem' }}>
                    Explore Vertical Architecture →
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
