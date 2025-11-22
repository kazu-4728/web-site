'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { RocketIcon } from '../icons';

const navigation = [
  { name: 'ホーム', href: '/' },
  { 
    name: 'ドキュメント', 
    href: '/docs/getting-started',
    submenu: [
      { name: '入門ガイド', href: '/docs/getting-started' },
      { name: 'リポジトリ管理', href: '/docs/repository-management' },
      { name: 'Git基礎', href: '/docs/git-basics' },
      { name: 'Pull Request', href: '/docs/pull-requests' },
      { name: 'Issues', href: '/docs/issues' },
      { name: 'GitHub Actions', href: '/docs/github-actions' },
    ]
  },
  { name: 'ガイド', href: '/guides' },
  { name: 'チュートリアル', href: '/tutorials' },
  { name: '機能', href: '/features' },
  { 
    name: '会社情報',
    submenu: [
      { name: '私たちについて', href: '/about' },
      { name: 'チーム', href: '/team' },
      { name: 'お問い合わせ', href: '/contact' },
      { name: 'ブログ', href: '/blog' },
    ]
  },
  { 
    name: 'その他',
    submenu: [
      { name: 'FAQ', href: '/faq' },
      { name: '参考資料', href: '/sources' },
      { name: '価格', href: '/pricing' },
      { name: 'セキュリティ', href: '/security' },
      { name: 'ロードマップ', href: '/roadmap' },
      { name: '変更履歴', href: '/changelog' },
      { name: 'プライバシー', href: '/privacy' },
      { name: '利用規約', href: '/terms' },
    ]
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-950/90 backdrop-blur-xl border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <RocketIcon className="w-6 h-6 text-primary-500 group-hover:scale-110 transition-transform" />
            <span className="text-xl font-bold text-gradient">GitHub Docs</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <>
                    <button className="text-dark-300 hover:text-white transition-colors py-2">
                      {item.name} ▾
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-dark-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-2">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block px-4 py-2 rounded-lg text-dark-300 hover:text-white hover:bg-white/5 transition-all"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-dark-300 hover:text-white transition-colors relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300" />
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            aria-label="メニュー"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-white origin-left"
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-white"
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-white origin-left"
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark-900/95 backdrop-blur-xl border-t border-white/10 max-h-[80vh] overflow-y-auto"
          >
            <div className="px-4 py-6 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => setOpenSubmenu(openSubmenu === item.name ? null : item.name)}
                        className="w-full text-left px-4 py-3 rounded-lg text-dark-200 hover:text-white hover:bg-white/5 transition-all flex items-center justify-between"
                      >
                        {item.name}
                        <span className={`transition-transform ${openSubmenu === item.name ? 'rotate-180' : ''}`}>▾</span>
                      </button>
                      <AnimatePresence>
                        {openSubmenu === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="pl-4 space-y-1 overflow-hidden"
                          >
                            {item.submenu.map((subitem) => (
                              <Link
                                key={subitem.name}
                                href={subitem.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block px-4 py-2 rounded-lg text-dark-300 hover:text-white hover:bg-white/5 transition-all"
                              >
                                {subitem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 rounded-lg text-dark-200 hover:text-white hover:bg-white/5 transition-all"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
