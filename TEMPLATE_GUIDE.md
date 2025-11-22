# 📚 GitHub Docs テンプレート使用ガイド

このテンプレートは、美しいドキュメントサイトを簡単に作成できるように設計されています。

## 🎨 テンプレート特徴

### デザインシステム
- **Tailwind CSS 4.0** - CSS変数ベースのテーマシステム
- **Framer Motion** - スムーズなアニメーション
- **レスポンシブデザイン** - モバイル/タブレット/デスクトップ対応
- **ダークテーマ** - 目に優しい配色

### コンポーネントライブラリ

#### UI Components (`/web/app/components/ui/`)
- `Button.tsx` - バリアント対応ボタン
- `Container.tsx` - レイアウトコンテナ
- `GlassCard.tsx` - グラスモーフィズムカード
- `PageHeader.tsx` - ページヘッダー
- `Grid.tsx` - レスポンシブグリッド
- `Badge.tsx` - バッジ

#### Layout Components (`/web/app/components/layouts/`)
- `HeroSection.tsx` - ヒーローセクション
- `ContentSection.tsx` - コンテンツセクション

#### Card Components (`/web/app/components/cards/`)
- `FeatureCard.tsx` - 機能カード
- `ContentCard.tsx` - コンテンツカード
- `StatCard.tsx` - 統計カード
- `TestimonialCard.tsx` - お客様の声カード

#### Stripe Components (`/web/app/components/stripe/`)
- `AnimatedBackground.tsx` - パーティクルアニメーション背景
- `InteractiveCard.tsx` - 3D視差効果カード
- `StatCounter.tsx` - アニメーションカウンター

#### Navigation
- `Header.tsx` - ハンバーガーメニュー付きヘッダー

## 🚀 クイックスタート

### 1. 新しいページの作成

```bash
# ページ生成スクリプトを使用
cd web
npm run generate:page docs your-topic "トピック名"
```

または手動で作成：

```typescript
// web/app/your-page/page.tsx
import { PageHeader } from '../components/ui/PageHeader';
import { ContentSection } from '../components/layouts/ContentSection';

export default function YourPage() {
  return (
    <>
      <PageHeader
        title="ページタイトル"
        description="ページ説明"
        backgroundImage="https://images.unsplash.com/..."
      />
      <ContentSection>
        {/* コンテンツ */}
      </ContentSection>
    </>
  );
}
```

### 2. ナビゲーションへの追加

```typescript
// web/app/components/navigation/Header.tsx
const navigation = [
  { name: '新しいページ', href: '/your-page' },
  // または submenu に追加
];
```

### 3. 画像の使用

```typescript
// web/app/lib/images.ts で管理
export const IMAGES = {
  your_category: {
    key: 'https://images.unsplash.com/...',
  },
};

// コンポーネントで使用
import { getImage } from '../lib/images';
const imageUrl = getImage('your_category', 'key');
```

## 🎨 テーマのカスタマイズ

### CSS変数の変更

```css
/* web/app/globals.css */
@theme {
  --color-primary-500: #your-color;
  --font-heading: 'Your Font', sans-serif;
}
```

### カラーパレット

```typescript
// 現在のパレット
primary: #ff8a3d (オレンジ)
dark: #020617 〜 #f8fafc (グレースケール)

// カスタマイズ例
--color-primary-500: #3b82f6; // Blue
--color-primary-500: #8b5cf6; // Purple
--color-primary-500: #10b981; // Green
```

## 📁 プロジェクト構造

