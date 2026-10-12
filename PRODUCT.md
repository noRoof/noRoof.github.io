# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro, built as a static site and published on GitHub Pages through a GitHub Actions workflow. The custom domain is `noroof.dev`. It replaces the previous Jekyll site. The user picked Astro over Next.js because the site is mostly static content.

## Users

Two audiences carry equal weight:

- **Local:** companies, startups and entrepreneurs in Uruguay who need custom software, an MVP, or help choosing technology. They read in Spanish.
- **International:** companies abroad, for example in the US or Europe, looking for a software partner in Uruguay. They read in English.

Both arrive while judging whether noRoof can be trusted to build their product. They want proof of capability, an idea of how working together would go, and a simple way to start a conversation.

## Product Purpose

noroof.dev is the home of **noRoof development**, a software consultancy that also builds and runs its own products. The site has to convert visitors into conversations, through the contact form or `hi@noroof.dev`, and send interested visitors on to the products, most of all noRoof Biz at https://biz.noroof.dev.

Success means a visitor understands within seconds that noRoof is a consultancy that works *with* its partners, sees that it ships real products, and either gets in touch or goes to a product.

## Positioning

noRoof is a consultancy that builds and runs its own products, so it knows the whole product cycle first-hand, not only client-side delivery. Its clients are partners: the existing copy strikes out "clients" and writes "partners" instead, and "We don't just work for you, we work with you" is its stated way of working. AI-driven software engineering practices are a named pillar of how the team works. The site names this pillar but must not explain how or where it is applied.

## Operating Context

- The site is one page with section anchors: process/services, products, experience, about/pillars and contact. The anchors `#process`, `#projects`, `#past-experience`, `#why-us` and `#contact` are already in use.
- The contact form posts to Formspree (`https://formspree.io/f/mbjkrvnz`) and redirects to `https://noroof.dev/thanks.html`. That URL must keep working.
- The site is bilingual. Spanish is the default at `/` and English lives at `/en/`.

## Capabilities and Constraints

- **Services:** front-end development (web apps, hybrid apps, PWAs), back-end development, cloud technologies including serverless, solutions consultancy, and business intelligence. The new pillar is AI-driven software engineering.
- **Products.** All three must appear:
  - **noRoof Biz** is live at https://biz.noroof.dev. It is an online store plus a back office for entrepreneurs. It runs on a pay-for-results model: "si no vendés, no pagás".
  - **noRoof Sport Club** is an app for managing sports clubs: members, players and squad information.
  - **Coolturus** is a platform for cultural events, news and workshops in Montevideo. It is currently on hold.
  - For Sport Club and Coolturus, use the facts in `_projects/` (legacy) without inventing a status.
- **Experience by industry:** fintech, education, oil transport, health, networking, insurance, and art and culture. The tech stacks are listed in `_experience/` (legacy).

## Brand Commitments

- The name is **noRoof development**, shortened to **noRoof**. The logo is the green isometric cube built from the letters "nR": `assets/img/fulllogo.png`, `logo.png` and `whitefulllogo.png`. The logo is binding.
- The legacy logo greens are approximately `#1fc83d` and `#49ee46`.
- noroof.dev has its own visual identity but shares DNA with biz.noroof.dev: it must feel like it comes from the same house without copying biz.
- The voice is honest and plain, and partnership comes first. Pillars: communication, transparency, technical expertise and continuous learning. Quality focus: security, UX, performance and quality.
- **Assumed, to confirm:** the Spanish copy uses Rioplatense *voseo*, matching biz.noroof.dev.

## Evidence on Hand

- Existing copy lives in `_process/`, `_projects/`, `_experience/` and `_why/` (Jekyll, legacy).
- The product images are `assets/img/noroof_biz.png`, `club_management.png` and `coolturus_image.png`.
- Industry experience entries have technology lists but no client names.
- **Do not name real clients, clubs or merchants.** There are no testimonials, metrics, team bios or founder names. Do not invent any, and do not add a team section.

## Product Principles

1. **Partners, not clients.** Every section should make clear that noRoof builds *with* people.
2. **Show, don't claim.** The products the company ships are the proof. Point to real things rather than adjectives.
3. **Two doors, one house.** Contact comes first and the products come second. Both are always within reach.
4. **Equal in both languages.** Spanish and English get the same depth and quality. Neither is a degraded translation.
5. **Honest about status.** Products show their real state (live, in development, on hold).

## Accessibility & Inclusion

The target is WCAG 2.2 AA. The `lang` attribute must match each locale (`es` and `en`). Respect `prefers-reduced-motion`.
