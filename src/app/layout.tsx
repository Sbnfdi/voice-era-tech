import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://voiceeratech.com'),
  title: {
    default: 'Voice Era Tech LLC — Enterprise Dialer Systems & Call Center Technology',
    template: '%s | Voice Era Tech LLC',
  },
  description: 'Voice Era Tech LLC delivers enterprise-grade dialer systems, call center technology, AI voice agents, cloud infrastructure and custom software solutions for modern businesses.',
  keywords: [
    'dialer systems', 'predictive dialer', 'power dialer', 'call center technology',
    'VoIP dialer', 'SIP dialer', 'AI voice agents', 'call center software',
    'cloud call center', 'outbound dialer', 'progressive dialer', 'preview dialer',
    'call center infrastructure', 'business automation', 'voice era tech',
  ],
  authors: [{ name: 'Voice Era Tech LLC' }],
  creator: 'Voice Era Tech LLC',
  publisher: 'Voice Era Tech LLC',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://voiceeratech.com',
    siteName: 'Voice Era Tech LLC',
    title: 'Voice Era Tech LLC — Enterprise Dialer Systems & Call Center Technology',
    description: 'Powering the next generation of call centers with enterprise dialer systems, AI voice technology and cloud infrastructure.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Voice Era Tech LLC' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voice Era Tech LLC — Enterprise Dialer Systems',
    description: 'Enterprise-grade dialer systems, AI voice technology and cloud infrastructure for modern call centers.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.setAttribute('data-theme', theme);
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
