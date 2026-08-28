import type { Metadata } from 'next';
import { subPagesData } from '@/data/pagesData';
import SubPageTemplate from '@/components/templates/SubPageTemplate';

export const metadata: Metadata = {
  title: 'Privacy Policy — Voice Era Tech LLC',
  description: 'Voice Era Tech LLC Privacy Policy. Learn how we protect customer communications data, records, and telecommunications privacy.',
};

export default function PrivacyPage() {
  const page = subPagesData['privacy'];
  return <SubPageTemplate page={page} />;
}
