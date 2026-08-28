import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#050A14',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem',
      fontFamily: '"Plus Jakarta Sans", sans-serif',
    }}>
      {/* 404 number */}
      <div style={{
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: 'clamp(5rem, 15vw, 12rem)',
        fontWeight: 800,
        background: 'linear-gradient(135deg, #0066FF 0%, #00D4FF 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        lineHeight: 1,
        marginBottom: '1.5rem',
        letterSpacing: '-0.05em',
      }}>
        404
      </div>

      {/* Message */}
      <h1 style={{ color: '#E8EEFF', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
        Signal Lost
      </h1>
      <p style={{ color: '#8BA3CC', fontSize: '1rem', lineHeight: 1.65, maxWidth: 400, marginBottom: '2.5rem' }}>
        The page you&apos;re looking for couldn&apos;t be routed. Let&apos;s get you back to the right connection.
      </p>

      {/* CTAs */}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.875rem 1.75rem',
          borderRadius: '100px',
          background: 'linear-gradient(135deg, #0066FF, #00D4FF)',
          color: '#fff',
          fontWeight: 600,
          fontSize: '0.9375rem',
          textDecoration: 'none',
        }}>
          Return Home
        </Link>
        <Link href="/contact" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.875rem 1.75rem',
          borderRadius: '100px',
          border: '1px solid rgba(0,102,255,0.3)',
          color: '#E8EEFF',
          fontWeight: 600,
          fontSize: '0.9375rem',
          textDecoration: 'none',
        }}>
          Contact Us
        </Link>
      </div>
    </div>
  );
}
