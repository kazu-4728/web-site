/**
 * 統一画像管理システム
 * 画像の一元管理、最適化、fallback処理
 */

export interface ImageSource {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

// 画像の保存場所を定義
export const IMAGE_SOURCES = {
  // ローカル画像（public/images/）
  LOCAL: 'local',
  // Unsplash（開発・プロトタイプ用）
  UNSPLASH: 'unsplash',
  // プレースホルダー
  PLACEHOLDER: 'placeholder',
} as const;

export type ImageSourceType = typeof IMAGE_SOURCES[keyof typeof IMAGE_SOURCES];

// 画像カテゴリ別の定義
export const IMAGE_CATEGORIES = {
  hero: {
    default: '/images/hero/default.jpg',
    github: '/images/hero/github.jpg',
    code: '/images/hero/code.jpg',
    tech: '/images/hero/tech.jpg',
    team: '/images/hero/team.jpg',
  },
  features: {
    speed: '/images/features/speed.jpg',
    design: '/images/features/design.jpg',
    mobile: '/images/features/mobile.jpg',
    security: '/images/features/security.jpg',
    automation: '/images/features/automation.jpg',
    collaboration: '/images/features/collaboration.jpg',
  },
  topics: {
    'getting-started': '/images/topics/getting-started.jpg',
    'repository-management': '/images/topics/repository.jpg',
    'git-basics': '/images/topics/git.jpg',
    'pull-requests': '/images/topics/pr.jpg',
    'issues': '/images/topics/issues.jpg',
    'github-actions': '/images/topics/actions.jpg',
  },
  backgrounds: {
    gradient1: '/images/bg/gradient-1.jpg',
    gradient2: '/images/bg/gradient-2.jpg',
    pattern: '/images/bg/pattern.jpg',
    mesh: '/images/bg/mesh.jpg',
  },
};

// Unsplash画像（fallback用）
export const UNSPLASH_IMAGES = {
  hero: {
    default: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=1920&q=80',
    github: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=1920&q=80',
    code: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&q=80',
    tech: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80',
    team: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80',
  },
  features: {
    speed: 'https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?w=800&q=80',
    design: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    mobile: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    security: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80',
    automation: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    collaboration: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
  },
  topics: {
    'getting-started': 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=1200&q=80',
    'repository-management': 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=1200&q=80',
    'git-basics': 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=1200&q=80',
    'pull-requests': 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&q=80',
    'issues': 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&q=80',
    'github-actions': 'https://images.unsplash.com/photo-1551288049-1640f4a66fea?w=1200&q=80',
  },
};

/**
 * 画像URLを取得（ローカル優先、fallbackあり）
 */
export function getImage(category: string, key: string, sourceType: ImageSourceType = IMAGE_SOURCES.LOCAL): string {
  // ローカル画像を試す
  if (sourceType === IMAGE_SOURCES.LOCAL) {
    const localImage = (IMAGE_CATEGORIES as any)[category]?.[key];
    if (localImage) {
      return localImage;
    }
  }
  
  // Unsplash fallback
  const unsplashImage = (UNSPLASH_IMAGES as any)[category]?.[key];
  if (unsplashImage) {
    return unsplashImage;
  }
  
  // 最終fallback: プレースホルダー
  return generatePlaceholder(1200, 600, 'Image');
}

/**
 * SVGプレースホルダー生成
 */
export function generatePlaceholder(width: number, height: number, text: string): string {
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'%3E%3Crect width='${width}' height='${height}' fill='%23334155'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%2394a3b8'%3E${encodeURIComponent(
    text
  )}%3C/text%3E%3C/svg%3E`;
}

/**
 * 画像最適化パラメータ
 */
export interface ImageOptimization {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'jpg' | 'png';
}

/**
 * Next.js Image用の設定を生成
 */
export function getImageConfig(
  category: string,
  key: string,
  optimization: ImageOptimization = {}
): ImageSource {
  const { width = 1200, height = 600, quality = 80 } = optimization;
  
  return {
    src: getImage(category, key),
    alt: `${category} - ${key}`,
    width,
    height,
    priority: false,
  };
}

/**
 * 画像プリロード用
 */
export function preloadImages(images: string[]) {
  if (typeof window !== 'undefined') {
    images.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }
}
