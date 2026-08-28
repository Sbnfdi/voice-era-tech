import type { Metadata } from 'next';
import { subPagesData } from '@/data/pagesData';
import SubPageTemplate from '@/components/templates/SubPageTemplate';

export const metadata: Metadata = {
  title: 'Terms of Service — Voice Era Tech LLC',
  description: 'Voice Era Tech LLC Terms of Service and Master Services Agreement governing software, dialer platforms, and consulting.',
};

export default function TermsPage() {
  const page = subPagesData['terms'];
  return <SubPageTemplate page={page} />;
}
