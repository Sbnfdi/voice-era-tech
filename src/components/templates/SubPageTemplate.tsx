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
      <main style={{ minHeight: '100vh', background: 'var(--c-bg)', overflowX: 'hidden' }}>
        
        {/* ==========================================
            HERO SECTION
           ========================================== */}
        <section style={{
          position: 'relative',
          paddingTop: '9.5rem',
          paddingBottom: '5.5rem',
          overflow: 'hidden',
        }}>
          {/* Subtle Cyber Grid */}
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
          
          {/* Atmospheric Glow */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 65% 55% at 50% 0%, rgba(0,102,255,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
            {/* Breadcrumbs */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1.75rem',
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '0.75rem',
              color: '#4A6A99',
            }}>
              <Link href="/" style={{ color: '#8BA3CC', textDecoration: 'none' }}>Home</Link>
              <span>/</span>
              <Link href={page.categoryHref} style={{ color: '#8BA3CC', textDecoration: 'none' }}>{page.category}</Link>
              <span>/</span>
              <span style={{ color: '#00D4FF' }}>{page.badge}</span>
            </div>

            {/* Badge & Eyebrow */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              <span className="eyebrow" style={{ color: '#00D4FF', margin: 0 }}>
                {page.eyebrow}
              </span>
              <span style={{
                padding: '0.25rem 0.75rem',
                borderRadius: '100px',
                background: 'rgba(0,102,255,0.12)',
                border: '1px solid rgba(0,102,255,0.25)',
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.6875rem',
                color: '#E8EEFF',
                letterSpacing: '0.05em',
              }}>
                {page.badge}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-display-lg" style={{ color: '#E8EEFF', marginBottom: '1.5rem', maxWidth: 900 }}>
              {page.title}{' '}
              <span className="gradient-text-blue">{page.highlightText}</span>
            </h1>

            {/* Tagline & Paragraph */}
            <p style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: '1.1875rem',
              color: '#00D4FF',
              fontWeight: 500,
              maxWidth: 760,
              lineHeight: 1.6,
              marginBottom: '1rem',
            }}>
              {page.heroTagline}
            </p>

            <p className="text-body-lg" style={{ color: '#8BA3CC', maxWidth: 760, marginBottom: '2.5rem', lineHeight: 1.75 }}>
              {page.description}
            </p>

            {/* Hero CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link
                href="/contact"
                className="btn-magnetic btn-primary"
                style={{ textDecoration: 'none' }}
                data-cursor="CONNECT"
              >
                <span style={{ position: 'relative', zIndex: 1 }}>Request a Demo & Quote →</span>
              </Link>
              <Link
                href="#features"
                className="btn-magnetic btn-secondary"
                style={{ textDecoration: 'none' }}
              >
                Explore Features & Specs
              </Link>
            </div>
          </div>
        </section>

        {/* ==========================================
            METRICS MATRIX
           ========================================== */}
        <section style={{ padding: '0 0 5rem' }}>
          <div className="container-xl">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
            }}>
              {page.metrics.map(m => (
                <div
                  key={m.label}
                  className="dashboard-metric"
                  style={{
                    background: 'rgba(7,13,28,0.85)',
                    border: '1px solid rgba(0,102,255,0.15)',
                    borderRadius: 18,
                    padding: '1.75rem',
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  <div className="label" style={{ color: '#4A6A99', marginBottom: '0.5rem', fontSize: '0.75rem' }}>
                    {m.label}
                  </div>
                  <div className="value" style={{ color: '#00D4FF', fontSize: '2rem', fontWeight: 800, marginBottom: '0.35rem' }}>
                    {m.value}
                  </div>
                  <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: '0.8125rem', color: '#8BA3CC' }}>
                    {m.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================
            CORE FEATURES
           ========================================== */}
        <section id="features" style={{ padding: '5rem 0', background: 'rgba(7,13,28,0.95)', position: 'relative' }}>
          <div className="container-xl">
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div className="eyebrow" style={{ marginBottom: '1rem' }}>Technical Architecture</div>
              <h2 className="text-display-md" style={{ color: '#E8EEFF' }}>
                Engineered for <span className="gradient-text-blue">Peak Performance</span>
              </h2>
              <p className="text-body-lg" style={{ color: '#8BA3CC', maxWidth: 540, margin: '0.75rem auto 0' }}>
                Every capability is designed to handle high-concurrency production workloads with enterprise reliability.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.5rem',
            }}>
              {page.features.map((f, i) => (
                <div
                  key={f.title}
                  className="node-card"
                  style={{
                    padding: '2.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                      <div style={{
                        width: 52,
                        height: 52,
                        borderRadius: 14,
                        background: 'rgba(0,102,255,0.12)',
                        border: '1px solid rgba(0,102,255,0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                      }}>
                        {f.icon}
                      </div>
                      {f.badge && (
                        <span style={{
                          padding: '0.25rem 0.625rem',
                          borderRadius: '100px',
                          background: 'rgba(0,212,255,0.1)',
                          border: '1px solid rgba(0,212,255,0.2)',
                          fontFamily: '"JetBrains Mono", monospace',
                          fontSize: '0.625rem',
                          color: '#00D4FF',
                          letterSpacing: '0.06em',
                        }}>
                          {f.badge}
                        </span>
                      )}
                    </div>

                    <h3 style={{
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      fontWeight: 700,
                      fontSize: '1.1875rem',
                      color: '#E8EEFF',
                      marginBottom: '0.75rem',
                    }}>
                      {f.title}
                    </h3>

                    <p style={{
                      color: '#8BA3CC',
                      fontSize: '0.9375rem',
                      lineHeight: 1.7,
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}>
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================
            WORKFLOW / PIPELINE
           ========================================== */}
        {page.workflow && page.workflow.length > 0 && (
          <section style={{ padding: '5rem 0', position: 'relative' }}>
            <div className="container-lg">
              <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                <div className="eyebrow" style={{ marginBottom: '1rem' }}>Operational Lifecycle</div>
                <h2 className="text-display-md" style={{ color: '#E8EEFF' }}>
                  How It <span className="gradient-text-blue">Works</span>
                </h2>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {page.workflow.map((w, idx) => (
                  <div
                    key={w.step}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1.75rem',
                      background: 'rgba(7,13,28,0.85)',
                      border: '1px solid rgba(0,102,255,0.12)',
                      borderRadius: 18,
                      padding: '1.75rem 2rem',
                      backdropFilter: 'blur(12px)',
                    }}
                  >
                    <div style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: 'rgba(0,102,255,0.15)',
                      border: '1px solid rgba(0,102,255,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: '"JetBrains Mono", monospace',
                      fontWeight: 700,
                      color: '#00D4FF',
                      fontSize: '1rem',
                      flexShrink: 0,
                    }}>
                      {w.step}
                    </div>
                    <div>
                      <h4 style={{
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        fontWeight: 700,
                        fontSize: '1.125rem',
                        color: '#E8EEFF',
                        marginBottom: '0.35rem',
                      }}>
                        {w.title}
                      </h4>
                      <p style={{
                        color: '#8BA3CC',
                        fontSize: '0.9375rem',
                        lineHeight: 1.65,
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        margin: 0,
                      }}>
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
        <section style={{ padding: '5rem 0', background: 'rgba(5,10,20,0.98)' }}>
          <div className="container-xl">
            <div style={{
              display: 'grid',
              gridTemplateColumns: page.technicalSpecs?.length ? '1fr 1fr' : '1fr',
              gap: '4rem',
              alignItems: 'start',
            }}>
              
              {/* Technical Specifications */}
              {page.technicalSpecs && page.technicalSpecs.length > 0 && (
                <div>
                  <div className="eyebrow" style={{ marginBottom: '1rem' }}>Architecture Specs</div>
                  <h3 className="text-display-sm" style={{ color: '#E8EEFF', marginBottom: '2rem' }}>
                    Technical <span className="gradient-text-blue">Specifications</span>
                  </h3>

                  <div style={{
                    background: 'rgba(7,13,28,0.85)',
                    border: '1px solid rgba(0,102,255,0.15)',
                    borderRadius: 20,
                    overflow: 'hidden',
                  }}>
                    {page.technicalSpecs.map((spec, i) => (
                      <div
                        key={spec.label}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          padding: '1.25rem 1.75rem',
                          borderBottom: i < page.technicalSpecs.length - 1 ? '1px solid rgba(0,102,255,0.08)' : 'none',
                          background: i % 2 === 0 ? 'rgba(0,102,255,0.02)' : 'transparent',
                        }}
                      >
                        <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.8125rem', color: '#4A6A99', textTransform: 'uppercase' }}>
                          {spec.label}
                        </span>
                        <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 600, fontSize: '0.875rem', color: '#E8EEFF' }}>
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
                  <h3 className="text-display-sm" style={{ color: '#E8EEFF', marginBottom: '2rem' }}>
                    Frequently Asked <span className="gradient-text-blue">Questions</span>
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {page.faqs.map((faq, index) => {
                      const isOpen = openFaq === index;
                      return (
                        <div
                          key={faq.q}
                          style={{
                            background: 'rgba(7,13,28,0.85)',
                            border: `1px solid ${isOpen ? 'rgba(0,212,255,0.3)' : 'rgba(0,102,255,0.12)'}`,
                            borderRadius: 16,
                            padding: '1.25rem 1.5rem',
                            transition: 'all 0.25s ease',
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
                              color: '#E8EEFF',
                              fontFamily: '"Plus Jakarta Sans", sans-serif',
                              fontWeight: 600,
                              fontSize: '1rem',
                              textAlign: 'left',
                              cursor: 'none',
                              padding: 0,
                            }}
                          >
                            <span>{faq.q}</span>
                            <span style={{
                              color: '#00D4FF',
                              fontSize: '1.25rem',
                              marginLeft: '1rem',
                              transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                              transition: 'transform 0.2s ease',
                            }}>
                              +
                            </span>
                          </button>

                          {isOpen && (
                            <p style={{
                              marginTop: '1rem',
                              color: '#8BA3CC',
                              fontSize: '0.9375rem',
                              lineHeight: 1.7,
                              fontFamily: '"Plus Jakarta Sans", sans-serif',
                              paddingTop: '0.75rem',
                              borderTop: '1px solid rgba(0,102,255,0.08)',
                            }}>
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
            RELATED SOLUTIONS & CONVERSION CTA
           ========================================== */}
        <section style={{ padding: '5rem 0 7rem', position: 'relative' }}>
          <div className="container-xl">
            {page.relatedPages && page.relatedPages.length > 0 && (
              <div style={{ marginBottom: '4rem' }}>
                <div className="eyebrow" style={{ marginBottom: '1rem' }}>Related Systems</div>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  {page.relatedPages.map(r => (
                    <Link
                      key={r.href}
                      href={r.href}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.75rem 1.25rem',
                        borderRadius: '100px',
                        background: 'rgba(0,102,255,0.08)',
                        border: '1px solid rgba(0,102,255,0.18)',
                        color: '#E8EEFF',
                        textDecoration: 'none',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = 'rgba(0,212,255,0.4)';
                        el.style.color = '#00D4FF';
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = 'rgba(0,102,255,0.18)';
                        el.style.color = '#E8EEFF';
                      }}
                    >
                      <span>{r.label}</span>
                      <span>→</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Conversion Banner */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(0,102,255,0.15) 0%, rgba(0,212,255,0.05) 100%)',
              border: '1px solid rgba(0,102,255,0.25)',
              borderRadius: 24,
              padding: '3.5rem',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                top: '-50%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '600px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />

              <div className="eyebrow" style={{ color: '#00D4FF', marginBottom: '1rem' }}>Voice Era Tech LLC</div>
              <h2 className="text-display-md" style={{ color: '#E8EEFF', marginBottom: '1rem' }}>
                Ready to Deploy <span className="gradient-text-blue">{page.badge}?</span>
              </h2>
              <p className="text-body-lg" style={{ color: '#8BA3CC', maxWidth: 540, margin: '0 auto 2.5rem' }}>
                Speak with our telecommunications architects to evaluate your infrastructure, calculate ROI, and schedule an engineering proof-of-concept.
              </p>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link
                  href="/contact"
                  className="btn-magnetic btn-primary"
                  style={{ textDecoration: 'none', fontSize: '1rem' }}
                  data-cursor="CONNECT"
                >
                  <span style={{ position: 'relative', zIndex: 1 }}>Talk to an Expert →</span>
                </Link>
                <Link
                  href="/dialer-systems"
                  className="btn-magnetic btn-secondary"
                  style={{ textDecoration: 'none', fontSize: '1rem' }}
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
