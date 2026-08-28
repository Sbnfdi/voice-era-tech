import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

interface CloudData {
  title: string;
  badge: string;
  tagline: string;
  description: string;
  keyFeatures: string[];
  specs: { label: string; value: string }[];
  deliverables: string[];
  technologies: string[];
}

const cloudDetails: Record<string, CloudData> = {
  configuration: {
    title: 'Cloud Infrastructure Configuration',
    badge: 'Enterprise Architecture',
    tagline: 'High-availability cloud environments architected for high-concurrency telephony workloads.',
    description: 'We design and configure cloud infrastructure across AWS, Google Cloud, and Microsoft Azure tailored specifically for low-latency voice, VoIP session border controllers, real-time databases, and auto-scaling dialer clusters.',
    keyFeatures: [
      'Multi-AZ (Availability Zone) and Multi-Region Redundant Architectures',
      'Virtual Private Cloud (VPC) Peering and Dedicated Direct Connect Setup',
      'Elastic Auto-Scaling Groups with Pre-Warmed Telephony Instances',
      'Hardware-Accelerated Network Interfaces (SR-IOV, ENA) for Voice RTP',
      'Infrastructure as Code (Terraform, Pulumi, AWS CDK) with Version Control',
      'Zero Single-Point-of-Failure (SPOF) Database and SIP Clustered Design',
    ],
    specs: [
      { label: 'Uptime SLA', value: '99.999% High Availability' },
      { label: 'Provisioning', value: '100% Terraform / IaC' },
      { label: 'Cloud Providers', value: 'AWS, GCP, Azure, Equinix Bare Metal' },
      { label: 'Network Latency', value: 'Sub-millisecond intra-AZ' },
    ],
    deliverables: [
      'Complete Terraform infrastructure repository with CI/CD deployment',
      'Comprehensive network topology architecture diagram',
      'Cost optimization blueprint with reserved instance planning',
      'Detailed Runbook and disaster recovery execution protocols',
    ],
    technologies: ['AWS VPC', 'Terraform', 'Kubernetes', 'Docker', 'Google Cloud Compute', 'Azure VNet'],
  },
  migration: {
    title: 'Zero-Downtime Cloud Migration',
    badge: 'Seamless Transitions',
    tagline: 'Migrate on-premise PBXs, call centers, and legacy dialers to the cloud without dropping a call.',
    description: 'Move complex legacy telephony stacks (Avaya, Cisco, Asterisk, Vicidial, FreePBX) into modern scalable cloud environments with staged parallel cutovers, zero data loss, and uninterrupted agent productivity.',
    keyFeatures: [
      'Comprehensive Pre-Migration Readiness and SIP Route Auditing',
      'Zero-Downtime Parallel Cutover with Automated Rollback Safeguards',
      'Full Database, CDR History, and Call Recording Migration',
      'Agent Workspace and Softphone Configuration Preservation',
      'Carrier SIP Trunk Rerouting and Number Porting Management',
      'Post-Migration 24/7 War Room Hypercare Support',
    ],
    specs: [
      { label: 'Downtime', value: 'Zero seconds during cutover' },
      { label: 'Data Integrity', value: '100% CDR and Recording parity' },
      { label: 'Porting Support', value: 'All Tier 1 and CLEC carriers' },
      { label: 'Hypercare', value: '30 days dedicated support' },
    ],
    deliverables: [
      'Phase-by-phase migration project roadmap and milestone schedule',
      'Dual-stack parallel routing bridge configuration',
      'Automated data validation and parity check scripts',
      'Post-cutover performance benchmark report',
    ],
    technologies: ['AWS DMS', 'Kamailio', 'PostgreSQL', 'SIP Proxies', 'S3 Glacier', 'Kafka'],
  },
  servers: {
    title: 'Managed Server Deployment & Scaling',
    badge: 'Bare-Metal & Virtualized',
    tagline: 'Dedicated voice and dialer servers optimized for high packet rates and audio fidelity.',
    description: 'Deploy, optimize, and manage high-performance bare-metal and virtualized servers engineered to process millions of SIP packets per second with kernel-level tuning for RTP audio stability.',
    keyFeatures: [
      'Custom Linux Kernel Tuning for Ultra-Low Jitter and Zero Packet Drop',
      'Real-Time Kernel (RT_PREEMPT) Configuration for Telephony Daemons',
      'High-Speed NVMe Storage Arrays with RAID 10 Redundancy',
      'Hardware-Based Network Filtering and BGP Anycast Routing',
      'Automated Daily Encrypted Backups and Instant Snapshot Recovery',
      '24/7/365 Proactive Hardware and Resource Health Monitoring',
    ],
    specs: [
      { label: 'Network Throughput', value: 'Up to 40 Gbps dedicated per node' },
      { label: 'Kernel Tuning', value: 'Custom sysctl voice-optimized profile' },
      { label: 'Backup Frequency', value: 'Continuous point-in-time recovery' },
      { label: 'Hardware SLA', value: '15-minute replacement guarantee' },
    ],
    deliverables: [
      'Hardened enterprise Linux server images (Debian / Ubuntu / RHEL)',
      'Automated Ansible configuration management playbooks',
      'Resource monitoring and disk capacity threshold alerts',
      'Complete server security compliance audit certificate',
    ],
    technologies: ['Ubuntu Server', 'Debian Linux', 'Ansible', 'Proxmox / KVM', 'Grafana', 'Prometheus'],
  },
  security: {
    title: 'Enterprise Telephony & Cloud Security',
    badge: 'Zero-Trust Defense',
    tagline: 'End-to-end security architecture protecting voice streams, customer PII, and infrastructure.',
    description: 'Safeguard your call center and customer data against SIP toll fraud, DDoS attacks, unauthorized wiretapping, and data breaches with enterprise-grade encryption, role-based access, and compliance auditing.',
    keyFeatures: [
      'SIP over TLS Signaling and SRTP Voice Stream Encryption',
      'Automated Real-Time Toll Fraud and Anomalous Outbound Dialing Detection',
      'Layer 3/4 and Layer 7 SIP DDoS Mitigation Shields',
      'Role-Based Access Control (RBAC) with Single Sign-On (SSO / SAML 2.0)',
      'PCI-DSS Compliant Call Recording and PII Audio Redaction',
      'SOC 2 Type II, HIPAA, and GDPR Regulatory Alignment',
    ],
    specs: [
      { label: 'Encryption', value: 'AES-256 / TLS 1.3 / SRTP' },
      { label: 'Fraud Detection', value: 'Sub-second auto-quarantine' },
      { label: 'SSO Protocols', value: 'Okta, Azure AD, Google Workspace' },
      { label: 'Audit Logging', value: 'Immutable SIEM streaming' },
    ],
    deliverables: [
      'Enterprise security assessment and penetration testing report',
      'Custom WAF and SIP firewall configuration rulesets',
      'Automated vulnerability scanning and patch management pipeline',
      'Incident response and breach mitigation playbook',
    ],
    technologies: ['Vault by HashiCorp', 'AWS GuardDuty', 'Cloudflare Magic Transit', 'Fail2ban', 'Wazuh SIEM'],
  },
  monitoring: {
    title: 'Real-Time Infrastructure Monitoring & Observability',
    badge: 'Proactive Telemetry',
    tagline: 'Complete 360-degree observability into call quality, server health, and network latency.',
    description: 'Detect and resolve voice degradation, jitter spikes, carrier packet loss, and server bottlenecks before they impact your agents with real-time distributed telemetry and automated alerting.',
    keyFeatures: [
      'Real-Time MOS (Mean Opinion Score) Audio Quality Tracking per Call',
      'Distributed Tracing across SIP Proxies, Media Gateways, and Databases',
      'Automated Multi-Channel Alerting via Slack, PagerDuty, SMS, and Email',
      'Custom Prometheus & Grafana Dashboards for Engineering and Executive Teams',
      'Carrier Uptime and ASR (Answer-Seizure Ratio) Quality Benchmarking',
      'Automated Synthetic Test Calls Placed every 60 Seconds',
    ],
    specs: [
      { label: 'Metric Resolution', value: '1-second granularity' },
      { label: 'Alert Dispatch', value: '< 5 seconds from incident' },
      { label: 'Synthetic Tests', value: 'Global multi-carrier pinging' },
      { label: 'Log Search Speed', value: 'Millions of lines / second' },
    ],
    deliverables: [
      'Tailored Grafana observability dashboards with role access',
      'PagerDuty / Opsgenie escalation matrix configuration',
      'Automated weekly QoS and uptime SLA compliance reports',
      'Custom Logstash / OpenSearch distributed log aggregator',
    ],
    technologies: ['Prometheus', 'Grafana', 'Datadog', 'OpenTelemetry', 'PagerDuty', 'Homer SIP Capture'],
  },
  devops: {
    title: 'DevOps & CI/CD Telephony Automation',
    badge: 'Continuous Delivery',
    tagline: 'Automate build, test, and zero-downtime deployment pipelines for voice and software systems.',
    description: 'Accelerate release velocity and eliminate deployment errors with automated continuous integration and continuous deployment pipelines engineered for high-availability telephony microservices.',
    keyFeatures: [
      'Automated CI/CD Pipelines via GitHub Actions and GitLab CI',
      'Containerized Microservices Orchestration with Kubernetes / Helm',
      'Blue-Green and Canary Deployment Strategies for Zero-Downtime Updates',
      'Automated Telephony Integration Tests and SIP Load Simulation',
      'Infrastructure as Code (IaC) Linting, Security Scanning, and Formatting',
      'Automated Database Schema Migration and Rollback Scripts',
    ],
    specs: [
      { label: 'Deploy Frequency', value: 'Multiple times daily on-demand' },
      { label: 'Rollback Speed', value: '< 30 seconds automated rollback' },
      { label: 'Test Coverage', value: 'Automated end-to-end SIP testing' },
      { label: 'Container Runtime', value: 'Docker / containerd / k8s' },
    ],
    deliverables: [
      'Turnkey GitHub Actions / GitLab CI workflow configuration',
      'Production-grade Helm charts and Kubernetes manifests',
      'Automated load testing scripts with SIPp benchmarking',
      'Developer onboarding and local testing environment guides',
    ],
    technologies: ['GitHub Actions', 'Kubernetes', 'Helm', 'ArgoCD', 'Terraform', 'SIPp'],
  },
  api: {
    title: 'Scalable API Infrastructure & Gateways',
    badge: 'Developer Platform',
    tagline: 'High-throughput, secure API gateways built for millions of real-time telephony webhooks.',
    description: 'Architect and deploy high-performance API gateways capable of handling massive webhook bursts, real-time telephony signaling, token rate limiting, and seamless developer onboarding.',
    keyFeatures: [
      'Ultra-Low Latency API Gateway Routing (Kong, Envoy, AWS API Gateway)',
      'Granular Token Rate-Limiting, Quotas, and Developer Tiering',
      'Real-Time Webhook Dispatch Engine with Automated Exponential Backoff',
      'Interactive OpenAPI / Swagger Documentation and Developer Portal',
      'Mutual TLS (mTLS) and OAuth 2.0 Client Credentials Authentication',
      'GraphQL and RESTful Unified Microservice Query Aggregation',
    ],
    specs: [
      { label: 'Gateway Latency', value: '< 2ms added overhead' },
      { label: 'Webhook Throughput', value: '100,000+ events / second' },
      { label: 'Documentation', value: 'OpenAPI 3.1 Spec Compliant' },
      { label: 'Authentication', value: 'JWT, API Keys, mTLS, OAuth 2.0' },
    ],
    deliverables: [
      'Production-ready API gateway cluster with multi-region replication',
      'Automated interactive developer portal with code examples',
      'Redis-backed rate-limiting and quota enforcement rules',
      'Full Postman collection and SDK generation setup',
    ],
    technologies: ['Kong Gateway', 'Envoy Proxy', 'GraphQL', 'Redis', 'TypeScript', 'OpenAPI'],
  },
};

