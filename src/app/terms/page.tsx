import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service — Voice Era Tech LLC',
  description: 'Terms of Service governing the use of Voice Era Tech LLC dialer platforms, telecom infrastructure, and digital solutions.',
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', background: '#FFFFFF', paddingTop: '8.5rem', paddingBottom: '6rem' }}>
        <div className="container-lg" style={{ maxWidth: 880 }}>
          <div className="eyebrow" style={{ marginBottom: '1rem' }}>Master Services Agreement</div>
          <h1 className="text-display-lg" style={{ color: '#0F172A', marginBottom: '1.5rem' }}>
            Terms of Service
          </h1>
          <p style={{ color: '#64748B', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.8rem', marginBottom: '3rem' }}>
            Last Updated: January 2026 • Voice Era Tech LLC
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', color: '#334155', lineHeight: 1.8, fontSize: '1rem' }}>
            <section>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the Voice Era Tech LLC platform, SIP trunking, dialer systems, AI voice agents, or software development services, you agree to be bound by these Terms of Service and all applicable telecommunications laws, FCC regulations, and industry standards.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>
                2. Acceptable Use Policy & Compliance
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                Customers utilizing Voice Era Tech dialer and telephony services must strictly adhere to the Telephone Consumer Protection Act (TCPA), the TSR, the TRACED Act, STIR/SHAKEN caller ID standards, and state and federal Do Not Call (DNC) registry requirements:
              </p>
              <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>Spoofing or transmitting misleading or inaccurate Caller ID information with intent to defraud or harass is strictly prohibited.</li>
                <li>Automated outbound campaigns must maintain drop rates within lawful statutory limits (less than 3% abandoned call threshold).</li>
                <li>Immediate account suspension will occur for unapproved robocalling, unlawful telemarketing, or illegal toll fraud.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>
                3. Service Level Agreement (SLA) & Uptime
              </h2>
              <p>
                Voice Era Tech guarantees 99.99% network and SIP signaling availability for Enterprise tier subscribers. Scheduled maintenance windows are communicated at least 72 hours in advance and conducted during off-peak hours with automated multi-zone failover redundancy.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>
                4. Billing, Telephony Rates, & Cancellations
              </h2>
              <p>
                Telephony usage is rated and billed per second or per minute based on the agreed rate card. Invoices are payable according to contract terms. Subscription software licenses renew automatically unless cancelled in writing prior to the renewal billing cycle.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>
                5. Governing Law
              </h2>
              <p>
                These terms are governed by and construed in accordance with the laws of the United States. For enterprise contract inquiries or custom Master Service Agreements (MSAs), please <Link href="/contact" style={{ color: '#2563EB', fontWeight: 600 }}>contact our legal team</Link>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
