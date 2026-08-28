import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Conversational Voice AI & Automation — Voice Era Tech LLC',
  description: 'AI Voice Agents, Outbound AI SDRs, 24/7 AI Customer Support, Lead Qualification, and automated post-call workflows.',
};

const solutions = [
  { name: 'Conversational AI Voice Agents', icon: '🎙️', color: '#6366F1', href: '/ai-solutions/voice-agents', desc: 'Sub-600ms latency conversational AI voice agents capable of conducting natural, human-like voice calls.' },
  { name: 'Autonomous AI Call Agents', icon: '📞', color: '#2563EB', href: '/ai-solutions/call-agents', desc: 'Scale outbound calling campaigns without adding headcount with autonomous lead qualifying SDRs.' },
  { name: '24/7 AI Customer Support', icon: '💬', color: '#0284C7', href: '/ai-solutions/customer-support', desc: 'Instant multi-tier customer support grounded in your knowledge base with zero hold times.' },
  { name: 'AI Lead Qualification & Scoring', icon: '🔍', color: '#059669', href: '/ai-solutions/lead-qualification', desc: 'Engage webform leads within 15 seconds, score prospect intent, and transfer hot calls live.' },
  { name: 'AI Appointment Scheduling', icon: '📅', color: '#D97706', href: '/ai-solutions/appointments', desc: 'Automate calendar scheduling, confirmations, multi-channel reminders, and reschedule requests.' },
  { name: 'Post-Call Workflow Automation', icon: '⚙️', color: '#DC2626', href: '/ai-solutions/automation', desc: 'Automate speech transcription, structured summaries, sentiment tagging, and CRM field updates.' },
  { name: 'Custom Enterprise AI Engineering', icon: '🧠', color: '#6366F1', href: '/ai-solutions/custom', desc: 'Private self-hosted LLMs, fine-tuned voice models, and bespoke RAG architectures.' },
];

export default function AISolutionsPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', background: '#FFFFFF', paddingTop: '8.5rem', paddingBottom: '6rem' }}>
        <section style={{ position: 'relative', paddingBottom: '3.5rem' }}>
          <div className="container-xl" style={{ textAlign: 'center' }}>
            <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>Voice Intelligence & Automation</div>
            <h1 className="text-display-lg" style={{ color: '#0F172A', marginBottom: '1.25rem' }}>
              Conversational Voice AI &<br />
              <span className="gradient-text-blue">Intelligent Automation</span>
            </h1>
            <p className="text-body-lg" style={{ color: '#475569', maxWidth: 620, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
              Deploy AI voice agents, autonomous calling pipelines, and real-time speech analytics that amplify human performance and resolve routine calls.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-magnetic btn-primary">
                Schedule a Voice AI Demonstration →
              </Link>
            </div>
          </div>
        </section>

        <section style={{ padding: '2rem 0 4rem' }}>
          <div className="container-xl">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
              {solutions.map(s => (
                <Link key={s.name} href={s.href} className="node-card" style={{ textDecoration: 'none', display: 'block' }}>
                  <div style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>{s.icon}</div>
                  <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '1.2rem', color: '#0F172A', marginBottom: '0.65rem' }}>
                    {s.name}
                  </h2>
                  <p style={{ color: '#475569', fontSize: '0.925rem', lineHeight: 1.65, fontFamily: '"Plus Jakarta Sans", sans-serif', marginBottom: '1.25rem' }}>
                    {s.desc}
                  </p>
                  <span style={{ color: '#2563EB', fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '0.9rem' }}>
                    Explore Voice AI Specs →
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
