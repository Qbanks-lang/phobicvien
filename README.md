# phobicvien — OpenAI API starter

This repository started empty. It now contains a minimal Node.js/Express backend that calls OpenAI's Responses API from the server, so the API key is not exposed to the browser.

## Requirements

- Node.js 20+
- An OpenAI API key and API billing/credits configured for your account

## Run locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env` and add your API key to `OPENAI_API_KEY`. Keep `.env` private; it is ignored by Git.

3. Start the server:

   ```bash
   npm run dev
   ```

4. Check the health endpoint at `http://localhost:3000/health`.

5. Test the chat endpoint:

   ```bash
   curl -X POST http://localhost:3000/api/chat \
     -H "Content-Type: application/json" \
     -d '{"message":"Explain what an API is in simple terms."}'
   ```

## Endpoint

- `GET /health` — basic health check.
- `POST /api/chat` — JSON body `{"message":"your question"}`; returns `{"reply":"..." }`.

## Frontend integration

Call your own backend from the frontend. Do not call OpenAI directly from browser code.

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

When deploying, replace the local URL with your deployed backend URL and set `CORS_ORIGINS` to the exact frontend origin(s).

## Security notes

- Never commit `.env` or paste your API key into source code, frontend variables, issues, or chat.
- Keep the API key in the hosting provider's server-side environment variable settings.
- The included rate limit is a basic per-process safeguard, not full production abuse protection. Add authentication, per-user quotas, monitoring, and a persistent/shared rate-limit store before public launch.
- Configure `CORS_ORIGINS` to your real frontend origin(s) in production.
- Set usage limits and monitor API spending in the OpenAI platform.
- If a key is ever exposed, revoke it and create a replacement.

Official quickstart: https://developers.openai.com/api/docs/quickstart
API authentication guidance: https://developers.openai.com/api/reference/overview
