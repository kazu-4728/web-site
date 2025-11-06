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

### 自動デプロイ（推奨）

このプロジェクトは、GitHub Actionsを使用して自動的にGitHub Pagesにデプロイされます。

#### セットアップ手順

1. **リポジトリの設定**
   - リポジトリの **Settings** > **Pages** に移動
   - **Source** で **GitHub Actions** を選択

2. **自動デプロイの動作**
   - `main` ブランチにプッシュすると自動的にデプロイが開始されます
   - ワークフローファイル: `.github/workflows/pages.yml`
   - ビルドとデプロイは自動的に実行されます

3. **手動デプロイ**
   - GitHub Actionsのタブから **Deploy to GitHub Pages** ワークフローを選択
   - **Run workflow** ボタンをクリックして手動実行も可能です

#### デプロイの確認方法

1. **GitHub Actionsで確認**
   - リポジトリの **Actions** タブを開く
   - **Deploy to GitHub Pages** ワークフローを確認
   - 緑色のチェックマークが表示されれば成功

2. **デプロイされたサイトを確認**
   - リポジトリの **Settings** > **Pages** でURLを確認
   - 通常は `https://[ユーザー名].github.io/[リポジトリ名]/` の形式
   - デプロイ完了後、数分でサイトが公開されます

3. **ローカルでビルドを確認**
   ```bash
   cd web
   npm install
   npm run build
   ```
   - `web/out` ディレクトリに静的ファイルが生成されます
   - 生成されたファイルを確認して、正しくビルドされているか確認できます

4. **ブラウザで確認**
   - デプロイされたURLにアクセス
   - 最新のデザインとコンテンツが表示されているか確認
   - すべてのページが正しく動作するか確認

#### トラブルシューティング

- **デプロイが失敗する場合**
  - GitHub Actionsのログを確認
  - `main` ブランチにプッシュされているか確認
  - リポジトリのSettings > PagesでGitHub Actionsが選択されているか確認

- **古いデータが表示される場合**
  - ブラウザのキャッシュをクリア（Ctrl+Shift+R または Cmd+Shift+R）
  - デプロイが完了するまで数分待つ
  - GitHub Actionsで最新のデプロイが成功しているか確認

- **404エラーが表示される場合**
  - `next.config.mjs` で `trailingSlash: true` が設定されているか確認
  - パスの大文字小文字が正しいか確認

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

© 2025 GitHub Docs 完全マニュアル
