import { githubDocs } from '../data/github-docs';

export default function Page() {
  return (
    <div className="sources-page">
      <div className="sources-container">
        <h1 className="page-title">参考資料</h1>
        <p className="page-description">GitHub Docsの公式リソースと参考資料</p>
        
        <section className="sources-section">
          <h2>公式ドキュメント</h2>
          <ul className="sources-list">
            <li>
              <a href="https://docs.github.com/ja" target="_blank" rel="noopener noreferrer">
                GitHub Docs（日本語）
              </a>
              <p>GitHubの公式ドキュメント（日本語版）</p>
            </li>
            <li>
              <a href="https://docs.github.com" target="_blank" rel="noopener noreferrer">
                GitHub Docs（英語）
              </a>
              <p>GitHubの公式ドキュメント（英語版）</p>
            </li>
            <li>
              <a href="https://git-scm.com/doc" target="_blank" rel="noopener noreferrer">
                Git公式ドキュメント
              </a>
              <p>Gitの公式ドキュメント</p>
            </li>
          </ul>
        </section>

        <section className="sources-section">
          <h2>学習リソース</h2>
          <ul className="sources-list">
            <li>
              <a href="https://github.com/skills" target="_blank" rel="noopener noreferrer">
                GitHub Skills
              </a>
              <p>GitHubの使い方をインタラクティブに学べる公式コース</p>
            </li>
            <li>
              <a href="https://learngitbranching.js.org/?locale=ja" target="_blank" rel="noopener noreferrer">
                Learn Git Branching
              </a>
              <p>Gitのブランチ操作を視覚的に学べるツール</p>
            </li>
          </ul>
        </section>

        <section className="sources-section">
          <h2>このサイトで扱っているトピック</h2>
          <ul className="topics-list">
            {githubDocs.map(topic => (
              <li key={topic.id}>
                <span className="topic-icon">{topic.icon}</span>
                <div>
                  <strong>{topic.title}</strong>
                  <p>{topic.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
