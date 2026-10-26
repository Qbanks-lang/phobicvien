# Recommended AI-Assisted Tools

Phobicvien points to external tools rather than copying their entire codebases. Check each project's latest documentation and license before installing or redistributing anything.

## 1. gstack

Repository: https://github.com/garrytan/gstack

gstack provides role-oriented workflows for coding agents, including product planning, engineering review, QA, and release work. It is a development workflow tool, not a website template or a guarantee of code quality.

Suggested use:
1. Read the upstream README and requirements.
2. Install it for your coding agent using the upstream instructions.
3. Ask a planning workflow to challenge the website's audience, business goal, scope, and risks.
4. Use review and QA workflows after implementation.
5. Inspect every generated change yourself and run tests before deployment.

## 2. UI UX Pro Max

Repository: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill

UI UX Pro Max provides design guidance for creating more consistent interfaces. Use it to explore design directions, visual hierarchy, responsive patterns, and design systems.

Suggested use:
1. Read the upstream README and install instructions.
2. Define the target user, primary task, brand personality, accessibility needs, and supported devices.
3. Select a coherent style and design system before building pages.
4. Review the output for usability, keyboard access, contrast, mobile behavior, and consistency.
5. Avoid using visual polish as a substitute for user research and testing.

## 3. Safe AI API setup

The Phobicvien starter calls OpenAI from its Node.js backend. Use your own API key:
- Set `OPENAI_API_KEY` in a local ignored `.env` file or a hosting provider's secret manager.
- Do not commit real secrets or expose them to frontend JavaScript.
- Never import shared keys from public repositories.
- Set usage limits and monitor costs in your own provider account.
- Add authentication, per-user quotas, and production-grade rate limiting before opening the service to the public.

## 4. A repeatable workflow

1. **Discover:** define user, problem, goals, and success metrics.
2. **Plan:** list pages, user journeys, requirements, and exclusions.
3. **Design:** establish tokens, typography, layout, components, and responsive behavior.
4. **Build:** implement small vertical slices with clear commits.
5. **Review:** inspect security, accessibility, maintainability, and performance.
6. **Test:** validate key flows on mobile and desktop.
7. **Ship:** configure environment variables, deployment, monitoring, and backups.
8. **Handoff:** document setup, access ownership, maintenance, and known limitations.
