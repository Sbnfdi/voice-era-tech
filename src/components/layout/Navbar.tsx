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
        title: 'Company',
        items: [
          { label: 'About Voice Era Tech', href: '/about', desc: 'Our story & mission' },
          { label: 'Our Technology', href: '/technology', desc: 'The systems we build on' },
          { label: 'Industry Verticals', href: '/industries', desc: 'Sector-specific solutions' },
          { label: 'Case Studies', href: '/case-studies', desc: 'Real-world implementations' },
        ],
      },
      {
        title: 'Trust & Careers',
        items: [
          { label: 'Security & Trust', href: '/security', desc: 'Enterprise security standards' },
          { label: 'Compliance & TCPA', href: '/compliance', desc: 'Telecommunications adherence' },
          { label: 'Careers', href: '/careers', desc: 'Join our engineering team' },
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
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    clearTimeout(timeoutRef.current);
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 500,
          padding: scrolled ? '0.75rem 0' : '1.25rem 0',
          background: scrolled
            ? 'rgba(5, 10, 20, 0.95)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,102,255,0.1)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <div className="container-xl" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Dialer-inspired logo mark */}
            <div style={{ position: 'relative', width: 38, height: 38 }}>
              <svg viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                <circle cx="19" cy="19" r="18" stroke="url(#logoGrad)" strokeWidth="1.5"/>
                <circle cx="19" cy="19" r="6" fill="url(#logoGrad2)" opacity="0.9"/>
                {/* Keypad dots */}
                {[0,1,2,3,4,5,6,7,8].map(i => {
                  const row = Math.floor(i / 3);
                  const col = i % 3;
                  return (
                    <circle
                      key={i}
                      cx={11 + col * 4}
                      cy={8 + row * 4}
                      r="1.2"
                      fill={`rgba(0,212,255,${0.3 + (i * 0.08)})`}
                    />
                  );
                })}
                <defs>
                  <linearGradient id="logoGrad" x1="0" y1="0" x2="38" y2="38">
                    <stop stopColor="#0066FF"/>
                    <stop offset="1" stopColor="#00D4FF"/>
                  </linearGradient>
                  <radialGradient id="logoGrad2" cx="50%" cy="50%" r="50%">
                    <stop stopColor="#00D4FF"/>
                    <stop offset="1" stopColor="#0066FF"/>
                  </radialGradient>
                </defs>
              </svg>
            </div>
            <div>
              <div style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontWeight: 800,
                fontSize: '1.0625rem',
                color: '#E8EEFF',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
              }}>
                Voice Era <span style={{ color: '#00D4FF' }}>Tech</span>
              </div>
              <div style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.5rem',
                letterSpacing: '0.15em',
                color: '#4A6A99',
                textTransform: 'uppercase',
              }}>
                LLC
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="hidden-mobile">
            {navItems.map(item => (
              <div
                key={item.label}
                style={{ position: 'relative' }}
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  style={{
                    background: 'none',
                    border: 'none',
                    color: activeMenu === item.label ? 'var(--c-cyan)' : 'var(--c-text-secondary)',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    padding: '0.5rem 0.875rem',
                    borderRadius: '8px',
                    cursor: 'none',
                    transition: 'color 0.2s',
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  {item.label}
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{
                    transform: activeMenu === item.label ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s',
                    opacity: 0.5,
                  }}>
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>

                {/* Mega Menu */}
                {activeMenu === item.label && (
                  <div
                    className="mega-menu"
                    style={{
                      animation: 'fade-up 0.25s cubic-bezier(0.16,1,0.3,1) both',
                      minWidth: item.columns.length === 1 ? '320px' : '640px',
                    }}
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${item.columns.length}, 1fr)`, gap: '2rem' }}>
                      {item.columns.map(col => (
                        <div key={col.title}>
                          <div style={{
                            fontFamily: '"JetBrains Mono", monospace',
                            fontSize: '0.65rem',
                            letterSpacing: '0.15em',
                            color: '#4A6A99',
                            textTransform: 'uppercase',
                            marginBottom: '1rem',
                            paddingBottom: '0.5rem',
                            borderBottom: '1px solid rgba(0,102,255,0.1)',
                          }}>
                            {col.title}
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                            {col.items.map(navItem => (
                              <Link
                                key={navItem.label}
                                href={navItem.href}
                                onClick={() => setActiveMenu(null)}
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  padding: '0.625rem 0.75rem',
                                  borderRadius: '10px',
                                  textDecoration: 'none',
                                  transition: 'background 0.2s',
                                  gap: '2px',
                                }}
                                onMouseEnter={e => {
                                  (e.currentTarget as HTMLElement).style.background = 'rgba(0,102,255,0.08)';
                                }}
                                onMouseLeave={e => {
                                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                                }}
                              >
                                <span style={{
                                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                                  fontWeight: 500,
                                  fontSize: '0.875rem',
                                  color: '#E8EEFF',
                                }}>
                                  {navItem.label}
                                </span>
                                <span style={{
                                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                                  fontSize: '0.75rem',
                                  color: '#4A6A99',
                                }}>
                                  {navItem.desc}
                                </span>
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

          {/* CTA buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="hidden-mobile">
            <Link href="/contact" className="btn-magnetic btn-secondary" style={{ fontSize: '0.875rem', padding: '0.625rem 1.25rem' }}>
              Talk to an Expert
            </Link>
            <Link href="/contact" className="btn-magnetic btn-primary" style={{ fontSize: '0.875rem', padding: '0.625rem 1.25rem' }} data-cursor="CONNECT">
              <span style={{ position: 'relative', zIndex: 1 }}>Get Started</span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: '1px solid rgba(0,102,255,0.2)',
              borderRadius: '8px',
              padding: '0.5rem',
              cursor: 'pointer',
            }}
            className="show-mobile"
            aria-label="Toggle navigation"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {mobileOpen ? (
                <path d="M4 4L18 18M18 4L4 18" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round"/>
              ) : (
                <>
                  <line x1="3" y1="6" x2="19" y2="6" stroke="#E8EEFF" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="3" y1="11" x2="19" y2="11" stroke="#E8EEFF" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="3" y1="16" x2="19" y2="16" stroke="#E8EEFF" strokeWidth="1.5" strokeLinecap="round"/>
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 490,
          background: 'rgba(5,10,20,0.98)',
          backdropFilter: 'blur(20px)',
          paddingTop: '5rem',
          overflowY: 'auto',
          animation: 'fade-in 0.3s ease both',
        }}>
          <div className="container-xl" style={{ paddingBottom: '3rem' }}>
            {navItems.map(item => (
              <div key={item.label} style={{ borderBottom: '1px solid rgba(0,102,255,0.08)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
                <div style={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 700,
                  fontSize: '1.125rem',
                  color: '#E8EEFF',
                  marginBottom: '0.75rem',
                }}>
                  {item.label}
                </div>
                {item.columns.map(col => (
                  <div key={col.title} style={{ marginBottom: '1rem' }}>
                    <div style={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '0.625rem',
                      letterSpacing: '0.15em',
                      color: '#4A6A99',
                      textTransform: 'uppercase',
                      marginBottom: '0.5rem',
                    }}>
                      {col.title}
                    </div>
                    {col.items.map(navItem => (
                      <Link
                        key={navItem.label}
                        href={navItem.href}
                        onClick={() => setMobileOpen(false)}
                        style={{
                          display: 'block',
                          padding: '0.5rem 0',
                          color: '#8BA3CC',
                          textDecoration: 'none',
                          fontSize: '0.9375rem',
                          fontFamily: '"Plus Jakarta Sans", sans-serif',
                        }}
                      >
                        {navItem.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            ))}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
              <Link href="/contact" className="btn-magnetic btn-primary" onClick={() => setMobileOpen(false)} style={{ textAlign: 'center', textDecoration: 'none' }}>
                <span style={{ position: 'relative', zIndex: 1 }}>Talk to an Expert</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 1025px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
