# Northstar Home Services — Portfolio Demo

> **A premium, responsive landing page concept created by AS Tech Studio to showcase web design and front-end development capabilities to international agencies.**

---

## 1. Project Overview

- **Brand:** Northstar Home Services
- **Tagline:** “Your Home. Taken Care Of.”
- **Target Market:** Fictional residential homeowners in the United States.
- **Creator / Studio:** AS Tech Studio
- **Project Purpose:** Demonstrating art-directed UI design, responsive layout engineering, accessible front-end patterns, and clean vanilla web standards without framework bloat or paid dependencies.

---

## 2. Technical Architecture & Constraints

- **Technology Stack:** Pure HTML5, CSS3, and vanilla JavaScript (ES6+).
- **Zero Build Tools & Zero Dependencies:** No React, Vue, Webpack, Vite, Tailwind, backend server, database, or paid APIs.
- **Standalone Execution:** Runs immediately by opening `index.html` directly in any modern desktop or mobile web browser.
- **Relative Pathing:** All assets, styles, and scripts use relative links, ensuring seamless hosting on GitHub Pages, Cloudflare Pages, Netlify, or local directories.

### File Structure
```text
Northstar-Home-Services/
├── index.html        # Semantic HTML5 markup and accessible landmarks
├── styles.css        # CSS custom properties, responsive layout, animations
├── script.js         # Vanilla JS (navigation, accordion, form validation)
└── README.md         # Comprehensive project documentation & run guide
```

---

## 3. Art Direction & Design Direction

The design reflects an authentic, premium American home-services brand—clean, dependable, and warm, avoiding generic AI templates or overcrowded layouts.

- **Color System:**
  - **Warm Off-White Background:** `#FAF8F5` base with `#FFFFFF` card surfaces and `#F4EFE9` section contrasts.
  - **Deep Midnight Navy Typography:** `#0F1A2A` for primary headings, `#35475E` for readable body text.
  - **Muted Sage Green Accents:** `#3D5E4E` primary sage for badges, service icons, and subtle borders.
  - **Restrained Amber Accent:** `#C66914` for high-visibility calls-to-action (exceeds WCAG 4.5:1 AA contrast ratio against white/cream backgrounds).
