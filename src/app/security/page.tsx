import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Security & Compliance Overview — Voice Era Tech LLC',
  description: 'Enterprise security posture, voice encryption, HIPAA/PCI-DSS compliance, and fraud prevention at Voice Era Tech LLC.',
};

const securityPillars = [
  {
    icon: '🔒',
    title: 'Voice & Media Encryption',
    desc: 'All audio packets (RTP) are encrypted with SRTP (AES-128/256), and signaling is secured using SIP over TLS 1.3 to prevent eavesdropping and packet interception.',
  },
  {
    icon: '🛡️',
    title: 'STIR/SHAKEN A-Attestation',
    desc: 'We enforce full STIR/SHAKEN caller ID authentication with cryptographic call certificates to protect your outbound phone numbers from spam tagging.',
  },
  {
    icon: '🚨',
    title: 'Real-Time Fraud Prevention',
    desc: 'Automated machine learning monitors outbound calling velocity, destination country codes, and anomalous spikes to quarantine toll fraud attempts within milliseconds.',
  },
  {
    icon: '🏢',
    title: 'Multi-Tenant Isolation',
    desc: 'Strict logical data segregation with Row-Level Security (RLS) in databases, isolated media buckets, and encrypted tenant keystores.',
  },
  {
    icon: '💳',
    title: 'PCI-DSS & HIPAA Readiness',
    desc: 'Automated pause/resume recording triggers via API ensure payment card data and sensitive healthcare PII are never permanently recorded or stored.',
  },
  {
    icon: '📊',
    title: '24/7 SIEM & SOC Monitoring',
    desc: 'Continuous security information and event management (SIEM) auditing, intrusion detection, automated vulnerability patching, and DDoS mitigation shields.',
  },
];

export default function SecurityPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', background: '#FFFFFF', paddingTop: '8.5rem', paddingBottom: '6rem' }}>
        <div className="container-lg">
          {/* Hero */}
          <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
            <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>Enterprise Trust & Security</div>
            <h1 className="text-display-lg" style={{ color: '#0F172A', marginBottom: '1.25rem' }}>
              Carrier-Grade Security & <br />
              <span className="gradient-text-blue">Compliance Posture</span>
            </h1>
            <p className="text-body-lg" style={{ color: '#475569', maxWidth: 640, margin: '0 auto' }}>
              At Voice Era Tech, security is engineered directly into our SIP signaling, cloud networks, and software applications from day one.
            </p>
          </div>

          {/* Pillars Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '5rem' }}>
            {securityPillars.map(p => (
              <div key={p.title} className="node-card" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>{p.icon}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>
                  {p.title}
                </h3>
                <p style={{ color: '#475569', fontSize: '0.925rem', lineHeight: 1.7 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Compliance & Standards */}
          <div style={{ background: '#F8FAFC', border: '1px solid rgba(226, 232, 240, 0.9)', borderRadius: 24, padding: '3.5rem', textAlign: 'center', marginBottom: '4rem' }}>
            <div className="eyebrow" style={{ marginBottom: '1rem' }}>Regulatory Compliance</div>
            <h2 className="text-display-sm" style={{ color: '#0F172A', marginBottom: '1rem' }}>
              Compliant with Global Telecommunication Standards
            </h2>
            <p style={{ color: '#64748B', maxWidth: 580, margin: '0 auto 2.5rem', fontSize: '1rem', lineHeight: 1.7 }}>
              Our platform adheres strictly to FCC directives, TCPA guidelines, GDPR privacy laws, and industry encryption standards.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
              {['STIR / SHAKEN A-Level', 'TCPA Safe Harbor Rules', 'FCC Robocall Mitigation Database', 'SOC 2 Type II Architecture', 'PCI-DSS Data Redaction', 'HIPAA Business Associate Ready'].map(c => (
                <div key={c} style={{ background: '#FFFFFF', border: '1px solid rgba(226, 232, 240, 0.9)', padding: '0.75rem 1.5rem', borderRadius: 100, fontWeight: 700, fontSize: '0.85rem', color: '#0F172A', boxShadow: 'var(--shadow-sm)' }}>
                  ✓ {c}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: '#64748B', marginBottom: '1.5rem' }}>
              Need our security whitepaper or Vendor Security Questionnaire completed?
            </p>
            <Link href="/contact?inquiry=security" className="btn-magnetic btn-primary">
              Contact Security & Compliance Team →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
