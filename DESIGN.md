# Design: ByGheith

Cinematic personal-brand site on BR navy with chalk and orange chapters. References: Lando Norris (Awwwards SOTY 2025) for spot-colour discipline and cinematic scroll; By-Kin / Mat Voyce for weighted smooth scroll and kinetic type.

## Tokens (`src/app/globals.css`)
- `--ink #0f1f45` BR navy page, `--ink-2/3` navy surfaces, `--line #2f4477` rules
- `--chalk #f2f1ec` text and the one light chapter (ventures, podcast signup)
- `--mute #b0bad3`, `--mute-dark #95a1c2` secondary text on navy; footer and marquee on signal orange with navy text
- `--signal #ff5a1f` spot colour (the orange tab on the BR collar/cap): primary actions, emphasis, the ball flight. Nothing else.

## Type
- Mona Sans variable (self-hosted, OFL), width 112 weight 800 for `.display`, 400 for `.display-light`. Masks pad 0.18em so descenders never clip.
- Geist 100-900 (self-hosted, OFL): body and UI. `.label` for small caps labels.

## Motion (GSAP 3.15 + ScrollTrigger + SplitText, Lenis smooth scroll)
- Preloader: 000-100 count, GHEITH wordmark, curtain lift. First visit per session only.
- Hero: edge-to-edge cinema band cycling landscape shoot frames (clip wipe + scale settle, progress line, pointer drift); roles + CTAs beneath; full name fitted to viewport width. Text never overlaps photos. Scroll pins and the band opens to full screen.
- WordScrub manifesto, SplitReveal headings (lines rise from masks), ImageReveal (clip rise + scale settle + parallax), Counter.
- One velocity-reactive marquee (career). Pinned horizontal shoot strip with inner drift. Long Game: pinned ball flight drawn along an SVG arc, lessons swap per third.
- Magnetic buttons, fill-wipe hovers. All motion off under prefers-reduced-motion.

## Shape
- Photos 18px radius, pills for buttons, round 44 CTA in footer. Film grain fixed overlay.
