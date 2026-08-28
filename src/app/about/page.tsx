import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/layout/CustomCursor';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Voice Era Tech LLC — Mission, Engineering & Infrastructure',
  description: 'Voice Era Tech LLC engineers mission-critical dialer systems, telecommunications platforms, AI voice agents, and cloud infrastructure for modern call centers.',
};

const values = [
  { icon: '🎯', title: 'Precision Telephony Engineering', desc: 'Every system we build is designed and stress-tested to perform under heavy concurrent production loads with sub-35ms audio latency.' },
  { icon: '🔒', title: 'Enterprise Reliability & Compliance', desc: 'We engineer five-nines high availability, cryptographic data integrity, and automated regulatory compliance from day one.' },
  { icon: '🤝', title: 'Practicing Technical Partnership', desc: 'We operate as direct technical partners to your engineering and operations teams, not a distant third-party vendor.' },
  { icon: '⚡', title: 'Continuous Telecommunications Innovation', desc: 'Our architectures are modular, open, and extensible — adapting effortlessly as your telephony throughput expands.' },
];

export default function AboutPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main style={{ minHeight: '100vh', background: '#0B0F14' }}>
        {/* Hero */}
        <section style={{ position: 'relative', paddingTop: '9.5rem', paddingBottom: '5.5rem', overflow: 'hidden' }}>
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.35 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 65% 50% at 50% 0%, rgba(49, 87, 213, 0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
          
          <div className="container-lg" style={{ position: 'relative', zIndex: 1 }}>
            <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>Company Overview</div>
            <h1 className="text-display-lg" style={{ color: '#F4F6F8', marginBottom: '1.5rem' }}>
              Building the Telecommunications Infrastructure <br />
              <span className="gradient-text-blue">That Powers Modern Enterprise.</span>
            </h1>
            <p className="text-body-lg" style={{ color: '#9AA6B2', maxWidth: 640, lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Voice Era Tech LLC is an enterprise technology and telecommunications engineering company. We design, deploy, and support carrier-grade dialer platforms, autonomous voice AI pipelines, and cloud computing infrastructure for call centers and high-scale businesses globally.
            </p>
            <Link href="/contact" className="btn-primary" data-cursor="CONNECT">
              Connect with Our Engineering Team →
            </Link>
          </div>
        </section>

        {/* Mission & Vision */}
        <section style={{ padding: '5rem 0', background: '#151D27', borderTop: '1px solid rgba(76, 141, 255, 0.08)', borderBottom: '1px solid rgba(76, 141, 255, 0.08)' }}>
          <div className="container-lg">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
              {[
                { label: 'Our Mission', icon: '🎯', text: 'To engineer reliable, scalable, and mathematically optimized communications technology that empowers organizations to connect with customers flawlessly — through higher dialer throughput, autonomous voice AI, and bulletproof infrastructure.' },
                { label: 'Our Vision', icon: '🔭', text: 'To stand as the trusted technology infrastructure partner for the next generation of enterprise contact centers — bridging traditional telecommunications with conversational artificial intelligence and cloud-native resilience.' },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: '#202B38',
                    border: '1px solid rgba(76, 141, 255, 0.14)',
                    borderRadius: 20,
                    padding: '2.5rem',
                  }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.icon}</div>
                  <div className="eyebrow" style={{ color: '#4C8DFF', marginBottom: '0.75rem' }}>{item.label}</div>
                  <p style={{ color: '#9AA6B2', fontSize: '0.9375rem', lineHeight: 1.75, margin: 0 }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section style={{ padding: '5.5rem 0', background: '#0B0F14' }}>
          <div className="container-lg">
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div className="eyebrow" style={{ marginBottom: '1rem' }}>Engineering Principles</div>
              <h2 className="text-display-md" style={{ color: '#F4F6F8' }}>
                How We <span className="gradient-text-blue">Engineer Systems</span>
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {values.map((v) => (
                <div
                  key={v.title}
                  style={{
                    background: '#151D27',
                    border: '1px solid rgba(76, 141, 255, 0.12)',
                    borderRadius: 16,
                    padding: '2rem',
                  }}
                >
                  <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{v.icon}</div>
                  <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '1.0625rem', color: '#F4F6F8', marginBottom: '0.5rem' }}>
                    {v.title}
                  </h3>
                  <p style={{ color: '#9AA6B2', fontSize: '0.875rem', lineHeight: 1.65, margin: 0 }}>
                    {v.desc}
                  </p>
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
