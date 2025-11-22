import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Page from '../../app/page';

describe('Homepage', () => {
  it('renders the main heading', () => {
    render(<Page />);
    const heading = screen.getByRole('heading', { name: /GitHub Docs 完全マニュアル/i });
    expect(heading).toBeInTheDocument();
  });
  
  it('renders navigation links', () => {
    render(<Page />);
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
  });
});
