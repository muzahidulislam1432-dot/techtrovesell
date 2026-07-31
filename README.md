# TechTroveSell v3.0 — Professional CMS Edition

A Git-backed Astro affiliate publishing website designed for:

- Amazon Associates
- Product reviews
- Buying guides
- Product comparisons
- Curated deals
- Categories and authors
- Editable legal and company pages
- Browser-based image uploads
- SEO fields and structured content
- Free Cloudflare Pages hosting

## Public website

- Domain: `https://techtrovesell.com`
- CMS: `https://techtrovesell.com/admin/`
- Repository: `muzahidulislam1432-dot/techtrovesell`

## Cloudflare Pages build settings

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`

## What is editable in the CMS

- Product reviews
- Buying guides
- Product comparisons
- Deals
- Categories
- Authors
- Homepage heading, text, image and CTA
- Website name, tagline, email and social links
- About page
- Contact page
- Privacy Policy
- Cookie Policy
- Affiliate Disclosure
- Editorial Policy
- Disclaimer

## Important one-time authentication setup

The CMS files are included, but GitHub must securely authorize the dashboard before it can write to the repository.

1. Deploy the official `sveltia/sveltia-cms-auth` project to Cloudflare Workers.
2. Copy the new Worker URL.
3. Create a GitHub OAuth application.
4. Use `<WORKER_URL>/callback` as the GitHub authorization callback URL.
5. Add the GitHub Client ID and Client Secret to the Worker variables.
6. Set `ALLOWED_DOMAINS` to:
   `techtrovesell.com, www.techtrovesell.com`
7. Open `public/admin/config.yml`.
8. Replace:
   `https://YOUR-AUTH-WORKER.workers.dev`
   with the real Worker URL.
9. Commit the change.
10. Open `https://techtrovesell.com/admin/` and sign in with GitHub.

Never place the GitHub client secret in this repository.

## Publishing workflow

1. Open `/admin/`.
2. Choose Reviews, Guides, Comparisons, Deals, Categories, Authors or Pages.
3. Create or edit content.
4. Upload images through the image field.
5. Save as a draft or publish.
6. The CMS commits the change to GitHub.
7. Cloudflare Pages automatically rebuilds the website.

## Amazon Associates requirements

Before publishing a review:

- Replace sample content with original research.
- Use an authorized product image.
- Paste a genuine Amazon SiteStripe affiliate link.
- Keep the affiliate disclosure visible.
- Do not publish invented testing, fake ratings, fake discounts or inaccurate prices.
- Confirm current Amazon Associates policies before each campaign.

## Legal pages

The included policy pages are professional starting templates, not personalized legal advice. Edit them so they accurately describe the cookies, analytics, advertisements, forms, affiliate networks and services actually used by the website.

## AdSense

`public/ads.txt` is a placeholder. Add the real publisher line only after Google provides it.
