import { PageHeader } from '../components/ui/PageHeader';
import { ContentSection } from '../components/layouts/ContentSection';
import { Container } from '../components/ui/Container';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { CheckCircleIcon, RocketIcon } from '../components/icons';
import Link from 'next/link';

const plans = [
  {
    name: '個人',
    price: '無料',
    description: '個人プロジェクトに最適',
    features: [
      '無制限の公開リポジトリ',
      '基本的なGitHub Actions',
      'コミュニティサポート',
      'GitHub Pagesホスティング',
    ],
  },
  {
    name: 'チーム',
    price: '¥3,000/月',
    description: 'チーム開発に必要な機能',
    features: [
      'プライベートリポジトリ無制限',
      '高度なGitHub Actions',
      '優先サポート',
      'チームコラボレーションツール',
      'コードレビュー機能',
    ],
    popular: true,
  },
  {
    name: 'エンタープライズ',
    price: 'お問い合わせ',
    description: '大規模組織向け',
    features: [
      'すべてのチーム機能',
      'エンタープライズサポート',
      'セキュリティ監査',
      'SAML SSO',
      'カスタム契約',
      '専任サポート',
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        title="料金プラン"
        description="あなたに最適なプランを見つけましょう"
        backgroundImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80"
      />

      <ContentSection>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <GlassCard
                key={plan.name}
                hover
                glow={plan.popular}
                className={`p-8 ${plan.popular ? 'border-2 border-primary-500' : ''}`}
              >
                {plan.popular && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/20 border border-primary-500/30 text-primary-400 text-sm font-semibold mb-4">
                    <RocketIcon className="w-4 h-4" />
                    人気
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-gradient mb-2">{plan.price}</div>
                <p className="text-dark-300 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircleIcon className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                      <span className="text-dark-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href="/contact">
                  <Button
                    variant={plan.popular ? 'primary' : 'secondary'}
                    className="w-full"
                  >
                    {plan.price === '無料' ? '今すぐ始める' : 'お問い合わせ'}
                  </Button>
                </Link>
              </GlassCard>
            ))}
          </div>
        </Container>
      </ContentSection>
    </>
  );
}
