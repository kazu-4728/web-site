import { githubDocs, categories } from './data/github-docs';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">GitHub Docs 完全マニュアル</h1>
          <p className="hero-subtitle">初心者でも分かるGitHubの使い方を、ECサイト形式で学ぼう</p>
        </div>
      </section>

      <section className="categories">
        <div className="categories-container">
          {categories.map(category => (
            <div key={category} className="category-tag">{category}</div>
          ))}
        </div>
      </section>

      <section className="products">
        <div className="products-grid">
          {githubDocs.map(topic => (
            <Link key={topic.id} href={`/docs/${topic.id}`} className="product-card">
              <div className="product-icon">{topic.icon}</div>
              <div className="product-badge">{topic.level}</div>
              <div className="product-category">{topic.category}</div>
              <h2 className="product-title">{topic.title}</h2>
              <p className="product-description">{topic.description}</p>
              <div className="product-footer">
                <span className="product-price">{topic.price === 0 ? '無料' : `¥${topic.price.toLocaleString()}`}</span>
                <span className="product-link">詳細を見る →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
