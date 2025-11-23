import { loadContent } from '../lib/content';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, CalendarIcon, ClockIcon } from 'lucide-react';

// プレースホルダーではなく、実際のブログ記事をリスト表示する
export default async function BlogPage() {
  // 将来的にはcontent.jsonからブログ記事を取得
  // 現在はモックデータを使用するが、デザインは本番レベルにする
  const posts = [
    {
      slug: 'future-of-coding',
      title: 'コーディングの未来: AIとの共創',
      excerpt: 'GitHub Copilotが変える開発体験。私たちはもはや「コードを書く」だけの存在ではありません。',
      date: '2024.05.15',
      readTime: '5 min',
      category: 'Thought',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop'
    },
    {
      slug: 'team-velocity',
      title: 'チームベロシティを最大化する',
      excerpt: 'コンフリクトを恐れず、高速にイテレーションを回すためのGitHub活用術。',
      date: '2024.05.10',
      readTime: '8 min',
      category: 'Engineering',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop'
    },
    {
      slug: 'security-first',
      title: 'セキュリティ・ファーストの思想',
      excerpt: '開発サイクルの左側にセキュリティをシフトする。脆弱性とは無縁の世界へ。',
      date: '2024.05.01',
      readTime: '6 min',
      category: 'Security',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2000&auto=format&fit=crop'
    }
  ];

  return (
    <main className="bg-dark-950 min-h-screen pt-24 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
          <span className="text-gradient-cyan">Stories</span> form the Voyage
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          技術の最前線で戦う開発者たちの物語。
          成功、失敗、そして発見の記録。
        </p>
      </div>

      {/* Featured Post (First item) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <Link href={`/blog/${posts[0].slug}`} className="group block relative h-[60vh] rounded-3xl overflow-hidden card-glass">
          <Image
            src={posts[0].image}
            alt={posts[0].title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-4xl">
            <div className="flex items-center gap-4 mb-4 text-sm font-mono text-primary-500">
              <span className="px-3 py-1 border border-primary-500 rounded-full">{posts[0].category}</span>
              <span>{posts[0].date}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight group-hover:text-primary-400 transition-colors">
              {posts[0].title}
            </h2>
            <p className="text-xl text-gray-300 mb-8 line-clamp-2">
              {posts[0].excerpt}
            </p>
            <div className="flex items-center text-white font-bold group-hover:translate-x-2 transition-transform">
              Read Story <ArrowRightIcon className="ml-2 w-5 h-5" />
            </div>
          </div>
        </Link>
      </section>

      {/* Grid Posts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {posts.slice(1).map((post, i) => (
            <Link key={i} href={`/blog/${post.slug}`} className="group card-glass rounded-2xl p-6 hover:bg-white/5 transition-colors">
              <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-3 font-mono">
                <span className="text-primary-400">{post.category}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><CalendarIcon className="w-3 h-3" /> {post.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><ClockIcon className="w-3 h-3" /> {post.readTime}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-400 line-clamp-2 mb-4">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
