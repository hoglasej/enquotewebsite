# Make the site self-contained (for GitHub Pages)

Right now the site **hotlinks** media from `enquote.io` and `designden.sg` (videos, client
logos, hero banners, feature graphics, tutorial videos + screenshots). That works, but for a
fully independent GitHub-hosted site you should host the files yourself.

## Step 1 — download everything
From the project root:

```bash
bash scripts/download-assets.sh
```

This pulls every external file into `assets/media/…`. (Run it on your machine / in Claude Code —
it can't run inside the design tool, which is sandboxed from external downloads.)

## Step 2 — repoint the code (4 find-and-replace swaps)
Every external file is referenced through a base URL. Swap each live base for its local folder:

| Find (live URL base)                                        | Replace with (local)            |
|-------------------------------------------------------------|---------------------------------|
| `https://enquote.io/wp-content/uploads/2025/01/`            | `assets/media/2025-01/`         |
| `https://enquote.io/wp-content/uploads/2024/12/`            | `assets/media/2024-12-logos/`   |
| `https://enquote.io/wp-content/uploads/2024/10/`            | `assets/media/2024-10/`         |
| `https://designden.sg/wp-content/uploads/2024/12/`          | `assets/media/docs/`            |

These appear in: `js/sections-a.jsx` (home video + client logos), `js/pages.jsx`
(`SITE_IMG`, `HERO_IMG`), `js/docs-data.jsx` (tutorial videos + step images), and a couple of
inline page files.

> The cinematic-hero variant uses a sample stock clip from a CloudFront URL — that one isn't
> yours. Either ignore it (it's an optional Tweak variant) or replace it with your own clip.

## Paste this into Claude Code to do both steps automatically

> Run `bash scripts/download-assets.sh`. Then across the whole project, do these literal
> string replacements in every `.jsx` and `.html` file:
> - `https://enquote.io/wp-content/uploads/2025/01/` → `assets/media/2025-01/`
> - `https://enquote.io/wp-content/uploads/2024/12/` → `assets/media/2024-12-logos/`
> - `https://enquote.io/wp-content/uploads/2024/10/` → `assets/media/2024-10/`
> - `https://designden.sg/wp-content/uploads/2024/12/` → `assets/media/docs/`
> Then open `index.html` in a local server (`npx serve .`) and confirm the home video, client
> logos, page hero banners, feature graphics, and the Tutorials videos/screenshots all load
> from the local `assets/media` folder with no network calls to enquote.io or designden.sg.

## Note on remaining tutorials
As more tutorial videos are captured into `js/docs-data.jsx`, add their URLs to the bottom of
`scripts/download-assets.sh` so the download step stays complete.
