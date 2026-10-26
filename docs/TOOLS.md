# Recommended AI-Assisted Tools

Phobicvien links to external tools instead of copying their codebases wholesale. Check each project's current README, requirements, and license before installing, adapting, or redistributing files.

## 1. gstack — product and engineering workflows

Repository: https://github.com/garrytan/gstack

gstack provides role-oriented workflows for coding agents, including product planning, engineering review, QA, and release work. It is a development workflow toolkit, not a website template or a guarantee of code quality.

Suggested use:
1. Read the upstream README and requirements.
2. Install it for your coding agent using the upstream instructions.
3. Ask a planning workflow to challenge the target audience, business goal, scope, and risks.
4. Use review and QA workflows after implementation.
5. Inspect every generated change and run tests before deployment.

## 2. UI UX Pro Max — design intelligence

Repository: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill

UI UX Pro Max provides design guidance for exploring visual directions, hierarchy, responsive patterns, and design systems.

Suggested use:
1. Read the upstream README and install instructions.
2. Define the target user, primary task, brand personality, accessibility needs, and supported devices.
3. Choose a coherent style and design system before building pages.
4. Review contrast, keyboard access, mobile behavior, and consistency.
5. Do not treat visual polish as a substitute for user research or usability testing.

## 3. Public API-key repositories — do not import keys

Reference supplied for review: https://github.com/dan1471/FREE-openai-api-keys

**Phobicvien must not scrape, import, expose, or use API keys collected from a public repository.** Publicly posted credentials may belong to other people, may already be compromised or revoked, and may be used without authorization. A repository's availability does not make its keys safe or authorized to use.

For AI features:
- Create an API key through your own provider account, or use credentials you are explicitly authorized to use.
- Store the key as `OPENAI_API_KEY` in a local `.env` file excluded by Git, or in your hosting provider's server-side secret manager.
- Never put keys in frontend JavaScript, public build variables, source control, screenshots, issues, or logs.
- Do not build a key-collection feature or share keys between users.
- Set provider spending limits where available, monitor usage, and implement authentication and per-user quotas before public launch.
- If a key is exposed, revoke it with the provider and issue a replacement.

The backend starter expects a secret supplied through the environment. See [SECURITY.md](../SECURITY.md) and [OpenAI's API authentication guidance](https://developers.openai.com/api/reference/overview).

## 4. A repeatable website workflow

1. **Discover:** define the user, problem, goals, and success metrics.
2. **Plan:** list pages, user journeys, requirements, and exclusions.
3. **Design:** establish design tokens, typography, layout, components, and responsive behavior.
4. **Build:** implement small vertical slices with clear commits.
5. **Review:** inspect security, accessibility, maintainability, and performance.
6. **Test:** validate key flows on mobile and desktop.
7. **Ship:** configure environment variables, deployment, monitoring, and backups.
8. **Handoff:** document setup, ownership, maintenance, and known limitations.

## 5. The $10,000 project goal

A $10,000 website is an ambitious business target, not a guaranteed result. A high project price usually requires a clearly valuable business outcome, strong discovery, a reliable delivery process, evidence of quality, appropriate contracts, and ongoing client trust. Beginners should first build real portfolio projects and improve through feedback.
