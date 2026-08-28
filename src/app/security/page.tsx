import type { Metadata } from 'next';
import { subPagesData } from '@/data/pagesData';
import SubPageTemplate from '@/components/templates/SubPageTemplate';

export const metadata: Metadata = {
  title: 'Security Architecture & Trust — Voice Era Tech LLC',
  description: 'Enterprise security standards at Voice Era Tech LLC: SOC-2 Type II, HIPAA, PCI-DSS, zero-trust infrastructure, and end-to-end voice encryption.',
};

export default function SecurityPage() {
  const page = subPagesData['security'];
  return <SubPageTemplate page={page} />;
}
