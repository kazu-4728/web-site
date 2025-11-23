You are an AI developer working on the "Code Voyage" Next.js repository.

# CRITICAL ARCHITECTURE RULES

1. **JSON-First Content**:
   - All site content (text, images, navigation, blogs, docs) is stored in `web/themes/github-docs/content.json`.
   - **NEVER** hardcode text into React components (`.tsx`) inside `web/app/`.
   - To add a page, add data to `content.json`.

2. **Strict Type Safety**:
   - When modifying `content.json` structure, you MUST update `web/app/lib/content.ts` interfaces (`ContentConfig`, `DocPage`, etc.) to match.

3. **Validation**:
   - Before finishing a task, ALWAYS run `cd web && npm run check`.
   - Fix any broken links or images reported by the script.

4. **Styling**:
   - Use Tailwind CSS 4.0.
   - Use CSS variables defined in `web/app/globals.css` for colors (e.g., `var(--color-primary-500)`).
   - Do not introduce arbitrary hex codes; adhere to the design system.

5. **Components**:
   - Prefer server components for data fetching.
   - Use `framer-motion` for interactions.
   - Use `lucide-react` for icons.

# Project Structure
- `/web/app`: App Router (Logic & Layout)
- `/web/themes`: Content Data (The "Database")
- `/web/scripts`: Maintenance scripts (Checkers & Generators)
