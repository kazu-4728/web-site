'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/Section';

const faqs = [
  {
    question: 'GitHubは無料で使えますか？',
    answer: 'はい、GitHubは無料で使えます。PublicリポジトリもPrivateリポジトリも無料プランで無制限に作成できます。チーム機能や高度な機能を使う場合は有料プランが必要です。'
  },
  {
    question: 'GitとGitHubの違いは何ですか？',
    answer: 'Gitはバージョン管理システム（ツール）で、GitHubはGitを使ったWebサービス（プラットフォーム）です。Gitはローカルでコードの履歴を管理し、GitHubはそのコードをクラウド上で共有・協働するためのサービスです。'
  },
  {
    question: '初心者でも使えますか？',
    answer: 'はい、初心者でも使えます。このサイトでは、GitHubの基本的な使い方から順を追って説明しています。まずは「GitHub入門 - 初心者ガイド」から始めることをおすすめします。'
  },
  {
    question: 'コミットとプッシュの違いは何ですか？',
    answer: 'コミット（commit）は、変更をローカルのリポジトリに記録することです。プッシュ（push）は、ローカルのコミットをリモート（GitHub）に送信することです。コミットだけではローカルにしか保存されず、プッシュすることでGitHubに反映されます。'
  },
  {
    question: 'Pull Requestとは何ですか？',
    answer: 'Pull Request（PR）は、コードの変更を提案し、レビューを受けてからマージするための機能です。チーム開発では、直接mainブランチに変更を加えるのではなく、PRを作成してレビューを受けてからマージするのが一般的です。'
  },
  {
    question: 'フォークとクローンの違いは何ですか？',
    answer: 'クローン（clone）は、リポジトリを自分のPCにコピーすることです。フォーク（fork）は、他人のリポジトリを自分のGitHubアカウントにコピーすることです。フォークは元のリポジトリとは独立して開発を進めることができ、後でPRを作成して変更を提案できます。'
  },
  {
    question: 'GitHub Pagesとは何ですか？',
    answer: 'GitHub Pagesは、GitHubリポジトリから直接Webサイトをホスティングできる無料のサービスです。HTML、CSS、JavaScriptなどの静的ファイルをホスティングできます。このサイトもGitHub Pagesでホスティングされています。'
  },
  {
    question: 'コンフリクト（競合）とは何ですか？',
    answer: 'コンフリクトは、複数のブランチで同じファイルの同じ部分を異なる方法で変更した場合に発生します。Gitは自動的に解決できないため、手動で解決する必要があります。エディタでコンフリクトマーカーを見つけて、どちらの変更を採用するか決めます。'
  }
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="faq-item-modern"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <button
        className="faq-question-modern"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{faq.question}</span>
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="faq-answer-modern"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Page() {
  return (
    <div className="faq-page-modern">
      <Section
        title="よくある質問"
        subtitle="GitHubに関するよくある質問と回答"
        spacing="large"
      >
        <div className="faq-list-modern">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </Section>
    </div>
  );
}
