import { getTopicById, githubDocs } from '../../data/github-docs';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CodeBlock from '../../components/CodeBlock';
import { PageHeader } from '../../components/ui/PageHeader';
import { ContentSection } from '../../components/layouts/ContentSection';
import { Container } from '../../components/ui/Container';
import { Badge } from '../../components/ui/Badge';
import { GlassCard } from '../../components/ui/GlassCard';
import { topicImages, getUnsplashImage } from '../../lib/images';

export async function generateStaticParams() {
  return githubDocs.map((topic) => ({
    id: topic.id,
  }));
}

export default async function DocPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const topic = getTopicById(id);

  if (!topic) {
    notFound();
  }

  const currentIndex = githubDocs.findIndex(doc => doc.id === topic.id);
  const prevTopic = currentIndex > 0 ? githubDocs[currentIndex - 1] : null;
  const nextTopic = currentIndex < githubDocs.length - 1 ? githubDocs[currentIndex + 1] : null;

  return (
    <>
      <PageHeader
        title={topic.title}
        description={topic.description}
        backgroundImage={getUnsplashImage(topicImages[topic.id as keyof typeof topicImages] || topicImages.default)}
      />
      
      <ContentSection>
        <Container size="md">
          <div className="mb-8">
            <Link 
              href="/guides" 
              className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors"
            >
              ← ガイド一覧に戻る
            </Link>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            <Badge variant="primary">{topic.category}</Badge>
            <Badge variant="secondary">{topic.level}</Badge>
          </div>

          <GlassCard className="mb-8">
            <h2 className="text-2xl font-bold mb-4">📋 概要</h2>
            <p className="text-dark-200 leading-relaxed">{topic.content.overview}</p>
          </GlassCard>

          <div className="space-y-8">
            {topic.content.sections.map((section, index) => (
              <GlassCard key={index}>
                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                <div className="space-y-4 text-dark-200 leading-relaxed">
                  {section.content.split('\n').map((paragraph, pIndex) => (
                    paragraph && <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>
                {section.code && (
                  <div className="mt-6">
                    <CodeBlock code={section.code} language={section.codeLanguage || 'bash'} />
                  </div>
                )}
              </GlassCard>
            ))}
          </div>

          {topic.content.tips && topic.content.tips.length > 0 && (
            <GlassCard className="mt-8 bg-primary-500/10 border-primary-500/30">
              <h2 className="text-2xl font-bold mb-4">💡 ヒント</h2>
              <ul className="space-y-3">
                {topic.content.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3 text-dark-200">
                    <span className="text-primary-400 mt-1">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          )}

          {topic.content.related && topic.content.related.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">🔗 関連トピック</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {topic.content.related.map((relatedId) => {
                  const relatedTopic = getTopicById(relatedId);
                  if (!relatedTopic) return null;
                  return (
                    <Link key={relatedId} href={`/docs/${relatedId}`}>
                      <GlassCard hover glow>
                        <div className="flex items-start gap-4">
                          <span className="text-3xl">{relatedTopic.icon}</span>
                          <div>
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-400 transition-colors">
                              {relatedTopic.title}
                            </h3>
                            <p className="text-dark-300 text-sm">{relatedTopic.description}</p>
                          </div>
                        </div>
                      </GlassCard>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </Container>
      </ContentSection>

      {/* Navigation */}
      <ContentSection className="bg-dark-900/30">
        <Container size="md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prevTopic && (
              <Link href={`/docs/${prevTopic.id}`}>
                <GlassCard hover className="h-full">
                  <div className="text-sm text-dark-400 mb-2">← 前のトピック</div>
                  <div className="font-semibold text-lg">{prevTopic.title}</div>
                </GlassCard>
              </Link>
            )}
            {nextTopic && (
              <Link href={`/docs/${nextTopic.id}`} className={prevTopic ? '' : 'md:col-start-2'}>
                <GlassCard hover className="h-full">
                  <div className="text-sm text-dark-400 mb-2 text-right">次のトピック →</div>
                  <div className="font-semibold text-lg text-right">{nextTopic.title}</div>
                </GlassCard>
              </Link>
            )}
          </div>
        </Container>
      </ContentSection>
    </>
  );
}
