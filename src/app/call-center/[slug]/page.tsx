import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { subPagesData } from '@/data/pagesData';
import SubPageTemplate from '@/components/templates/SubPageTemplate';

const validSlugs = ['inbound', 'outbound', 'blended', 'contact-center', 'agent-management', 'campaigns', 'analytics', 'crm'];

export function generateStaticParams() {
  return validSlugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const key = `call-center/${slug}`;
  const page = subPagesData[key];
  if (!page) return {};

  return {
    title: `${page.badge} — Voice Era Tech LLC`,
    description: page.description,
    openGraph: {
      title: `${page.title} ${page.highlightText} | Voice Era Tech`,
      description: page.description,
    },
  };
}

export default async function CallCenterSubPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const key = `call-center/${slug}`;
  const page = subPagesData[key];

  if (!page) {
    notFound();
  }

  return <SubPageTemplate page={page} />;
}
