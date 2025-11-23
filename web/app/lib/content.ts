import { promises as fs } from 'fs';
import path from 'path';

// 型定義
export interface ContentConfig {
  site: {
    name: string;
    tagline: string;
    description: string;
    logo: {
      text: string;
      icon: string;
    };
  };
  navigation: Array<{
    label: string;
    href: string;
    variant?: 'primary' | 'secondary';
  }>;
  pages: {
    home: {
      hero: {
        type: string;
        title: string;
        subtitle: string;
        description: string;
        bgImage: string;
        overlay: string;
        actions: Array<{
          label: string;
          href: string;
          variant: 'primary' | 'secondary';
        }>;
      };
      sections: Array<HomeSection>;
    };
    docs?: Array<DocPage>;
  };
}

export interface DocPage {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  content: string;
  related?: string[];
}

export type HomeSection = 
  | SplitFeatureSection
  | GridGallerySection
  | TestimonialsSection
  | CtaSection;

export interface BaseSection {
  id: string;
  type: string;
  title?: string;
  subtitle?: string;
  description?: string;
}

export interface SplitFeatureSection extends BaseSection {
  type: 'split-feature';
  layout: 'image-left' | 'image-right';
  chapter?: string;
  image: string;
  stats?: Array<{ value: string; label: string }>;
  quote?: { text: string; author: string };
  link?: { text: string; href: string };
}

export interface GridGallerySection extends BaseSection {
  type: 'grid-gallery';
  items: Array<{
    title: string;
    description: string;
    image: string;
    href: string;
  }>;
}

export interface TestimonialsSection extends BaseSection {
  type: 'testimonials';
  items: Array<{
    content: string;
    author: string;
    role: string;
    avatar: string;
  }>;
}

export interface CtaSection extends BaseSection {
  type: 'cta-fullscreen';
  bgImage: string;
  action: { label: string; href: string };
}

// シングルトンでデータをキャッシュ
let cachedContent: ContentConfig | null = null;

/**
 * テーマのコンテンツを読み込む
 */
export async function loadContent(): Promise<ContentConfig> {
  if (cachedContent) return cachedContent;

  const themeName = process.env.NEXT_PUBLIC_THEME || 'github-docs';
  
  try {
    const filePath = path.join(process.cwd(), 'themes', themeName, 'content.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    cachedContent = JSON.parse(fileContents);
    return cachedContent!;
  } catch (error) {
    console.error(`Failed to load theme content for ${themeName}:`, error);
    return fallbackContent;
  }
}

/**
 * ドキュメントページを個別に取得
 */
export async function getDocPage(slug: string): Promise<DocPage | undefined> {
  const content = await loadContent();
  return content.pages.docs?.find(page => page.slug === slug);
}

/**
 * 全てのドキュメントページのスラッグを取得（静的生成用）
 */
export async function getAllDocSlugs(): Promise<string[]> {
  const content = await loadContent();
  return content.pages.docs?.map(page => page.slug) || [];
}

// フォールバック用データ
const fallbackContent: ContentConfig = {
  site: {
    name: "Error Loading Theme",
    tagline: "Configuration Error",
    description: "Please check your theme configuration.",
    logo: { text: "Error", icon: "alert" }
  },
  navigation: [],
  pages: {
    home: {
      hero: {
        type: "cinematic",
        title: "Error",
        subtitle: "Theme Not Found",
        description: "Could not load content.json",
        bgImage: "",
        overlay: "dark",
        actions: []
      },
      sections: []
    }
  }
};
