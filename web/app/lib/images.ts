/**
 * 画像管理システム
 * 画像URLの生成とプレースホルダーの管理
 */

export interface ImageConfig {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  placeholder?: string;
}

// Unsplash画像のヘルパー
export function getUnsplashImage(id: string, width = 1200, height = 600): string {
  return `https://images.unsplash.com/photo-${id}?w=${width}&h=${height}&fit=crop&q=80`;
}

// トピック別の画像マッピング
export const topicImages: Record<string, string> = {
  'getting-started': '1618401471353-b98afee0b2eb', // GitHubロゴ
  'repository-management': '1556075798-4825dfaaf498', // ファイル管理
  'git-basics': '1629654297299-c8506221ca97', // ターミナル
  'pull-requests': '1556761175-4b46a572b786', // コード
  'issues': '1484480974693-6ca0a78fb36b', // 付箋・タスク
  'github-actions': '1551288049-1640f4a66fea', // 自動化
  'default': '1618401471353-b98afee0b2eb', // デフォルト画像
};

// Hero画像のプリセット
export const heroImages = {
  'github': 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb',
  'code': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
  'tech': 'https://images.unsplash.com/photo-1518770660439-4636190af475',
  'workspace': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  'team': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
};

// カテゴリ別の特徴画像
export const featureImages = {
  design: 'https://images.unsplash.com/photo-1561070791-2526d30994b5',
  mobile: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c',
  speed: 'https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3',
  learning: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b',
  code: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
  free: 'https://images.unsplash.com/photo-1515787366009-7cbdd2dc587b',
};

// SVGプレースホルダー生成
export function generatePlaceholder(width: number, height: number, text: string): string {
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'%3E%3Crect width='${width}' height='${height}' fill='%23334155'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%2394a3b8'%3E${encodeURIComponent(
    text
  )}%3C/text%3E%3C/svg%3E`;
}

// 画像の検証
export function validateImageUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

// 画像の最適化パラメータ
export interface ImageOptimization {
  format?: 'webp' | 'jpg' | 'png';
  quality?: number;
  blur?: number;
}

export function optimizeImageUrl(
  baseUrl: string,
  optimization: ImageOptimization = {}
): string {
  const { format = 'webp', quality = 80, blur } = optimization;
  const url = new URL(baseUrl);
  
  if (url.hostname === 'images.unsplash.com') {
    url.searchParams.set('fm', format);
    url.searchParams.set('q', quality.toString());
    if (blur) {
      url.searchParams.set('blur', blur.toString());
    }
  }
  
  return url.toString();
}
