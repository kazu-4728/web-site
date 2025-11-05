export const metadata = { title: 'Manual Simplifier', description: 'UI Phase1' };
import './globals.css';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="ja"><body><header><nav>
    <a href="/">Home</a> | <a href="/sources/">Sources</a> | <a href="/guides/">Guides</a> | <a href="/guides/sample/">Sample</a> | <a href="/faq/">FAQ</a>
  </nav></header><main>{children}</main><footer>©</footer></body></html>);
}
