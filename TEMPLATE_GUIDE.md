# 📘 Template Architecture & Developer Guide

This document describes the architecture of the Code Voyage template and guidelines for developers and AI agents.

## 🏗️ Architecture Overview

This project uses a **"JSON-Driven Content Engine"** architecture.
This means that the site's content (text, images, structure) is completely decoupled from the React components (logic, UI).

### Directory Structure

```
/workspace
├── .github/            # CI/CD workflows & templates
├── app/                # Next.js App Router (Do not edit content here)
├── themes/             # THEME DEFINITIONS (Edit content here)
│   └── github-docs/
│       └── content.json  <-- MASTER DATA
├── lib/                # Data loaders
├── components/         # UI Components (Presentational)
├── scripts/            # Maintenance scripts
└── README.md           # Auto-generated
```

## 🤖 For AI Agents

When you are asked to update content, add pages, or change text:

1.  **DO NOT edit `app/**/*.tsx` files for content changes.**
    *   The `tsx` files are templates. Hardcoding text there breaks the theme system.
2.  **ALWAYS edit `themes/github-docs/content.json`.**
    *   This is the single source of truth.
    *   Add new entries to `docs`, `blog`, or `features` arrays to create new pages automatically.
3.  **Check Integrity.**
    *   After editing JSON, run `npm run check` in the root directory to ensure all links and images are valid.

## 🛠️ How to Extend

### Adding a New Documentation Page

1.  Open `themes/github-docs/content.json`.
2.  Find the `pages.docs` array.
3.  Add a new object:
    ```json
    {
      "slug": "my-new-topic",
      "title": "My New Topic",
      "subtitle": "Chapter X",
      "description": "Short description...",
      "image": "https://...",
      "content": "## Markdown Content\n\nWrite your content here...",
      "related": ["existing-slug"]
    }
    ```
4.  The page will be automatically generated at `/docs/my-new-topic`.

### Adding a Blog Post

1.  Find `pages.blog.posts` in `content.json`.
2.  Add a new post object following the schema.

### Changing Design/Theme

1.  **Colors**: Edit `app/globals.css` CSS variables (`--color-*`).
2.  **Components**: Edit files in `app/components/`. Use Tailwind CSS.

## 🧪 Quality Control

The repository includes strict validation scripts:

*   `npm run check:links`: Validates all internal links, including dynamic routes generated from JSON.
*   `npm run check:images`: Validates existence of local images and HTTP status of external images.
*   `npm run lint`: ESLint check.

**Always run `npm run check` before committing.**

## 🚀 Deployment

*   Push to `main` branch triggers the GitHub Pages deployment workflow.
*   `README.md` is automatically regenerated based on `content.json` via GitHub Actions.
