# EnQuote site — Hosting & Claude Code guide

This is a **static website**: plain HTML, CSS and JavaScript. React loads from a CDN, so
there is **no build step, no server, and no database** required. You can host it anywhere
that serves static files.

---

## What's in this project

```
enquote-landing.html        ← Home
about-the-software.html
services.html
customer-management.html
projects-document.html
cashflow-analysis.html
resources.html              ← Knowledge base (links to your live /docs)
daily-insights.html
contact-us.html
request-a-demo.html

styles/      ← tokens.css, sections.css, pages.css, product.css, hero3d.css, cinematic.css
js/          ← icons, site chrome (nav/footer), product UIs, page engine, app logic (.jsx)
assets/      ← enquote-logo.png (cropped from your logo)
tweaks-panel.jsx
```

Pages link to each other with relative links, so the whole folder works as-is.

---

## Fastest ways to host (pick one)

### 1. Netlify Drop (no account setup needed to try)
- Go to https://app.netlify.com/drop
- Drag the **entire project folder** onto the page.
- It's live on a `*.netlify.app` URL in seconds. Add your domain in Site settings → Domain.

### 2. Cloudflare Pages / Vercel
- Push the folder to a GitHub repo (see Claude Code steps below), then in
  Cloudflare Pages or Vercel choose "Import project" → select the repo →
  **Framework preset: None / Static** → **Build command: (leave empty)** →
  **Output directory: `/` (root)**. Deploy.

### 3. Your existing host (same place as enquote.io)
- Upload the files via SFTP/cPanel into a folder (e.g. `/new-site/`) and visit it directly,
  or replace the current static files once you're happy.

### 4. GitHub Pages
- Push to GitHub, then Settings → Pages → Deploy from branch → `main` / root.

---

## Using Claude Code

1. Download this project (button in the chat), unzip it, and open the folder in Claude Code.
2. **Preview locally:** `npx serve .`  then open the printed `localhost` URL.
3. **Deploy to Netlify:** `npm i -g netlify-cli && netlify deploy --prod`
   (or `npm i -g vercel && vercel --prod` for Vercel).
4. **Custom domain:** point a DNS `CNAME` (or `A`) record at your host and add the domain
   in its dashboard.

### Recommended prompt to give Claude Code (production hardening)
Paste this so Claude Code can polish it for production:

> This is a static HTML/CSS/JS site (React via CDN, JSX transpiled in-browser by Babel).
> Please production-harden it without changing the visual design:
> 1. Precompile the `js/*.jsx` and `tweaks-panel.jsx` files with esbuild/Vite so we no longer
>    load `@babel/standalone` in the browser (faster load, removes the console warning).
>    Keep the same DOM output.
> 2. Rename the HTML files to clean lowercase slugs (e.g. `about-the-software.html`) and update
>    all internal links accordingly. Keep `index.html` as the home page.
> 3. Add `<meta>` Open Graph/Twitter tags and a favicon to every page.
> 4. Optionally download the externally-hotlinked assets (see below) into `/assets` and
>    repoint the references, so the site doesn't depend on enquote.io being up.

---

## Assets that currently load from enquote.io

These are **hotlinked from your own domain** (fine while enquote.io is live). If you move hosts
or want full independence, download them into `/assets` and update the references:

- **Hero video:** `https://enquote.io/wp-content/uploads/2025/01/website.mp4` (in `js/sections-a.jsx`)
- **Client logos:** `https://enquote.io/wp-content/uploads/2024/12/*-300x300.png` (in `js/sections-a.jsx`)
- **Page hero banners:** `https://enquote.io/wp-content/uploads/2025/01/1.png … 4.png` (in `js/pages.jsx` / page files)
- **Feature graphics:** `https://enquote.io/wp-content/uploads/2024/10/*.gif|png` (in service pages)
- **Knowledge base links** point to your live `https://enquote.io/docs/...` tutorials (in `resources.html`).

---

## Notes / known polish items
- **In-browser Babel:** works on any host, but adds a moment of load time and prints a console
  warning. The Claude Code prompt above removes it.
- **Filenames have spaces:** they work (browsers encode them as `%20`), but clean slugs are nicer
  for SEO and sharing — the prompt above renames them.
- **Forms** (Contact, Request a Demo) validate and show a success state on the front end only.
  Wire them to your backend, a form service (Formspree/Netlify Forms), or your CRM to actually
  receive submissions.
- **Xero/QuickBooks marks** in the integration section are tasteful stand-ins — swap in official
  brand assets if you have them.
