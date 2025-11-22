import { PageHeader } from '../components/ui/PageHeader';
import { ContentSection } from '../components/layouts/ContentSection';
import { Container } from '../components/ui/Container';
import { GlassCard } from '../components/ui/GlassCard';

const changes = [
  {
    version: 'v2.0.0',
    date: '2025-11-22',
    changes: [
      '完全なデザインリニューアル',
      'ハンバーガーメニュー実装',
      '26ページに拡張',
      '大きな実写画像を全面配置',
      'README自動生成ワークフロー改善',
    ],
  },
  {
    version: 'v1.5.0',
    date: '2025-11-20',
    changes: [
      'GitHub Actions統合',
      'Vitest + React Testing Library追加',
      '画像・リンクチェックシステム',
    ],
  },
  {
    version: 'v1.0.0',
    date: '2025-11-15',
    changes: [
      '初回リリース',
      'Next.js 15 + TypeScript',
      '基本的なページ構成',
    ],
  },
];

export default function ChangelogPage() {
  return (
    <>
      <PageHeader
        title="変更履歴"
        description="アップデート情報をご確認ください"
        backgroundImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80"
      />

      <ContentSection>
        <Container size="md">
          <div className="space-y-8">
            {changes.map((entry) => (
              <GlassCard key={entry.version} className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gradient">{entry.version}</h3>
                  <span className="text-dark-400">{entry.date}</span>
                </div>
                <ul className="space-y-2">
                  {entry.changes.map((change, index) => (
                    <li key={index} className="text-dark-200 flex items-start gap-3">
                      <span className="text-primary-400">•</span>
                      {change}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </Container>
      </ContentSection>
    </>
  );
}