export async function generateStaticParams() {
  return Object.keys(cloudDetails).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = cloudDetails[slug];
  if (!data) return { title: 'Cloud & IT Services — Voice Era Tech LLC' };
  return {
    title: `${data.title} — Voice Era Tech LLC`,
    description: data.description,
  };
}

export default async function CloudSubPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = cloudDetails[slug];
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
            <Link href="/cloud-it" style={{ color: '#64748B', textDecoration: 'none' }}>Cloud & IT</Link>
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
              <Link href={`/contact?service=${slug}`} className="btn-magnetic btn-primary">
                Engage Cloud Architects for {data.title} →
              </Link>
              <Link href="/cloud-it" className="btn-magnetic btn-secondary">
                View All Cloud & IT Services
              </Link>
            </div>
          </div>

          {/* Technical Specs Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '4.5rem' }}>
            {data.specs.map(s => (
              <div key={s.label} className="node-card" style={{ padding: '1.5rem' }}>
                <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.7rem', color: '#64748B', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  {s.label}
                </div>
                <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: '1.15rem', fontWeight: 700, color: '#0F172A' }}>
                  {s.value}
                </div>
              </div>
            ))}
          </div>

          {/* Features & Deliverables Split */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '4.5rem' }} className="flex flex-col md:grid">
            <div className="node-card">
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0F172A', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#2563EB' }}>☁️</span> Engineering Highlights
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
                <span style={{ color: '#0284C7' }}>📦</span> Project Deliverables
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {data.deliverables.map((d, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(2, 132, 199, 0.1)', color: '#0284C7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>
                      {i + 1}
                    </div>
                    <span style={{ color: '#334155', fontSize: '0.95rem', lineHeight: 1.6 }}>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div style={{ background: '#F8FAFC', border: '1px solid rgba(226, 232, 240, 0.9)', borderRadius: 24, padding: '2.5rem', marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem', fontFamily: '"JetBrains Mono", monospace' }}>
              Technologies & Frameworks Utilized
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {data.technologies.map(t => (
                <span key={t} style={{ background: '#FFFFFF', border: '1px solid rgba(226, 232, 240, 0.8)', padding: '0.5rem 1rem', borderRadius: 100, fontSize: '0.875rem', fontWeight: 600, color: '#334155', boxShadow: 'var(--shadow-sm)' }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', padding: '4rem 2rem', background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(2, 132, 199, 0.05) 100%)', borderRadius: 24, border: '1px solid rgba(37, 99, 235, 0.15)' }}>
            <h2 className="text-display-md" style={{ color: '#0F172A', marginBottom: '1rem' }}>
              Build Resilient Infrastructure with Voice Era Tech
            </h2>
            <p className="text-body-lg" style={{ color: '#64748B', maxWidth: 560, margin: '0 auto 2rem' }}>
              Get a custom architecture audit and implementation roadmap from our senior cloud and network engineers.
            </p>
            <Link href={`/contact?cloud_inquiry=${slug}`} className="btn-magnetic btn-primary" style={{ padding: '1rem 2.25rem', fontSize: '1rem' }}>
              Consult with Senior Infrastructure Engineers →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
