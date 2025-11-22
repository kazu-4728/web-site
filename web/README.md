# 🚀 Professional Website Template

**参考サイトレベルのWebデザイン**を実現する、Next.js + Tailwind CSS のプロフェッショナルテンプレート

## ✨ 主な特徴

### 🎨 最新のデザインシステム
- **Tailwind CSS 4.0** - 最新のCSS設計
- **Framer Motion** - 滑らかなアニメーション
- **Glassmorphism** - モダンなガラス効果
- **グラデーション & グロー効果** - 視覚的インパクト

### 🏗️ コンポーネントライブラリ
```
components/
├── ui/              # 基本UIコンポーネント
│   ├── Button.tsx
│   ├── Container.tsx
│   ├── GlassCard.tsx
│   ├── PageHeader.tsx
│   ├── Grid.tsx
│   └── Badge.tsx
├── layouts/         # レイアウトコンポーネント
│   ├── HeroSection.tsx
│   └── ContentSection.tsx
└── cards/           # カードコンポーネント
    ├── FeatureCard.tsx
    ├── ContentCard.tsx
    ├── StatCard.tsx
    └── TestimonialCard.tsx
```

### 📄 ページテンプレート
- **ランディングページ** - フルスクリーンヒーロー + 機能紹介
- **ドキュメントページ** - サイドバー付き学習コンテンツ
- **ブログページ** - グリッドレイアウト
- **FAQページ** - アニメーション付きアコーディオン

### 🔧 開発ツール
```bash
# ページ自動生成
npm run generate:page [template] [slug] [title]

# 品質チェック
npm run check          # すべてのチェック実行
npm run check:images   # 画像の存在確認
npm run check:links    # リンクの有効性確認

# テスト
npm test              # ユニットテスト実行
npm run test:watch    # ウォッチモード
```

## 🚀 クイックスタート

### 1. インストール
```bash
cd web
npm install
```

### 2. 開発サーバー起動
```bash
npm run dev
```

### 3. ページ生成
```bash
# 新しいドキュメントページを作成
npm run generate:page docs my-new-page "My New Page"

# ランディングページを作成
npm run generate:page landing about "About Us"

# ブログページを作成
npm run generate:page blog news "Latest News"
```

### 4. ビルド & デプロイ
```bash
npm run build
```

## 🎨 デザインシステム

### カラーパレット
```css
/* Primary Colors */
--color-primary-500: #ff8a3d
--color-primary-600: #ff6b35

/* Dark Theme */
--color-dark-950: #020617
--color-dark-900: #0f172a
--color-dark-800: #1e293b
```

### デザイントークン
```typescript
import { designTokens } from '@/app/lib/design-tokens';

// スペーシング
designTokens.spacing.section.md  // py-16 md:py-24

// タイポグラフィ
designTokens.typography.h1        // text-5xl md:text-6xl lg:text-7xl

// カード
designTokens.card.base            // グラスカード基本スタイル
designTokens.card.hover           // ホバーエフェクト
```

## 📂 プロジェクト構造

```
web/
├── app/
│   ├── components/       # コンポーネント
│   │   ├── ui/          # 基本UI
│   │   ├── layouts/     # レイアウト
│   │   └── cards/       # カード
│   ├── lib/             # ユーティリティ
│   │   ├── utils.ts
│   │   ├── images.ts
│   │   └── design-tokens.ts
│   ├── templates/       # ページテンプレート
│   ├── data/            # コンテンツデータ
│   └── globals.css      # グローバルスタイル
├── scripts/             # 自動化スクリプト
│   ├── generate-page.js
│   ├── check-images.js
│   └── check-links.js
└── tests/               # テスト
```

## 🛠️ 技術スタック

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS 4.0
- **Animation**: Framer Motion
- **Testing**: Vitest + React Testing Library
- **TypeScript**: 完全な型安全性

## 📝 カスタマイズ

### テーマ変更
1. `app/globals.css` の `@theme` セクションを編集
2. カラー、フォント、アニメーションをカスタマイズ

### コンポーネント追加
```typescript
// 新しいUIコンポーネント
import { cn } from '@/app/lib/utils';

export function MyComponent({ className }: { className?: string }) {
  return (
    <div className={cn('base-classes', className)}>
      {/* コンテンツ */}
    </div>
  );
}
```

### ページテンプレート追加
1. `app/templates/page-templates.tsx` に定義を追加
2. `scripts/generate-page.js` にテンプレートコードを追加

## ✅ 品質保証

### チェック項目
- ✅ すべての画像が存在
- ✅ すべてのリンクが有効
- ✅ TypeScript型チェック
- ✅ ユニットテスト合格
- ✅ ビルド成功

### CI/CD
GitHub Actionsで自動デプロイ:
- `pages.yml` - GitHub Pagesへのデプロイ
- `build-artifact.yml` - ビルド成果物の生成

## 📄 ライセンス

MIT License - 自由に使用・改変できます

## 🤝 コントリビューション

Issue・PRを歓迎します！

---

**Built with ❤️ using Next.js + Tailwind CSS**
