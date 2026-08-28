import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — Voice Era Tech LLC',
  description: 'Privacy Policy for Voice Era Tech LLC. How we protect, handle, and secure voice telemetry, customer data, and communication logs.',
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', background: '#FFFFFF', paddingTop: '8.5rem', paddingBottom: '6rem' }}>
        <div className="container-lg" style={{ maxWidth: 880 }}>
          <div className="eyebrow" style={{ marginBottom: '1rem' }}>Legal & Compliance</div>
          <h1 className="text-display-lg" style={{ color: '#0F172A', marginBottom: '1.5rem' }}>
            Privacy Policy
          </h1>
          <p style={{ color: '#64748B', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.8rem', marginBottom: '3rem' }}>
            Last Updated: January 2026 • Voice Era Tech LLC
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', color: '#334155', lineHeight: 1.8, fontSize: '1rem' }}>
            <section>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>
                1. Information We Collect
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                Voice Era Tech LLC (&ldquo;Voice Era Tech&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) provides enterprise telecommunications, dialer software, AI voice agents, and cloud infrastructure services. In operating our platform, we collect:
              </p>
              <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><strong>Account Data:</strong> Corporate name, billing address, technical contact email, and phone numbers.</li>
                <li><strong>Call Telemetry & CDR Data:</strong> Originating and terminating phone numbers, call start/end timestamps, call duration, SIP response codes, and Mean Opinion Score (MOS) quality metrics.</li>
                <li><strong>Call Audio & Transcripts:</strong> Voice recordings and transcriptions processed strictly on behalf of our enterprise clients according to their configured data retention rules.</li>
                <li><strong>Technical Logs:</strong> IP addresses, browser user-agents, API usage metrics, and error telemetry.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>
                2. How We Use Collected Data
              </h2>
              <p>
                We use information strictly to deliver, route, optimize, and bill telephony and software services; detect and prevent toll fraud or malicious network activity; comply with federal telecommunications regulations (STIR/SHAKEN, TCPA, FCC requirements); and support enterprise client workflows.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>
                3. Data Protection & Encryption
              </h2>
              <p>
                All voice media streams (SRTP) and signaling (SIP-TLS) are encrypted in transit using industry-standard TLS 1.3 and AES-256 protocols. Stored call recordings, transcripts, and database backups are encrypted at rest using KMS-managed cryptographic keys with strict multi-factor role-based access control.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>
                4. Third-Party Sharing
              </h2>
              <p>
                We do not sell, rent, or monetize customer or caller data. Telecommunications routing data is exchanged exclusively with authorized Tier-1 carriers and CLEC partners solely for terminating voice traffic and complying with statutory emergency routing requirements.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>
                5. Contact Us Regarding Privacy
              </h2>
              <p>
                For data access requests, deletion inquiries, or privacy compliance questions, contact our data protection team at <a href="mailto:privacy@voiceeratech.com" style={{ color: '#2563EB', fontWeight: 600 }}>privacy@voiceeratech.com</a> or via our <Link href="/contact" style={{ color: '#2563EB', fontWeight: 600 }}>Contact Page</Link>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
