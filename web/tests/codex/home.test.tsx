import { render, screen, within } from '@testing-library/react';
import Page from '../../app/page';
import { githubDocs, categories } from '../../app/data/github-docs';

describe('ホームページのコンテンツ', () => {
  test('ヒーローセクションが正しく表示される', () => {
    render(<Page />);

    expect(screen.getByRole('heading', { name: /GitHub Docs/ })).toBeInTheDocument();
    expect(screen.getByText('完全マニュアル')).toBeInTheDocument();

    const ctaLink = screen.getByRole('link', { name: '最初のトピックを始める' });
    expect(ctaLink).toHaveAttribute('href', '/docs/getting-started');
  });

  test('カテゴリとトピックが全て表示される', () => {
    render(<Page />);

    const categoriesSection = screen.getByRole('heading', { level: 2, name: 'カテゴリ' }).closest('section');
    const productsSection = screen.getByRole('heading', { level: 2, name: '学習トピック' }).closest('section');

    expect(categoriesSection).not.toBeNull();
    expect(productsSection).not.toBeNull();

    // getAllByText の代わりに getAllByRole で取得し、クラス名でフィルタリング
    const categoryTags = within(categoriesSection as HTMLElement)
      .getAllByRole('generic', { hidden: false })
      .filter(el => el.classList.contains('category-tag'));
    expect(categoryTags).toHaveLength(categories.length);
    // より堅牢な方法でラベルを取得（spanのインデックス依存を排除）
    const categoryLabels = categoryTags.map(tag => {
      // category-tag内のspan要素のうち、カテゴリ名と一致するものを取得
      // ここではcategories配列のいずれかと一致するテキストを持つspanを探す
      const label = Array.from(tag.querySelectorAll('span')).find(
        (el) => categories.includes(el.textContent?.trim() || '')
      );
      return label?.textContent?.trim();
    });
    expect(categoryLabels).toEqual(expect.arrayContaining(categories));

    const productLinks = within(productsSection as HTMLElement).getAllByRole('link');
    expect(productLinks).toHaveLength(githubDocs.length);
    const productTitles = productLinks.map(link => link.querySelector('.product-title')?.textContent?.trim());
    expect(productTitles).toEqual(expect.arrayContaining(githubDocs.map(doc => doc.title)));
  });
});
