'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

const navItems = [
  {
    label: 'Dialer Systems',
    href: '/dialer-systems',
    columns: [
      {
        title: 'Dialer Products',
        items: [
          { label: 'Predictive Dialer', href: '/dialer-systems/predictive', desc: 'AI-optimized outbound calling' },
          { label: 'Power Dialer', href: '/dialer-systems/power', desc: 'High-speed agent-driven calling' },
          { label: 'Progressive Dialer', href: '/dialer-systems/progressive', desc: 'Controlled automated dialing' },
          { label: 'Preview Dialer', href: '/dialer-systems/preview', desc: 'Agent-reviewed lead calling' },
        ],
      },
      {
        title: 'Infrastructure',
        items: [
          { label: 'VoIP Dialer', href: '/dialer-systems/voip', desc: 'Internet-based calling' },
          { label: 'SIP Dialer', href: '/dialer-systems/sip', desc: 'Session initiation protocol' },
          { label: 'Multi-Tenant Dialer', href: '/dialer-systems/multi-tenant', desc: 'Scalable multi-org infrastructure' },
          { label: 'Custom Dialer Solutions', href: '/dialer-systems/custom', desc: 'Purpose-built dialer development' },
        ],
      },
    ],
  },
  {
    label: 'Call Center',
    href: '/call-center',
    columns: [
      {
        title: 'Operations',
        items: [
          { label: 'Inbound Call Centers', href: '/call-center/inbound', desc: 'Customer support infrastructure' },
          { label: 'Outbound Call Centers', href: '/call-center/outbound', desc: 'Sales & campaign calling' },
          { label: 'Blended Call Centers', href: '/call-center/blended', desc: 'Combined in/outbound operations' },
          { label: 'Contact Center Solutions', href: '/call-center/contact-center', desc: 'Unified communication hub' },
        ],
      },
      {
        title: 'Management',
        items: [
          { label: 'Agent Management', href: '/call-center/agent-management', desc: 'Agent performance & scheduling' },
          { label: 'Campaign Management', href: '/call-center/campaigns', desc: 'End-to-end campaign control' },
          { label: 'Call Analytics', href: '/call-center/analytics', desc: 'Performance intelligence' },
          { label: 'CRM Integration', href: '/call-center/crm', desc: 'Connected customer data' },
        ],
      },
    ],
  },
  {
    label: 'AI Solutions',
    href: '/ai-solutions',
    columns: [
      {
        title: 'Voice AI',
        items: [
          { label: 'AI Voice Agents', href: '/ai-solutions/voice-agents', desc: 'Conversational voice automation' },
          { label: 'AI Call Agents', href: '/ai-solutions/call-agents', desc: 'Intelligent calling automation' },
          { label: 'AI Customer Support', href: '/ai-solutions/customer-support', desc: '24/7 automated support' },
        ],
      },
      {
        title: 'Intelligence',
        items: [
          { label: 'AI Lead Qualification', href: '/ai-solutions/lead-qualification', desc: 'Intelligent prospect scoring' },
          { label: 'AI Appointment Agents', href: '/ai-solutions/appointments', desc: 'Automated scheduling' },
          { label: 'AI Automation', href: '/ai-solutions/automation', desc: 'Workflow intelligence' },
          { label: 'Custom AI Solutions', href: '/ai-solutions/custom', desc: 'Purpose-built AI systems' },
        ],
      },
    ],
  },
  {
    label: 'Cloud & IT',
    href: '/cloud-it',
    columns: [
      {
        title: 'Cloud',
        items: [
          { label: 'Cloud Configuration', href: '/cloud-it/configuration', desc: 'Expert cloud setup' },
          { label: 'Cloud Migration', href: '/cloud-it/migration', desc: 'Seamless infrastructure moves' },
          { label: 'Server Deployment', href: '/cloud-it/servers', desc: 'Managed server infrastructure' },
        ],
      },
      {
        title: 'Infrastructure',
        items: [
          { label: 'Security', href: '/cloud-it/security', desc: 'Enterprise security posture' },
          { label: 'Monitoring', href: '/cloud-it/monitoring', desc: 'Real-time infrastructure visibility' },
          { label: 'DevOps', href: '/cloud-it/devops', desc: 'CI/CD & automation pipelines' },
          { label: 'API Infrastructure', href: '/cloud-it/api', desc: 'Scalable API architecture' },
        ],
      },
    ],
  },
  {
    label: 'Development',
    href: '/development',
    columns: [
      {
        title: 'Web & Software',
        items: [
          { label: 'Website Development', href: '/development/websites', desc: 'Premium web experiences' },
          { label: 'Web Applications', href: '/development/web-apps', desc: 'Complex web platforms' },
          { label: 'SaaS Development', href: '/development/saas', desc: 'Software-as-a-service products' },
          { label: 'Custom Software', href: '/development/custom', desc: 'Purpose-built solutions' },
        ],
      },
      {
        title: 'Integrations',
        items: [
          { label: 'CRM Development', href: '/development/crm', desc: 'Custom CRM systems' },
          { label: 'API Development', href: '/development/api', desc: 'RESTful & GraphQL APIs' },
          { label: 'UI/UX Design', href: '/development/design', desc: 'Premium interface design' },
        ],
      },
    ],
  },
  {
    label: 'Company',
    href: '/about',
    columns: [
      {
        title: 'About',
        items: [
          { label: 'About Voice Era Tech', href: '/about', desc: 'Our story & mission' },
          { label: 'Our Technology', href: '/technology', desc: 'The systems we build on' },
          { label: 'Case Studies', href: '/case-studies', desc: 'Real-world implementations' },
          { label: 'Contact', href: '/contact', desc: 'Start a conversation' },
        ],
      },
    ],
  },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
        transition: 'padding 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div className="container-xl">
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.65rem 1.25rem 0.65rem 1.5rem',
            borderRadius: '100px',
            background: scrolled ? 'rgba(255, 255, 255, 0.92)' : 'rgba(255, 255, 255, 0.8)',
            border: '1px solid rgba(226, 232, 240, 0.9)',
            backdropFilter: 'blur(20px)',
            boxShadow: scrolled ? '0 10px 30px -5px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(226, 232, 240, 0.8)' : '0 4px 20px -2px rgba(15, 23, 42, 0.04)',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none',
            }}
          >
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                background: 'linear-gradient(135deg, #2563EB 0%, #0284C7 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)',
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 800,
                  fontSize: '1.05rem',
                  letterSpacing: '-0.02em',
                  color: '#0F172A',
                  lineHeight: 1.1,
                }}
              >
                VOICE ERA TECH
              </span>
              <span
                style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '0.55rem',
                  letterSpacing: '0.12em',
                  color: '#2563EB',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                Enterprise Dialer Systems
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
            }}
            className="hidden md:flex"
          >
            {navItems.map(item => (
              <div
                key={item.label}
                style={{ position: 'relative' }}
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.5rem 0.85rem',
                    borderRadius: '100px',
                    color: activeMenu === item.label ? '#2563EB' : '#334155',
                    background: activeMenu === item.label ? 'rgba(37, 99, 235, 0.08)' : 'transparent',
                    textDecoration: 'none',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    transition: 'all 0.2s',
                  }}
                >
                  {item.label}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    style={{
                      transform: activeMenu === item.label ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                      opacity: 0.7,
                    }}
                  >
                    <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>

                {/* Mega Menu Dropdown */}
                {activeMenu === item.label && (
                  <div
                    className="mega-menu animate-fade-up"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: `repeat(${item.columns.length}, 1fr)`,
                        gap: '2rem',
                      }}
                    >
                      {item.columns.map(col => (
                        <div key={col.title}>
                          <div
                            style={{
                              fontFamily: '"JetBrains Mono", monospace',
                              fontSize: '0.675rem',
                              letterSpacing: '0.12em',
                              textTransform: 'uppercase',
                              color: '#2563EB',
                              fontWeight: 600,
                              marginBottom: '0.85rem',
                              paddingBottom: '0.5rem',
                              borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
                            }}
                          >
                            {col.title}
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                            {col.items.map(subItem => (
                              <Link
                                key={subItem.label}
                                href={subItem.href}
                                onClick={() => setActiveMenu(null)}
                                style={{
                                  padding: '0.65rem 0.75rem',
                                  borderRadius: 10,
                                  textDecoration: 'none',
                                  display: 'block',
                                  transition: 'all 0.15s ease',
                                }}
                                onMouseEnter={e => {
                                  e.currentTarget.style.background = '#F8FAFC';
                                  e.currentTarget.style.transform = 'translateX(3px)';
                                }}
                                onMouseLeave={e => {
                                  e.currentTarget.style.background = 'transparent';
                                  e.currentTarget.style.transform = 'translateX(0)';
                                }}
                              >
                                <div
                                  style={{
                                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                                    fontSize: '0.875rem',
                                    fontWeight: 600,
                                    color: '#0F172A',
                                    marginBottom: '2px',
                                  }}
                                >
                                  {subItem.label}
                                </div>
                                <div
                                  style={{
                                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                                    fontSize: '0.75rem',
                                    color: '#64748B',
                                    lineHeight: 1.3,
                                  }}
                                >
                                  {subItem.desc}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Action / CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Link
              href="/contact"
              className="btn-magnetic btn-primary"
              style={{ fontSize: '0.85rem', padding: '0.6rem 1.35rem' }}
            >
              Get Started →
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden"
              style={{
                width: 38,
                height: 38,
                borderRadius: 8,
                background: '#F8FAFC',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0F172A',
                cursor: 'pointer',
              }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileOpen && (
          <div
            style={{
              marginTop: '0.5rem',
              background: '#FFFFFF',
              border: '1px solid rgba(226, 232, 240, 0.9)',
              borderRadius: 20,
              padding: '1.5rem',
              boxShadow: '0 20px 40px -10px rgba(15, 23, 42, 0.15)',
              maxHeight: '80vh',
              overflowY: 'auto',
            }}
            className="md:hidden animate-fade-up"
          >
            {navItems.map(item => (
              <div key={item.label} style={{ marginBottom: '1.25rem' }}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: '#2563EB',
                    textDecoration: 'none',
                    display: 'block',
                    marginBottom: '0.5rem',
                  }}
                >
                  {item.label}
                </Link>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', paddingLeft: '0.75rem' }}>
                  {item.columns.flatMap(c => c.items).map(sub => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        fontSize: '0.875rem',
                        color: '#334155',
                        textDecoration: 'none',
                        padding: '0.3rem 0',
                      }}
                    >
                      • {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
