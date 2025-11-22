import { githubDocs, categories } from './data/github-docs';
import Hero from './components/Hero';
import Section from './components/Section';
import Card from './components/Card';
import {
  PaintBrushIcon,
  SmartphoneIcon,
  ZapIcon,
  TargetIcon,
  FileTextIcon,
  DollarSignIcon,
  BookIcon,
} from './components/icons';
import { heroImages, topicImages, featureImages, getUnsplashImage } from './lib/images';

export default function Page() {
  return (
    <div className="home-page-modern">
      {/* Hero Section */}
      <Hero
        badge="最新版 v2.0 - プロフェッショナルテンプレート"
        titleGradient="GitHub Docs"
        title="完全マニュアル"
        subtitle="初心者でも分かるGitHubの使い方を、美しく洗練されたデザインで学ぼう。プロフェッショナルな学習体験を提供します。"
        ctaText="今すぐ学習を始める"
        ctaLink="/docs/getting-started/"
        stats={[
          { number: githubDocs.length.toString(), label: 'トピック' },
          { number: categories.length.toString(), label: 'カテゴリ' },
          { number: '100%', label: '無料' },
        ]}
        backgroundImage={`${heroImages.github}?w=1920&h=1080&fit=crop&q=80`}
      />

      {/* Categories Section */}
      <Section
        title="カテゴリ"
        subtitle="学習したいカテゴリを選択してください"
        spacing="default"
      >
        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category} className="category-card">
              <BookIcon size={40} className="category-icon-svg" />
              <span className="category-name">{category}</span>
              <span className="category-count">
                {githubDocs.filter((doc) => doc.category === category).length} トピック
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* Topics Section */}
      <Section
        title="学習トピック"
        subtitle="GitHubの基礎から応用まで、すべてを網羅"
        background="dark"
        spacing="large"
      >
        <div className="cards-grid">
          {githubDocs.map((topic) => (
            <Card
              key={topic.id}
              title={topic.title}
              description={topic.description}
              icon={topic.icon}
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

      {/* Features Section */}
      <Section
        title="なぜこのサイトで学ぶのか"
        subtitle="最高の学習体験を提供します"
        spacing="large"
      >
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <PaintBrushIcon size={48} className="feature-icon-svg" />
            </div>
            <h3 className="feature-title">美しく洗練されたデザイン</h3>
            <p className="feature-description">
              モダンで美しいUIで、学習のモチベーションを高めます。視覚的に分かりやすく設計されています。
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <SmartphoneIcon size={48} className="feature-icon-svg" />
            </div>
            <h3 className="feature-title">完全レスポンシブ</h3>
            <p className="feature-description">
              スマートフォン、タブレット、デスクトップ、あらゆるデバイスで快適に学習できます。
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <ZapIcon size={48} className="feature-icon-svg" />
            </div>
            <h3 className="feature-title">高速・軽量</h3>
            <p className="feature-description">
              Next.js 15の最新技術で構築。ページ読み込みは瞬時、ストレスフリーな学習体験を実現。
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <TargetIcon size={48} className="feature-icon-svg" />
            </div>
            <h3 className="feature-title">段階的な学習</h3>
            <p className="feature-description">
              初心者から上級者まで、レベルに合わせた段階的なカリキュラムで確実にスキルアップ。
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <FileTextIcon size={48} className="feature-icon-svg" />
            </div>
            <h3 className="feature-title">実践的な内容</h3>
            <p className="feature-description">
              実際の開発現場で使えるコマンドやワークフローを、コピー可能なコード付きで解説。
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <DollarSignIcon size={48} className="feature-icon-svg" />
            </div>
            <h3 className="feature-title">完全無料</h3>
            <p className="feature-description">
              すべてのコンテンツが無料で利用可能。アカウント登録も不要、今すぐ学習を開始できます。
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="accent" spacing="large">
        <div className="cta-content">
          <h2 className="cta-title">今すぐ学習を始めましょう</h2>
          <p className="cta-description">
            GitHubの基礎から応用まで、ステップバイステップで学習できます。
            <br />
            初心者でも安心して始められる、丁寧な解説と豊富なサンプルコード。
          </p>
          <div className="cta-buttons">
            <a href="/docs/getting-started/" className="cta-button cta-button-primary">
              最初のトピックを始める
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="/guides/" className="cta-button cta-button-secondary">
              全トピックを見る
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
