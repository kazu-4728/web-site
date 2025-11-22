import { githubDocs, categories } from './data/github-docs';
import { AnimatedBackground } from './components/stripe/AnimatedBackground';
import { InteractiveCard } from './components/stripe/InteractiveCard';
import { StatCounter } from './components/stripe/StatCounter';
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
  CheckCircleIcon,
  SmartphoneIcon,
} from './components/icons';
import { getImage, getFeatureImage, getTopicImage } from './lib/images';

export default function Page() {
  const featuredTopics = githubDocs.slice(0, 6);
  
  const features = [
    {
      icon: <ZapIcon className="w-8 h-8" />,
      title: '高速パフォーマンス',
      description: 'Next.js 15の最適化により、驚異的な読み込み速度を実現。',
      image: getFeatureImage('speed'),
    },
    {
      icon: <CodeIcon className="w-8 h-8" />,
      title: '開発者に優しい',
      description: 'TypeScriptによる型安全性、豊富なコンポーネント。',
      image: getFeatureImage('design'),
    },
    {
      icon: <SmartphoneIcon className="w-8 h-8" />,
      title: '完全レスポンシブ',
      description: 'あらゆるデバイスで美しく表示されます。',
      image: getFeatureImage('mobile'),
    },
  ];

  const testimonials = [
    {
      quote: 'このテンプレートのおかげで、開発時間が70%削減されました。',
      author: '田中 太郎',
      role: 'フロントエンドエンジニア',
      rating: 5,
    },
    {
      quote: '初心者でも簡単に使えました。ドキュメントが充実しています。',
      author: '佐藤 花子',
      role: 'Webデザイナー',
      rating: 5,
    },
    {
      quote: 'デザインの質の高さに驚かれました。プロジェクトが大成功。',
      author: '鈴木 一郎',
      role: 'プロジェクトマネージャー',
      rating: 5,
    },
  ];

  return (
    <>
      {/* Full-Screen Hero with Large Image */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Image - Full Screen */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=2400&q=90"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/70 via-dark-950/80 to-dark-950" />
        </div>
        
        <AnimatedBackground />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 border border-primary-500/30 text-primary-400 text-sm font-semibold mb-8">
            <RocketIcon className="w-4 h-4" />
            <span>最新版リリース v2.0</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
            <span className="block mb-4">GitHub Docs</span>
            <span className="text-gradient">完全マニュアル</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-dark-200 max-w-3xl mx-auto mb-12 leading-relaxed">
            初心者から上級者まで、GitHubの使い方を完全マスター
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Link href="/guides">
              <Button variant="primary" size="xl">
                <RocketIcon className="w-5 h-5 mr-2" />
                今すぐ始める
              </Button>
            </Link>
            <Link href="/docs/getting-started">
              <Button variant="secondary" size="xl">
                <BookIcon className="w-5 h-5 mr-2" />
                ドキュメントを読む
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 text-dark-300 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-primary-400" />
              <span>10,000+ ダウンロード</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-primary-400" />
              <span>★★★★★ 5.0</span>
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

      {/* Large Image Section */}
      <section className="relative h-[70vh]">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=2400&q=90"
          alt="Team Collaboration"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/80 to-transparent" />
        <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-bold mb-6">
              チームで、もっと
              <span className="text-gradient block">強くなる</span>
            </h2>
            <p className="text-xl text-dark-200 mb-8">
              GitHubは単なるコード管理ツールではありません。
              チーム全体の生産性を劇的に向上させるプラットフォームです。
            </p>
            <Link href="/about">
              <Button variant="primary" size="lg">
                もっと詳しく
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <ContentSection className="bg-gradient-to-b from-dark-950 to-dark-900">
        <Grid cols={4}>
          <StatCounter value={githubDocs.length} suffix="+" label="学習トピック" />
          <StatCounter value={20} suffix="+" label="ページ" />
          <StatCounter value={100} suffix="%" label="無料" />
          <StatCounter value={10000} suffix="+" label="ユーザー" />
        </Grid>
      </ContentSection>

      {/* Features with Images */}
      <ContentSection title="なぜ選ばれるのか" subtitle="Features" centered>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <InteractiveCard key={index}>
              <GlassCard hover glow className="h-full">
                <div className="relative h-64 mb-6 rounded-xl overflow-hidden">
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
        subtitle="Popular"
        centered
        className="bg-dark-900/30"
      >
        <Grid cols={3}>
          {featuredTopics.map((topic) => (
            <ContentCard
              key={topic.id}
              title={topic.title}
              description={topic.description}
              image={getTopicImage(topic.id)}
              href={`/docs/${topic.id}`}
              badge={topic.category}
              meta={[{ icon: <BookIcon className="w-4 h-4" />, text: topic.level }]}
            />
          ))}
        </Grid>
        
        <div className="text-center mt-12">
          <Link href="/guides">
            <Button variant="primary" size="lg">
              すべてのトピックを見る →
            </Button>
          </Link>
        </div>
      </ContentSection>

      {/* Testimonials */}
      <ContentSection title="ユーザーの声" subtitle="Testimonials" centered>
        <Grid cols={3}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Grid>
      </ContentSection>

      {/* CTA Section with Large Background */}
      <section className="relative h-[60vh] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=2400&q=90"
          alt="Get Started"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-dark-950/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            今すぐ学習を<span className="text-gradient">始めよう</span>
          </h2>
          <p className="text-xl text-dark-300 mb-12 max-w-2xl mx-auto">
            完全無料。登録不要。今すぐアクセスして、GitHubの世界を探索しましょう。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/guides">
              <Button variant="primary" size="xl">
                <RocketIcon className="w-5 h-5 mr-2" />
                学習ガイドを見る
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" size="xl">
                お問い合わせ
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
