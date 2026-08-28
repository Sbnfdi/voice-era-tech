'use client';

import Link from 'next/link';

const footerLinks = {
  Solutions: [
    { label: 'Predictive Dialer', href: '/dialer-systems/predictive' },
    { label: 'Power Dialer', href: '/dialer-systems/power' },
    { label: 'Progressive Dialer', href: '/dialer-systems/progressive' },
    { label: 'Preview Dialer', href: '/dialer-systems/preview' },
    { label: 'VoIP Dialer', href: '/dialer-systems/voip' },
    { label: 'SIP Dialer', href: '/dialer-systems/sip' },
    { label: 'Multi-Tenant Dialer', href: '/dialer-systems/multi-tenant' },
    { label: 'Custom Dialer', href: '/dialer-systems/custom' },
  ],
  'Call Center': [
    { label: 'Inbound Call Center', href: '/call-center/inbound' },
    { label: 'Outbound Call Center', href: '/call-center/outbound' },
    { label: 'Blended Operations', href: '/call-center/blended' },
    { label: 'Contact Center Solutions', href: '/call-center/contact-center' },
    { label: 'Campaign Management', href: '/call-center/campaigns' },
    { label: 'Agent Management', href: '/call-center/agent-management' },
    { label: 'Call Analytics', href: '/call-center/analytics' },
    { label: 'CRM Integration', href: '/call-center/crm' },
  ],
  'AI & Automation': [
    { label: 'AI Voice Agents', href: '/ai-solutions/voice-agents' },
    { label: 'AI Call Agents', href: '/ai-solutions/call-agents' },
    { label: 'AI Customer Support', href: '/ai-solutions/customer-support' },
    { label: 'AI Lead Qualification', href: '/ai-solutions/lead-qualification' },
    { label: 'AI Appointment Agents', href: '/ai-solutions/appointments' },
    { label: 'AI Automation', href: '/ai-solutions/automation' },
    { label: 'Custom AI Solutions', href: '/ai-solutions/custom' },
  ],
  Technology: [
    { label: 'Cloud Configuration', href: '/cloud-it/configuration' },
    { label: 'Cloud Migration', href: '/cloud-it/migration' },
    { label: 'Server Deployment', href: '/cloud-it/servers' },
    { label: 'Security & Posture', href: '/cloud-it/security' },
    { label: 'Monitoring & Alerting', href: '/cloud-it/monitoring' },
    { label: 'DevOps Pipelines', href: '/cloud-it/devops' },
    { label: 'API Infrastructure', href: '/cloud-it/api' },
  ],
  Development: [
    { label: 'Website Development', href: '/development/websites' },
    { label: 'Web Applications', href: '/development/web-apps' },
    { label: 'SaaS Development', href: '/development/saas' },
    { label: 'Custom Software', href: '/development/custom' },
    { label: 'CRM Development', href: '/development/crm' },
    { label: 'API Development', href: '/development/api' },
    { label: 'UI/UX Design', href: '/development/design' },
  ],
  Company: [
    { label: 'About Voice Era Tech', href: '/about' },
    { label: 'Our Technology', href: '/technology' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Security Overview', href: '/security' },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        position: 'relative',
        background: '#F8FAFC',
        borderTop: '1px solid rgba(226, 232, 240, 0.9)',
        overflow: 'hidden',
      }}
    >
      <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
        {/* Top banner / Callout */}
        <div
          style={{
            padding: '4rem 0 3.5rem',
            borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '2.5rem',
            alignItems: 'center',
          }}
          className="flex flex-col md:grid"
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: '0.85rem' }}>Next-Generation Telephony</div>
            <h2 className="text-display-sm" style={{ color: '#0F172A', marginBottom: '0.5rem' }}>
              Transform Your Call Center Operations Today
            </h2>
            <p className="text-body" style={{ color: '#475569', maxWidth: 640 }}>
              Scale outbound campaigns, reduce agent idle time, and deploy conversational AI with Voice Era Tech enterprise dialer solutions.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-magnetic btn-primary" style={{ padding: '0.85rem 1.85rem' }}>
              Schedule a Consultation →
            </Link>
            <Link href="/dialer-systems" className="btn-magnetic btn-secondary" style={{ padding: '0.85rem 1.85rem' }}>
              Explore Dialers
            </Link>
          </div>
        </div>

        {/* Links Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
            gap: '2.5rem',
            padding: '4rem 0 3rem',
            borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
          }}
        >
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <div
                style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '0.725rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#0F172A',
                  fontWeight: 700,
                  marginBottom: '1.25rem',
                }}
              >
                {category}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {links.map(link => (
                  <Link
                    key={link.label}
                    href={link.href}
                    style={{
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      fontSize: '0.875rem',
                      color: '#64748B',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#2563EB';
                      e.currentTarget.style.transform = 'translateX(2px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = '#64748B';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            padding: '2rem 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: 'linear-gradient(135deg, #2563EB, #0284C7)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: 800,
                fontSize: '0.85rem',
              }}
            >
              V
            </div>
            <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: '0.875rem', color: '#64748B' }}>
              © {year} <strong style={{ color: '#0F172A' }}>Voice Era Tech LLC</strong>. All rights reserved.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/privacy" style={{ fontSize: '0.8rem', color: '#64748B', textDecoration: 'none' }}>
              Privacy Policy
            </Link>
            <Link href="/terms" style={{ fontSize: '0.8rem', color: '#64748B', textDecoration: 'none' }}>
              Terms of Service
            </Link>
            <Link href="/security" style={{ fontSize: '0.8rem', color: '#64748B', textDecoration: 'none' }}>
              Security
            </Link>
            <Link href="/contact" style={{ fontSize: '0.8rem', color: '#2563EB', textDecoration: 'none', fontWeight: 600 }}>
              Support Center
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
