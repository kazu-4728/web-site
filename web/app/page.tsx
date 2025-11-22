import { githubDocs, categories } from './data/github-docs';
import { AnimatedBackground } from './components/stripe/AnimatedBackground';
import { InteractiveCard } from './components/stripe/InteractiveCard';
import { StatCounter } from './components/stripe/StatCounter';
import { HeroSection } from './components/layouts/HeroSection';
import { ContentSection } from './components/layouts/ContentSection';
import { Grid } from './components/ui/Grid';
import { FeatureCard } from './components/cards/FeatureCard';
import { ContentCard } from './components/cards/ContentCard';
import { TestimonialCard } from './components/cards/TestimonialCard';
import { GlassCard } from './components/ui/GlassCard';
import { Button } from './components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import {
  BookIcon,
  CodeIcon,
  GitBranchIcon,
  UsersIcon,
  ZapIcon,
  LayoutIcon,
  RocketIcon,
  TargetIcon,
  CheckCircleIcon,
  SmartphoneIcon,
} from './components/icons';
import { getImage } from './lib/images';

export default function Page() {
  const featuredTopics = githubDocs.slice(0, 6);
  
  const features = [
    {
      icon: <ZapIcon className="w-8 h-8" />,
      title: '高速パフォーマンス',
      description: 'Next.js 15の最適化により、驚異的な読み込み速度を実現。ユーザー体験を最優先に設計されています。',
      image: getImage('features', 'speed'),
    },
    {
      icon: <CodeIcon className="w-8 h-8" />,
      title: '開発者に優しい',
      description: 'TypeScriptによる型安全性、豊富なコンポーネント、包括的なドキュメントで開発を加速します。',
      image: getImage('features', 'design'),
    },
    {
      icon: <SmartphoneIcon className="w-8 h-8" />,
      title: '完全レスポンシブ',
      description: 'モバイル、タブレット、デスクトップ - あらゆるデバイスで美しく表示されます。',
      image: getImage('features', 'mobile'),
    },
    {
      icon: <GitBranchIcon className="w-8 h-8" />,
      title: 'バージョン管理',
      description: 'Gitベースのワークフローで、チーム開発もスムーズ。変更履歴を完全に追跡できます。',
      image: getImage('features', 'collaboration'),
    },
    {
      icon: <LayoutIcon className="w-8 h-8" />,
      title: 'モダンデザイン',
      description: 'Stripe、Vercel、Linearなどの最高峰のデザインから着想を得た、洗練されたUIを提供。',
      image: getImage('features', 'design'),
    },
    {
      icon: <RocketIcon className="w-8 h-8" />,
      title: '自動デプロイ',
      description: 'GitHub Actionsによる自動ビルド・デプロイ。コミットするだけで本番環境に反映されます。',
      image: getImage('features', 'automation'),
    },
  ];

  const testimonials = [
    {
      quote: 'このテンプレートのおかげで、開発時間が70%削減されました。デザインも美しく、カスタマイズも簡単です。',
      author: '田中 太郎',
      role: 'フロントエンドエンジニア',
      rating: 5,
    },
    {
      quote: '初心者でも簡単に使えました。ドキュメントが充実していて、困ることがありませんでした。',
      author: '佐藤 花子',
      role: 'Webデザイナー',
      rating: 5,
    },
    {
      quote: 'クライアントに提案したところ、デザインの質の高さに驚かれました。プロジェクトが大成功しました。',
      author: '鈴木 一郎',
      role: 'プロジェクトマネージャー',
      rating: 5,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBackground />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 border border-primary-500/30 text-primary-400 text-sm font-semibold mb-8">
            <RocketIcon className="w-4 h-4" />
            <span>最新版リリース v2.0</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
            <span className="block mb-4">GitHub Docs</span>
            <span className="text-gradient">完全マニュアル</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-dark-200 max-w-3xl mx-auto mb-12 leading-relaxed">
            初心者から上級者まで、GitHubの使い方を完全マスター。
            <br />
            プロジェクト管理、コラボレーション、自動化まで、すべてを網羅したプロフェッショナルガイド。
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Link href="/guides">
              <Button variant="primary" size="xl">
                <RocketIcon className="w-5 h-5 mr-2" />
                今すぐ始める
              </Button>
            </Link>
            <Link href="/sources">
              <Button variant="secondary" size="xl">
                <BookIcon className="w-5 h-5 mr-2" />
                参考資料を見る
              </Button>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-dark-300 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-primary-400" />
              <span>10,000+ ダウンロード</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-primary-400" />
              <span>★★★★★ 5.0 (200+ レビュー)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-primary-400" />
              <span>100% 無料</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <ContentSection className="bg-gradient-to-b from-dark-950 to-dark-900">
        <Grid cols={4}>
          <StatCounter value={githubDocs.length} suffix="+" label="学習トピック" />
          <StatCounter value={categories.length} label="カテゴリー" />
          <StatCounter value={100} suffix="%" label="無料コンテンツ" />
          <StatCounter value={10000} suffix="+" label="ユーザー" />
        </Grid>
      </ContentSection>

      {/* Features Section with Images */}
      <ContentSection
        title="なぜ選ばれるのか"
        subtitle="Features"
        description="最高の学習体験を提供する、プロフェッショナルなGitHubガイド"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <InteractiveCard key={index}>
              <GlassCard hover glow className="h-full">
                <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 to-transparent" />
                </div>
                <div className="mb-4 inline-flex p-4 rounded-xl bg-primary-500/20 text-primary-400">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-dark-300 leading-relaxed">{feature.description}</p>
              </GlassCard>
            </InteractiveCard>
          ))}
        </div>
      </ContentSection>

      {/* Featured Topics */}
      <ContentSection
        title="人気のトピック"
        subtitle="Popular Topics"
        description="まずはここから始めよう。GitHubの基本から応用まで、厳選されたトピックを学習できます"
        centered
        className="bg-dark-900/30"
      >
        <Grid cols={3}>
          {featuredTopics.map((topic) => (
            <ContentCard
              key={topic.id}
              title={topic.title}
              description={topic.description}
              image={getImage('topics', topic.id)}
              href={`/docs/${topic.id}`}
              badge={topic.category}
              meta={[
                { icon: <BookIcon className="w-4 h-4" />, text: topic.level },
              ]}
            />
          ))}
        </Grid>
        
        <div className="text-center mt-12">
          <Link href="/guides">
            <Button variant="primary" size="lg">
              すべてのトピックを見る
              <span className="ml-2">→</span>
            </Button>
          </Link>
        </div>
      </ContentSection>

      {/* Testimonials */}
      <ContentSection
        title="ユーザーの声"
        subtitle="Testimonials"
        description="実際に使っているユーザーからの評価"
        centered
      >
        <Grid cols={3}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              rating={testimonial.rating}
            />
          ))}
        </Grid>
      </ContentSection>

      {/* CTA Section */}
      <ContentSection
        title="今すぐ学習を始めよう"
        subtitle="Get Started"
        description="GitHubをマスターして、開発者としてのスキルを次のレベルへ"
        centered
        className="bg-gradient-to-b from-dark-900 to-dark-950"
      >
        <div className="max-w-4xl mx-auto">
          <GlassCard className="text-center p-12">
            <h3 className="text-3xl font-bold mb-6">
              完全無料で始められます
            </h3>
            <p className="text-xl text-dark-300 mb-8">
              登録不要。今すぐアクセスして、GitHubの世界を探索しましょう。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/guides">
                <Button variant="primary" size="xl">
                  <RocketIcon className="w-5 h-5 mr-2" />
                  学習ガイドを見る
                </Button>
              </Link>
              <Link href="/faq">
                <Button variant="secondary" size="xl">
                  よくある質問
                </Button>
              </Link>
            </div>
          </GlassCard>
        </div>
      </ContentSection>
    </>
  );
}
