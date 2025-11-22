'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageHeader } from '../components/ui/PageHeader';
import { ContentSection } from '../components/layouts/ContentSection';
import { Container } from '../components/ui/Container';

const faqs = [
  {
    question: 'GitHubとは何ですか？',
    answer:
      'GitHubは、Gitを使ったバージョン管理とコラボレーションのためのプラットフォームです。コードのホスティング、プロジェクト管理、チーム開発をサポートする多様な機能を提供しています。',
  },
  {
    question: 'GitHubは無料で使えますか？',
    answer:
      'はい、GitHubは無料プランを提供しており、個人開発者や小規模チームには十分な機能が利用できます。プライベートリポジトリも無制限で作成可能です。さらに多くの機能が必要な場合は、有料プランへのアップグレードも可能です。',
  },
  {
    question: 'リポジトリとは何ですか？',
    answer:
      'リポジトリ（Repository）は、プロジェクトのファイルとその変更履歴を保存する場所です。コード、ドキュメント、画像など、プロジェクトに関連するあらゆるファイルを管理できます。',
  },
  {
    question: 'プルリクエストの使い方は？',
    answer:
      'プルリクエスト（Pull Request）は、あなたの変更を他の人にレビューしてもらい、プロジェクトに取り込んでもらうための機能です。変更内容を説明し、レビュアーからフィードバックを受けて改善することができます。',
  },
  {
    question: 'GitとGitHubの違いは？',
    answer:
      'Gitは分散型バージョン管理システム（ソフトウェア）で、GitHubはGitを使ったプロジェクトをホスティングし、コラボレーション機能を提供するWebサービスです。Gitはローカルで動作し、GitHubはクラウド上でプロジェクトを共有・管理します。',
  },
  {
    question: 'GitHub Actionsとは？',
    answer:
      'GitHub Actionsは、CI/CD（継続的インテグレーション/デリバリー）を実現する自動化ツールです。テストの実行、ビルド、デプロイなどを自動化し、開発ワークフローを効率化できます。',
  },
  {
    question: 'オープンソースプロジェクトに貢献するには？',
    answer:
      'まず興味のあるプロジェクトを見つけ、Issuesやドキュメントを確認します。次に、プロジェクトをForkし、変更を加えてプルリクエストを作成します。貢献ガイドライン（CONTRIBUTING.md）がある場合は、それに従いましょう。',
  },
  {
    question: 'GitHub Pagesとは？',
    answer:
      'GitHub Pagesは、GitHubリポジトリから直接静的Webサイトをホスティングできる無料サービスです。プロジェクトのドキュメント、ポートフォリオ、ブログなどを簡単に公開できます。',
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  return (
    <>
      <PageHeader
        title="よくある質問"
        description="GitHubに関する疑問にお答えします"
        backgroundImage="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&q=80"
      />
      
      <ContentSection>
        <Container size="md">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden hover:border-primary-500/30 transition-colors duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-200"
                >
                  <span className="text-xl font-semibold pr-8">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-primary-400 text-2xl flex-shrink-0"
                  >
                    ↓
                  </motion.span>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6 text-dark-300 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </Container>
      </ContentSection>
      
      {/* CTA */}
      <ContentSection
        title="まだ疑問がありますか？"
        subtitle="Need More Help?"
        description="さらに詳しい情報は、学習ガイドと参考資料をご確認ください"
        centered
        className="bg-dark-900/30"
      >
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a href="/guides">
            <button className="btn-primary">
              学習ガイドを見る
            </button>
          </a>
          <a href="/sources">
            <button className="btn-secondary">
              参考資料を見る
            </button>
          </a>
        </div>
      </ContentSection>
    </>
  );
}
