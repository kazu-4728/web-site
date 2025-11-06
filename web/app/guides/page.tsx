import Link from 'next/link';
import { githubDocs } from '../data/github-docs';

export default function Page() {
  return (
    <div className="guides-page">
      <div className="guides-container">
        <h1 className="page-title">ガイド一覧</h1>
        <p className="page-description">GitHub Docsの全トピックを学習できます</p>
        
        <div className="guides-grid">
          {githubDocs.map(topic => (
            <Link key={topic.id} href={`/docs/${topic.id}`} className="guide-card">
              <div className="guide-icon">{topic.icon}</div>
              <div className="guide-meta">
                <span className="guide-category">{topic.category}</span>
                <span className={`guide-level guide-level-${topic.level}`}>{topic.level}</span>
              </div>
              <h2 className="guide-title">{topic.title}</h2>
              <p className="guide-description">{topic.description}</p>
              <span className="guide-link">詳細を見る →</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
