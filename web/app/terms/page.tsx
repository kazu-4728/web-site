import { PageHeader } from '../components/ui/PageHeader';
import { ContentSection } from '../components/layouts/ContentSection';
import { Container } from '../components/ui/Container';
import { GlassCard } from '../components/ui/GlassCard';

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title="利用規約"
        description="サービス利用に関する規約"
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80"
      />

      <ContentSection>
        <Container size="md">
          <GlassCard className="p-12">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-6">利用規約</h2>
              
              <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">1. サービスについて</h3>
                <p className="text-dark-200 leading-relaxed">
                  本サイトは、GitHubの使い方を学ぶための教育コンテンツを提供します。
                  すべてのコンテンツは無料で利用できます。
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">2. 利用条件</h3>
                <p className="text-dark-200 leading-relaxed mb-4">
                  本サイトを利用する際は、以下の条件に同意したものとみなします：
                </p>
                <ul className="list-disc list-inside text-dark-200 space-y-2">
                  <li>コンテンツを商用目的で無断使用しないこと</li>
                  <li>他のユーザーや第三者に迷惑をかけないこと</li>
                  <li>適用される法律を遵守すること</li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">3. 著作権</h3>
                <p className="text-dark-200 leading-relaxed">
                  本サイトのコンテンツは、MITライセンスの下で提供されています。
                  適切なクレジット表示を行うことで、自由に利用・改変・再配布が可能です。
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">4. 免責事項</h3>
                <p className="text-dark-200 leading-relaxed">
                  当サイトは、コンテンツの正確性や完全性を保証するものではありません。
                  コンテンツの利用により生じた損害について、当サイトは一切の責任を負いません。
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">5. 規約の変更</h3>
                <p className="text-dark-200 leading-relaxed">
                  当サイトは、予告なく本規約を変更することがあります。
                  変更後に本サイトを利用した場合、新しい規約に同意したものとみなします。
                </p>
              </section>

              <p className="text-dark-400 text-sm mt-8">
                最終更新日: 2025年11月22日
              </p>
            </div>
          </GlassCard>
        </Container>
      </ContentSection>
    </>
  );
}
