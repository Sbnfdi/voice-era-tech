'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/layout/CustomCursor';
import { SubPageConfig } from '@/data/pagesData';

export default function SubPageTemplate({ page }: { page: SubPageConfig }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main style={{ minHeight: '100vh', background: '#0B0F14', overflowX: 'hidden' }}>
        
        {/* ==========================================
            HERO SECTION
           ========================================== */}
        <section
          style={{
            position: 'relative',
            paddingTop: '9.5rem',
            paddingBottom: '5.5rem',
            overflow: 'hidden',
          }}
        >
          {/* Subtle Cyber Grid */}
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.35 }} />
          
          {/* Atmospheric Radial Lighting - Restrained Royal Blue */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse 65% 50% at 50% 0%, rgba(49, 87, 213, 0.08) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
            {/* Breadcrumbs */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1.75rem',
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.75rem',
                color: '#9AA6B2',
              }}
            >
              <Link href="/" style={{ color: '#9AA6B2', textDecoration: 'none' }}>Home</Link>
              <span>/</span>
              <Link href={page.categoryHref} style={{ color: '#9AA6B2', textDecoration: 'none' }}>{page.category}</Link>
              <span>/</span>
              <span style={{ color: '#4C8DFF' }}>{page.badge}</span>
            </div>

            {/* Eyebrow & Badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              <span className="eyebrow" style={{ color: '#4C8DFF', margin: 0 }}>
                {page.eyebrow}
              </span>
              <span
                style={{
                  padding: '0.2rem 0.625rem',
                  borderRadius: '100px',
                  background: '#151D27',
                  border: '1px solid rgba(76, 141, 255, 0.2)',
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '0.6875rem',
                  color: '#F4F6F8',
                  letterSpacing: '0.04em',
                }}
              >
                {page.badge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-display-lg" style={{ color: '#F4F6F8', marginBottom: '1.5rem', maxWidth: 880 }}>
              {page.title}{' '}
              <span className="gradient-text-blue">{page.highlightText}</span>
            </h1>

            {/* Tagline & Description */}
            <p
              style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: '1.125rem',
                color: '#4C8DFF',
                fontWeight: 600,
                maxWidth: 740,
                lineHeight: 1.6,
                marginBottom: '1rem',
              }}
            >
              {page.heroTagline}
            </p>

            <p className="text-body-lg" style={{ color: '#9AA6B2', maxWidth: 740, marginBottom: '2.5rem', lineHeight: 1.75 }}>
              {page.description}
            </p>

            {/* Hero Actions */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link
                href="/contact"
                className="btn-primary"
                data-cursor="CONNECT"
              >
                Talk to a Dialer Expert →
              </Link>
              <Link
                href="#features"
                className="btn-secondary"
              >
                Explore System Architecture
              </Link>
            </div>
          </div>
        </section>

        {/* ==========================================
            METRICS MATRIX
           ========================================== */}
        <section style={{ padding: '0 0 5rem' }}>
          <div className="container-xl">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1.25rem',
              }}
            >
              {page.metrics.map((m) => (
                <div
                  key={m.label}
                  style={{
                    background: '#151D27',
                    border: '1px solid rgba(76, 141, 255, 0.12)',
                    borderRadius: 16,
                    padding: '1.75rem',
                  }}
                >
                  <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6875rem', color: '#9AA6B2', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
                    {m.label}
                  </div>
                  <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: '1.875rem', fontWeight: 800, color: '#F4F6F8', marginBottom: '0.25rem' }}>
                    {m.value}
                  </div>
                  <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: '0.8125rem', color: '#4C8DFF' }}>
                    {m.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================
            CORE FEATURES / CAPABILITIES
           ========================================== */}
        <section id="features" style={{ padding: '5.5rem 0', background: '#151D27', borderTop: '1px solid rgba(76, 141, 255, 0.08)', borderBottom: '1px solid rgba(76, 141, 255, 0.08)' }}>
          <div className="container-xl">
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div className="eyebrow" style={{ marginBottom: '1rem' }}>Technical Architecture</div>
              <h2 className="text-display-md" style={{ color: '#F4F6F8' }}>
                Engineered for <span className="gradient-text-blue">Mission-Critical Telephony</span>
              </h2>
              <p className="text-body-lg" style={{ color: '#9AA6B2', maxWidth: 540, margin: '0.75rem auto 0' }}>
                Production-tested capabilities designed to process high-concurrency voice streams with five-nines uptime.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '1.25rem',
              }}
            >
              {page.features.map((f) => (
                <div
                  key={f.title}
                  style={{
                    background: '#202B38',
                    border: '1px solid rgba(76, 141, 255, 0.12)',
                    borderRadius: 16,
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                      <div
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: 12,
                          background: '#151D27',
                          border: '1px solid rgba(49, 87, 213, 0.25)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.375rem',
                        }}
                      >
                        {f.icon}
                      </div>
                      {f.badge && (
                        <span
                          style={{
                            padding: '0.2rem 0.5rem',
                            borderRadius: '100px',
                            background: 'rgba(76, 141, 255, 0.08)',
                            border: '1px solid rgba(76, 141, 255, 0.2)',
                            fontFamily: '"JetBrains Mono", monospace',
                            fontSize: '0.625rem',
                            color: '#4C8DFF',
                          }}
                        >
                          {f.badge}
                        </span>
                      )}
                    </div>

                    <h3
                      style={{
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        fontWeight: 700,
                        fontSize: '1.125rem',
                        color: '#F4F6F8',
                        marginBottom: '0.625rem',
                      }}
                    >
                      {f.title}
                    </h3>

                    <p
                      style={{
                        color: '#9AA6B2',
                        fontSize: '0.875rem',
                        lineHeight: 1.65,
                      }}
                    >
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================
            OPERATIONAL LIFECYCLE
           ========================================== */}
        {page.workflow && page.workflow.length > 0 && (
          <section style={{ padding: '5.5rem 0', background: '#0B0F14' }}>
            <div className="container-lg">
              <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                <div className="eyebrow" style={{ marginBottom: '1rem' }}>Operational Pipeline</div>
                <h2 className="text-display-md" style={{ color: '#F4F6F8' }}>
                  How It <span className="gradient-text-blue">Operates</span>
                </h2>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {page.workflow.map((w) => (
                  <div
                    key={w.step}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1.5rem',
                      background: '#151D27',
                      border: '1px solid rgba(76, 141, 255, 0.1)',
                      borderRadius: 16,
                      padding: '1.5rem 2rem',
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 10,
                        background: '#202B38',
                        border: '1px solid rgba(49, 87, 213, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: '"JetBrains Mono", monospace',
                        fontWeight: 700,
                        color: '#4C8DFF',
                        fontSize: '0.9375rem',
                        flexShrink: 0,
                      }}
                    >
                      {w.step}
                    </div>
                    <div>
                      <h4
                        style={{
                          fontFamily: '"Plus Jakarta Sans", sans-serif',
                          fontWeight: 700,
                          fontSize: '1.0625rem',
                          color: '#F4F6F8',
                          marginBottom: '0.25rem',
                        }}
                      >
                        {w.title}
                      </h4>
                      <p
                        style={{
                          color: '#9AA6B2',
                          fontSize: '0.875rem',
                          lineHeight: 1.6,
                          margin: 0,
                        }}
                      >
                        {w.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ==========================================
            TECHNICAL SPECS & FAQS
           ========================================== */}
        <section style={{ padding: '5.5rem 0', background: '#151D27', borderTop: '1px solid rgba(76, 141, 255, 0.08)', borderBottom: '1px solid rgba(76, 141, 255, 0.08)' }}>
          <div className="container-xl">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: page.technicalSpecs?.length ? '1fr 1fr' : '1fr',
                gap: '4rem',
                alignItems: 'start',
              }}
            >
              {/* Technical Specifications */}
              {page.technicalSpecs && page.technicalSpecs.length > 0 && (
                <div>
                  <div className="eyebrow" style={{ marginBottom: '1rem' }}>Engineering Specs</div>
                  <h3 className="text-display-sm" style={{ color: '#F4F6F8', marginBottom: '2rem' }}>
                    Technical <span className="gradient-text-blue">Specifications</span>
                  </h3>

                  <div
                    style={{
                      background: '#202B38',
                      border: '1px solid rgba(76, 141, 255, 0.14)',
                      borderRadius: 16,
                      overflow: 'hidden',
                    }}
                  >
                    {page.technicalSpecs.map((spec, i) => (
                      <div
                        key={spec.label}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          padding: '1.125rem 1.5rem',
                          borderBottom: i < page.technicalSpecs.length - 1 ? '1px solid rgba(76, 141, 255, 0.08)' : 'none',
                        }}
                      >
                        <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.75rem', color: '#9AA6B2', textTransform: 'uppercase' }}>
                          {spec.label}
                        </span>
                        <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 600, fontSize: '0.875rem', color: '#F4F6F8' }}>
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQs */}
              {page.faqs && page.faqs.length > 0 && (
                <div>
                  <div className="eyebrow" style={{ marginBottom: '1rem' }}>Knowledge Base</div>
                  <h3 className="text-display-sm" style={{ color: '#F4F6F8', marginBottom: '2rem' }}>
                    Frequently Asked <span className="gradient-text-blue">Questions</span>
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {page.faqs.map((faq, index) => {
                      const isOpen = openFaq === index;
                      return (
                        <div
                          key={faq.q}
                          style={{
                            background: '#202B38',
                            border: `1px solid ${isOpen ? 'rgba(76, 141, 255, 0.35)' : 'rgba(76, 141, 255, 0.1)'}`,
                            borderRadius: 12,
                            padding: '1.25rem 1.5rem',
                            transition: 'all 0.15s ease',
                          }}
                        >
                          <button
                            onClick={() => setOpenFaq(isOpen ? null : index)}
                            style={{
                              width: '100%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              background: 'none',
                              border: 'none',
                              color: '#F4F6F8',
                              fontFamily: '"Plus Jakarta Sans", sans-serif',
                              fontWeight: 600,
                              fontSize: '0.9375rem',
                              textAlign: 'left',
                              cursor: 'pointer',
                              padding: 0,
                            }}
                          >
                            <span>{faq.q}</span>
                            <span style={{ color: '#4C8DFF', fontSize: '1.25rem', transform: isOpen ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.15s' }}>
                              +
                            </span>
                          </button>

                          {isOpen && (
                            <p
                              style={{
                                marginTop: '0.875rem',
                                color: '#9AA6B2',
                                fontSize: '0.875rem',
                                lineHeight: 1.65,
                                paddingTop: '0.75rem',
                                borderTop: '1px solid rgba(76, 141, 255, 0.08)',
                              }}
                            >
                              {faq.a}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ==========================================
            CONVERSION ACTION BANNER
           ========================================== */}
        <section style={{ padding: '6rem 0', background: '#0B0F14' }}>
          <div className="container-xl">
            <div
              style={{
                background: '#151D27',
                border: '1px solid rgba(76, 141, 255, 0.16)',
                borderRadius: 20,
                padding: '3.5rem',
                textAlign: 'center',
              }}
            >
              <div className="eyebrow" style={{ color: '#4C8DFF', marginBottom: '0.75rem' }}>Voice Era Tech LLC</div>
              <h2 className="text-display-md" style={{ color: '#F4F6F8', marginBottom: '1rem' }}>
                Deploy Enterprise <span className="gradient-text-blue">{page.badge}</span>
              </h2>
              <p className="text-body-lg" style={{ color: '#9AA6B2', maxWidth: 540, margin: '0 auto 2.5rem' }}>
                Connect with our telecommunications architects to evaluate your technical requirements and schedule a live demo.
              </p>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link
                  href="/contact"
                  className="btn-primary"
                  data-cursor="CONNECT"
                >
                  Talk to an Expert →
                </Link>
                <Link
                  href="/dialer-systems"
                  className="btn-secondary"
                >
                  Explore All Systems
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
