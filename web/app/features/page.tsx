import { PageHeader } from '../components/ui/PageHeader';
import { ContentSection } from '../components/layouts/ContentSection';
import { Grid } from '../components/ui/Grid';
import { FeatureCard } from '../components/cards/FeatureCard';
import { ZapIcon, CodeIcon, SmartphoneIcon, UsersIcon, LayoutIcon, RocketIcon, CheckCircleIcon, GitBranchIcon } from '../components/icons';

const features = [
  {
    icon: <ZapIcon className="w-8 h-8" />,
    title: '高速パフォーマンス',
    description: 'Next.js 15の最適化により、驚異的な読み込み速度を実現。',
  },
  {
    icon: <CodeIcon className="w-8 h-8" />,
    title: '開発者フレンドリー',
    description: 'TypeScriptによる型安全性、豊富なコンポーネントライブラリ。',
  },
  {
    icon: <SmartphoneIcon className="w-8 h-8" />,
    title: '完全レスポンシブ',
    description: 'モバイル、タブレット、デスクトップに完全対応。',
  },
  {
    icon: <UsersIcon className="w-8 h-8" />,
    title: 'チーム向け機能',
    description: 'Pull Request、Issues、Projectsで効率的なコラボレーション。',
  },
  {
    icon: <LayoutIcon className="w-8 h-8" />,
    title: '美しいデザイン',
    description: 'プロフェッショナルなデザインシステムとアニメーション。',
  },
  {
    icon: <RocketIcon className="w-8 h-8" />,
    title: '自動デプロイ',
    description: 'GitHub Actionsによる自動ビルドとデプロイ。',
  },
  {
    icon: <CheckCircleIcon className="w-8 h-8" />,
    title: '品質保証',
    description: 'Vitestによる包括的なテストと品質チェック。',
  },
  {
    icon: <GitBranchIcon className="w-8 h-8" />,
    title: 'バージョン管理',
    description: 'Gitによる強力なバージョン管理とブランチ戦略。',
  },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHeader
        title="機能一覧"
        description="GitHub Docsテンプレートのすべての機能"
        backgroundImage="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80"
      />

      <ContentSection centered>
        <Grid cols={4}>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </Grid>
      </ContentSection>
    </>
  );
}