- **Typography:**
  - Scaled Google Font `Plus Jakarta Sans` with fallback to native system fonts (`-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `Roboto`, `Helvetica`, `Arial`).
- **Selective Border Radii:** Clean, tailored geometry (8px–14px) rather than exaggerated curves.
- **Subtle Micro-Interactions:** Subtle card elevations (`translateY(-3px)`), gentle shadow shifts, and fluid accordion disclosures.
- **Motion Accessibility:** Complete `prefers-reduced-motion: reduce` support that disables animations, transitions, and smooth scrolling for users who prefer reduced motion.

---

## 4. Key Sections & Functional Features

1. **Top Announcement Bar:**
   - “Reliable home care, without the hassle.”
   - Displays clear portfolio context and direct quote link.
2. **Accessible Header & Navigation:**
   - Bespoke inline SVG Northstar roof & compass star emblem.
   - Smooth-scrolling anchor links for desktop.
   - Slide-over mobile drawer navigation with focus management, backdrop dismissal, and `Escape` key support.
3. **Hero Section:**
   - Headline: *“A Better Way to Care for Your Home.”*
   - Supporting copy: *“Thoughtful maintenance and dependable home services that help you keep your space running smoothly.”*
   - Primary & Secondary CTAs (*“Request a Free Quote”* and *“Explore Services”*).
   - High-contrast, authentic trust indicators without fabricated metrics.
4. **Core Services Grid:**
   - Home Maintenance
   - Cleaning & Upkeep
   - Repairs & Handyman Help
   - Seasonal Home Care
   - Each card features custom inline vector icons and an *“Inquire About...”* button that auto-populates the service in the quote form.
5. **Why Northstar:**
   - 4 foundational service pillars: Clear communication, Thoughtful workmanship, Convenient scheduling, Straightforward estimates.
   - Grounded in authentic in-home service standards.
6. **How It Works:**
   - Simple 3-step timeline (Tell us what you need &rarr; Review your estimate &rarr; Schedule your service).
7. **Project Showcase (Concept Case Studies):**
   - Three illustrative residential projects with scope breakdowns, execution timelines, and clear concept disclosures.
8. **Customer Feedback / Scenarios Section:**
   - Prominently labeled: **“Illustrative Sample Content — Not Real Customer Reviews”**.
   - Features representative homeowner situations and quality commitments without fabricating real persons, star ratings, or reviews.
9. **Accessible FAQ Accordion:**
   - 4 practical questions covering service areas, pricing transparency, scheduling windows, and scope boundaries.
   - Full ARIA compliance (`aria-expanded`, `aria-controls`), keyboard navigation (`Enter`, `Space`, `ArrowUp`, `ArrowDown`, `Home`, `End`).
10. **Interactive Quote Request Builder (Client-Side Demo):**
    - Complete client-side validation (Name, valid Email format, Service selection, min 10-character Project Description).
    - Clear demo notice explaining that **no backend exists** and no data leaves the browser.
    - Generates a formatted summary table upon validation with:
      - **“Copy Request Summary”** button (with temporary clipboard status feedback).
      - **“Open in Email Application”** (`mailto:`) fallback with an explicit note regarding mail client configuration.
      - **“Edit & Submit Another Test”** reset capability.
    - *Never displays a fake "Your request was sent to a technician" confirmation.*
11. **Footer:**
    - Fictional demonstration disclaimer, quick navigation, studio credits, and back-to-top button.
    - Contains no fake phone numbers or physical addresses.

---

## 5. Image Assets & Licensing

All photographic assets utilized in this project are licensed under the **Unsplash License** (free for commercial and personal use, no mandatory attribution required, though documented below for transparency).

| Image Purpose | Unsplash Source URL | Credit / Subject |
|---|---|---|
| **Hero Image** | `https://images.unsplash.com/photo-1600585154340-be6161a56a0c` | Modern suburban home exterior & grounds (Photo by Ralph Kelly) |
| **Project 01 (Exterior)** | `https://images.unsplash.com/photo-1590381105924-c72589b9ef3f` | Residential exterior cladding and roof line (Photo by Ralph Kelly) |
| **Project 02 (Interior)** | `https://images.unsplash.com/photo-1583847268964-b28dc8f51f92` | Living space millwork and natural lighting (Photo by Spacejoy) |
| **Project 03 (Plumbing)** | `https://images.unsplash.com/photo-1584622650111-993a426fbf0a` | Clean bathroom fixtures and modern valves (Photo by Christian Mackie) |

### Resilient Offline / Failure Fallback
Every image element includes an `onerror` handler and CSS fallback container. If an image fails to load (due to an offline environment, firewall, or network disruption), an elegant SVG architectural placeholder is displayed immediately, preventing broken image indicators or layout shifts.

---

## 6. How to Run Locally

### Option 1: Direct File Launch (No Server Needed)
1. Locate the project folder on your computer.
2. Double-click `index.html` (or right-click &rarr; **Open with** &rarr; your preferred browser, such as Chrome, Edge, Safari, or Firefox).
3. The page will render with all styling and interactivity intact.

### Option 2: Using a Lightweight Local Development Server (Optional)
If you prefer running through `localhost`:

- **Using Python 3:**
  ```bash
  python -m http.server 8000
  ```
  Then open `http://localhost:8000` in your browser.

- **Using Node.js (npx serve):**
  ```bash
  npx serve .
  ```

- **Using VS Code Live Server Extension:**
  Right-click `index.html` and choose **"Open with Live Server"**.

---

## 7. Deployment Instructions (GitHub Pages)

This project is pre-configured for instant zero-configuration deployment to GitHub Pages:

1. Initialize a Git repository inside this project directory (if not already initialized):
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Northstar Home Services landing page"
   ```
2. Create a new public repository on GitHub (e.g. `northstar-home-services`).
3. Link your local repository to GitHub and push your code:
   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```
4. Navigate to your repository on GitHub:
   - Go to **Settings** &rarr; **Pages** (under the "Code and automation" section).
   - Under **Build and deployment** &rarr; **Source**, select **Deploy from a branch**.
   - Under **Branch**, select `main` and folder `/ (root)`.
   - Click **Save**.
5. Within 1–2 minutes, your live site will be published at:
   `https://<your-username>.github.io/<repo-name>/`

---

## 8. Accessibility & Quality Audit Checklist

- [x] **Semantic Landmarks:** `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
- [x] **Heading Hierarchy:** Logical `h1` &rarr; `h2` &rarr; `h3` hierarchy without skipped levels.
- [x] **Contrast Compliance:** All text colors exceed WCAG 2.1 AA requirements (4.5:1 for body copy, 3:1 for large headers).
- [x] **Keyboard Navigation:** Fully navigable with `Tab` / `Shift+Tab`. Visual focus outlines (`:focus-visible`) styled with amber accents.
- [x] **Screen Reader Support:** Accessible labels (`aria-label`, `aria-labelledby`, `aria-describedby`, `aria-expanded`, `aria-controls`, `aria-live`).
- [x] **Responsive Viewports:** Seamlessly adapts across 320px mobile screens, 768px tablets, 1024px laptops, and 4K desktop displays with zero horizontal overflow.
- [x] **Graceful Fallbacks:** CSS fallback backgrounds and inline SVG badges for offline or blocked images.
- [x] **Ethical Disclosures:** Fictional concept clearly identified across hero, projects, scenarios, FAQ, form, and footer.

---

## 9. Credits & Studio Disclosures

- **Concept Design & Development:** [AS Tech Studio](https://github.com/as-tech-studio)
- **Purpose:** Portfolio demonstration prepared for international digital agencies.
- **Legal Notice:** Northstar Home Services is an entirely fictional entity. Any resemblance to real commercial businesses is purely coincidental.
