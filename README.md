# 🚀 GitHub Docs 完全マニュアル

[![Deploy to GitHub Pages](https://github.com/your-username/web-site/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)](https://github.com/your-username/web-site/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Topics](https://img.shields.io/badge/Topics-22-blue)
![Categories](https://img.shields.io/badge/Categories-5-green)

> **Stripeレベルのデザイン** - Next.js 15 + TypeScript + Framer Motion + Tailwind CSS 4.0

## 🌐 ライブデモ

**🔗 [https://your-username.github.io/web-site/](https://your-username.github.io/web-site/)**

最新のデプロイ状況: [GitHub Actions](https://github.com/your-username/web-site/actions)

---

## ✨ 特徴

### 🎨 デザイン
- **モダンで美しいUI** - プロフェッショナルなデザインシステム
- **完全レスポンシブ** - モバイル、タブレット、デスクトップ対応
- **ダークテーマ** - 目に優しいカラーパレット
- **スムーズなアニメーション** - Framer Motion統合

### 🛠️ テンプレート機能
- **テーマ切り替え** - 簡単にテーマを変更可能
- **画像管理システム** - Unsplash統合、最適化対応
- **SVGアイコンシステム** - カスタマイズ可能なアイコンセット
- **品質チェック** - 画像・リンク切れの自動チェック

### 🚀 開発体験
- **Next.js 15** - 最新の静的サイト生成
- **TypeScript** - 型安全な開発
- **Vitest** - 高速なテスト環境
- **自動化** - CI/CD完備

---

## 📊 現在の統計

- **コンテンツ**: 22トピック、5カテゴリ
- **依存関係**: 5個の本番依存関係
- **テスト**: Vitest + React Testing Library

---

## 🏃 クイックスタート

### 必要環境
- Node.js 20以上
- npm または yarn

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/your-username/web-site.git
cd web-site

# 依存関係をインストール
cd web
npm install
```

### 開発サーバー起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開きます。

### ビルド

```bash
npm run build
```

静的ファイルが `web/out` に生成されます。

---

## 🧪 テストと品質チェック

### テスト実行

```bash
npm run test          # テスト実行
npm run test:watch    # ウォッチモード
```

### 品質チェック

```bash
npm run check         # すべてのチェック
npm run check:images  # 画像チェック
npm run check:links   # リンク切れチェック
```

**注意**: ビルド前に自動でチェックが実行されます（`prebuild`フック）

---

## 🎨 テーマのカスタマイズ

### 1. テーマ設定ファイルを編集

```typescript
// web/themes/your-theme/theme.config.ts
export const theme = {
  colors: {
    primary: '#your-color',
    // ...
  },
  // ...
};
```

### 2. サイト設定を更新

```typescript
// web/config/site.config.ts
export const siteConfig = {
  name: 'Your Site Name',
  description: 'Your description',
  theme: 'your-theme',
  // ...
};
```

---

## 📁 プロジェクト構造

```
web-site/
├── .github/
│   └── workflows/          # GitHub Actions
│       ├── pages.yml       # デプロイワークフロー
│       └── update-readme.yml # README自動更新
├── web/
│   ├── app/
│   │   ├── components/     # React コンポーネント
│   │   │   ├── icons/      # SVG アイコン
│   │   │   ├── Card.tsx
│   │   │   ├── Hero.tsx
│   │   │   └── Section.tsx
│   │   ├── data/           # コンテンツデータ
│   │   ├── lib/            # ユーティリティ
│   │   └── page.tsx        # ホームページ
│   ├── config/             # サイト設定
│   ├── themes/             # テーマファイル
│   ├── scripts/            # ビルドスクリプト
│   ├── public/             # 静的アセット
│   └── tests/              # テストファイル
└── README.md
```

---

## 🔧 利用技術

### フロントエンド
- [Next.js 15](https://nextjs.org/) - Reactフレームワーク
- [TypeScript](https://www.typescriptlang.org/) - 型安全性
- [Framer Motion](https://www.framer.com/motion/) - アニメーション
- [React 18](https://react.dev/) - UIライブラリ

### ツール・テスト
- [Vitest](https://vitest.dev/) - テストフレームワーク
- [Testing Library](https://testing-library.com/) - React テスト
- [GitHub Actions](https://github.com/features/actions) - CI/CD

---

## 📝 コンテンツの追加

### 新しいトピックを追加

```typescript
// web/app/data/github-docs.ts
{
  id: 'new-topic',
  title: '新しいトピック',
  description: '説明',
  category: 'カテゴリ',
  // ...
}
```

### 新しいページを追加

```bash
# web/app/new-page/page.tsx を作成
```

---

## 🚀 デプロイ

### GitHub Pages (自動)

`main` ブランチにプッシュすると自動的にデプロイされます。

### 手動デプロイ

1. [GitHub Actions](https://github.com/your-username/web-site/actions)を開く
2. "Deploy to GitHub Pages" を選択
3. "Run workflow" をクリック

---

## 🤝 貢献

貢献を歓迎します！

1. このリポジトリをフォーク
2. 新しいブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. Pull Request を作成

---

## 📄 ライセンス

このプロジェクトは [MIT License](LICENSE) の下でライセンスされています。

---

## 🙋 質問・サポート

- 📫 Issue: [https://github.com/your-username/web-site/issues](https://github.com/your-username/web-site/issues)
- 📖 ドキュメント: [サイト内FAQ](https://your-username.github.io/web-site/faq/)

---

**🎉 このテンプレートを使ってあなたの素晴らしいサイトを作りましょう！**

---

*このREADMEは自動生成されています。変更は `web/scripts/generate-readme.js` を編集してください。*

*最終更新: 2025/11/22*
