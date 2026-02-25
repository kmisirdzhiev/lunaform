# Lunaform Design System (From Figma)

Source file: `https://www.figma.com/design/PFYT0rQ9qCOXqHRwMcaEs8/Lunaform`
Requested node: `217:175`

Note: Direct MCP reads for node `217:175` were blocked by current Figma MCP plan limits. This document is compiled from previously fetched Lunaform nodes in this same file (desktop homepage sections) and marked as inferred where applicable.

## 1) Design Tokens (CSS Variables)

```css
:root {
  /* Background */
  --color-bg-muted: #f7f4ef;
  --color-bg-strong: #e4ded3;
  --color-bg-cta: #dca991;
  --color-bg-dark: #4b4843;

  /* Text */
  --color-text-primary: #3a3732;
  --color-text-secondary: #726d66;
  --color-text-muted: #8c877f;
  --color-text-inverse: #f7f4ef;

  /* Brand */
  --color-primary-700: #c17a5e;
  --color-secondary-700: #a8ad9c;

  /* Borders / lines */
  --color-border-default: #d1caba;
  --color-border-focus: #a8ad9c;

  /* Radius */
  --radius-pill: 999px;
  --radius-xl: 32px;

  /* Spacing */
  --space-2xs: 4px;
  --space-xs: 8px;
  --space-s: 12px;
  --space-m: 16px;
  --space-l: 24px;
  --space-xl: 28px;
  --space-2xl: 36px;
  --space-3xl: 48px;
  --space-5xl: 72px;

  /* Container */
  --container-desktop: 1296px;
}
```

## 2) Typography Scale

Primary sans family:
- `Inter` (weights: 400, 500, 700)

Display/serif family in Figma:
- `Quincy CF` (fallback recommendation: `Cormorant Garamond`, italic)

Suggested scale:

```css
:root {
  --font-sans: "Inter", "Helvetica Neue", Arial, sans-serif;
  --font-display: "Quincy CF", "Cormorant Garamond", Georgia, serif;

  --text-13: 13px;
  --text-16: 16px;
  --text-18: 18px;
  --text-24: 24px;
  --text-40: 40px;
  --text-64: 64px;

  --lh-tight: 1.1;
  --lh-base: 1.6;
  --lh-cta: 1.3;

  --tracking-display: -0.9px;
}
```

Usage mapping:
- Hero title: `64 / 1.0` display italic, negative tracking.
- Section titles: `40 / 1.1` display italic.
- Card titles / quote blocks: `24 / 1.1-1.6` display italic.
- Body default: `16 / 1.6`.
- Body emphasized/nav: `18 / 1.6`.
- Footer legal/meta: `13 / 1.6`.

## 3) Spacing Rules

Layout:
- Desktop outer gutters: `72px` left/right.
- Section vertical rhythm: mostly `48px` top/bottom.
- Internal stack gaps: commonly `36px`, `24px`, `12px`, `8px`.

Components:
- Pill button padding: `16px 32px`.
- Icon circle frame: `45x45` with `12px` inner inset.
- FAQ item vertical spacing: title row + `8-12px` content spacing.

Grid:
- Multi-card desktop rows typically use `24px` column gaps.
- Three-column and four-column structures collapse responsively (inferred implementation rule).

## 4) Component API Docs

## Button

Purpose:
- Primary CTA and outlined secondary actions.

Variants:
- `primary`: filled `--color-primary-700`, white text.
- `outline`: 2px border `--color-secondary-700`, neutral text.

Props:
- `variant`: `"primary" | "outline"`
- `size`: `"md"` (default, maps to `16px 32px`)
- `label`: string
- `href` or `onClick`
- `fullWidth` (recommended for narrow mobile CTAs)

## Section Heading

Purpose:
- Reusable heading block for major sections.

Props:
- `title`: string (display style)
- `description?`: string (body style)
- `align`: `"left"` (default), future-safe for center

## Header / Navigation

Purpose:
- Top navigation with logo, links, and social icons.

Props:
- `links`: `{label, href}[]`
- `social`: `{name, href, iconSrc}[]`
- `mobileMenuEnabled`: boolean

Behavior:
- Mobile menu toggle opens stacked nav; closes on outside click and item click.

## Hero

Purpose:
- Entry section with background image overlay, headline, supporting text, and primary CTA.

Props:
- `backgroundImageSrc`
- `overlayOpacity` (default `0.4`)
- `title`
- `subtitle`
- `primaryCta`

## Process Step Card

Purpose:
- Explain each project phase in sequence.

Props:
- `index` (or `iconSrc` if exact icon assets available)
- `title`
- `description`

Layout rule:
- 4 columns on desktop, stacked on smaller viewports.

## Project Card

Purpose:
- Showcase kitchen project preview.

Props:
- `imageSrc`
- `title`
- `description`
- `href?`

Image rule:
- Preserve cover behavior and fixed aspect ratio per design.

## Reason Card

Purpose:
- Value proposition item in dark section.

Props:
- `iconSrc?`
- `title`
- `description`

## Testimonial Card

Purpose:
- Customer quote with author/location metadata.

Props:
- `quote`
- `author`
- `location`

Style rule:
- Left border accent, italic quote style.

## FAQ Item (Accordion)

Purpose:
- Expand/collapse answer rows.

Props:
- `question`
- `answer`
- `defaultOpen` (boolean)
- `iconSrc` (chevron)

Behavior:
- Single-open accordion recommended.
- `aria-expanded` must reflect state.

## Footer

Purpose:
- Brand statement, copyright, social icons.

Props:
- `brandText`
- `copyright`
- `social`

## 5) Responsive Guidance (Inferred)

Breakpoints:
- `<=1200px`: reduce typography scale, collapse dense grids to 2 columns.
- `<=900px`: mobile nav pattern, single-column content-heavy grids.
- `<=640px`: compact spacing and CTA width adjustments.

Rules:
- Keep horizontal padding proportional (`72 -> 24/16`).
- Preserve display hierarchy (hero title remains largest type).
- Keep CTA touch targets >= 44px height.

## 6) Gaps / Follow-up Needed

When MCP quota is available again, refresh this file from node `217:175` directly and verify:
- exact token naming conventions in that node;
- full icon asset mapping for process/reason sections;
- any additional typography styles not present in homepage nodes.
