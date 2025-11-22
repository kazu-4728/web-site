import { githubDocs } from '../data/github-docs';
import { PageHeader } from '../components/ui/PageHeader';
import { ContentSection } from '../components/layouts/ContentSection';
import { Grid } from '../components/ui/Grid';
import { GlassCard } from '../components/ui/GlassCard';
import { BookIcon, CodeIcon, GitBranchIcon, ExternalLinkIcon } from '../components/icons';

const resources = [
  {
    icon: <BookIcon className="w-8 h-8" />,
    title: 'GitHub公式ドキュメント',
    description: 'GitHubの公式ドキュメント。最新の機能とAPIリファレンスを確認できます。',
    url: 'https://docs.github.com',
  },
  {
    icon: <CodeIcon className="w-8 h-8" />,
    title: 'GitHub Blog',
    description: '新機能のアナウンスやベストプラクティス、開発者ストーリーを掲載。',
    url: 'https://github.blog',
  },
  {
    icon: <GitBranchIcon className="w-8 h-8" />,
    title: 'GitHub Skills',
    description: 'インタラクティブな学習コース。実際に手を動かして学べます。',
    url: 'https://skills.github.com',
  },
];

export default function SourcesPage() {
  return (
    <>
      <PageHeader
        title="参考資料"
        description="GitHubをさらに深く学ぶための、厳選されたリソースとリンク集"
        backgroundImage="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=1920&q=80"
      />
      
      {/* External Resources */}
      <ContentSection
        title="外部リソース"
        subtitle="External Resources"
        description="公式ドキュメントやコミュニティリソースへのリンク"
        centered
      >
        <Grid cols={3}>
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <GlassCard glow>
                <div className="mb-4 inline-flex p-4 rounded-xl bg-primary-500/20 text-primary-400">
                  {resource.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                  {resource.title}
                  <ExternalLinkIcon className="w-5 h-5 text-primary-400" />
                </h3>
                <p className="text-dark-300 leading-relaxed">
                  {resource.description}
                </p>
              </GlassCard>
            </a>
          ))}
        </Grid>
      </ContentSection>
      
      {/* Internal Topics Grid */}
      <ContentSection
        title="すべてのトピック"
        subtitle="All Topics"
        description="このサイトで学べるすべてのGitHubトピック一覧"
        centered
        className="bg-dark-900/30"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {githubDocs.map((topic) => (
            <a
              key={topic.id}
              href={`/docs/${topic.id}`}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-primary-500/30 hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <BookIcon className="w-5 h-5 text-primary-400" />
                <span className="text-sm font-medium group-hover:text-primary-400 transition-colors">
                  {topic.title}
                </span>
              </div>
            </a>
          ))}
        </div>
      </ContentSection>
    </>
  );
}
