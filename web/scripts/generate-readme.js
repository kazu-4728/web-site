#!/usr/bin/env node
/**
 * README自動生成スクリプト
 * サイト設定とコンテンツデータからREADMEを生成
 */

const fs = require('fs');
const path = require('path');

// 設定とデータを読み込み
function loadConfig() {
  try {
    // Next.jsのapp/data/github-docs.tsから情報を抽出
    const dataFile = fs.readFileSync(
      path.join(__dirname, '../app/data/github-docs.ts'),
      'utf-8'
    );
    
    // トピック数を抽出
    const topicsMatch = dataFile.match(/export const githubDocs: GitHubDocTopic\[\] = \[([\s\S]*?)\];/);
    const topics = topicsMatch ? topicsMatch[1].split('},').length : 0;
    
    // カテゴリ数を抽出
    const categoriesMatch = dataFile.match(/export const categories = \[(.*?)\];/);
    const categories = categoriesMatch ? categoriesMatch[1].split(',').length : 0;
    
    // package.jsonから情報取得
    const packageJson = JSON.parse(
      fs.readFileSync(path.join(__dirname, '../package.json'), 'utf-8')
    );
    
    return {
      topics,
      categories,
      dependencies: packageJson.dependencies || {},
      devDependencies: packageJson.devDependencies || {},
    };
  } catch (error) {
    console.error('設定の読み込みエラー:', error);
    return { topics: 0, categories: 0, dependencies: {}, devDependencies: {} };
  }
}

// READMEを生成
function generateReadme() {
  const config = loadConfig();
  const repoName = process.env.GITHUB_REPOSITORY || 'your-username/web-site';
  const [owner, repo] = repoName.split('/');
  
  const deployUrl = `https://${owner}.github.io/${repo}/`;
  const actionsUrl = `https://github.com/${repoName}/actions`;
  const issuesUrl = `https://github.com/${repoName}/issues`;
  
  const readme = `# 🚀 Professional Website Template

[![Deploy to GitHub Pages](https://github.com/${repoName}/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)](${actionsUrl})
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **美しく洗練されたWebサイトテンプレート** - Next.js 15 + TypeScript + Framer Motion

## 🌐 ライブデモ

**🔗 [${deployUrl}](${deployUrl})**

最新のデプロイ状況: [GitHub Actions](${actionsUrl})

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

- **コンテンツ**: ${config.topics}トピック、${config.categories}カテゴリ
- **依存関係**: ${Object.keys(config.dependencies).length}個の本番依存関係
- **テスト**: Vitest + React Testing Library

---

## 🏃 クイックスタート

### 必要環境
- Node.js 20以上
- npm または yarn

### インストール

\`\`\`bash
# リポジトリをクローン
git clone https://github.com/${repoName}.git
cd ${repo}

# 依存関係をインストール
cd web
npm install
\`\`\`

### 開発サーバー起動

\`\`\`bash
npm run dev
\`\`\`

ブラウザで [http://localhost:3000](http://localhost:3000) を開きます。

### ビルド

\`\`\`bash
npm run build
\`\`\`

静的ファイルが \`web/out\` に生成されます。

---

## 🧪 テストと品質チェック

### テスト実行

\`\`\`bash
npm run test          # テスト実行
npm run test:watch    # ウォッチモード
\`\`\`

### 品質チェック

\`\`\`bash
npm run check         # すべてのチェック
npm run check:images  # 画像チェック
npm run check:links   # リンク切れチェック
\`\`\`

**注意**: ビルド前に自動でチェックが実行されます（\`prebuild\`フック）

---

## 🎨 テーマのカスタマイズ

### 1. テーマ設定ファイルを編集

\`\`\`typescript
// web/themes/your-theme/theme.config.ts
export const theme = {
  colors: {
    primary: '#your-color',
    // ...
  },
  // ...
};
\`\`\`

### 2. サイト設定を更新

\`\`\`typescript
// web/config/site.config.ts
export const siteConfig = {
  name: 'Your Site Name',
  description: 'Your description',
  theme: 'your-theme',
  // ...
};
\`\`\`

---

## 📁 プロジェクト構造

\`\`\`
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
\`\`\`

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

\`\`\`typescript
// web/app/data/github-docs.ts
{
  id: 'new-topic',
  title: '新しいトピック',
  description: '説明',
  category: 'カテゴリ',
  // ...
}
\`\`\`

### 新しいページを追加

\`\`\`bash
# web/app/new-page/page.tsx を作成
\`\`\`

---

## 🚀 デプロイ

### GitHub Pages (自動)

\`main\` ブランチにプッシュすると自動的にデプロイされます。

### 手動デプロイ

1. [GitHub Actions](${actionsUrl})を開く
2. "Deploy to GitHub Pages" を選択
3. "Run workflow" をクリック

---

## 🤝 貢献

貢献を歓迎します！

1. このリポジトリをフォーク
2. 新しいブランチを作成 (\`git checkout -b feature/amazing-feature\`)
3. 変更をコミット (\`git commit -m 'Add amazing feature'\`)
4. ブランチにプッシュ (\`git push origin feature/amazing-feature\`)
5. Pull Request を作成

---

## 📄 ライセンス

このプロジェクトは [MIT License](LICENSE) の下でライセンスされています。

---

## 🙋 質問・サポート

- 📫 Issue: [${issuesUrl}](${issuesUrl})
- 📖 ドキュメント: [サイト内FAQ](${deployUrl}faq/)

---

**🎉 このテンプレートを使ってあなたの素晴らしいサイトを作りましょう！**

---

*このREADMEは自動生成されています。変更は \`web/scripts/generate-readme.js\` を編集してください。*

*最終更新: ${new Date().toLocaleDateString('ja-JP')}*
`;

  return readme;
}

// メイン処理
function main() {
  console.log('📝 README生成中...');
  
  const readme = generateReadme();
  const outputPath = path.join(__dirname, '../../README.md');
  
  fs.writeFileSync(outputPath, readme, 'utf-8');
  
  console.log('✅ README生成完了:', outputPath);
}

main();
