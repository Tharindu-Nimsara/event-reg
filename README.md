# HackathonX Event Registration Website

A high-impact, modern event website for HackathonX built with Next.js App Router. It includes a dynamic landing page, rules page, and a live view/download delegate booklet experience.

## Overview

This project is designed as a fast, visually rich, single-brand event portal for:

- Announcing the hackathon and timeline
- Highlighting stats, past events, and FAQs
- Displaying contact details for the organizing team
- Providing an embedded and downloadable delegate booklet PDF

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4 + custom CSS
- ESLint 9 with `eslint-config-next`

## Project Structure

```text
event-reg/
├─ public/
│  ├─ footer-img.svg
│  ├─ images/
│  └─ delegate-book/DELEGATE-BOOK.pdf
├─ src/
│  └─ app/
│     ├─ layout.js
│     ├─ page.js                # Main landing page
│     ├─ page.css               # Landing page-specific styles
│     ├─ rules/
│     │  ├─ page.jsx            # Rules and regulations page
│     │  └─ rules.css
│     ├─ delegate-book/
│     │  ├─ page.jsx            # Live PDF view + download
│     │  └─ delegate-book.css
│     └─ components/
│        └─ NavBar.jsx
└─ package.json
```

## Main Routes

- `/` — Homepage (hero, stats, timeline, legacy gallery, FAQ, contacts, footer)
- `/rules` — Competition rules and regulations
- `/delegate-book` — Delegate booklet page with embedded PDF and download button

## Local Development

### Prerequisites

- Node.js 20+ (recommended for latest Next.js)
- npm (or pnpm/yarn/bun)

### Install

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

### Lint

```bash
npm run lint
```

## Performance Notes

The current implementation includes scroll and rendering optimizations such as:

- Lazy loading for non-critical images
- Async image decoding and low fetch priority where appropriate
- Reduced expensive filter/blur usage on heavy sections
- Animation tuning to improve scroll smoothness on lower-end devices

## Customization Guide

### Update Branding Content

- Homepage copy and section content: `src/app/page.js`
- Rules content: `src/app/rules/page.jsx`
- Delegate booklet page content: `src/app/delegate-book/page.jsx`

### Update Visual Styles

- Global styles: `src/app/globals.css`
- Homepage styles: `src/app/page.css`
- Rules styles: `src/app/rules/rules.css`
- Delegate booklet styles: `src/app/delegate-book/delegate-book.css`

### Replace Assets

- Footer background: `public/footer-img.svg`
- Contact images: `public/images/*`
- Delegate booklet PDF: `public/delegate-book/DELEGATE-BOOK.pdf`

## Deployment

This is a standard Next.js application and can be deployed to:

- Vercel (recommended)
- Netlify
- Any Node.js host that supports Next.js production builds

Basic deployment flow:

1. Push repository to GitHub
2. Connect repository to your hosting provider
3. Set build command: `npm run build`
4. Set start command: `npm run start` (if required by your platform)

## Scripts

From `package.json`:

- `npm run dev` — start development server
- `npm run build` — create production build
- `npm run start` — run production server
- `npm run lint` — run ESLint checks

## Contributing

Contributions are welcome. For major changes, please open an issue first to discuss what you would like to improve.

## License

No license file is currently included in this repository. Add a `LICENSE` file if you plan to make usage terms explicit.
