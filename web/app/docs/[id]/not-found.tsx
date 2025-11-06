import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>トピックが見つかりません</h2>
        <p>お探しのGitHub Docsトピックは存在しません。</p>
        <Link href="/" className="home-link">トップページに戻る</Link>
      </div>
    </div>
  );
}
