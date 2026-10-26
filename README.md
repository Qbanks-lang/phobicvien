# Phobicvien — Build Websites, Build Skills, Build Income

**Owner:** PRATIK PEX  
**Mission:** Help young builders learn to plan, design, build, launch, and sell useful websites.

Phobicvien is an open-source learning and project starter for people who want to turn web-development skills into real client work. The long-term ambition is to help builders work toward high-value projects — including a **$10,000 website project** — through practical skills, strong execution, and ethical client service. **Income is never guaranteed**; results depend on skill, market demand, communication, sales, delivery, and experience.

## What this project aims to provide

- A practical path from idea to a polished, responsive website.
- Project planning, scope definition, and client discovery checklists.
- UI/UX guidance, accessibility, responsive design, and quality review.
- Reusable starter patterns for frontend and backend development.
- AI-assisted workflows that keep secrets on the server.
- Deployment, handoff, maintenance, and client communication guides.
- A portfolio-first approach: build real examples before making income claims.

## Current technical starter

This repository currently includes a minimal Node.js/Express backend that calls the OpenAI Responses API from the server.

### Requirements

- Node.js 20+
- An OpenAI API key from your own OpenAI account, with API access and billing configured

### Run locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env` and add your own key to `OPENAI_API_KEY`. Never commit `.env`.

3. Start the server:

   ```bash
   npm run dev
   ```

4. Check `http://localhost:3000/health`.

5. Test the chat endpoint:

   ```bash
   curl -X POST http://localhost:3000/api/chat \
     -H "Content-Type: application/json" \
     -d '{"message":"Help me plan a responsive website for a local business."}'
   ```

### API endpoints

- `GET /health` — basic health check.
- `POST /api/chat` — accepts `{"message":"your question"}` and returns `{"reply":"..."}`.

Example frontend request:

```js
const response = await fetch("http://localhost:3000/api/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ message: userMessage })
});

const data = await response.json();
if (!response.ok) throw new Error(data.error || "Request failed");
console.log(data.reply);
```

Use your deployed backend URL in production and configure `CORS_ORIGINS` to the exact frontend origin(s).

## Recommended learning roadmap

1. **Foundations:** HTML, CSS, JavaScript, Git, GitHub, and browser developer tools.
2. **Design:** responsive layouts, typography, spacing, accessibility, UX research, and design systems.
3. **Build:** reusable components, forms, validation, APIs, and data storage.
4. **Ship:** testing, performance, SEO basics, deployment, analytics, and backups.
5. **Portfolio:** build 2–3 complete demo projects with clear case studies.
6. **Client work:** discovery calls, written scope, milestones, contracts, revisions, handoff, and maintenance.
7. **Grow responsibly:** collect testimonials with permission, improve your process, and price based on value and evidence.

See [the roadmap](docs/ROADMAP.md) for more detail and [the tools guide](docs/TOOLS.md) for gstack and UI UX Pro Max references.

## Design and engineering tools

- [gstack](https://github.com/garrytan/gstack) — an open-source workflow toolkit for coding agents, including planning, review, QA, and release-oriented workflows. Install and use it according to its upstream documentation.
- [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) — an open-source design-intelligence skill for exploring UI styles and building more consistent interfaces. Follow its current installation guide and license.
- These tools are **referenced, not copied wholesale into this repository**. Keep their upstream attribution and follow their licenses if you install, adapt, or redistribute their files.

## Security: no shared API keys

The public repository [dan1471/FREE-openai-api-keys](https://github.com/dan1471/FREE-openai-api-keys) was requested as a reference, but **its API keys are not imported into Phobicvien**. Publicly posted keys may be exposed, stolen, revoked, or unauthorized to use. Phobicvien does **not** import or use API keys collected from public repositories. Keys posted publicly may be stolen, exposed, revoked, or used without the account owner's permission. Use a key created for your own account and store it in a server-side environment variable or your hosting provider's secret manager.

- Never place API keys in frontend code, public files, screenshots, issues, or commits.
- Never use keys copied from repositories claiming to provide free API keys.
- Set provider spending limits where available and monitor usage.
- Add authentication, per-user quotas, monitoring, and a shared rate-limit store before a public launch.
- If a key is exposed, revoke it immediately and create a replacement.

Read [SECURITY.md](SECURITY.md) before deploying.

## Project principles

- **Learn by building:** each guide should lead to a concrete result.
- **No income guarantees:** teach skills and business practices without promising earnings.
- **Security by default:** secrets stay server-side and user data is minimized.
- **Accessible by default:** mobile-friendly, readable, keyboard-usable interfaces.
- **Respect licenses:** credit upstream projects and follow their terms.
- **Honest marketing:** no fake testimonials, fabricated results, or misleading client claims.

## Contributing

Issues, documentation improvements, bug reports, and beginner-friendly examples are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md).

## Useful official resources

- [OpenAI API quickstart](https://developers.openai.com/api/docs/quickstart)
- [OpenAI API authentication](https://developers.openai.com/api/reference/overview)
- [GitHub Docs](https://docs.github.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [web.dev](https://web.dev/)

---

Built by **PRATIK PEX** with the goal of making professional web-building skills more accessible.
