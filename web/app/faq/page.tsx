export default function Page() {
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

  return (
    <div className="faq-page">
      <div className="faq-container">
        <h1 className="page-title">よくある質問（FAQ）</h1>
        <p className="page-description">GitHubに関するよくある質問と回答</p>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={index} className="faq-item">
              <summary className="faq-question">{faq.question}</summary>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
