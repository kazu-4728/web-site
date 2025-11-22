import { PageHeader } from '../components/ui/PageHeader';
import { ContentSection } from '../components/layouts/ContentSection';
import { Container } from '../components/ui/Container';
import { GlassCard } from '../components/ui/GlassCard';

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="プライバシーポリシー"
        description="個人情報の取り扱いについて"
        backgroundImage="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1920&q=80"
      />

      <ContentSection>
        <Container size="md">
          <GlassCard className="p-12">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-6">プライバシーポリシー</h2>
              
              <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">1. 収集する情報</h3>
                <p className="text-dark-200 leading-relaxed">
                  当サイトでは、以下の情報を収集する場合があります：
                </p>
                <ul className="list-disc list-inside text-dark-200 space-y-2 mt-4">
                  <li>アクセスログ（IPアドレス、ブラウザ情報）</li>
                  <li>お問い合わせフォームからの情報</li>
                  <li>GitHub経由の認証情報（該当する場合）</li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">2. 情報の利用目的</h3>
                <p className="text-dark-200 leading-relaxed">
                  収集した情報は以下の目的で利用します：
                </p>
                <ul className="list-disc list-inside text-dark-200 space-y-2 mt-4">
                  <li>サービスの提供と改善</li>
                  <li>お問い合わせへの対応</li>
                  <li>統計分析</li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">3. 情報の共有</h3>
                <p className="text-dark-200 leading-relaxed">
                  当サイトは、利用者の個人情報を第三者に販売、貸与、または共有することはありません。
                  ただし、法律で義務付けられている場合を除きます。
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">4. Cookie</h3>
                <p className="text-dark-200 leading-relaxed">
                  当サイトでは、ユーザー体験の向上のためにCookieを使用する場合があります。
                  ブラウザの設定でCookieを無効にすることも可能です。
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">5. お問い合わせ</h3>
                <p className="text-dark-200 leading-relaxed">
                  プライバシーポリシーに関するご質問は、GitHub Issuesまでお問い合わせください。
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
