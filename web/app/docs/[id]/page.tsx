import { getTopicById, githubDocs } from '../../data/github-docs';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CodeBlock from '../../components/CodeBlock';

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

  return (
    <div className="doc-page">
      <div className="doc-container">
        <Link href="/" className="back-link">← 一覧に戻る</Link>
        
        <article className="doc-article">
          <header className="doc-header">
            <div className="doc-meta">
              <span className="doc-icon">{topic.icon}</span>
              <div>
                <span className="doc-category">{topic.category}</span>
                <span className={`doc-level doc-level-${topic.level}`}>{topic.level}</span>
              </div>
            </div>
            <h1 className="doc-title">{topic.title}</h1>
            <p className="doc-description">{topic.description}</p>
          </header>

          <div className="doc-content">
            <section className="doc-overview">
              <h2>概要</h2>
              <p>{topic.content.overview}</p>
            </section>

            <section className="doc-sections">
              {topic.content.sections.map((section, index) => (
                <div key={index} className="doc-section">
                  <h2>{section.title}</h2>
                  <div className="section-content">
                    {section.content.split('\n').map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                  </div>
                  {section.code && (
                    <CodeBlock code={section.code} language={section.codeLanguage || 'bash'} />
                  )}
                </div>
              ))}
            </section>

            {topic.content.tips && topic.content.tips.length > 0 && (
              <section className="doc-tips">
                <h2>💡 ヒント</h2>
                <ul>
                  {topic.content.tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </section>
            )}

            {topic.content.related && topic.content.related.length > 0 && (
              <section className="doc-related">
                <h2>関連トピック</h2>
                <div className="related-topics">
                  {topic.content.related.map((relatedId) => {
                    const relatedTopic = getTopicById(relatedId);
                    if (!relatedTopic) return null;
                    return (
                      <Link key={relatedId} href={`/docs/${relatedId}`} className="related-card">
                        <span className="related-icon">{relatedTopic.icon}</span>
                        <div>
                          <h3>{relatedTopic.title}</h3>
                          <p>{relatedTopic.description}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </section>
            )}
          </div>
        </article>

        <nav className="doc-nav">
          <div className="nav-links">
            {(() => {
              const currentIndex = githubDocs.findIndex(doc => doc.id === topic.id);
              const prevTopic = currentIndex > 0 ? githubDocs[currentIndex - 1] : null;
              const nextTopic = currentIndex < githubDocs.length - 1 ? githubDocs[currentIndex + 1] : null;
              
              return (
                <>
                  {prevTopic && (
                    <Link href={`/docs/${prevTopic.id}`} className="nav-link nav-prev">
                      <span>← 前のトピック</span>
                      <strong>{prevTopic.title}</strong>
                    </Link>
                  )}
                  {nextTopic && (
                    <Link href={`/docs/${nextTopic.id}`} className="nav-link nav-next">
                      <span>次のトピック →</span>
                      <strong>{nextTopic.title}</strong>
                    </Link>
                  )}
                </>
              );
            })()}
          </div>
        </nav>
      </div>
    </div>
  );
}
