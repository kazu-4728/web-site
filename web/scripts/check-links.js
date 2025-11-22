#!/usr/bin/env node

/**
 * 内部リンクチェックスクリプト
 * - 存在しないページへのリンクを検出
 * - 動的ルートを正しく認識
 * - 修正提案を提供
 */

const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '..', 'app');
const errors = [];
const warnings = [];

// すべてのルートを取得
function getRoutes(dir, basePath = '') {
  const routes = new Set();
  
  if (!fs.existsSync(dir)) return routes;
  
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && !item.startsWith('_')) {
      const routePath = `${basePath}/${item}`;
      
      // page.tsxがあればルートとして認識
      const pagePath = path.join(fullPath, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        routes.add(routePath + '/');
        
        // 動的ルートの検出
        if (item.startsWith('[') && item.endsWith(']')) {
          routes.add(`${basePath}/${item}/`);
        }
      }
      
      // 再帰的に探索
      const subRoutes = getRoutes(fullPath, routePath);
      subRoutes.forEach(route => routes.add(route));
    }
  }
  
  return routes;
}

// TSX/JSXファイルからリンクを抽出
function extractLinks(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const links = new Set();
  
  // href="..." または href={...} パターンを検出
  const hrefPattern = /href=["']([^"']+)["']|href=\{["']([^"']+)["']\}/g;
  let match;
  
  while ((match = hrefPattern.exec(content)) !== null) {
    const link = match[1] || match[2];
    
    // 内部リンクのみ（相対パスまたは/で始まる）
    if (link && (link.startsWith('/') || link.startsWith('./'))) {
      // クエリパラメータとハッシュを除去
      const cleanLink = link.split('?')[0].split('#')[0];
      
      // 末尾にスラッシュを追加（統一のため）
      const normalizedLink = cleanLink.endsWith('/') ? cleanLink : cleanLink + '/';
      
      links.add({ link: normalizedLink, file: filePath });
    }
  }
  
  return links;
}

// すべてのTSX/JSXファイルを走査
function scanFiles(dir) {
  const links = [];
  
  if (!fs.existsSync(dir)) return links;
  
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      links.push(...scanFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {
      links.push(...extractLinks(fullPath));
    }
  }
  
  return links;
}

// 動的ルートにマッチするかチェック
function matchesDynamicRoute(link, routes) {
  // 完全一致
  if (routes.has(link)) return true;
  
  // 動的ルートのマッチング
  for (const route of routes) {
    if (route.includes('[') && route.includes(']')) {
      const pattern = route.replace(/\[([^\]]+)\]/g, '[^/]+');
      const regex = new RegExp(`^${pattern}$`);
      if (regex.test(link)) {
        return true;
      }
    }
  }
  
  return false;
}

// メイン処理
console.log('🔍 内部リンクをチェック中...\n');

const routes = getRoutes(appDir);
const links = scanFiles(appDir);

console.log(`📄 ${routes.size}個のルートを検出`);
console.log(`🔗 ${links.length}個の内部リンクを検出\n`);

// ルートを表示（デバッグ用）
console.log('検出されたルート:');
routes.forEach(route => console.log(`  - ${route}`));
console.log();

// リンクをチェック
for (const { link, file } of links) {
  const relativePath = path.relative(appDir, file);
  
  if (!matchesDynamicRoute(link, routes)) {
    // 外部リンクや特殊なパスは除外
    if (
      !link.startsWith('http') &&
      !link.includes('://') &&
      link !== '/' // ルートパスは常に存在すると仮定
    ) {
      errors.push({
        link,
        file: relativePath,
      });
    }
  }
}

// 結果を表示
if (errors.length > 0) {
  console.error('❌ 以下のリンク先ページが存在しません:\n');
  errors.forEach(({ link, file }) => {
    console.error(`  ❌ ${link}`);
    console.error(`     ファイル: ${file}`);
    
    // 修正提案
    const suggestedPath = path.join(appDir, link.slice(1), 'page.tsx');
    console.error(`     💡 修正案: ${path.relative(process.cwd(), suggestedPath)} を作成\n`);
  });
  
  console.error(`\n❌ ${errors.length}個のリンクエラーが見つかりました`);
  console.error('\n修正方法:');
  console.error('  1. ページを作成: npm run generate:page [template] [slug] [title]');
  console.error('  2. リンクを修正: 正しいパスに変更');
  console.error('  3. リンクを削除: 不要なリンクを削除\n');
  process.exit(1);
}

if (warnings.length > 0) {
  console.warn('⚠️  警告:\n');
  warnings.forEach(warning => {
    console.warn(`  ⚠️  ${warning}\n`);
  });
}

console.log('✅ すべての内部リンクが有効です！');
