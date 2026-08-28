import type { Metadata } from 'next';
import { subPagesData } from '@/data/pagesData';
import SubPageTemplate from '@/components/templates/SubPageTemplate';

export const metadata: Metadata = {
  title: 'Careers — Build the Future of Voice with Voice Era Tech LLC',
  description: 'Join the engineering team at Voice Era Tech LLC. Explore open positions in telecommunications, AI, cloud architecture, and full-stack software development.',
};

export default function CareersPage() {
  const page = subPagesData['careers'];
  return <SubPageTemplate page={page} />;
}
