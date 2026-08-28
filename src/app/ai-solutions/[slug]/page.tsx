import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { subPagesData } from '@/data/pagesData';
import SubPageTemplate from '@/components/templates/SubPageTemplate';

const validSlugs = ['voice-agents', 'call-agents', 'customer-support', 'lead-qualification', 'appointments', 'automation', 'custom'];

export function generateStaticParams() {
  return validSlugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const key = `ai-solutions/${slug}`;
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

export default async function AISolutionsSubPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const key = `ai-solutions/${slug}`;
  const page = subPagesData[key];

  if (!page) {
    notFound();
  }

  return <SubPageTemplate page={page} />;
}
