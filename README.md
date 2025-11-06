# Manual Simplifier

## 説明

Manual Simplifierは、Next.jsとTypeScriptを使用して構築されたウェブアプリケーションです。UI Phase1として静的エクスポート機能を提供し、マニュアルや文書を簡潔に表示・管理するためのプラットフォームを目指しています。

## 機能

- **静的サイト生成**: Next.jsの静的エクスポート機能を活用し、高速で効率的なウェブサイトを提供
- **TypeScriptサポート**: 型安全性を確保し、保守性の高いコードベース
- **レスポンシブデザイン**: モバイルとデスクトップの両方に対応
- **複数ページ構成**:
  - ホームページ
  - ソースページ
  - ガイドページ（サンプルを含む）
  - FAQページ

## インストール手順

このプロジェクトをローカル環境でセットアップするには、以下の手順に従ってください。

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

## プロジェクト構成

```
web-site/
├── web/                # Next.jsアプリケーションのルートディレクトリ
│   ├── app/           # アプリケーションのページとレイアウト
│   │   ├── page.tsx   # ホームページ
│   │   ├── layout.tsx # グローバルレイアウト
│   │   ├── sources/   # ソースページ
│   │   ├── guides/    # ガイドページ
│   │   └── faq/       # FAQページ
│   ├── package.json   # プロジェクトの依存関係
│   └── next.config.mjs # Next.jsの設定
├── LICENSE            # MITライセンス
└── README.md          # このファイル
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

© 2025 kazu-4728
