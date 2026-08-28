import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

interface CallCenterData {
  title: string;
  badge: string;
  tagline: string;
  description: string;
  keyFeatures: string[];
  metrics: { label: string; value: string }[];
  workflows: string[];
  integrations: string[];
}

const callCenterDetails: Record<string, CallCenterData> = {
  inbound: {
    title: 'Inbound Call Center Solutions',
    badge: 'Customer Care & Support',
    tagline: 'Intelligent multi-tier routing that connects customers with the right agent in seconds.',
    description: 'Transform customer support operations with advanced Automatic Call Distribution (ACD), multi-level Interactive Voice Response (IVR), visual queue management, and real-time agent screen-pops.',
    keyFeatures: [
      'Advanced Skills-Based and Geography-Based Routing',
      'Dynamic IVR Studio with Drag-and-Drop Call Flow Designer',
      'Estimated Wait Time Announcements with Queue Callback Options',
      'Unified Agent Workspace with Instant Customer 360 Screen Pop',
      'VIP Caller Priority Queuing and Dedicated Routing Rules',
      'Real-time Queue SLA Monitoring and Alerts',
    ],
    metrics: [
      { label: 'First Contact Res', value: '82.4% Average' },
      { label: 'Queue Abandonment', value: '< 2.1% across queues' },
      { label: 'Avg Speed to Answer', value: '< 14 seconds' },
      { label: 'CSAT Improvement', value: '+34% post rollout' },
    ],
    workflows: [
      'Customer dials toll-free line and selects IVR query option',
      'System queries CRM database to identify account tier and history',
      'Call is routed to highest skilled available agent with full screen pop',
      'Post-call automated CSAT survey dispatched via SMS or IVR',
    ],
    integrations: ['Zendesk', 'Salesforce Service Cloud', 'Freshdesk', 'ServiceNow', 'Intercom'],
  },
  outbound: {
    title: 'Outbound Call Center Solutions',
    badge: 'High-Velocity Sales & Outreach',
    tagline: 'High-throughput campaign orchestration engineered for maximum connect rates.',
    description: 'Empower outbound sales, fundraising, collections, and market research teams with enterprise campaign management, multi-mode dialers, localized caller ID rotation, and comprehensive agent scripting.',
    keyFeatures: [
      'Multi-mode Dialer Switching (Predictive, Power, Progressive, Preview)',
      'Automated Multi-Carrier STIR/SHAKEN Caller ID Reputation Protection',
      'Dynamic Agent Scripting with Interactive Objection Handling',
      'Real-time Campaign Performance Telemetry and Live Leaderboards',
      'Automated Lead Recycling and Time-Zone Aware Scheduling',
      'Instant Lead Insertion API for Inbound Webform Speed-to-Lead',
    ],
    metrics: [
      { label: 'Agent Talk Time', value: '48+ min / hour (Predictive)' },
      { label: 'Pickup Rate', value: '+42% with Local Presence' },
      { label: 'Lead Speed to Call', value: '< 3 seconds' },
      { label: 'Drop Rate Compliance', value: 'Strict < 3% TCPA Guard' },
    ],
    workflows: [
      'Lead lists imported with automated deduplication and DNC scrubbing',
      'Campaign engine dials via optimal carrier routes across timezones',
      'Connected calls bridged to live agents in under 100 milliseconds',
      'Disposition triggers automated CRM update and nurture sequence',
    ],
    integrations: ['HubSpot', 'Salesforce Sales Cloud', 'Zoho CRM', 'Pipedrive', 'Close.com'],
  },
  blended: {
    title: 'Blended Call Center Operations',
    badge: 'Universal Agent Efficiency',
    tagline: 'Dynamically balance inbound queues and outbound campaigns in a single pane of glass.',
    description: 'Eliminate agent downtime by dynamically shifting agents between outbound dialing campaigns and inbound customer queues based on real-time traffic spikes and queue depth thresholds.',
    keyFeatures: [
      'Dynamic Automated Inbound / Outbound Agent Blending',
      'Threshold-Based Automatic Mode Shifting on Queue Spikes',
      'Single Unified WebRTC Softphone Interface for All Call Directions',
      'Consolidated Reporting across Inbound SLAs and Outbound Quotas',
      'Cross-Skilling Agent Profiles with Dynamic Priority Weighting',
      'Integrated Omnichannel SMS and Email Follow-Up Center',
    ],
    metrics: [
      { label: 'Agent Utilization', value: 'Up to 91% efficiency' },
      { label: 'Inbound SLA Met', value: '99.2% on target' },
      { label: 'Outbound Throughput', value: '+65% total contacts' },
      { label: 'Staffing Savings', value: '28% operational reduction' },
    ],
    workflows: [
      'Agents dial outbound campaign when inbound queues are clear',
      'Incoming customer spikes trigger automatic agent reallocation',
      'Agent softphone seamlessly shifts context without re-login',
      'System returns agent to outbound campaign once queue normalizes',
    ],
    integrations: ['Salesforce Omnichannel', 'Twilio Flex', 'Genesys Cloud', 'Amazon Connect Bridges'],
  },
  'contact-center': {
    title: 'Unified Contact Center Platform',
    badge: 'Omnichannel Enterprise Hub',
    tagline: 'Unify voice, SMS, email, web chat, and WhatsApp into one synchronized workspace.',
    description: 'Provide an effortless omnichannel customer experience. Give your team a single unified timeline of customer interactions across voice calls, digital channels, and AI automated bots.',
    keyFeatures: [
      'Omnichannel Universal Inbox (Voice, SMS, WhatsApp, Web Chat, Email)',
      'Shared Customer Conversation Timeline with Searchable Transcripts',
      'AI-Powered Agent Assistance and Knowledge Base Recommendations',
      'Customizable SLA Timers and Escalation Workflows across Channels',
      'Multi-Channel CSAT, NPS, and Sentiment Analytics',
      'Enterprise Role-Based Permissions and Audit Trails',
    ],
    metrics: [
      { label: 'Channels Supported', value: 'Voice, SMS, Email, Chat, WhatsApp' },
      { label: 'Resolution Time', value: '38% faster multi-channel' },
      { label: 'Agent Ramp Time', value: 'Cut from 3 weeks to 4 days' },
      { label: 'Uptime SLA', value: '99.99% Guaranteed' },
    ],
    workflows: [
      'Customer initiates contact via web chat, SMS, or voice call',
      'Unified routing engine maps contact to single persistent thread',
      'Agent accesses full omnichannel history and contextual CRM profile',
      'Interaction logged across all systems with automated sentiment tagging',
    ],
    integrations: ['Segment', 'Microsoft Dynamics 365', 'Kustomer', 'Zendesk Suite'],
  },
  'agent-management': {
    title: 'Agent Management & Workforce Intelligence',
    badge: 'Workforce Optimization (WFO)',
    tagline: 'Maximize team productivity with real-time coaching, monitoring, and automated scheduling.',
    description: 'Manage 10 to 1,000+ agents effortlessly with live floor monitoring, whisper coaching, silent barging, automated QA scorecards, and AI-driven speech analytics.',
    keyFeatures: [
      'Live Supervisor Virtual Floor with Real-Time Agent State Matrix',
      'One-Click Silent Listen, Whisper Coaching, and 3-Way Barge-In',
      'Automated 100% Call Recording with AI Speech-to-Text Transcription',
      'Configurable Agent Evaluation Scorecards and Compliance Checklists',
      'Workforce Forecasting and Shift Scheduling Module',
      'Agent Gamification Leaderboards and Performance Badges',
    ],
    metrics: [
      { label: 'QA Coverage', value: '100% Automated Call Auditing' },
      { label: 'Coaching Efficacy', value: '+22% conversion bump' },
      { label: 'Schedule Adherence', value: '96.5% average' },
      { label: 'Supervisor Efficiency', value: '3x more agents managed' },
    ],
    workflows: [
      'Supervisor views real-time agent statuses (Available, On Call, Wrap-up, Break)',
      'Live sentiment alerts trigger instant supervisor whisper support',
      'AI transcribes and grades call against regulatory compliance scorecard',
      'Performance analytics feed automatically into weekly agent 1-on-1 reviews',
    ],
    integrations: ['Asana', 'Slack Alerts', 'Microsoft Teams', 'BambooHR', 'Workday'],
  },
  campaigns: {
    title: 'Campaign Management Engine',
    badge: 'Strategic Outbound Control',
    tagline: 'Granular control over dialing pace, lead lists, caller IDs, and conversion funnels.',
    description: 'Create, launch, pause, and optimize complex outbound calling campaigns with multi-tier segmentation, time-zone filters, automated recycling schedules, and A/B script testing.',
    keyFeatures: [
      'Dynamic List Segmentation by Custom Lead Attributes and Scores',
      'Intelligent Time-Zone Dialing Curfews (Automatic Federal & State Compliance)',
      'Automated Lead Recycling Rules (Busy, No Answer, Voicemail, Callback)',
      'A/B Testing for Caller IDs, Dialing Modes, and Script Variations',
      'Real-Time Campaign ROI and Contact Rate Analytics',
      'Automated Webhook Triggers for Immediate High-Priority Lead Injection',
    ],
    metrics: [
      { label: 'Contact Rate Lift', value: '+31% with Smart Recycling' },
      { label: 'Compliance Audits', value: '100% Time-zone Protected' },
      { label: 'List Processing', value: '1M+ leads processed in seconds' },
      { label: 'A/B Test Turnaround', value: 'Live real-time split testing' },
    ],
    workflows: [
      'Marketing uploads lead list with custom tagging and scoring',
      'Campaign manager assigns dialer type, caller ID pool, and script template',
      'System executes campaign adhering strictly to time-zone calling windows',
      'Unreached leads recycled based on automated 3-day exponential backoff rule',
    ],
    integrations: ['Marketo', 'HubSpot Marketing Hub', 'ActiveCampaign', 'Custom Data Warehouses'],
  },
  analytics: {
    title: 'Call Analytics & Business Intelligence',
    badge: 'Data-Driven Insights',
    tagline: 'Turn voice interactions into actionable business intelligence with deep reporting.',
    description: 'Gain full operational visibility with real-time dashboards, historical trend reporting, agent performance scorecards, speech analytics, and custom SQL/BI exports.',
    keyFeatures: [
      'Real-Time Operations Dashboards with Sub-Second Refresh Rates',
      'Detailed Call Detail Records (CDR) with 50+ Telemetry Fields',
      'AI Speech Analytics: Keyword Spotting, Sentiment Tracking, Talk/Listen Ratios',
      'Custom KPI Builder with Automated Scheduled Email / Slack Reports',
      'Agent Productivity Benchmarks and Revenue Attribution Modeling',
      'Direct Snowflake, BigQuery, and Redshift Data Pipeline Streaming',
    ],
    metrics: [
      { label: 'Telemetry Fields', value: '50+ parameters per CDR' },
      { label: 'Data Latency', value: '< 1 second for live metrics' },
      { label: 'Retention Period', value: 'Up to 7 years compliant storage' },
      { label: 'Export Formats', value: 'CSV, JSON, Parquet, REST API, SQL' },
    ],
    workflows: [
      'Every call event streams real-time telemetry to analytical data warehouse',
      'Speech recognition extracts keywords, objections, and sentiment markers',
      'Supervisors review interactive heatmaps of peak call traffic and conversion',
      'Executive KPI reports automatically generated and dispatched every Monday',
    ],
    integrations: ['Tableau', 'Power BI', 'Google Looker Studio', 'Snowflake', 'Datadog'],
  },
  crm: {
    title: 'CRM Integration & Telephony Sync',
    badge: 'Unified Customer Data',
    tagline: 'Deep two-way CRM integration that puts customer context at your agents fingertips.',
    description: 'Eliminate manual data entry and context switching with native CRM integrations that support instant click-to-dial, inbound screen pops, automatic call logging, and seamless recording sync.',
    keyFeatures: [
      'Embedded Softphone Widget inside Salesforce, HubSpot, and Zoho',
      'Instant Click-to-Dial from Any Browser Window or CRM Lead Record',
      'Zero-Latency Inbound Caller Identification Screen Pop',
      'Automatic Call Activity, Disposition, and Audio Recording Logging',
      'Custom Field Mapping between Dialer Database and CRM Schema',
      'Automated Lead Status Updates and Task Assignment on Call Wrap-Up',
    ],
    metrics: [
      { label: 'Time Saved', value: '45 seconds saved per call' },
      { label: 'Data Accuracy', value: '100% automatic activity logging' },
      { label: 'Screen Pop Speed', value: '< 180ms on ring' },
      { label: 'Setup Time', value: '< 15 minutes native installation' },
    ],
    workflows: [
      'Agent views CRM record and initiates call with single click',
      'Softphone connects call while displaying live lead notes and tags',
      'Agent completes call and selects disposition from customized dropdown',
      'CRM is automatically updated with call length, recording URL, and next task',
    ],
    integrations: ['Salesforce', 'HubSpot', 'Zoho CRM', 'Microsoft Dynamics', 'Pipedrive', 'SugarCRM'],
  },
};

