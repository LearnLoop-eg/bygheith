# By Gheith — personal brand site

Marketing & ecommerce expert who plays golf. Built with Next.js 16 (App Router),
TypeScript, and Tailwind v4. Palette: Fairway & Bone (pine #1A3C34, bone
#F2EDE3, brass #B08D57).

## Run locally

    npm install
    npm run dev      # http://localhost:3000
    npm run build    # production build

Note: next/font fetches Inter + Fraunces from Google Fonts at build time. This
works on Vercel and any normal network. It fails only on a machine that blocks
fonts.googleapis.com.

## Pages

- /          home (hero, trust, case studies, packages, golf, podcast, CTA)
- /work      full case studies with metrics
- /about     bio, experience, philosophy
- /golf      the long-game brand story
- /podcast   coming-soon + email capture
- /book      free 15-min call form -> WhatsApp or email

## Fill these in before launch

1. WhatsApp number — src/app/book/page.tsx, WHATSAPP_NUMBER
   (international format, no + or spaces, e.g. 2010xxxxxxxx).
2. Email form endpoint — FORM_ENDPOINT in src/app/book/page.tsx and the podcast
   form action in src/app/podcast/page.tsx. Easiest: create a free form at
   formspree.io and paste the endpoint. (Can swap for Resend later, like
   LearnLoop's notify@ setup.)
3. Photos — drop into public/images/:
   - gheith.jpg (portrait, used on /about)
   - golf.jpg (on the course, used on /golf)
   Then replace the placeholder divs with next/image.
4. Content — all copy lives in src/lib/content.ts. Edit there; pages update.

## Deploy (Vercel)

1. Push to GitHub.
2. Import the repo in Vercel (auto-detects Next.js).
3. Add domain bygheith.com in Vercel, update records at Namecheap
   (same flow as joinlearnloop.com).

## Next ideas (not built yet)

- Digital products / templates store (high-margin, passive)
- Blog/insights with MDX (migrate Squarespace posts)
- Real podcast episode embeds once you launch
- Testimonials section once you have a few
