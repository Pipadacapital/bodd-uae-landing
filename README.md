# Bodd Active UAE Landing Page

Premium luxury activewear landing page for **Bodd Active UAE**, built with Next.js, Tailwind CSS, and Framer Motion.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repository.
3. Framework preset: **Next.js** (auto-detected).
4. Deploy — no extra env vars required for the landing page.

## Connect GoDaddy Domain

1. In Vercel: **Project → Settings → Domains** → add your domain (e.g. `boddactive.ae` or `www.boddactive.ae`).
2. Vercel shows DNS records to add (usually `A` record `76.76.21.21` and/or `CNAME` `cname.vercel-dns.com`).
3. In GoDaddy: **My Products → DNS** for your domain → add the records Vercel provides.
4. Wait for DNS propagation (up to 48 hours; often minutes).
5. Vercel provisions SSL automatically.

### GoDaddy quick reference

| Type  | Name | Value                 |
|-------|------|------------------------|
| A     | @    | `76.76.21.21`         |
| CNAME | www  | `cname.vercel-dns.com`|

Use the exact values shown in your Vercel domain settings.

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- Framer Motion
- TypeScript

## Brand assets

Logo: `public/logo.png`
