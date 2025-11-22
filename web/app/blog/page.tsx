import { PageHeader } from '../components/ui/PageHeader';
import { ContentSection } from '../components/layouts/ContentSection';
import { Grid } from '../components/ui/Grid';
import { ContentCard } from '../components/cards/ContentCard';
import { BookIcon } from '../components/icons';

const posts = [
  {
    id: '1',
    title: 'Next.js 15の新機能',
    description: '最新版で追加された機能とパフォーマンス改善について解説します。',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    date: '2025-11-20',
    category: '技術',
  },
  {
    id: '2',
    title: 'GitHub Actionsベストプラクティス',
    description: 'CI/CDパイプラインを効率的に構築するためのTipsを紹介。',
    image: 'https://images.unsplash.com/photo-1551288049-1640f4a66fea?w=800&q=80',
    date: '2025-11-18',
    category: 'DevOps',
  },
  {
    id: '3',
    title: 'モダンWebデザイントレンド2025',
    description: '2025年のWebデザインのトレンドを徹底解説。',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    date: '2025-11-15',
    category: 'デザイン',
  },
  {
    id: '4',
    title: 'Gitワークフロー完全ガイド',
    description: 'チーム開発で使えるGitワークフローの選び方。',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&q=80',
    date: '2025-11-12',
    category: 'Git',
  },
  {
    id: '5',
    title: 'TypeScriptの型安全性を極める',
    description: '高度な型システムの活用法を学びます。',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
    date: '2025-11-10',
    category: 'TypeScript',
  },
  {
    id: '6',
    title: 'セキュアなWebアプリケーション開発',
    description: 'セキュリティのベストプラクティスを実践。',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80',
    date: '2025-11-08',
    category: 'セキュリティ',
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="ブログ"
        description="最新の技術情報とチームの活動をお届けします"
        backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&q=80"
      />

      <ContentSection>
        <Grid cols={3}>
          {posts.map((post) => (
            <ContentCard
              key={post.id}
              title={post.title}
              description={post.description}
              image={post.image}
              href={`/blog/${post.id}`}
              badge={post.category}
              meta={[
                { icon: <BookIcon className="w-4 h-4" />, text: post.date },
              ]}
            />
          ))}
        </Grid>
      </ContentSection>
    </>
  );
}