export async function generateStaticParams() {
  return Object.keys(callCenterDetails).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = callCenterDetails[slug];
  if (!data) return { title: 'Call Center Solutions — Voice Era Tech LLC' };
  return {
    title: `${data.title} — Voice Era Tech LLC`,
    description: data.description,
  };
}

export default async function CallCenterSubPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = callCenterDetails[slug];
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
            <Link href="/call-center" style={{ color: '#64748B', textDecoration: 'none' }}>Call Center</Link>
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
              <Link href={`/contact?solution=${slug}`} className="btn-magnetic btn-primary">
                Deploy {data.title} →
              </Link>
              <Link href="/call-center" className="btn-magnetic btn-secondary">
                View All Call Center Solutions
              </Link>
            </div>
          </div>

          {/* Metrics Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '4.5rem' }}>
            {data.metrics.map(m => (
              <div key={m.label} className="node-card" style={{ padding: '1.5rem' }}>
                <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.7rem', color: '#64748B', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  {m.label}
                </div>
                <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: '1.15rem', fontWeight: 700, color: '#0F172A' }}>
                  {m.value}
                </div>
              </div>
            ))}
          </div>

          {/* Core Features & Workflows */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '4.5rem' }} className="flex flex-col md:grid">
            <div className="node-card">
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0F172A', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#2563EB' }}>⚙️</span> Platform Capabilities
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
                <span style={{ color: '#0284C7' }}>🔄</span> Operational Workflow
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {data.workflows.map((w, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(2, 132, 199, 0.1)', color: '#0284C7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>
                      {i + 1}
                    </div>
                    <span style={{ color: '#334155', fontSize: '0.95rem', lineHeight: 1.6 }}>{w}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Integrations Bar */}
          <div style={{ background: '#F8FAFC', border: '1px solid rgba(226, 232, 240, 0.9)', borderRadius: 24, padding: '2.5rem', marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem', fontFamily: '"JetBrains Mono", monospace' }}>
              Compatible Integrations & Ecosystems
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {data.integrations.map(int => (
                <span key={int} style={{ background: '#FFFFFF', border: '1px solid rgba(226, 232, 240, 0.8)', padding: '0.5rem 1rem', borderRadius: 100, fontSize: '0.875rem', fontWeight: 600, color: '#334155', boxShadow: 'var(--shadow-sm)' }}>
                  {int}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', padding: '4rem 2rem', background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(2, 132, 199, 0.05) 100%)', borderRadius: 24, border: '1px solid rgba(37, 99, 235, 0.15)' }}>
            <h2 className="text-display-md" style={{ color: '#0F172A', marginBottom: '1rem' }}>
              Scale your team with {data.title}
            </h2>
            <p className="text-body-lg" style={{ color: '#64748B', maxWidth: 560, margin: '0 auto 2rem' }}>
              Contact our call center architects today to design your optimal telephony configuration and agent routing logic.
            </p>
            <Link href={`/contact?solution=${slug}`} className="btn-magnetic btn-primary" style={{ padding: '1rem 2.25rem', fontSize: '1rem' }}>
              Speak with a Solutions Architect →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
