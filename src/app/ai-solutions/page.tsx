import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/layout/CustomCursor';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Solutions — AI Voice Agents, Call Automation & Intelligent Systems',
  description: 'Explore Voice Era Tech AI solutions: AI voice agents, outbound calling agents, lead qualification, appointment scheduling, and conversational AI for call centers.',
};

const solutions = [
  { name: 'AI Voice Agents', href: '/ai-solutions/voice-agents', icon: '🎙️', desc: 'Deploy conversational AI that handles calls with natural speech synthesis. Fully programmable and CRM-connected.' },
  { name: 'AI Call Agents', href: '/ai-solutions/call-agents', icon: '📞', desc: 'Automate outbound campaigns with intelligent agents that qualify leads, set appointments, and handle objections.' },
  { name: 'AI Customer Support', href: '/ai-solutions/customer-support', icon: '💬', desc: '24/7 AI-powered customer support that resolves common inquiries without human agent intervention.' },
  { name: 'AI Lead Qualification', href: '/ai-solutions/lead-qualification', icon: '🔍', desc: 'Score and qualify leads in real time against strict BANT criteria before routing to sales closers.' },
  { name: 'AI Appointment Agents', href: '/ai-solutions/appointments', icon: '📅', desc: 'Automated scheduling agents that coordinate calendar bookings, confirmations, and SMS reminders.' },
  { name: 'AI Workflow Automation', href: '/ai-solutions/automation', icon: '⚙️', desc: 'Automate post-call transcription, CRM summaries, follow-up emails, and disposition tags.' },
  { name: 'Custom AI Architecture', href: '/ai-solutions/custom', icon: '🧠', desc: 'Private fine-tuned large language models and dedicated GPU infrastructure for custom workflows.' },
];

export default function AISolutionsPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main style={{ minHeight: '100vh', background: '#0B0F14' }}>
        <section style={{ position: 'relative', paddingTop: '9.5rem', paddingBottom: '5rem', overflow: 'hidden' }}>
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.35 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 65% 50% at 50% 0%, rgba(49, 87, 213, 0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
          
          <div className="container-xl" style={{ position: 'relative', textAlign: 'center', zIndex: 1 }}>
            <div className="eyebrow" style={{ color: '#4C8DFF', marginBottom: '1.25rem' }}>Conversational Intelligence</div>
            <h1 className="text-display-lg" style={{ color: '#F4F6F8', marginBottom: '1.25rem' }}>
              Autonomous Voice &amp; <span className="gradient-text-blue">Conversational AI</span>
            </h1>
            <p className="text-body-lg" style={{ color: '#9AA6B2', maxWidth: 560, margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
              Deploy AI voice agents, intelligent automation, and conversational AI systems that work alongside your team — handling routine interactions and amplifying performance.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <Link href="/contact" className="btn-primary" data-cursor="CONNECT">
                Explore Voice AI Solutions →
              </Link>
            </div>
          </div>
        </section>

        <section style={{ padding: '0 0 7rem' }}>
          <div className="container-xl">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
              {solutions.map((s) => (
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
                    View AI Architecture →
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
