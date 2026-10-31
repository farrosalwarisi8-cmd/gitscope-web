# GitScope — Promotional Website

Premium mobile-first landing page for the **GitScope** APK (GitHub Profile Finder mobile app).
Built with **Next.js 16 (App Router) + Tailwind CSS v4 + Framer Motion + Lucide icons**.

Color theme follows the app itself: deep purple `#0B0620 / #7C3AED` with gold `#F5A623` accents.

## Quick start

```bash
cd gitscope-web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

```bash
npm run build
npm start
```

## Project structure

```
src/
  app/
    layout.tsx      # fonts (Space Grotesk + Inter), SEO metadata
    page.tsx        # assembles all sections
    globals.css     # theme tokens, keyframes, glass/grid utilities
  components/
    Navbar.tsx      # sticky glass navbar + mobile menu
    Hero.tsx        # headline, search mock, store buttons, dual phones
    Features.tsx    # 8-feature premium grid
    Preview.tsx     # interactive Profile ↔ Ranking phone switcher
    Ranking.tsx     # podium + leaderboard list
    Testimonials.tsx# auto-scrolling review marquee
    FAQ.tsx         # accordion (ID/EN mix)
    Download.tsx    # CTA card with App Store / Play buttons
    Footer.tsx      # sitemap + disclaimer
    Section.tsx     # shared section header
    icons.tsx       # custom GitHub brand icon (lucide removed brand icons)
  lib/cn.ts
public/assets/
  logo.jpeg            # GitScope app icon
  screen-profile.png   # real app screenshot (profile)
  screen-ranking.png   # real app screenshot (ranking)
```

## Notes

- Mobile-first responsive: base styles target 390px, `sm:`/`md:`/`lg:` progressively enhance.
- Brand icons (GitHub logo) are custom SVG in `icons.tsx` because current `lucide-react`
  no longer ships brand icons.
- Leaderboard/testimonial content is sample data for illustration.
- Suggested next steps: wire store links to real Play/App Store URLs, add real QR code,
  connect `metadataBase` to the production domain before deploying.
