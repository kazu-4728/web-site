import { githubDocs, categories } from '../data/github-docs';
import { PageHeader } from '../components/ui/PageHeader';
import { ContentSection } from '../components/layouts/ContentSection';
import { Grid } from '../components/ui/Grid';
import { ContentCard } from '../components/cards/ContentCard';
import { Badge } from '../components/ui/Badge';
import { topicImages, getUnsplashImage } from '../lib/images';
import { BookIcon, LayersIcon } from '../components/icons';

export default function GuidesPage() {
  return (
    <>
      <PageHeader
        title="学習ガイド"
        description="GitHubの使い方を段階的に学べる、包括的なガイドコレクション"
        backgroundImage={getUnsplashImage('photo-1516116216624-53e697fedbea?w=1920&q=80')}
      />
      
      <ContentSection size="sm">
        <div className="flex flex-wrap gap-3 justify-center">
          <Badge variant="primary">全 {githubDocs.length} トピック</Badge>
          <Badge variant="secondary">{categories.length} カテゴリー</Badge>
          <Badge variant="success">無料アクセス</Badge>
        </div>
      </ContentSection>
      
      {categories.map((category) => {
        const topicsInCategory = githubDocs.filter(
          (topic) => topic.category === category
        );
        
        if (topicsInCategory.length === 0) return null;
        
        return (
          <ContentSection
            key={category}
            title={category}
            subtitle={`${topicsInCategory.length} Topics`}
            className="bg-dark-900/20"
          >
            <Grid cols={3}>
              {topicsInCategory.map((topic) => (
                <ContentCard
                  key={topic.id}
                  title={topic.title}
                  description={topic.description}
                  image={getUnsplashImage(topicImages[topic.id as keyof typeof topicImages] || topicImages.default)}
                  href={`/docs/${topic.id}`}
                  badge={topic.level}
                  meta={[
                    { icon: <BookIcon className="w-4 h-4" />, text: topic.category },
                  ]}
                />
              ))}
            </Grid>
          </ContentSection>
        );
      })}
    </>
  );
}
