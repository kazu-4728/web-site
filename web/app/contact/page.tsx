import { PageHeader } from '../components/ui/PageHeader';
import { ContentSection } from '../components/layouts/ContentSection';
import { Container } from '../components/ui/Container';
import { GlassCard } from '../components/ui/GlassCard';

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="お問い合わせ"
        description="ご質問、ご提案、フィードバックをお待ちしております"
        backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&q=80"
      />

      <ContentSection>
        <Container size="md">
          <GlassCard className="p-12">
            <h2 className="text-3xl font-bold mb-8">お気軽にお問い合わせください</h2>
            
            <div className="space-y-6 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-2">GitHub Issues</h3>
                <p className="text-dark-300">
                  バグ報告や機能要望は、GitHubのIssuesでお知らせください。
                </p>
                <a
                  href="https://github.com/kazu-4728/web-site/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 transition-colors"
                >
                  Issuesを開く →
                </a>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Pull Requests</h3>
                <p className="text-dark-300">
                  コンテンツの改善や新しいトピックの追加など、Pull Requestも大歓迎です。
                </p>
                <a
                  href="https://github.com/kazu-4728/web-site/pulls"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 transition-colors"
                >
                  Pull Requestsを開く →
                </a>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Discussions</h3>
                <p className="text-dark-300">
                  質問や議論は、GitHub Discussionsをご利用ください。
                </p>
                <a
                  href="https://github.com/kazu-4728/web-site/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 transition-colors"
                >
                  Discussionsを開く →
                </a>
              </div>
            </div>

            <div className="bg-primary-500/10 border border-primary-500/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">貢献について</h3>
              <p className="text-dark-300">
                このプロジェクトはオープンソースです。どなたでも貢献できます。
                詳しくは、リポジトリのCONTRIBUTING.mdをご確認ください。
              </p>
            </div>
          </GlassCard>
        </Container>
      </ContentSection>
    </>
  );
}
