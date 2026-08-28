import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

interface AIData {
  title: string;
  badge: string;
  tagline: string;
  description: string;
  keyFeatures: string[];
  capabilities: { label: string; value: string }[];
  pipeline: string[];
  sampleDialogues: { role: string; text: string }[];
}

const aiDetails: Record<string, AIData> = {
  'voice-agents': {
    title: 'Conversational AI Voice Agents',
    badge: 'Real-Time Voice AI',
    tagline: 'Ultra-low latency conversational AI that sounds natural and resolves calls autonomously.',
    description: 'Deploy human-sounding conversational AI voice agents capable of conducting natural, interruption-resilient inbound and outbound voice calls with sub-600ms latency, multi-turn reasoning, and instant tool-calling.',
    keyFeatures: [
      'Sub-600ms Ultra-Low End-to-End Voice Latency',
      'Real-Time Interruption Handling and Conversational Turn-Taking',
      'Lifelike Emotion, Intonation, and Multi-Voice Synthesis (100+ accents)',
      'Deterministic Guardrails & Real-Time Hallucination Filtering',
      'Instant Live Agent Handoff with Full Contextual Call Summary',
      'Multi-Language Translation and Native Language Support in 45+ languages',
    ],
    capabilities: [
      { label: 'Voice Latency', value: '< 550ms Speech-to-Speech' },
      { label: 'Resolution Rate', value: '74% autonomous containment' },
      { label: 'Concurrent Calls', value: '10,000+ simultaneous agents' },
      { label: 'Availability', value: '24/7/365 Zero Queuing' },
    ],
    pipeline: [
      'Customer voice audio captured via WebRTC/SIP RTP stream',
      'Deepgram Nova-2 ultra-fast speech-to-text transcription',
      'LLM reasoning engine executes system prompts and API function calls',
      'ElevenLabs / Cartesia real-time voice synthesis streams back audio',
    ],
    sampleDialogues: [
      { role: 'AI Agent', text: "Hello! Thank you for calling Voice Era Tech support. I can see you're calling regarding your cloud configuration account. How can I assist you today?" },
      { role: 'Customer', text: "Hey, I need to know if we can scale our concurrent predictive dialer channels from 100 to 300 for tomorrow's campaign." },
      { role: 'AI Agent', text: "I can certainly help with that. I've verified your enterprise tier account, and you have instant elastic provisioning available. Would you like me to schedule that channel expansion to start at 8:00 AM EST tomorrow?" },
    ],
  },
  'call-agents': {
    title: 'Autonomous AI Call Agents',
    badge: 'Proactive Outbound Calling',
    tagline: 'Scale outbound calling campaigns without adding headcount.',
    description: 'Deploy automated outbound AI call agents that conduct initial outreach, qualify leads according to your exact criteria, answer technical objections, and book qualified meetings directly on your sales teams calendars.',
    keyFeatures: [
      'Automated High-Velocity Outbound Campaign Execution',
      'Natural Objection Handling and Pricing Explanation',
      'Dynamic Calendar Synchronization and Real-Time Appointment Booking',
      'Automated Lead Status and CRM Property Updating',
      'Strict TCPA and Automated Calling Regulatory Guardrails',
      'A/B Script Testing to Continuously Improve Conversion Rates',
    ],
    capabilities: [
      { label: 'Booking Rate', value: '18.5% on qualified conversations' },
      { label: 'Cost Per Contact', value: '85% lower than human SDRs' },
      { label: 'Calendar Sync', value: 'Google Calendar, Outlook, Calendly' },
      { label: 'Compliance', value: 'Full STIR/SHAKEN Verified Calling' },
    ],
    pipeline: [
      'Campaign engine initiates outbound call via SIP infrastructure',
      'AI detects live human answer within 400ms and delivers dynamic greeting',
      'Conversational AI qualifies lead against BANT/MEDDIC criteria',
      'Lead selects available calendar slot; AI confirms via SMS and email',
    ],
    sampleDialogues: [
      { role: 'AI Agent', text: "Hi Alex! This is Jordan from Voice Era Tech. I saw that you requested information on our enterprise VoIP and dialer infrastructure. Do you have two minutes to see if we're a good fit?" },
      { role: 'Customer', text: "Yeah, but we're currently using Vicidial on AWS. How difficult is it to migrate?" },
      { role: 'AI Agent', text: "Great question. We support direct zero-downtime migration from Vicidial and Asterisk PBXs with turnkey SIP trunk cutovers. Would you like to review our migration blueprint with a senior telecom architect this Thursday?" },
    ],
  },
  'customer-support': {
    title: '24/7 AI Customer Support Agents',
    badge: 'Instant Multi-Tier Resolution',
    tagline: 'Deliver instantaneous, accurate customer support across voice and chat 24/7.',
    description: 'Empower your customers with 24/7 automated support agents capable of troubleshooting issues, checking order statuses, processing returns, managing subscriptions, and answering complex product questions directly from your knowledge base.',
    keyFeatures: [
      'RAG (Retrieval-Augmented Generation) over Company Knowledge Bases',
      'Transactional System Integration (Order Lookup, Password Reset, Status)',
      'Intelligent Sentiment-Triggered Supervisor Escalations',
      'Omnichannel Support across Voice, SMS, Web Chat, and Email',
      'Automated Ticket Creation and Categorization in Zendesk/Freshdesk',
      'Continuous Learning from Past Resolved Support Tickets',
    ],
    capabilities: [
      { label: 'First Contact Res', value: '78.2% fully autonomous' },
      { label: 'Wait Time', value: '0 seconds (Instant answer)' },
      { label: 'Knowledge Base', value: 'Syncs with Notion, Zendesk, PDF' },
      { label: 'Languages', value: '45+ languages auto-detected' },
    ],
    pipeline: [
      'Customer asks technical or transactional support question',
      'Vector search retrieves authoritative knowledge base documents',
      'AI generates grounded, accurate response with zero hallucination',
      'Transactional API updates ticket and dispatches confirmation',
    ],
    sampleDialogues: [
      { role: 'Customer', text: "Hi, our agents are experiencing one-way audio on outbound SIP calls." },
      { role: 'AI Agent', text: "I can help resolve that right away. One-way audio over SIP is typically caused by NAT traversal issues or RTP port blocking. Have you verified that UDP ports 10000 to 20000 are open on your firewall?" },
    ],
  },
  'lead-qualification': {
    title: 'AI Lead Qualification & Scoring',
    badge: 'Revenue Acceleration',
    tagline: 'Instantly score, qualify, and route high-intent leads the second they engage.',
    description: 'Transform incoming inquiries into revenue with AI lead qualification agents that engage prospects within seconds of form submission, verify contact information, evaluate budget and authority, and route hot leads immediately.',
    keyFeatures: [
      'Sub-60 Second Response Time to Inbound Inquiries',
      'Custom Qualification Frameworks (BANT, MEDDIC, CHAMP)',
      'Phone Number and Email Verification before Lead Handoff',
      'Real-Time Predictive Lead Scoring (Hot, Warm, Cold)',
      'Instant Live Call Transfer to On-Duty Sales Reps',
      'Comprehensive Qualification Summary Pushed to CRM Records',
    ],
    capabilities: [
      { label: 'Speed-to-Lead', value: '< 15 seconds average' },
      { label: 'Contact Rate', value: 'Up to 3.8x higher than email' },
      { label: 'Data Enrichment', value: 'Clearbit / ZoomInfo auto-sync' },
      { label: 'Rep Time Saved', value: '14+ hours / rep / week' },
    ],
    pipeline: [
      'Web lead captured via form or ad landing page',
      'AI Lead Qualification Agent calls or texts lead immediately',
      'Conversational AI assesses prospect timeline, budget, and seat count',
      'High-score leads transferred live; lower-tier leads routed to nurture',
    ],
    sampleDialogues: [
      { role: 'AI Agent', text: "Hi Morgan, thanks for requesting a demo of Voice Era Tech dialer systems. To ensure we connect you with the right specialist, how many calling agents does your team currently operate?" },
      { role: 'Customer', text: "We have about 85 outbound agents across two offices in Chicago and Dallas." },
      { role: 'AI Agent', text: "Excellent, that qualifies for our Enterprise High-Volume tier. I have our Director of Enterprise Solutions available right now—may I transfer you directly?" },
    ],
  },
  appointments: {
    title: 'AI Appointment Scheduling Agents',
    badge: 'Calendar Optimization',
    tagline: 'Automate calendar scheduling, confirmations, reminders, and reschedules.',
    description: 'Eliminate scheduling friction and reduce no-show rates with AI voice and SMS appointment agents that coordinate calendar openings, resolve scheduling conflicts, and send automated reminders.',
    keyFeatures: [
      'Real-Time Two-Way Calendar Availability Query and Hold',
      'Multi-Time-Zone Conversion and Automated Confirmation Dispatch',
      'Conversational Rescheduling and Cancellation Management',
      'Multi-Channel Reminders via Voice, SMS, and WhatsApp',
      'Round-Robin Sales Rep Calendar Allocation',
      'Custom Buffer Times and Meeting Type Duration Logic',
    ],
    capabilities: [
      { label: 'No-Show Reduction', value: '46% reduction with SMS/Voice reminders' },
      { label: 'Calendar Engine', value: 'Google Workspace, Office 365, Calendly' },
      { label: 'Scheduling Speed', value: '< 90 seconds average interaction' },
      { label: 'Conflict Detection', value: '100% double-booking prevention' },
    ],
    pipeline: [
      'Prospect requests consultation or callback',
      'AI checks rep real-time calendar availability across timezones',
      'Prospect confirms slot via voice or interactive text message',
      'Calendar invite created with Google Meet/Zoom link and automated reminder queue',
    ],
    sampleDialogues: [
      { role: 'AI Agent', text: "Hello Taylor! I'm calling to confirm your technical demonstration of the Voice Era Tech platform tomorrow at 2:00 PM EST. Are you still able to attend?" },
      { role: 'Customer', text: "Actually, something came up. Can we push it to Friday morning?" },
      { role: 'AI Agent', text: "No problem at all! I have Friday at 10:00 AM or 11:30 AM EST available. Which of those works better for you?" },
    ],
  },
  automation: {
    title: 'AI Workflow & Post-Call Automation',
    badge: 'Operational Efficiency',
    tagline: 'Automate repetitive post-call tasks, dispositioning, and multi-system workflows.',
    description: 'Free your agents from manual administrative work with AI systems that automatically transcribe calls, generate bulleted executive summaries, extract action items, log CRM dispositions, and trigger downstream business workflows.',
    keyFeatures: [
      'Automated Call Audio Transcription and Speaker Diarization',
      'Instant AI-Generated Structured Call Summaries and Sentiment Tags',
      'Automatic CRM Deal Progression and Follow-Up Task Assignment',
      'Post-Call Customer Email / SMS Follow-Up Generation',
      'Compliance Redaction (Credit Cards, SSNs, PII Audio Bleeping)',
      'Custom Zapier, Make, and Webhook Workflow Triggers',
    ],
    capabilities: [
      { label: 'Wrap-Up Time Saved', value: 'From 3.5 min down to 10 seconds' },
      { label: 'Data Accuracy', value: '99.1% summary accuracy' },
      { label: 'PII Redaction', value: 'PCI-DSS & HIPAA Compliant' },
      { label: 'Workflow Triggers', value: 'Unlimited webhook destinations' },
    ],
    pipeline: [
      'Call completes and audio file is ingested by transcription pipeline',
      'LLM processes full transcript against structured schema',
      'Summary, sentiment score, and action items written directly to CRM',
      'Automated confirmation email containing action items dispatched to customer',
    ],
    sampleDialogues: [
      { role: 'System Output', text: "CALL SUMMARY: Customer requested 50 additional SIP channels for Q4 scaling. Agreed to $0.008/min blended rate. Action Item: Sales Engineer to dispatch updated Master Services Agreement by 5:00 PM today." },
    ],
  },
  custom: {
    title: 'Custom Enterprise AI Solutions',
    badge: 'Bespoke AI Engineering',
    tagline: 'Tailored LLM architectures, fine-tuned voice models, and private AI deployments.',
    description: 'Voice Era Tech engineers custom enterprise AI systems, private self-hosted LLMs, domain-specific voice synthesis, proprietary RAG architectures, and secure on-premise AI deployments designed for strict regulatory compliance.',
    keyFeatures: [
      'Fine-Tuned Domain-Specific LLMs for Telecom and Customer Support',
      'Private Dedicated AI Cluster Deployments (Zero Public Data Sharing)',
      'Custom Voice Cloning and Brand-Specific Audio Synthesis',
      'Complex Multi-Agent Orchestration and Task Decomposition',
      'Enterprise SLA Support with 99.99% Uptime Guarantee',
      'Complete Intellectual Property and Weights Ownership Options',
    ],
    capabilities: [
      { label: 'Hosting', value: 'Private Cloud (AWS/GCP/Azure) or Bare Metal' },
      { label: 'Fine-Tuning', value: 'Llama 3, Mistral, Custom LoRA adapters' },
      { label: 'Security', value: 'SOC2 Type II, HIPAA, ISO 27001' },
      { label: 'Engineering Support', value: 'Dedicated AI Research & Dev Team' },
    ],
    pipeline: [
      'Discovery and requirement scoping with enterprise engineering team',
      'Data preparation, synthetic conversation generation, and model fine-tuning',
      'Staging deployment with adversarial safety and latency benchmarking',
      'Production deployment with automated drift monitoring and continuous learning',
    ],
    sampleDialogues: [
      { role: 'Enterprise AI', text: "Bespoke AI agents built specifically for your proprietary terminology, company databases, and exact operational workflows." },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(aiDetails).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = aiDetails[slug];
  if (!data) return { title: 'AI Solutions — Voice Era Tech LLC' };
  return {
    title: `${data.title} — Voice Era Tech LLC`,
    description: data.description,
  };
}

export default async function AISubPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = aiDetails[slug];
  if (!data) notFound();

  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', background: '#FFFFFF', paddingTop: '8.5rem', paddingBottom: '6rem' }}>
        <div className="container-lg">
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', fontSize: '0.85rem', color: '#64748B' }}>
            <Link href="/" style={{ color: '#64748B', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <Link href="/ai-solutions" style={{ color: '#64748B', textDecoration: 'none' }}>AI Solutions</Link>
            <span>/</span>
            <span style={{ color: '#2563EB', fontWeight: 600 }}>{data.title}</span>
          </div>

          {/* Hero */}
          <div style={{ marginBottom: '4rem' }}>
            <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>{data.badge}</div>
            <h1 className="text-display-lg" style={{ color: '#0F172A', marginBottom: '1rem' }}>
              {data.title}
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#2563EB', fontWeight: 600, marginBottom: '1.5rem', lineHeight: 1.5 }}>
              {data.tagline}
            </p>
            <p className="text-body-lg" style={{ color: '#475569', maxWidth: 840, marginBottom: '2.5rem' }}>
              {data.description}
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href={`/contact?ai_solution=${slug}`} className="btn-magnetic btn-primary">
                Deploy {data.title} →
              </Link>
              <Link href="/ai-solutions" className="btn-magnetic btn-secondary">
                View All AI Solutions
              </Link>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '4.5rem' }}>
            {data.capabilities.map(c => (
              <div key={c.label} className="node-card" style={{ padding: '1.5rem' }}>
                <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.7rem', color: '#64748B', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  {c.label}
                </div>
                <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: '1.15rem', fontWeight: 700, color: '#0F172A' }}>
                  {c.value}
                </div>
              </div>
            ))}
          </div>

          {/* Features & AI Pipeline */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '4.5rem' }} className="flex flex-col md:grid">
            <div className="node-card">
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0F172A', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#2563EB' }}>🤖</span> Core Capabilities
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {data.keyFeatures.map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(37, 99, 235, 0.1)', color: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>
                      ✓
                    </div>
                    <span style={{ color: '#334155', fontSize: '0.95rem', lineHeight: 1.6 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="node-card">
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0F172A', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#4F46E5' }}>🧠</span> Processing Pipeline
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {data.pipeline.map((p, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(79, 70, 229, 0.1)', color: '#4F46E5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>
                      {i + 1}
                    </div>
                    <span style={{ color: '#334155', fontSize: '0.95rem', lineHeight: 1.6 }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sample Dialogue Box */}
          <div style={{ background: '#F8FAFC', border: '1px solid rgba(226, 232, 240, 0.9)', borderRadius: 24, padding: '3rem', marginBottom: '4rem' }}>
            <h2 className="text-display-sm" style={{ color: '#0F172A', marginBottom: '1.5rem' }}>
              Live Conversation Demonstration
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {data.sampleDialogues.map((d, i) => (
                <div key={i} style={{ background: d.role.includes('Customer') ? '#FFFFFF' : 'rgba(37, 99, 235, 0.05)', padding: '1.25rem 1.5rem', borderRadius: 16, border: `1px solid ${d.role.includes('Customer') ? 'rgba(226, 232, 240, 0.9)' : 'rgba(37, 99, 235, 0.15)'}` }}>
                  <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.75rem', fontWeight: 700, color: d.role.includes('Customer') ? '#64748B' : '#2563EB', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    {d.role}
                  </div>
                  <p style={{ color: '#0F172A', fontSize: '0.95rem', lineHeight: 1.6 }}>{d.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', padding: '4rem 2rem', background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(2, 132, 199, 0.05) 100%)', borderRadius: 24, border: '1px solid rgba(37, 99, 235, 0.15)' }}>
            <h2 className="text-display-md" style={{ color: '#0F172A', marginBottom: '1rem' }}>
              Test our AI Voice Engine in Real Time
            </h2>
            <p className="text-body-lg" style={{ color: '#64748B', maxWidth: 560, margin: '0 auto 2rem' }}>
              Experience the sub-600ms latency and lifelike conversation firsthand with an interactive voice demo call.
            </p>
            <Link href={`/contact?ai=${slug}`} className="btn-magnetic btn-primary" style={{ padding: '1rem 2.25rem', fontSize: '1rem' }}>
              Request Live Voice AI Demo →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
