# Jawad Ali Raza — Portfolio

Personal portfolio site, built with Next.js and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Chat widget

There's an AI chat widget in the bottom-right corner with a set of quick FAQ chips (instant, pre-written answers — no API call) plus a free-text box for anything else (answered live by AI).

- **AI answers** — get a free key at [console.groq.com](https://console.groq.com), then add it to a `.env.local` file (copy `.env.local.example`):
  ```
  GROQ_API_KEY=your-key-here
  ```
  Add the same variable in your Vercel/Netlify project settings when you deploy. Without it, the widget still works but replies with a "not configured yet" message for anything outside the FAQ chips.
- **FAQ chips** — edit `src/data/faqs.ts` to change the questions/answers shown as quick replies.

## Deploy

Deploys cleanly on [Vercel](https://vercel.com) — import the repo and it just works, no config needed. Netlify is also supported.

## Structure

- `src/data/` — content (projects, skills)
- `src/components/` — page sections
- `src/app/` — layout and global styles

To add a project, add an entry to `src/data/projects.ts`.
