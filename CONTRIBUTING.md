# Contributing to Phobicvien

Thanks for helping make practical website-building education more accessible.

## Good contributions

- Beginner-friendly tutorials with working examples.
- Accessible, responsive UI patterns.
- Clear setup instructions and troubleshooting notes.
- Tests, bug fixes, security improvements, and documentation corrections.
- Honest portfolio and client-work templates.

## Before opening a pull request

1. Explain the problem and intended user benefit.
2. Keep changes focused and avoid unrelated rewrites.
3. Test the documented commands and key behavior.
4. Never include API keys, credentials, private client information, or unlicensed assets.
5. Add screenshots only when they help explain a visual change, and ensure you have permission to share them.
6. Document new environment variables and security implications.

## Standards

- Prefer clear code and explicit error handling.
- Keep secrets server-side.
- Do not add claims of guaranteed earnings or fabricate testimonials, client results, or project metrics.
- Respect the licenses and attribution requirements of external projects and assets.
- Be respectful and constructive in reviews.

## Local backend checks

```bash
npm install
npm run dev
```

Then verify `GET /health` and test `POST /api/chat` with your own authorized API key. Never use someone else's shared key.
