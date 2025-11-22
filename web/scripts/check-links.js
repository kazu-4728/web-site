#!/usr/bin/env node
/**
 * リンクチェックスクリプト
 * - 内部リンクの有効性確認
 * - 存在しないページへのリンクを検出
 */

const fs = require('fs');
const path = require('path');

const errors = [];
const warnings = [];

// ファイル検索
function findFiles(dir, ext) {
  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory() && !item.name.startsWith('.') && item.name !== 'node_modules') {
      files.push(...findFiles(fullPath, ext));
    } else if (item.isFile() && item.name.endsWith(ext)) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// ルート一覧を取得
function getRoutes(appDir) {
  const routes = new Set(['/']);
  
  function scanDir(dir, basePath = '') {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const item of items) {
      if (item.isDirectory() && !item.name.startsWith('.') && !item.name.startsWith('_')) {
        const dirPath = path.join(dir, item.name);
        const routePath = `${basePath}/${item.name}`;
        
        // [id]などの動的ルート
        if (item.name.startsWith('[') && item.name.endsWith(']')) {
          // page.tsxがあれば動的ルートとして追加
          if (fs.existsSync(path.join(dirPath, 'page.tsx')) || 
              fs.existsSync(path.join(dirPath, 'page.ts'))) {
            routes.add(routePath + '/');
          }
          warnings.push({
            message: `動的ルート検出: ${routePath} (個別確認が必要)`,
          });
        } else {
          // page.tsxがあればルートとして追加
          if (fs.existsSync(path.join(dirPath, 'page.tsx')) || 
              fs.existsSync(path.join(dirPath, 'page.ts'))) {
            routes.add(routePath + '/');
          }
          scanDir(dirPath, routePath);
        }
      }
    }
  }
  
  scanDir(appDir);
  return routes;
}

// リンクを抽出
function extractLinks(content) {
  const links = [];
  
  // href="..." または href={...}
  const hrefMatches = content.matchAll(/href=["'{]([^"'}]+)["'}]/g);
  for (const match of hrefMatches) {
    const link = match[1];
    // 内部リンクのみ
    if (link.startsWith('/') && !link.startsWith('//')) {
      links.push(link);
    }
  }
  
  return links;
}

// メイン処理
function main() {
  console.log('🔍 リンクチェック開始...\n');
  
  const appDir = path.join(__dirname, '../app');
  const routes = getRoutes(appDir);
  
  console.log(`📄 検出されたルート (${routes.size}個):`);
  routes.forEach(route => console.log(`  ${route}`));
  console.log();
  
  const tsxFiles = findFiles(appDir, '.tsx');
  
  for (const file of tsxFiles) {
    const content = fs.readFileSync(file, 'utf-8');
    const links = extractLinks(content);
    
    for (const link of links) {
      // クエリパラメータとハッシュを除去
      const cleanLink = link.split('?')[0].split('#')[0];
      
      // 末尾にスラッシュを追加して正規化
      const normalizedLink = cleanLink.endsWith('/') ? cleanLink : cleanLink + '/';
      
      // ルートの存在確認
      if (!routes.has(normalizedLink)) {
        // 動的ルートの可能性をチェック
        const isDynamic = Array.from(routes).some(route => {
          // [id]などを正規表現パターンに変換
          const routePattern = route.replace(/\[.*?\]/g, '[^/]+');
          const regex = new RegExp(`^${routePattern}$`);
          return regex.test(normalizedLink);
        });
        
        if (!isDynamic) {
          errors.push({
            file: path.relative(process.cwd(), file),
            link: link,
            message: 'リンク先のページが存在しません',
          });
        } else {
          // 動的ルートとして検出された場合は警告に追加
          warnings.push({
            file: path.relative(process.cwd(), file),
            link: link,
            message: '動的ルートへのリンク（手動で確認してください）',
          });
        }
      }
    }
  }
  
  // 結果表示
  if (errors.length > 0) {
    console.log('❌ エラー:\n');
    errors.forEach(err => {
      console.log(`  ${err.file}`);
      console.log(`    リンク: ${err.link}`);
      console.log(`    ${err.message}\n`);
    });
  }
  
  if (warnings.length > 0) {
    console.log('⚠️  警告:\n');
    warnings.forEach(warn => {
      console.log(`  ${warn.message}\n`);
    });
  }
  
  if (errors.length === 0) {
    console.log('✅ リンクチェック完了: 問題なし\n');
    process.exit(0);
  } else {
    console.log(`\n❌ ${errors.length}個のリンクエラーが見つかりました`);
    process.exit(1);
  }
}

main();
