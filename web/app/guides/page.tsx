import { githubDocs } from '../data/github-docs';
import Section from '../components/Section';
import Card from '../components/Card';
import { topicImages, getUnsplashImage } from '../lib/images';
import { BookIcon } from '../components/icons';

export default function Page() {
  return (
    <div className="guides-page-modern">
      <Section
        title="ガイド一覧"
        subtitle="GitHub Docsの全トピックを学習できます"
        spacing="large"
      >
        <div className="cards-grid">
          {githubDocs.map((topic) => (
            <Card
              key={topic.id}
              title={topic.title}
              description={topic.description}
              image={getUnsplashImage(topicImages[topic.id] || topicImages['getting-started'], 800, 400)}
              category={topic.category}
              level={topic.level}
              href={`/docs/${topic.id}/`}
              meta={[
                { icon: <BookIcon size={16} />, text: `${topic.content.sections.length} セクション` },
                ...(topic.content.tips
                  ? [{ icon: <BookIcon size={16} />, text: `${topic.content.tips.length} ヒント` }]
                  : []),
              ]}
              variant="image-top"
            />
          ))}
        </div>
      </Section>
    </div>
  );
}
