#!/usr/bin/env node
/**
 * 画像チェックスクリプト
 * - 画像ファイルの存在確認
 * - 外部画像URLの有効性確認
 */

const fs = require('fs');
const path = require('path');

const errors = [];
const warnings = [];

// コンポーネントとページファイルを検索
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

// 画像参照を抽出
function extractImageReferences(content) {
  const images = [];
  
  // src="..." または src={...}
  const srcMatches = content.matchAll(/src=["'{]([^"'}]+)["'}]/g);
  for (const match of srcMatches) {
    images.push(match[1]);
  }
  
  // backgroundImage: url(...)
  const bgMatches = content.matchAll(/backgroundImage:\s*["'`]url\(([^)]+)\)["'`]/g);
  for (const match of bgMatches) {
    images.push(match[1]);
  }
  
  // style={{ backgroundImage: `url(...)`}}
  const styleBgMatches = content.matchAll(/backgroundImage:\s*`url\(([^)]+)\)`/g);
  for (const match of styleBgMatches) {
    images.push(match[1]);
  }
  
  return images;
}

// メイン処理
function main() {
  console.log('🔍 画像チェック開始...\n');
  
  const appDir = path.join(__dirname, '../app');
  const publicDir = path.join(__dirname, '../public');
  
  const tsxFiles = findFiles(appDir, '.tsx');
  
  for (const file of tsxFiles) {
    const content = fs.readFileSync(file, 'utf-8');
    const images = extractImageReferences(content);
    
    for (const img of images) {
      // 外部URL
      if (img.startsWith('http://') || img.startsWith('https://')) {
        warnings.push({
          file: path.relative(process.cwd(), file),
          image: img,
          message: '外部画像URL（ビルド時に確認不可）',
        });
      }
      // ローカル画像
      else if (img.startsWith('/')) {
        const imagePath = path.join(publicDir, img);
        if (!fs.existsSync(imagePath)) {
          errors.push({
            file: path.relative(process.cwd(), file),
            image: img,
            message: '画像ファイルが存在しません',
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
      console.log(`    画像: ${err.image}`);
      console.log(`    ${err.message}\n`);
    });
  }
  
  if (warnings.length > 0) {
    console.log('⚠️  警告:\n');
    warnings.forEach(warn => {
      console.log(`  ${warn.file}`);
      console.log(`    画像: ${warn.image}`);
      console.log(`    ${warn.message}\n`);
    });
  }
  
  if (errors.length === 0 && warnings.length === 0) {
    console.log('✅ 画像チェック完了: 問題なし\n');
    process.exit(0);
  }
  
  if (errors.length > 0) {
    console.log(`\n❌ ${errors.length}個のエラーが見つかりました`);
    process.exit(1);
  }
  
  console.log(`\n⚠️  ${warnings.length}個の警告があります`);
  process.exit(0);
}

main();
