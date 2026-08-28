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
          { label: 'Predictive Dialer', href: '/dialer-systems/predictive', desc: 'Statistical pacing optimization' },
          { label: 'Power Dialer', href: '/dialer-systems/power', desc: 'Agent-driven rapid calling' },
          { label: 'Progressive Dialer', href: '/dialer-systems/progressive', desc: 'Zero-abandonment compliance' },
          { label: 'Preview Dialer', href: '/dialer-systems/preview', desc: 'Account context-first dialing' },
        ],
      },
      {
        title: 'Infrastructure',
        items: [
          { label: 'VoIP Dialer', href: '/dialer-systems/voip', desc: 'Carrier-grade IP telephony' },
          { label: 'SIP Dialer', href: '/dialer-systems/sip', desc: 'High-density SIP trunking' },
          { label: 'Multi-Tenant Dialer', href: '/dialer-systems/multi-tenant', desc: 'BPO & agency architecture' },
          { label: 'Custom Dialer Solutions', href: '/dialer-systems/custom', desc: 'Bespoke telephony development' },
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
          { label: 'Inbound Call Centers', href: '/call-center/inbound', desc: 'ACD & multi-level IVR' },
          { label: 'Outbound Call Centers', href: '/call-center/outbound', desc: 'High-velocity sales campaigns' },
          { label: 'Blended Call Centers', href: '/call-center/blended', desc: 'Dynamic queue balancing' },
          { label: 'Contact Center Solutions', href: '/call-center/contact-center', desc: 'Voice, SMS & digital hub' },
        ],
      },
      {
        title: 'Management',
        items: [
          { label: 'Agent Management', href: '/call-center/agent-management', desc: 'Live HUD, whisper & AI QA' },
          { label: 'Campaign Management', href: '/call-center/campaigns', desc: 'Segmentation & scheduling' },
          { label: 'Call Analytics', href: '/call-center/analytics', desc: 'Real-time telemetry & BI' },
          { label: 'CRM Integration', href: '/call-center/crm', desc: 'Embedded CTI & 2-way sync' },
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
          { label: 'AI Voice Agents', href: '/ai-solutions/voice-agents', desc: 'Conversational voice synthesis' },
          { label: 'AI Call Agents', href: '/ai-solutions/call-agents', desc: 'Autonomous outbound calling' },
          { label: 'AI Customer Support', href: '/ai-solutions/customer-support', desc: '24/7 Tier-1 resolution' },
        ],
      },
      {
        title: 'Intelligence',
        items: [
          { label: 'AI Lead Qualification', href: '/ai-solutions/lead-qualification', desc: 'Dynamic BANT scoring' },
          { label: 'AI Appointment Agents', href: '/ai-solutions/appointments', desc: 'Calendar scheduling' },
          { label: 'AI Automation', href: '/ai-solutions/automation', desc: 'After-call work automation' },
          { label: 'Custom AI Architecture', href: '/ai-solutions/custom', desc: 'Private models & fine-tuning' },
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
          { label: 'Cloud Configuration', href: '/cloud-it/configuration', desc: 'High-availability multi-region' },
          { label: 'Cloud Migration', href: '/cloud-it/migration', desc: 'Zero-downtime telephony PBX' },
          { label: 'Server Deployment', href: '/cloud-it/servers', desc: 'Dedicated bare-metal compute' },
        ],
      },
      {
        title: 'Infrastructure',
        items: [
          { label: 'Security & Defense', href: '/cloud-it/security', desc: 'SOC-2 & encryption standards' },
          { label: 'Telemetry Monitoring', href: '/cloud-it/monitoring', desc: '24/7 MOS voice tracking' },
          { label: 'DevOps & CI/CD', href: '/cloud-it/devops', desc: 'Automated Kubernetes pipeline' },
          { label: 'API Infrastructure', href: '/cloud-it/api', desc: 'High-throughput gateways' },
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
          { label: 'Website Development', href: '/development/websites', desc: 'Enterprise web engineering' },
          { label: 'Web Applications', href: '/development/web-apps', desc: 'Scalable cloud platforms' },
          { label: 'SaaS Development', href: '/development/saas', desc: 'Multi-tenant subscription apps' },
          { label: 'Custom Software', href: '/development/custom', desc: 'Bespoke business engines' },
        ],
      },
      {
        title: 'Integrations & UX',
        items: [
          { label: 'CRM Development', href: '/development/crm', desc: 'Custom CRM systems' },
          { label: 'API Development', href: '/development/api', desc: 'RESTful & GraphQL APIs' },
          { label: 'UI/UX Design', href: '/development/design', desc: 'Design systems & Figma' },
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
          { label: 'About Voice Era Tech', href: '/about', desc: 'Mission & engineering culture' },
          { label: 'Our Technology', href: '/technology', desc: 'Multi-tier system architecture' },
          { label: 'Industry Verticals', href: '/industries', desc: 'BPO, Finance, Healthcare' },
          { label: 'Case Studies', href: '/case-studies', desc: 'Enterprise implementations' },
        ],
      },
      {
        title: 'Trust & Careers',
        items: [
          { label: 'Security & Trust', href: '/security', desc: 'Data governance & standards' },
          { label: 'Compliance & TCPA', href: '/compliance', desc: 'Telecommunications adherence' },
          { label: 'Careers', href: '/careers', desc: 'Join our engineering team' },
          { label: 'Contact Command Center', href: '/contact', desc: 'Speak with our architects' },
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
    const onScroll = () => setScrolled(window.scrollY > 30);
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
    }, 120);
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        background: scrolled
          ? 'rgba(11, 15, 20, 0.94)'
          : 'rgba(11, 15, 20, 0.75)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${scrolled ? 'rgba(76, 141, 255, 0.12)' : 'rgba(76, 141, 255, 0.06)'}`,
      }}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="container-xl"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '4.5rem',
        }}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
          }}
        >
          {/* Logo Mark - Precision Telecom Symbol */}
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 8,
              background: '#151D27',
              border: '1px solid rgba(49, 87, 213, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: '#3157D5',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: 5,
                right: 5,
                width: 5,
                height: 5,
                borderRadius: '50%',
                background: '#3AAFA9',
              }}
            />
          </div>

          <div>
            <div
              style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontWeight: 800,
                fontSize: '1.0625rem',
                letterSpacing: '-0.02em',
                color: '#F4F6F8',
                lineHeight: 1.1,
              }}
            >
              VOICE ERA <span style={{ color: '#4C8DFF', fontWeight: 600 }}>TECH</span>
            </div>
            <div
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.5625rem',
                color: '#9AA6B2',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              Enterprise Telephony
            </div>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
          }}
          className="hidden md:flex"
        >
          {navItems.map(item => {
            const isActive = activeMenu === item.label;
            return (
              <div
                key={item.label}
                style={{ position: 'relative' }}
                onMouseEnter={() => handleMouseEnter(item.label)}
              >
                <Link
                  href={item.href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.5rem 0.875rem',
                    borderRadius: 6,
                    color: isActive ? '#F4F6F8' : '#9AA6B2',
                    background: isActive ? 'rgba(76, 141, 255, 0.08)' : 'transparent',
                    textDecoration: 'none',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    transition: 'all 0.15s ease',
                  }}
                >
                  {item.label}
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    style={{
                      transform: isActive ? 'rotate(180deg)' : 'rotate(0)',
                      transition: 'transform 0.2s ease',
                      opacity: 0.6,
                    }}
                  >
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>

                {/* Mega Menu Dropdown */}
                {isActive && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 0.5rem)',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: item.columns.length > 1 ? 580 : 320,
                      background: '#151D27',
                      border: '1px solid rgba(76, 141, 255, 0.14)',
                      borderRadius: 14,
                      padding: '1.25rem',
                      boxShadow: '0 24px 60px rgba(0,0,0,0.6), 0 0 20px rgba(49,87,213,0.06)',
                      display: 'grid',
                      gridTemplateColumns: `repeat(${item.columns.length}, 1fr)`,
                      gap: '1.25rem',
                      zIndex: 200,
                      animation: 'fadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    {item.columns.map(col => (
                      <div key={col.title}>
                        <div
                          style={{
                            fontFamily: '"JetBrains Mono", monospace',
                            fontSize: '0.625rem',
                            letterSpacing: '0.14em',
                            color: '#4C8DFF',
                            textTransform: 'uppercase',
                            marginBottom: '0.75rem',
                            paddingBottom: '0.35rem',
                            borderBottom: '1px solid rgba(76, 141, 255, 0.08)',
                          }}
                        >
                          {col.title}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                          {col.items.map(subItem => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              style={{
                                display: 'block',
                                padding: '0.5rem 0.625rem',
                                borderRadius: 8,
                                background: '#202B38',
                                border: '1px solid transparent',
                                textDecoration: 'none',
                                transition: 'all 0.15s ease',
                              }}
                              onMouseEnter={e => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.borderColor = 'rgba(76, 141, 255, 0.3)';
                                el.style.background = '#283747';
                              }}
                              onMouseLeave={e => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.borderColor = 'transparent';
                                el.style.background = '#202B38';
                              }}
                            >
                              <div
                                style={{
                                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                                  fontWeight: 600,
                                  fontSize: '0.8125rem',
                                  color: '#F4F6F8',
                                  marginBottom: '1px',
                                }}
                              >
                                {subItem.label}
                              </div>
                              <div
                                style={{
                                  fontSize: '0.6875rem',
                                  color: '#9AA6B2',
                                  lineHeight: 1.35,
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
                )}
              </div>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link
            href="/contact"
            className="btn-primary"
            style={{
              padding: '0.5625rem 1.25rem',
              fontSize: '0.875rem',
              borderRadius: 6,
            }}
          >
            Talk to an Expert
          </Link>

          {/* Mobile menu hamburger toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden"
            style={{
              background: '#151D27',
              border: '1px solid rgba(76, 141, 255, 0.2)',
              borderRadius: 6,
              padding: '0.5rem',
              color: '#F4F6F8',
              cursor: 'pointer',
            }}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {mobileOpen ? (
                <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <path d="M3 5H17M3 10H17M3 15H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          style={{
            background: '#151D27',
            borderTop: '1px solid rgba(76, 141, 255, 0.12)',
            padding: '1.5rem',
            maxHeight: 'calc(100vh - 4.5rem)',
            overflowY: 'auto',
          }}
          className="md:hidden"
        >
          {navItems.map(item => (
            <div key={item.label} style={{ marginBottom: '1.5rem' }}>
              <div
                style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '0.75rem',
                  color: '#4C8DFF',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '0.5rem',
                }}
              >
                {item.label}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.35rem' }}>
                {item.columns.flatMap(c => c.items).map(sub => (
                  <Link
                    key={sub.label}
                    href={sub.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      padding: '0.5rem',
                      color: '#F4F6F8',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      borderBottom: '1px solid rgba(76, 141, 255, 0.06)',
                    }}
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div style={{ marginTop: '1.5rem' }}>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary"
              style={{ width: '100%', textAlign: 'center', display: 'block' }}
            >
              Talk to an Expert →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
