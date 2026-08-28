import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

interface DevData {
  title: string;
  badge: string;
  tagline: string;
  description: string;
  keyFeatures: string[];
  metrics: { label: string; value: string }[];
  processSteps: string[];
  techStack: string[];
}

const devDetails: Record<string, DevData> = {
  websites: {
    title: 'Enterprise Website Development',
    badge: 'High-Impact Digital Presence',
    tagline: 'World-class, high-converting digital platforms engineered with modern web technologies.',
    description: 'We design and engineer bespoke corporate websites and enterprise portals optimized for brand authority, interactive 3D visual storytelling, sub-second page loads, and maximum inbound conversion.',
    keyFeatures: [
      'Bespoke Next.js & React App Router Architecture',
      'Fluid Micro-Animations, 3D WebGL / Canvas Visualizations, and GSAP',
      'SEO Architecture with 100/100 Core Web Vitals Performance',
      'Headless CMS Integration (Sanity, Strapi, Contentful) for Easy Updates',
      'Mobile-First Responsive Layouts with Perfect Cross-Browser Compatibility',
      'Enterprise Form Capture with Automated CRM Lead Insertion and Webhooks',
    ],
    metrics: [
      { label: 'Page Load Speed', value: '< 800ms First Contentful Paint' },
      { label: 'Lighthouse Score', value: '98-100 across all metrics' },
      { label: 'Conversion Lift', value: '+45% average lead capture' },
      { label: 'SEO Readiness', value: '100% Structured Schema & Meta' },
    ],
    processSteps: [
      'Discovery, wireframing, and interactive Figma UI/UX prototyping',
      'High-performance Next.js frontend engineering and component assembly',
      'API, CRM webhook, and lead generation tracking integration',
      'Rigorous cross-device testing, SEO audit, and production deployment',
    ],
    techStack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js / WebGL', 'Sanity.io'],
  },
  'web-apps': {
    title: 'Complex Web Application Development',
    badge: 'Full-Stack Engineering',
    tagline: 'Scalable, reactive web platforms with real-time state synchronization and multi-tenant logic.',
    description: 'We engineer mission-critical web applications, enterprise internal dashboards, real-time agent workspaces, and interactive customer portals built with robust TypeScript architectures and cloud-native databases.',
    keyFeatures: [
      'Real-Time WebSocket & WebRTC Event Streaming',
      'Complex State Management and Optimistic UI Updates',
      'Granular Role-Based Access Control (RBAC) & Audit Trails',
      'Serverless and Containerized Microservices Backend Architecture',
      'Interactive Data Visualization Dashboards and Report Generation',
      'Comprehensive Automated Unit, Integration, and End-to-End Test Suites',
    ],
    metrics: [
      { label: 'Real-time Latency', value: '< 50ms WebSocket updates' },
      { label: 'Test Coverage', value: '> 90% automated testing' },
      { label: 'Concurrent Users', value: '100,000+ active connections' },
      { label: 'Security Grade', value: 'OWASP Top 10 Compliant' },
    ],
    processSteps: [
      'System architecture design and database schema modeling',
      'REST/GraphQL API development and secure authentication setup',
      'Reactive component-driven frontend engineering',
      'Automated CI/CD deployment to high-availability cloud infrastructure',
    ],
    techStack: ['React', 'Node.js / Express', 'PostgreSQL', 'Redis', 'WebSockets', 'Tailwind CSS'],
  },
  saas: {
    title: 'SaaS Product Engineering & Architecture',
    badge: 'End-to-End Product Development',
    tagline: 'From concept to multi-tenant scale: complete SaaS software engineering.',
    description: 'We partner with founders and enterprise innovators to build scalable Software-as-a-Service platforms featuring automated subscription billing, multi-tenant data isolation, user onboarding funnels, and enterprise API ecosystems.',
    keyFeatures: [
      'Turnkey Multi-Tenant Architecture with Strict Data Isolation',
      'Automated Stripe / Paddle Subscription Billing, Invoicing, and Tier Caps',
      'User Onboarding, Magic-Link Auth, and Team Collaboration Workspaces',
      'Self-Service API Key Management and Webhook Dispatcher',
      'Product Usage Analytics, Seat Tracking, and In-App Notifications',
      'Automated Staging, Canary Releases, and Production Infrastructure',
    ],
    metrics: [
      { label: 'Time to Market', value: '6-10 weeks to MVP launch' },
      { label: 'Billing Engine', value: 'Stripe Billing & Metered Usage' },
      { label: 'Tenant Isolation', value: 'Row-Level Security & Schema Isolation' },
      { label: 'Scalability', value: 'Auto-scaling from 10 to 1M users' },
    ],
    processSteps: [
      'Product requirements document (PRD) and MVP feature prioritization',
      'Multi-tenant database schema, auth, and billing infrastructure setup',
      'Core feature development with continuous user feedback loops',
      'Production deployment, monitoring, and scale optimization',
    ],
    techStack: ['Next.js', 'PostgreSQL / Prisma', 'Stripe API', 'Redis', 'AWS Fargate', 'Docker'],
  },
  custom: {
    title: 'Custom Enterprise Software Engineering',
    badge: 'Tailored Solutions',
    tagline: 'Bespoke software platforms engineered for proprietary business processes.',
    description: 'When existing software limits your operational capabilities, Voice Era Tech engineers custom enterprise applications, automation tools, legacy bridges, and internal software that align 100% with your competitive advantage.',
    keyFeatures: [
      'Purpose-Built Architecture Designed for Your Exact Operational Flow',
      'Legacy System Modernization (AS400, Mainframes, On-Premise SQL)',
      'High-Performance Data Ingestion Pipelines and ETL Systems',
      'Custom Hardware, Scanner, and Telephony Integration Bridges',
      'Enterprise-Grade Security, Role Hierarchy, and Immutable Audit Logs',
      'Complete Intellectual Property and Source Code Ownership Transfer',
    ],
    metrics: [
      { label: 'IP Ownership', value: '100% Client Owned' },
      { label: 'Operational Gain', value: '4x to 10x process speedup' },
      { label: 'Architecture', value: 'Microservices or Clean Monolith' },
      { label: 'SLA Support', value: '24/7 Enterprise Tier Maintenance' },
    ],
    processSteps: [
      'Deep operational workflow immersion and requirement gathering',
      'Technical architecture blueprint and security review',
      'Agile bi-weekly sprint development with live demo environments',
      'Full deployment, staff training, documentation, and ongoing maintenance',
    ],
    techStack: ['Go / Golang', 'TypeScript', 'PostgreSQL', 'Docker', 'Kubernetes', 'Python'],
  },
  crm: {
    title: 'Custom CRM Development & Modernization',
    badge: 'Sales & Lead Management',
    tagline: 'Build the exact CRM your sales and call center teams need to close more deals.',
    description: 'Off-the-shelf CRMs often create friction. We build lightweight, ultra-fast custom CRMs and lead management systems tailored specifically for high-velocity outbound calling, real-time agent script progression, and custom deal workflows.',
    keyFeatures: [
      'Sub-Second Screen Loads with Zero CRM Lag',
      'Native Embedded Dialer Integration (Click-to-Call, Auto-Logging)',
      'Custom Lead Distribution and Intelligent Territory Routing Engines',
      'Interactive Sales Scripting and Rebuttal Popups Built into Lead Cards',
      'Custom Pipeline Stages with Automated Deal Movement Triggers',
      'Comprehensive Visual Sales Analytics, Forecasting, and Leaderboards',
    ],
    metrics: [
      { label: 'Speed vs Off-Shelf', value: '8x faster than traditional CRMs' },
      { label: 'Rep Adoption', value: '98% immediate adoption rate' },
      { label: 'Dialer Sync', value: 'Native zero-latency integration' },
      { label: 'Custom Fields', value: 'Unlimited polymorphic lead attributes' },
    ],
    processSteps: [
      'Sales process mapping and lead lifecycle definition',
      'Custom UI design optimized for rapid agent data entry',
      'Telephony and communication pipeline integration',
      'Data migration from existing CRM and team onboarding',
    ],
    techStack: ['React', 'Next.js', 'PostgreSQL', 'GraphQL', 'Tailwind CSS', 'Redis'],
  },
  api: {
    title: 'Custom API Engineering & Integrations',
    badge: 'Ecosystem Connectivity',
    tagline: 'Seamlessly connect disparate databases, third-party SaaS, and telephony systems.',
    description: 'We design, build, document, and maintain high-performance RESTful and GraphQL APIs, event-driven webhook orchestrators, and enterprise middleware to connect your business ecosystem into a synchronized data flow.',
    keyFeatures: [
      'RESTful & GraphQL API Architecture Built for High Concurrency',
      'Event-Driven Microservice Messaging with Apache Kafka and RabbitMQ',
      'Bi-Directional Real-Time Data Synchronization Engines',
      'Enterprise Authentication (OAuth 2.0, JWT, API Keys, mTLS)',
      'Automated OpenAPI / Swagger Documentation and Sandbox Environments',
      'Dead-Letter Queue Buffering for 100% Reliable Delivery During Outages',
    ],
    metrics: [
      { label: 'Throughput', value: '50,000+ requests / second' },
      { label: 'API Latency', value: '< 15ms p99 response time' },
      { label: 'Data Delivery', value: '99.999% guaranteed delivery' },
      { label: 'Standard', value: 'OpenAPI 3.1 & JSON:API' },
    ],
    processSteps: [
      'API contract specification and schema definition',
      'High-performance backend engineering with automated testing',
      'Authentication, rate limiting, and security hardening',
      'Developer documentation, Postman collection, and SDK publishing',
    ],
    techStack: ['Node.js', 'Go', 'Kafka', 'Redis', 'OpenAPI', 'Postman'],
  },
  design: {
    title: 'Enterprise UI/UX Design & Design Systems',
    badge: 'Human-Centered Design',
    tagline: 'Crafting intuitive, beautiful digital interfaces that empower users and elevate brands.',
    description: 'Our product designers create enterprise user interfaces, design systems, interactive prototypes, and complex software workflows that balance visual beauty with operational speed and zero cognitive friction.',
    keyFeatures: [
      'Comprehensive Design Systems with Reusable Figma Token Libraries',
      'Deep User Research, Task Flow Mapping, and Information Architecture',
      'High-Fidelity Interactive Clickable Prototypes for Stakeholder Alignment',
      'WCAG 2.1 AA Accessibility Compliance & High-Contrast Readability',
      'Micro-Interactions, State Transitions, and Component Motion Specifications',
      'Pixel-Perfect Developer Handoff with Clean CSS Variable Tokens',
    ],
    metrics: [
      { label: 'Task Completion', value: '+38% faster operational workflows' },
      { label: 'Accessibility', value: 'WCAG 2.1 AA Certified' },
      { label: 'Component Library', value: '500+ customizable Figma tokens' },
      { label: 'User Satisfaction', value: '4.9 / 5 User Usability Score' },
    ],
    processSteps: [
      'User research, competitor benchmarking, and journey mapping',
      'Low-fidelity wireframing and information architecture structuring',
      'High-fidelity visual design, typography, and interactive prototyping',
      'Design system documentation and engineering handoff coordination',
    ],
    techStack: ['Figma', 'FigJam', 'Tokens Studio', 'Adobe CC', 'Lottie', 'Storybook'],
  },
};

