import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/layout/CustomCursor';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Voice Era Tech LLC — Our Mission, Vision & Technology',
  description: 'Voice Era Tech LLC builds enterprise dialer systems, AI voice technology and cloud infrastructure for modern call centers. Learn about our mission and technology philosophy.',
};

const values = [
  { icon: '🎯', title: 'Precision Engineering', desc: 'Every system we build is designed to perform under production load — not just in a demo environment.' },
  { icon: '🔒', title: 'Enterprise Reliability', desc: 'We design for high availability, data integrity and operational continuity from day one.' },
  { icon: '🤝', title: 'Technical Partnership', desc: 'We work as an extension of your team, not a vendor. Deep collaboration is how we build better systems.' },
  { icon: '⚡', title: 'Continuous Innovation', desc: 'The technology landscape evolves. Our platforms are built to adapt, extend and scale as your needs change.' },
];

export default function AboutPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main style={{ minHeight: '100vh', background: 'var(--c-bg)' }}>
        {/* Hero */}
        <section style={{ position: 'relative', paddingTop: '9rem', paddingBottom: '6rem', overflow: 'hidden' }}>
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(0,102,255,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="container-lg" style={{ position: 'relative' }}>
            <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>Company</div>
            <h1 className="text-display-lg" style={{ color: '#E8EEFF', marginBottom: '1.5rem' }}>
              Building the Technology<br />
              <span className="gradient-text-blue">That Connects Businesses.</span>
            </h1>
            <p className="text-body-lg" style={{ color: '#8BA3CC', maxWidth: 600, lineHeight: 1.8, marginBottom: '3rem' }}>
              Voice Era Tech LLC is a technology company focused on delivering enterprise-grade communication systems, AI voice technology and cloud infrastructure for call centers and modern businesses. We design systems built for scale, reliability and real-world performance.
            </p>
            <Link href="/contact" className="btn-magnetic btn-primary" style={{ textDecoration: 'none' }} data-cursor="CONNECT">
              <span style={{ position: 'relative', zIndex: 1 }}>Start a Conversation</span>
            </Link>
          </div>
        </section>

        {/* Mission + Vision */}
        <section style={{ padding: '5rem 0', background: 'rgba(7,13,28,0.95)' }}>
          <div className="container-lg">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
              {[
                { label: 'Mission', icon: '🎯', color: '#0066FF', text: 'To deliver reliable, scalable and intelligent communication technology that enables businesses to connect with their customers more effectively — through better dialer systems, smarter AI, and more powerful infrastructure.' },
                { label: 'Vision', icon: '🔭', color: '#00D4FF', text: 'To become the leading provider of enterprise communication and call center technology for modern businesses — powering the next generation of call centers with dialer intelligence, AI automation and connected cloud infrastructure.' },
              ].map(item => (
                <div key={item.label} style={{
                  background: 'rgba(5,10,20,0.8)',
                  border: `1px solid ${item.color}20`,
                  borderRadius: 20,
                  padding: '2.5rem',
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.icon}</div>
                  <div className="eyebrow" style={{ color: item.color, marginBottom: '1rem' }}>{item.label}</div>
                  <p style={{ color: '#8BA3CC', fontSize: '1rem', lineHeight: 1.8, fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section style={{ padding: '5rem 0' }}>
          <div className="container-lg">
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div className="eyebrow" style={{ marginBottom: '1rem' }}>Our Values</div>
              <h2 className="text-display-sm" style={{ color: '#E8EEFF' }}>
                How We <span className="gradient-text-blue">Work</span>
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
              {values.map(v => (
                <div key={v.title} style={{
                  background: 'rgba(7,13,28,0.8)',
                  border: '1px solid rgba(0,102,255,0.1)',
                  borderRadius: 20,
                  padding: '2rem',
                  backdropFilter: 'blur(12px)',
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'flex-start',
                }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 13,
                    background: 'rgba(0,102,255,0.1)',
                    border: '1px solid rgba(0,102,255,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.25rem', flexShrink: 0,
                  }}>
                    {v.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '1.0625rem', color: '#E8EEFF', marginBottom: '0.5rem' }}>
                      {v.title}
                    </div>
                    <p style={{ color: '#8BA3CC', fontSize: '0.9375rem', lineHeight: 1.7, fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '5rem 0', background: 'rgba(7,13,28,0.95)', textAlign: 'center' }}>
          <div className="container-lg">
            <h2 className="text-display-sm" style={{ color: '#E8EEFF', marginBottom: '1rem' }}>
              Ready to build something<br />
              <span className="gradient-text-blue">together?</span>
            </h2>
            <p style={{ color: '#8BA3CC', maxWidth: 440, margin: '0 auto 2.5rem', fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: '1rem', lineHeight: 1.7 }}>
              Connect with our team to discuss your call center technology requirements, cloud infrastructure or software development project.
            </p>
            <Link href="/contact" className="btn-magnetic btn-primary" style={{ textDecoration: 'none' }}>
              <span style={{ position: 'relative', zIndex: 1 }}>Talk to an Expert →</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
