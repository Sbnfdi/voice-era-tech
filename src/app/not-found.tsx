import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main style={{
        minHeight: '80vh',
        background: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '8rem 2rem 4rem',
        fontFamily: '"Plus Jakarta Sans", sans-serif',
      }}>
        {/* 404 number */}
        <div style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 'clamp(4rem, 12vw, 8rem)',
          fontWeight: 800,
          background: 'linear-gradient(135deg, #2563EB 0%, #0284C7 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: 1,
          marginBottom: '1rem',
          letterSpacing: '-0.05em',
        }}>
          404
        </div>

        {/* Message */}
        <h1 style={{ color: '#0F172A', fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
          Signal Lost — Page Not Found
        </h1>
        <p style={{ color: '#64748B', fontSize: '1.05rem', lineHeight: 1.65, maxWidth: 460, marginBottom: '2.5rem' }}>
          The telephony route or digital resource you requested couldn&apos;t be located. Let&apos;s get you back on track.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/" className="btn-magnetic btn-primary" style={{ textDecoration: 'none' }}>
            Return to Homepage →
          </Link>
          <Link href="/dialer-systems" className="btn-magnetic btn-secondary" style={{ textDecoration: 'none' }}>
            Explore Dialer Systems
          </Link>
          <Link href="/contact" className="btn-magnetic btn-secondary" style={{ textDecoration: 'none' }}>
            Contact Support
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
