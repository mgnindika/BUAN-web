# Copilot Instructions for BUAN-web

## Project Overview
- **BUAN-web** is a static website project structured with HTML, CSS, and JavaScript.
- The main entry point is `index.html` at the root.
- Styles are organized in `css/` (notably `style.css` and `animations.css`).
- JavaScript logic is in `js/` (`main.js`, `data.js`, `animations.js`).
- Content pages are under `pages/`, grouped by topic (e.g., `about/`, `data-science-education/`, etc.).

## Key Patterns & Conventions
- **No build system**: Files are served statically; there is no bundler or transpiler.
- **Navigation**: Each section/topic has its own folder in `pages/` with related HTML files.
- **JS/CSS organization**: Shared scripts and styles are in `js/` and `css/` at the root, not duplicated per page.
- **Animations**: Handled via `css/animations.css` and `js/animations.js`.
- **Data**: Any static data or configuration is likely in `js/data.js`.

## Developer Workflows
- **Preview**: Open `index.html` directly in a browser for local development.
- **No build/test commands**: There are no npm scripts, build tools, or automated tests.
- **Debugging**: Use browser dev tools (F12) for inspecting HTML, CSS, and JS.

## Project-Specific Guidance
- **Add new pages**: Place new HTML files in the appropriate `pages/` subfolder. Update navigation in `index.html` or other relevant files.
- **Add scripts/styles**: Place shared logic in `js/` or `css/`. Reference them in HTML as needed.
- **No external dependencies**: The project does not use npm or package managers; all dependencies are local.
- **Keep structure flat**: Avoid deep nesting or complex build steps; maintain the static, simple structure.

## Examples
- To add a "Partners" page: create `pages/about/partners.html`, then link it from `index.html` or `about/` pages.
- To add a new animation: update `css/animations.css` and, if needed, `js/animations.js`.

## Reference Files
- `index.html`: Main entry point and navigation.
- `css/style.css`, `css/animations.css`: Core styles and animations.
- `js/main.js`, `js/data.js`, `js/animations.js`: Main scripts and data.
- `pages/`: All content pages, organized by topic.

---
For questions about project structure or conventions, review this file and `README.md`.
