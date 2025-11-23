import { getDocPage, getAllDocSlugs } from '../../lib/content';
import { MarkdownRenderer } from '../../components/ui/MarkdownRenderer';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../components/ui/Button';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const slugs = await getAllDocSlugs();
  return slugs.map((slug) => ({ slug }));
}

interface Props {
  params: {
    slug: string;
  };
}

export default async function DocPage({ params }: Props) {
  const { slug } = await params;
  const page = await getDocPage(slug);

  if (!page) {
    notFound();
  }

  return (
    <main className="bg-dark-950 min-h-screen pb-24">
      {/* Hero Header */}
      <div className="relative h-[60vh] min-h-[500px] flex items-end pb-24">
        <div className="absolute inset-0 z-0">
          <Image
            src={page.image}
            alt={page.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/60 to-dark-950/30" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Link href="/" className="inline-flex items-center text-primary-400 mb-8 hover:text-primary-300 transition-colors">
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          {page.subtitle && (
            <p className="text-primary-500 font-bold tracking-widest uppercase mb-4 animate-fade-in-up">
              {page.subtitle}
            </p>
          )}
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 animate-fade-in-up delay-100 leading-tight">
            {page.title}
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed animate-fade-in-up delay-200 border-l-2 border-primary-500 pl-6">
            {page.description}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-dark-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-dark-800 shadow-2xl">
          <MarkdownRenderer content={page.content} />
        </div>

        {/* Navigation */}
        {page.related && page.related.length > 0 && (
          <div className="mt-16 pt-16 border-t border-dark-800">
            <h3 className="text-2xl font-bold text-white mb-8">Continue the Journey</h3>
            <div className="flex flex-wrap gap-4">
              {page.related.map((relatedSlug) => (
                <Link key={relatedSlug} href={`/docs/${relatedSlug}`}>
                  <Button variant="secondary" className="group">
                    Next Chapter
                    <ArrowRightIcon className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
