import { githubDocs, categories } from './data/github-docs';
import { HeroSection } from './components/layouts/HeroSection';
import { ContentSection } from './components/layouts/ContentSection';
import { Grid } from './components/ui/Grid';
import { FeatureCard } from './components/cards/FeatureCard';
import { ContentCard } from './components/cards/ContentCard';
import { StatCard } from './components/cards/StatCard';
import {
  BookIcon,
  CodeIcon,
  GitBranchIcon,
  UsersIcon,
  ZapIcon,
  LayoutIcon,
  RocketIcon,
} from './components/icons';
import { topicImages, heroImages, getUnsplashImage } from './lib/images';

export default function Page() {
  const featuredTopics = githubDocs.slice(0, 6);
  
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        subtitle="🚀 Complete Guide"
        title="GitHub Docs 完全マニュアル"
        description="初心者から上級者まで、GitHubの使い方を完全マスター。プロジェクト管理、コラボレーション、自動化まで、すべてを網羅したガイド。"
        primaryCta={{ text: '学習を始める', href: '/guides' }}
        secondaryCta={{ text: 'トピック一覧', href: '/docs/getting-started' }}
        backgroundImage={getUnsplashImage(heroImages.github)}
      />
      
      {/* Stats Section */}
      <ContentSection size="sm" className="bg-dark-900/50">
        <Grid cols={4}>
          <StatCard
            value={githubDocs.length}
            label="学習トピック"
            icon={<BookIcon className="w-6 h-6" />}
          />
          <StatCard
            value={categories.length}
            label="カテゴリー"
            icon={<LayoutIcon className="w-6 h-6" />}
          />
          <StatCard
            value="100%"
            label="無料コンテンツ"
            icon={<ZapIcon className="w-6 h-6" />}
          />
          <StatCard
            value="24/7"
            label="いつでもアクセス"
            icon={<RocketIcon className="w-6 h-6" />}
          />
        </Grid>
      </ContentSection>
      
      {/* Featured Topics */}
      <ContentSection
        title="人気のトピック"
        subtitle="Popular Topics"
        description="まずはここから始めよう。GitHubの基本から応用まで、厳選されたトピックを学習できます。"
        centered
      >
        <Grid cols={3}>
          {featuredTopics.map((topic) => (
            <ContentCard
              key={topic.id}
              title={topic.title}
              description={topic.description}
              image={getUnsplashImage(topicImages[topic.id as keyof typeof topicImages] || topicImages.default)}
              href={`/docs/${topic.id}`}
              badge={topic.category}
              meta={[
                { icon: <BookIcon className="w-4 h-4" />, text: topic.level },
              ]}
            />
          ))}
        </Grid>
      </ContentSection>
      
      {/* Features */}
      <ContentSection
        title="なぜこのガイドを選ぶのか"
        subtitle="Why Choose Us"
        description="充実した学習体験を提供する、プロフェッショナルなGitHubガイド"
        centered
        className="bg-dark-900/30"
      >
        <Grid cols={3}>
          <FeatureCard
            icon={<ZapIcon className="w-8 h-8" />}
            title="高速学習"
            description="必要な情報だけを厳選。効率的に学習を進められます。"
          />
          <FeatureCard
            icon={<CodeIcon className="w-8 h-8" />}
            title="実践的コード例"
            description="すぐに使える実践的なコード例とサンプルを多数収録。"
          />
          <FeatureCard
            icon={<GitBranchIcon className="w-8 h-8" />}
            title="最新情報"
            description="GitHubの最新機能とベストプラクティスを常にアップデート。"
          />
          <FeatureCard
            icon={<UsersIcon className="w-8 h-8" />}
            title="初心者に優しい"
            description="専門用語を分かりやすく解説。誰でも理解できる内容です。"
          />
          <FeatureCard
            icon={<BookIcon className="w-8 h-8" />}
            title="体系的な学習"
            description="基礎から応用まで、段階的に学べる構成になっています。"
          />
          <FeatureCard
            icon={<RocketIcon className="w-8 h-8" />}
            title="無料で利用可能"
            description="すべてのコンテンツが完全無料。いつでもどこでもアクセス。"
          />
        </Grid>
      </ContentSection>
      
      {/* Categories */}
      <ContentSection
        title="カテゴリー別に探す"
        subtitle="Categories"
        description="あなたの目的に合わせて、カテゴリーから学習トピックを探せます"
        centered
      >
        <Grid cols={4}>
          {categories.map((category) => {
            const topicsInCategory = githubDocs.filter(
              (topic) => topic.category === category
            );
            return (
              <StatCard
                key={category}
                value={topicsInCategory.length}
                label={category}
                icon={<LayoutIcon className="w-6 h-6" />}
              />
            );
          })}
        </Grid>
      </ContentSection>
      
      {/* CTA Section */}
      <ContentSection
        title="今すぐ学習を始めよう"
        subtitle="Get Started"
        description="GitHubをマスターして、開発者としてのスキルを次のレベルへ"
        centered
        size="lg"
        className="bg-gradient-to-b from-dark-950 via-dark-900/50 to-dark-950"
      >
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a href="/guides">
            <button className="btn-primary">
              学習ガイドを見る
            </button>
          </a>
          <a href="/sources">
            <button className="btn-secondary">
              参考資料を見る
            </button>
          </a>
        </div>
      </ContentSection>
    </>
  );
}
