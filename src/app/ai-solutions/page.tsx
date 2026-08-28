import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/layout/CustomCursor';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Solutions — AI Voice Agents, Call Agents & Intelligent Automation',
  description: 'Explore Voice Era Tech AI solutions: AI voice agents, call agents, lead qualification, appointment scheduling and conversational AI for call centers.',
};

const solutions = [
  { name: 'AI Voice Agents', icon: '🎙️', color: '#8B5CF6', desc: 'Deploy conversational AI that handles calls with natural language. Fully programmable and CRM-connected.' },
  { name: 'AI Call Agents', icon: '📞', color: '#6B21E8', desc: 'Automate outbound campaigns with intelligent agents that qualify leads, set appointments and handle objections.' },
  { name: 'AI Customer Support', icon: '💬', color: '#4A9EFF', desc: '24/7 AI-powered customer support that resolves common inquiries without human intervention.' },
  { name: 'AI Lead Qualification', icon: '🔍', color: '#00E5A0', desc: 'Score and qualify leads in real time using conversation intelligence and behavioral data.' },
  { name: 'AI Appointment Agents', icon: '📅', color: '#FFB800', desc: 'Automated scheduling agents that handle bookings, confirmations and reminders across your calendar.' },
  { name: 'Conversational AI', icon: '🧠', color: '#FF6B35', desc: 'Custom conversational AI platforms built for your specific business workflows and language.' },
  { name: 'AI Automation', icon: '⚙️', color: '#00D4FF', desc: 'Automate disposition logging, follow-up scheduling, CRM updates and workflow triggers post-call.' },
];

export default function AISolutionsPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main style={{ minHeight: '100vh', background: 'var(--c-bg)' }}>
        <section style={{ position: 'relative', paddingTop: '9rem', paddingBottom: '5rem', overflow: 'hidden' }}>
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.35 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(107,33,232,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="container-xl" style={{ position: 'relative', textAlign: 'center' }}>
            <div className="eyebrow" style={{ color: '#8B5CF6', marginBottom: '1.25rem' }}>AI Solutions</div>
            <h1 className="text-display-lg" style={{ color: '#E8EEFF', marginBottom: '1.25rem' }}>
              Give Every Conversation<br />
              <span className="gradient-text-violet">Intelligence.</span>
            </h1>
            <p className="text-body-lg" style={{ color: '#8BA3CC', maxWidth: 560, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
              Deploy AI voice agents, intelligent automation and conversational AI systems that work alongside your team — handling routine interactions and amplifying performance.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <Link href="/contact" className="btn-magnetic btn-primary" style={{ textDecoration: 'none' }}>
                <span style={{ position: 'relative', zIndex: 1 }}>Explore AI Solutions</span>
              </Link>
            </div>
          </div>
        </section>

        <section style={{ padding: '4rem 0 7rem' }}>
          <div className="container-xl">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
              {solutions.map(s => (
                <div key={s.name} className="node-card">
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{s.icon}</div>
                  <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '1.125rem', color: '#E8EEFF', marginBottom: '0.5rem' }}>
                    {s.name}
                  </div>
                  <p style={{ color: '#8BA3CC', fontSize: '0.875rem', lineHeight: 1.65, fontFamily: '"Plus Jakarta Sans", sans-serif', marginBottom: '1rem' }}>
                    {s.desc}
                  </p>
                  <Link href="/contact" style={{ color: s.color, textDecoration: 'none', fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 600, fontSize: '0.875rem' }}>
                    Learn more →
                  </Link>
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
