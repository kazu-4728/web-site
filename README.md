# GitHub Docs 完全マニュアル

## 概要

GitHub Docsについて初心者でも分かりやすいマニュアルを、ECサイト形式で提供するウェブサイトです。

Next.jsとTypeScriptを使用して構築され、GitHub Pagesでホスティング可能な静的サイトとして実装されています。

## 特徴

- **ECサイト形式のデザイン**: 商品一覧のような見た目で、各トピックを「商品」として表示
- **初心者向けコンテンツ**: GitHubの基本的な使い方から、Pull Request、Issues、GitHub Actionsまで
- **モダンなデザイン**: ダークテーマの美しいUI
- **完全な実装**: モックではなく、実際に動作するマニュアルサイト
- **GitHub Pages対応**: 静的エクスポートでGitHub Pagesにデプロイ可能

## 機能

- **トップページ**: 全トピックをECサイト風の商品カードで表示
- **詳細ページ**: 各トピックの完全なマニュアル
  - 概要説明
  - 詳細セクション
  - コードブロック（コピー機能付き）
  - ヒント
  - 関連トピック
- **ナビゲーション**: 前後のトピックへの移動
- **レスポンシブデザイン**: モバイルとデスクトップの両方に対応

## インストール手順

### 前提条件

- Node.js（バージョン20以上を推奨）
- npm または yarn パッケージマネージャー

### セットアップ

1. リポジトリをクローンします：
   ```bash
   git clone https://github.com/kazu-4728/web-site.git
   cd web-site
   ```

2. `web`ディレクトリに移動します：
   ```bash
   cd web
   ```

3. 依存関係をインストールします：
   ```bash
   npm install
   ```

## 使用方法

### 開発サーバーの起動

開発モードでアプリケーションを実行するには：

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてアプリケーションを確認できます。

### 本番ビルド

静的ファイルを生成して本番環境にデプロイするには：

```bash
npm run build
```

ビルドされた静的ファイルは `out` ディレクトリに生成されます。

## GitHub Pagesへのデプロイ

### 方法1: GitHub Actionsを使用（推奨）

1. `.github/workflows/deploy.yml` を作成（必要に応じて）
2. リポジトリのSettings > Pagesで、GitHub Actionsをソースとして選択
3. ビルドが完了すると自動的にデプロイされます

### 方法2: 手動デプロイ

1. プロジェクトをビルド：
   ```bash
   cd web
   npm run build
   ```

2. `out` ディレクトリの内容を `gh-pages` ブランチにプッシュ：
   ```bash
   git checkout -b gh-pages
   git add out
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

3. リポジトリのSettings > Pagesで、`gh-pages` ブランチをソースとして選択

## プロジェクト構成

```
web-site/
├── web/                          # Next.jsアプリケーション
│   ├── app/
│   │   ├── data/
│   │   │   └── github-docs.ts   # GitHub Docsトピックデータ
│   │   ├── components/
│   │   │   └── CodeBlock.tsx    # コードブロックコンポーネント
│   │   ├── docs/
│   │   │   └── [id]/
│   │   │       ├── page.tsx     # 詳細ページ
│   │   │       └── not-found.tsx
│   │   ├── page.tsx             # トップページ（商品一覧）
│   │   ├── layout.tsx           # グローバルレイアウト
│   │   └── globals.css          # グローバルスタイル
│   ├── package.json
│   └── next.config.mjs          # Next.js設定（静的エクスポート）
├── LICENSE
└── README.md
```

## 含まれるトピック

1. **GitHub入門 - 初心者ガイド**: GitHubとは何か、アカウント作成、初めてのリポジトリ作成
2. **リポジトリ管理の完全ガイド**: リポジトリの種類、クローン、フォーク、ブランチ戦略
3. **Gitコマンド完全マスター**: 基本コマンド、変更の取り消し、ブランチ操作
4. **Pull Request（PR）マスター**: PRの作成、レビュー、マージ、コンフリクト解決
5. **Issues活用術**: Issueの作成、良いIssueの書き方、ラベルとマイルストーン
6. **GitHub Actions入門**: CI/CDパイプラインの構築、自動テスト、デプロイ自動化

## カスタマイズ

### 新しいトピックを追加

`web/app/data/github-docs.ts` ファイルを編集して、新しいトピックを追加できます：

```typescript
{
  id: 'new-topic',
  title: '新しいトピック',
  description: '説明',
  category: 'カテゴリ',
  price: 0,
  icon: '🎯',
  level: 'beginner',
  content: {
    overview: '概要',
    sections: [
      {
        title: 'セクションタイトル',
        content: '内容',
        code: 'コード例',
        codeLanguage: 'bash'
      }
    ],
    tips: ['ヒント1', 'ヒント2']
  }
}
```

## ライセンス

このプロジェクトは MIT License の下でライセンスされています。詳細については、[LICENSE](LICENSE) ファイルをご覧ください。

## 貢献

このプロジェクトへの貢献を歓迎します！以下のガイドラインに従ってください：

1. このリポジトリをフォークします
2. 新しいブランチを作成します（`git checkout -b feature/amazing-feature`）
3. 変更をコミットします（`git commit -m 'Add some amazing feature'`）
4. ブランチにプッシュします（`git push origin feature/amazing-feature`）
5. プルリクエストを作成します

### コーディング規約

- 日本語でコメントとドキュメントを記述
- TypeScriptの型定義を適切に使用
- コードの可読性と保守性を重視
- Next.jsとReactのベストプラクティスに従う

## お問い合わせ

質問や提案がある場合は、Issueを作成してください。

---

© 2024 GitHub Docs 完全マニュアル
