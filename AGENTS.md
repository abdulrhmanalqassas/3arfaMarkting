<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Arfa Next.js project rules

Read the installed Next.js guides for the feature you are changing. For routing,
rendering, and interactive components, start with the App Router documentation.
Check dependency compatibility with the installed React and Next.js versions.

## File structure

```text
src/
  app/                  Next.js layouts, metadata, and route entry points
    3arfaMarkting/       Original Home URL
      about/             Original About URL
  features/
    home/               Home sections, partner scene, and contact form
    about/              About sections, galleries, team, and testimonials
  shared/
    navigation/         Shared site navigation
    styles/             Global stylesheet order and original theme
public/
  assets/               Original images, icons, and fonts
```

## Implementation rules

- Keep route entry points small. Compose each page from its feature directory.
- Use Server Components for layouts, route entry points, and static sections.
  Add `"use client"` at the smallest boundary that needs React state, effects,
  or browser APIs. Load browser-only libraries from those client boundaries.
- Use `next/link` for internal navigation. Preserve the existing route paths,
  search parameters, anchors, and browser back and forward behavior.
- Keep a component, its data, and feature-specific styles together. Share code
  only when multiple features use it. Use the `@/` alias for cross-feature imports.
- Use Next.js metadata for document metadata. Keep public asset URLs and original
  image sizing where an optimization would change layout or loading behavior.
- Preserve original content, DOM structure that affects layout, dark mode,
  CSS order, breakpoints, animations, and form behavior. Treat the two enabled
  routes in the original router as the page inventory.
- Use effects with cleanup for event subscriptions, timers, and imperative
  libraries. Keep render output deterministic across server and browser.
- Keep dependencies and the lockfile synchronized. Run lint and the production
  build before finishing. Compare both pages against the original in a browser
  at desktop and mobile sizes, and exercise their interactive states.
- Keep the app compatible with Vercel's standard Next.js build. Keep deployment
  and production changes within the user's requested scope.
