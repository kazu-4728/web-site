import { githubDocs, categories } from './data/github-docs';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">🚀 最新版 v2.0</div>
          <h1 className="hero-title">
            <span className="hero-title-gradient">GitHub Docs</span>
            <br />
            <span className="hero-title-sub">完全マニュアル</span>
          </h1>
          <p className="hero-subtitle">
            初心者でも分かるGitHubの使い方を、モダンなデザインで学ぼう
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">{githubDocs.length}</div>
              <div className="stat-label">トピック</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{categories.length}</div>
              <div className="stat-label">カテゴリ</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">無料</div>
            </div>
          </div>
        </div>
      </section>

      <section className="categories">
        <div className="categories-header">
          <h2 className="section-title">カテゴリ</h2>
          <p className="section-description">学習したいカテゴリを選択</p>
        </div>
        <div className="categories-container">
          {categories.map(category => (
            <div key={category} className="category-tag">
              <span className="category-icon">📚</span>
              <span>{category}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="products">
        <div className="products-header">
          <h2 className="section-title">学習トピック</h2>
          <p className="section-description">GitHubの基礎から応用まで、すべてを網羅</p>
        </div>
        <div className="products-grid">
          {githubDocs.map(topic => (
            <Link key={topic.id} href={`/docs/${topic.id}`} className="product-card">
              <div className="product-header">
                <div className="product-icon-wrapper">
                  <div className="product-icon">{topic.icon}</div>
                  <div className="product-icon-glow"></div>
                </div>
                <div className="product-badges">
                  <span className={`product-badge product-badge-${topic.level}`}>
                    {topic.level}
                  </span>
                  <span className="product-category">{topic.category}</span>
                </div>
              </div>
              <div className="product-content">
                <h2 className="product-title">{topic.title}</h2>
                <p className="product-description">{topic.description}</p>
                <div className="product-meta">
                  <div className="product-sections-count">
                    <span className="meta-icon">📖</span>
                    <span>{topic.content.sections.length} セクション</span>
                  </div>
                  {topic.content.tips && (
                    <div className="product-tips-count">
                      <span className="meta-icon">💡</span>
                      <span>{topic.content.tips.length} ヒント</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="product-footer">
                <span className="product-price">
                  {topic.price === 0 ? (
                    <>
                      <span className="price-free">無料</span>
                      <span className="price-badge">FREE</span>
                    </>
                  ) : (
                    `¥${topic.price.toLocaleString()}`
                  )}
                </span>
                <span className="product-link">
                  詳細を見る
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
              <div className="product-hover-effect"></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">今すぐ始めよう</h2>
          <p className="cta-description">
            GitHubの基礎から応用まで、ステップバイステップで学習できます
          </p>
          <Link href="/docs/getting-started" className="cta-button">
            最初のトピックを始める
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
