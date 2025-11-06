export const metadata = { 
  title: 'GitHub Docs 完全マニュアル', 
  description: '初心者でも分かるGitHubの使い方を、ECサイト形式で学ぶマニュアルサイト' 
};
import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <header className="site-header">
          <div className="header-container">
            <Link href="/" className="logo">
              <span className="logo-icon">📚</span>
              <span className="logo-text">GitHub Docs</span>
            </Link>
            <nav className="main-nav">
              <Link href="/">ホーム</Link>
              <Link href="/guides/">ガイド</Link>
              <Link href="/sources/">参考資料</Link>
              <Link href="/faq/">FAQ</Link>
            </nav>
          </div>
        </header>
        <main className="main-content">{children}</main>
        <footer className="site-footer">
          <div className="footer-container">
            <p>&copy; 2024 GitHub Docs 完全マニュアル. All rights reserved.</p>
            <p className="footer-note">このサイトはGitHub Pagesでホスティングされています。</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
