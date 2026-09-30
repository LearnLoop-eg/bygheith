# Design: Sun & Shadow

A sunlit Red Sea courtyard. Terracotta plaster walls in hard midday light, limewash rooms, pergola shadows that drift as the day (the scroll) goes on, ending at dusk. Replaces the earlier "Fairway & Bone" pine/bone/brass look (Oct 2026).

## Color (tokens in `src/app/globals.css`)

| Token | Hex | Role |
|---|---|---|
| `--wall` | `#cf7f68` | Terracotta plaster. Owns heroes, page openings, feature panels. |
| `--wall-shade` | `#b3614c` | Hairlines and borders on the wall. |
| `--wall-deep` | `#7c3a2d` | Arabic name, subtle accents on light grounds. |
| `--lime` | `#f3f2ee` | Limewash rooms (default page ground). |
| `--lime-line` | `#ddd6ce` | Rules and field borders on lime. |
| `--cobalt` | `#1f5fd6` | Actions (buttons, focus, selection) and one feature "room" per page at most. |
| `--ink` | `#2b1a1f` | Text. Plum-ink shadow, never pure black. |
| `--ink-soft` | `#5c3b39` | Secondary text on lime/white only (not on wall). |
| `--dusk` | `#33191d` | Closing section + footer. |
| `--dusk-text` | `#f1d9cf` | Text on dusk. |

Strategy: Committed. Terracotta carries 30-60% of each page. Body text on the wall is always `--ink`.

## Type

- Archivo variable (self-hosted, `src/fonts/archivo-wdth.woff2`, OFL), width axis 62-125.
- `.display`: width 125, weight 800, tracking -0.03em, line-height 0.95. Headlines.
- `.display-md`: width 118, weight 700. Sub-heads, big statements, metric values.
- `.inscription`: width 125, weight 600, uppercase, 0.14em tracking. Carved names only (the career band, nav wordmark).
- Body: Archivo 100 width, 1rem-1.25rem, 65ch measure.
- Arabic name غيث in Alexandria 700 (self-hosted). Signature only: nav, hero, footer.
- No eyebrows/kickers above headings. No em-dashes in copy.

## Shape

- Walls and panels: sharp, 6px radius max.
- Photo frames and podcast "doors": arch top (`.arch`, 999px top radii).
- Buttons: full pill. Inputs: 10px.
- No drop shadows on cards; the hero arch photo alone carries a soft terracotta-tinted shadow.

## Components

- `Pergola` (`src/components/Section.tsx`): diagonal slat shadows, `mix-blend-mode: multiply`, variants `wall`, `soft`, `dusk`.
- `PageHero`: every inner page opens on the wall, optional arch photo.
- `Closing`: every page ends on the dusk wall with one "Get in touch".
- `Reveal`: content below the fold steps from shade into light once.
- Buttons: `.btn-primary` (cobalt), `.btn-ghost` (outline, inverts to ink on hover), `.btn-light`.
- `.link-arrow`: underlined text link with a Phosphor arrow.
- Icons: `@phosphor-icons/react`, bold weight.

## Motion

- Signature: pergola stripes change angle (104deg to 132deg) and drift 520px across the whole page scroll (CSS `animation-timeline: scroll(root)`, `@property`). Static fallback where unsupported.
- Hero arch opens with a clip-path reveal (1.1s, ease-out).
- Reveal: 700ms opacity/translate/brightness, ease-out `cubic-bezier(0.23,1,0.32,1)`.
- Buttons scale to 0.97 on press. Hovers gated to fine pointers.
- `prefers-reduced-motion`: all movement off.

## Imagery

Owner photos only (`public/images`): `gheith.jpg` (home hero arch), `hero.jpg` (About), `golf.jpg` (Golf), `hero-wide.jpg` (home golf band, Golf page). No generated or stock imagery.
