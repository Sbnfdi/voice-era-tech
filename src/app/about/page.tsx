import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Voice Era Tech LLC — Our Mission, Vision & Engineering Principles',
  description: 'Voice Era Tech LLC builds enterprise dialer systems, AI voice technology, and cloud infrastructure for modern call centers. Learn about our mission and engineering philosophy.',
};

const values = [
  { icon: '🎯', title: 'Precision Engineering', desc: 'Every system we build is engineered to perform under heavy production concurrency — with sub-millisecond audio packet routing and strict TCPA compliance.' },
  { icon: '🔒', title: 'Enterprise Reliability & Uptime', desc: 'We design for 99.999% SLA availability, carrier-grade redundancy, and operational continuity from day one.' },
  { icon: '🤝', title: 'Technical Partnership', desc: 'We work as an extension of your engineering and operations teams, not just a software vendor. Deep technical collaboration is how we deliver exceptional ROI.' },
  { icon: '⚡', title: 'Continuous Telephony Innovation', desc: 'The telecom and AI landscape evolves rapidly. Our platforms are built on open protocols and modular microservices designed to scale and adapt.' },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', background: '#FFFFFF', paddingTop: '8.5rem', paddingBottom: '6rem' }}>
        {/* Hero */}
        <section style={{ position: 'relative', paddingBottom: '4rem' }}>
          <div className="container-lg">
            <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>Company Overview</div>
            <h1 className="text-display-lg" style={{ color: '#0F172A', marginBottom: '1.5rem' }}>
              Building the Technology<br />
              <span className="gradient-text-blue">That Powers Modern Communications.</span>
            </h1>
            <p className="text-body-lg" style={{ color: '#475569', maxWidth: 700, lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Voice Era Tech LLC is an enterprise technology provider focused on delivering high-capacity dialer systems, conversational AI voice agents, carrier-grade SIP trunking, and cloud software solutions for call centers and high-growth businesses.
            </p>
            <Link href="/contact" className="btn-magnetic btn-primary">
              Connect with Our Leadership Team →
            </Link>
          </div>
        </section>

        {/* Mission + Vision */}
        <section style={{ padding: '4rem 0', background: '#F8FAFC', borderTop: '1px solid rgba(226, 232, 240, 0.9)', borderBottom: '1px solid rgba(226, 232, 240, 0.9)' }}>
          <div className="container-lg">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }} className="flex flex-col md:grid">
              {[
                { label: 'Our Mission', icon: '🎯', color: '#2563EB', text: 'To deliver reliable, scalable, and intelligent communication technology that enables call centers and businesses to connect with customers effortlessly — through higher connect rates, lower agent idle time, and conversational AI automation.' },
                { label: 'Our Vision', icon: '🔭', color: '#0284C7', text: 'To be the trusted global technology backbone for enterprise communications — uniting dialer velocity, AI voice autonomy, and resilient cloud infrastructure into one cohesive platform.' },
              ].map(item => (
                <div key={item.label} className="node-card" style={{ padding: '2.5rem' }}>
                  <div style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>{item.icon}</div>
                  <div className="eyebrow" style={{ color: item.color, marginBottom: '1rem' }}>{item.label}</div>
                  <p style={{ color: '#334155', fontSize: '1.05rem', lineHeight: 1.8, margin: 0 }}>
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
              <div className="eyebrow" style={{ marginBottom: '1rem' }}>Our Principles</div>
              <h2 className="text-display-sm" style={{ color: '#0F172A' }}>
                How We <span className="gradient-text-blue">Engineer Solutions</span>
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {values.map(v => (
                <div key={v.title} className="node-card" style={{ padding: '2rem' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 14,
                    background: 'rgba(37, 99, 235, 0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.5rem', marginBottom: '1.25rem',
                  }}>
                    {v.icon}
                  </div>
                  <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '1.15rem', color: '#0F172A', marginBottom: '0.65rem' }}>
                    {v.title}
                  </h3>
                  <p style={{ color: '#475569', fontSize: '0.925rem', lineHeight: 1.7, margin: 0 }}>
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section style={{ padding: '4rem 0 2rem' }}>
          <div className="container-lg" style={{ textAlign: 'center', padding: '4rem 2rem', background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(2, 132, 199, 0.05) 100%)', borderRadius: 24, border: '1px solid rgba(37, 99, 235, 0.15)' }}>
            <h2 className="text-display-sm" style={{ color: '#0F172A', marginBottom: '1rem' }}>
              Ready to modernize your calling infrastructure?
            </h2>
            <p style={{ color: '#64748B', maxWidth: 520, margin: '0 auto 2rem', fontSize: '1.05rem', lineHeight: 1.7 }}>
              Schedule a technical discovery session with our senior telephony architects to review your goals.
            </p>
            <Link href="/contact" className="btn-magnetic btn-primary">
              Schedule Discovery Call →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
