import type { Metadata } from 'next';
import { subPagesData } from '@/data/pagesData';
import SubPageTemplate from '@/components/templates/SubPageTemplate';

export const metadata: Metadata = {
  title: 'Telecommunications Compliance & TCPA — Voice Era Tech LLC',
  description: 'Telecommunications compliance safeguards: TCPA compliance, STIR/SHAKEN A-level attestation, DNC registry scrubbing, and calling window rules.',
};

export default function CompliancePage() {
  const page = subPagesData['compliance'];
  return <SubPageTemplate page={page} />;
}