export async function generateStaticParams() {
  return Object.keys(devDetails).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = devDetails[slug];
  if (!data) return { title: 'Development Services — Voice Era Tech LLC' };
  return {
    title: `${data.title} — Voice Era Tech LLC`,
    description: data.description,
  };
}

export default async function DevSubPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = devDetails[slug];
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
            <Link href="/development" style={{ color: '#64748B', textDecoration: 'none' }}>Development</Link>
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
              <Link href={`/contact?dev_project=${slug}`} className="btn-magnetic btn-primary">
                Start a {data.title} Project →
              </Link>
              <Link href="/development" className="btn-magnetic btn-secondary">
                View All Development Services
              </Link>
            </div>
          </div>

          {/* Performance Metrics Grid */}
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

          {/* Features & Development Process */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '4.5rem' }} className="flex flex-col md:grid">
            <div className="node-card">
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0F172A', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#2563EB' }}>💻</span> Technical Capabilities
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
                <span style={{ color: '#0284C7' }}>⚡</span> Development Process
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {data.processSteps.map((p, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(2, 132, 199, 0.1)', color: '#0284C7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>
                      {i + 1}
                    </div>
                    <span style={{ color: '#334155', fontSize: '0.95rem', lineHeight: 1.6 }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div style={{ background: '#F8FAFC', border: '1px solid rgba(226, 232, 240, 0.9)', borderRadius: 24, padding: '2.5rem', marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem', fontFamily: '"JetBrains Mono", monospace' }}>
              Core Technologies & Frameworks
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {data.techStack.map(t => (
                <span key={t} style={{ background: '#FFFFFF', border: '1px solid rgba(226, 232, 240, 0.8)', padding: '0.5rem 1rem', borderRadius: 100, fontSize: '0.875rem', fontWeight: 600, color: '#334155', boxShadow: 'var(--shadow-sm)' }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', padding: '4rem 2rem', background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(2, 132, 199, 0.05) 100%)', borderRadius: 24, border: '1px solid rgba(37, 99, 235, 0.15)' }}>
            <h2 className="text-display-md" style={{ color: '#0F172A', marginBottom: '1rem' }}>
              Let&apos;s Build Your Software Platform
            </h2>
            <p className="text-body-lg" style={{ color: '#64748B', maxWidth: 560, margin: '0 auto 2rem' }}>
              Partner with our senior software engineers and designers to build software that scales effortlessly.
            </p>
            <Link href={`/contact?project=${slug}`} className="btn-magnetic btn-primary" style={{ padding: '1rem 2.25rem', fontSize: '1rem' }}>
              Schedule Scoping Call →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
