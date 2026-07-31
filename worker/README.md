# One-time CMS login setup

The CMS page is available at `/admin/`, but GitHub login requires a one-time OAuth authenticator.

1. Deploy the official/community Sveltia CMS Authenticator to Cloudflare Workers.
2. Create a GitHub OAuth App.
3. Put the Worker URL into `public/admin/config.yml` as `base_url`.
4. Commit the change. After Cloudflare redeploys, open `https://techtrovesell.com/admin/`.

Do not publish GitHub client secrets in the repository. Store them as encrypted Cloudflare Worker secrets.
