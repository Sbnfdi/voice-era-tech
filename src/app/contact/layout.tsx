import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Talk to a Dialer Expert',
  description: 'Connect with Voice Era Tech LLC to discuss dialer systems, call center technology, AI voice agents, cloud infrastructure and custom software solutions.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
