import { PageHeader } from '../components/ui/PageHeader';
import { ContentSection } from '../components/layouts/ContentSection';
import { Container } from '../components/ui/Container';
import { GlassCard } from '../components/ui/GlassCard';
import { CheckCircleIcon, ZapIcon, RocketIcon } from '../components/icons';

const roadmapItems = [
  {
    quarter: 'Q4 2025',
    status: 'completed',
    items: [
      'デザインシステム完全リニューアル',
      'ナビゲーションメニュー実装',
      'すべてのページにコンテンツ配置',
    ],
  },
  {
    quarter: 'Q1 2026',
    status: 'in-progress',
    items: [
      'ダークモード/ライトモード切り替え',
      '多言語対応（英語、日本語）',
      '検索機能の追加',
    ],
  },
  {
    quarter: 'Q2 2026',
    status: 'planned',
    items: [
      'ユーザー認証機能',
      'お気に入り機能',
      'コメントシステム',
    ],
  },
  {
    quarter: 'Q3 2026',
    status: 'planned',
    items: [
      'インタラクティブなコード実行環境',
      'AIアシスタント統合',
      'ビデオチュートリアル',
    ],
  },
];

const statusConfig = {
  completed: { icon: <CheckCircleIcon className="w-6 h-6" />, label: '完了', color: 'text-green-400' },
  'in-progress': { icon: <ZapIcon className="w-6 h-6" />, label: '進行中', color: 'text-primary-400' },
  planned: { icon: <RocketIcon className="w-6 h-6" />, label: '計画中', color: 'text-dark-400' },
};

export default function RoadmapPage() {
  return (
    <>
      <PageHeader
        title="ロードマップ"
        description="今後の開発計画をご覧ください"
        backgroundImage="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80"
      />

      <ContentSection>
        <Container size="md">
          <div className="space-y-6">
            {roadmapItems.map((item) => {
              const status = statusConfig[item.status as keyof typeof statusConfig];
              return (
                <GlassCard key={item.quarter} className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={status.color}>
                      {status.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{item.quarter}</h3>
                      <p className={`text-sm ${status.color}`}>{status.label}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {item.items.map((task, index) => (
                      <li key={index} className="flex items-start gap-3 text-dark-200">
                        <span className="text-primary-400 mt-1">•</span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              );
            })}
          </div>
        </Container>
      </ContentSection>
    </>
  );
}
