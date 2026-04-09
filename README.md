# Clements Computer Science Club Website

This repository contains the Clements Computer Science Club website built with React, Vite, and React Router.

## Overview

- Multi-page club site with routes for home, about, officers, events, resources, and contact
- Shared layout and styling system with route-specific computer science themed backgrounds
- Centralized content management through `src/data/siteContent.js`
- Dedicated officer and event data modules for roster and timeline updates
- Vercel-ready single-page app routing

## Tech Stack

- React 19
- Vite
- React Router
- Framer Motion

## Main Files

- `src/data/siteContent.js`
  Primary source for club identity, meeting details, links, about-page copy, and contact info.
- `src/data/officers.js`
  Officer roster, roles, and image filenames.
- `src/data/events.js`
  Event listing and timeline data.
- `src/components/`
  Reusable homepage, layout, background, and section components.
- `src/pages/`
  Route-level page components.
- `public/images/csclub-logo.webp`
  Current club logo used for branding, favicon, and social preview metadata.
- `vercel.json`
  SPA rewrite config for deployment on Vercel.

## Updating Content

- Club branding, meeting details, links, and resources:
  `src/data/siteContent.js`
- Officer roster:
  `src/data/officers.js`
- Event listings:
  `src/data/events.js`
- Browser tab and social metadata:
  `index.html`

## Local Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment Notes

- The project is configured as a single-page app.
- `vercel.json` rewrites all routes to `index.html` so page refreshes work on Vercel.
- The current favicon and social preview image both use the club logo at `public/images/csclub-logo.webp`.

## Still Useful To Add Later

- Officer photos
- Optional contest materials link
- Optional gallery/photos folder
- Optional project showcase link

## Finishing Touches To Consider Later

- Custom domain for a cleaner public link
- Final social preview graphic designed specifically for link sharing
- More real event entries and archive history
- Officer bios if the club wants more personality on the leadership page
- Gallery or photo archive if the club starts collecting event media
- Project showcase section if members want to feature work publicly
- Accessibility pass for alt text, contrast, and keyboard navigation review
- Analytics or simple traffic tracking, if the club wants to monitor visits
- Seasonal content refresh each school year for officers, dates, and meeting info

Only finalized links are shown on the public site.
