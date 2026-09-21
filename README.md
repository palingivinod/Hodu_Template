# HODU Template

Luxury villa website (React + Vite).

## Local development

```bash
npm run install:all
npm run dev
```

- Site: http://localhost:5174  
- API: http://localhost:5001  

## Netlify deploy

This repo is configured via `netlify.toml`:

- **Build command:** `npm install --prefix client && npm run build --prefix client`
- **Publish directory:** `client/dist`

Connect the GitHub repo in Netlify and deploy. SPA routing is handled by the redirect rule.

> Note: The contact form posts to `/api/enquire` (Express server). On Netlify static hosting that API is not included. Run the `server` folder on a Node host, or point the form to your own endpoint.