```
web/
├── app/
│   ├── components/
│   │   ├── ui/              # UI基本コンポーネント
│   │   ├── layouts/         # レイアウトコンポーネント
│   │   ├── cards/           # カードコンポーネント
│   │   ├── stripe/          # Stripe風コンポーネント
│   │   ├── navigation/      # ナビゲーション
│   │   └── icons/           # SVGアイコン
│   ├── lib/
│   │   ├── utils.ts         # ユーティリティ関数
│   │   ├── images.ts        # 画像管理
│   │   └── design-tokens.ts # デザイントークン
│   ├── data/                # コンテンツデータ
│   └── [page]/page.tsx      # 各ページ
├── scripts/
│   ├── check-images.js      # 画像チェック
│   ├── check-links.js       # リンクチェック
│   ├── generate-page.js     # ページ生成
│   └── generate-readme.js   # README生成
├── tests/                   # テスト
└── public/                  # 静的ファイル
```

## 🧪 品質チェック

### すべてのチェック実行

```bash
npm run check
```

### 個別チェック

```bash
npm run check:images  # 画像の存在確認
npm run check:links   # リンク切れチェック
npm test             # テスト実行
```

## 🔧 利用可能なスクリプト

```json
{
  "dev": "開発サーバー起動",
  "build": "本番ビルド",
  "test": "テスト実行",
  "test:watch": "テストウォッチモード",
  "check": "すべてのチェック",
  "check:images": "画像チェック",
  "check:links": "リンクチェック",
  "generate:page": "ページ生成"
}
```

## 📦 必須依存関係

### フロントエンド
- `next@15.5.6` - Reactフレームワーク
- `react@18.3.1` - UIライブラリ
- `typescript@5.7.2` - 型安全性
- `framer-motion@12.0.0-alpha.1` - アニメーション
- `tailwindcss@4.1.0-alpha.42` - CSSフレームワーク

### UI/UX
- `@radix-ui/react-*` - アクセシブルなUI要素
- `class-variance-authority` - バリアント管理
- `clsx` - クラス名結合

### ツール
- `vitest@4.0.9` - テストランナー
- `@testing-library/react` - Reactテスト
- `postcss` - CSS処理

## 🎯 ベストプラクティス

### 1. コンポーネント設計
- 単一責任の原則
- 再利用可能な小さなコンポーネント
- TypeScriptで型定義

### 2. パフォーマンス
- 画像は`next/image`を使用
- `priority`属性でLCP改善
- 適切なコード分割

### 3. アクセシビリティ
- 適切なARIA属性
- キーボードナビゲーション
- コントラスト比の確保

### 4. SEO
- 適切なメタデータ
- セマンティックHTML
- 構造化データ（必要に応じて）

## 🚀 デプロイ

### GitHub Pages (自動)
1. `main`ブランチにプッシュ
2. GitHub Actionsが自動実行
3. デプロイ完了を確認

### カスタムドメイン
1. `web/public/CNAME` を作成
2. ドメインを記載
3. DNS設定を更新

## 🤝 貢献ガイド

### ブランチ戦略
```bash
main          # 本番環境
feature/*     # 新機能
fix/*         # バグ修正
docs/*        # ドキュメント
```

### コミットメッセージ
```
feat: 新機能追加
fix: バグ修正
docs: ドキュメント更新
style: コードスタイル変更
refactor: リファクタリング
test: テスト追加・修正
chore: ビルドプロセスなど
```

## 📚 参考資料

### 公式ドキュメント
- [Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Vitest](https://vitest.dev/)

### デザインインスピレーション
- [webdesignclip.com](https://webdesignclip.com/)
- [Stripe.com](https://stripe.com/)
- [Vercel.com](https://vercel.com/)

## 🆘 トラブルシューティング

### ビルドエラー
```bash
# キャッシュクリア
rm -rf .next node_modules
npm install
npm run build
```

### テストエラー
```bash
# 詳細表示
npm test -- --reporter=verbose
```

### 画像が表示されない
- Unsplash URLが有効か確認
- `next.config.mjs`の`remotePatterns`を確認

## 📞 サポート

- GitHub Issues: バグ報告・機能要望
- GitHub Discussions: 質問・議論
- Pull Requests: コード貢献

---

**Happy Coding! 🎉**
