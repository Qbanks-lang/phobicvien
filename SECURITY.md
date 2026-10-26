# Security Policy

## Supported scope

This project is an educational starter. It is not automatically production-ready simply because it uses common security middleware.

## API keys and secrets

- Use only API keys created for accounts you control or are explicitly authorized to use.
- Do not use, scrape, copy, or redistribute keys posted in public repositories.
- Keep secrets in local environment files excluded by `.gitignore`, or in a hosting provider's server-side secret manager.
- Never expose API keys in browser code, public build variables, logs, screenshots, issues, or commits.
- If a key is exposed, revoke it immediately and replace it. Removing the string from the latest commit is not sufficient if it remains in Git history.
- Configure provider-side usage limits and monitor usage.

## Before public deployment

The current starter's in-memory rate limiter is a basic safeguard only. Before a public launch:
- Add authentication and per-user authorization where appropriate.
- Use shared/persistent rate limiting for multi-instance deployments.
- Add per-user quotas, abuse monitoring, request timeouts, and cost controls.
- Configure CORS with exact trusted frontend origins.
- Validate inputs and avoid logging sensitive user content.
- Add dependency scanning, tests, backups, and an incident response plan.
- Review privacy, data retention, and age-appropriate use for your audience.

## Reporting

Do not publish vulnerabilities, credentials, or private user data in public issues. Contact the repository owner privately through an available GitHub contact method and include steps to reproduce without exposing real secrets.
