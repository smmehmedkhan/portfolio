# Mehmed Khan — Portfolio

## At a Glance

[Live Site](https://smmehmedkhan.vercel.app) · [Source](https://github.com/smmehmedkhan/portfolio) · [Resume](./public/docs/resume.pdf) · [Roadmap](./ROADMAP.md)

![CI](https://github.com/smmehmedkhan/portfolio/actions/workflows/ci.yml/badge.svg)
![E2E](https://github.com/smmehmedkhan/portfolio/actions/workflows/e2e.yml/badge.svg)
![License](https://img.shields.io/badge/license-MIT-green)

An interactive portfolio crafted to showcase real projects, problem-solving approach, and professional experience in a clear and engaging way. Explore featured work, skills, and background through a fast, modern, and mobile-friendly experience.

Jump to: [Quick Start](#quick-start) · [Architecture Snapshot](#architecture-snapshot) · [Testing Strategy](#testing-strategy) · [Deployment](#deployment)

## Table of Contents

- [At a Glance](#at-a-glance)
- [Why This Project Stands Out](#why-this-project-stands-out)
- [Core Features](#core-features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Architecture Snapshot](#architecture-snapshot)
- [Testing Strategy](#testing-strategy)
- [Security Posture](#security-posture)
- [CI/CD Pipeline](#cicd-pipeline)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## Why This Project Stands Out

- Real full-stack behavior: validated API routes, MongoDB writes, and transactional email workflows.
- Security built-in: Arcjet shield + bot detection + route-specific rate limits + hardened headers.
- Confidence through testing: unit, integration, and Playwright E2E (including a11y, perf, visual regression, PWA).
- CI/CD maturity: parallelized checks, gated validation, sharded browser matrix, automated production release.

## Core Features

### Product Experience

- Dark / light / system theme support.
- Smooth animations with Motion and OGL (WebGL).
- Paginated project showcase and animated hero titles.
- Embedded resume viewer with downloadable PDF.
- Responsive layout (mobile-first to large desktop).
- WCAG AA accessibility and reduced-motion support.

### Platform & Backend

- Next.js App Router with versioned REST endpoints (`/api/v1/*`).
- Zod-validated request payloads.
- MongoDB persistence for contact and newsletter flows.
- Brevo transactional email integration.
- Structured logging with Pino.
- PWA support (manifest + install + offline readiness).

### Reliability & Security

- Arcjet shield and bot detection.
- Fixed-window rate limiting by endpoint.
- Origin validation in production.
- Security headers including CSP and anti-clickjacking controls.
- Dockerized runtime with standalone Next.js output and multi-arch image support.

## Tech Stack

| Category | Technology |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| Runtime | Node.js 24 |
| Library | React.js 19 |
| Language | TypeScript 6 (strict) |
| Styling | Tailwind CSS 4 |
| Animations | Motion 12 + OGL |
| UI Primitives | Radix UI + CVA + Sonner |
| Forms & Validation | React Hook Form 7 + Zod 4 |
| Database | MongoDB + Mongoose 9 |
| Email | Brevo SDK 5 |
| Security | Arcjet 1.4 |
| Logging | Pino 10 |
| Analytics | Vercel Analytics + GTM |
| Unit/Integration Tests | Vitest 4 + React Testing Library 16 |
| E2E/A11y/Visual | Playwright 1.59 + axe-core |
| Lint/Format | Biome 2 + Stylelint 17 |
| Tooling | Husky + lint-staged + Commitlint |
| Package Manager | pnpm 10.33.2 |

## Quick Start

### Prerequisites

- `Node.js` `24.x`
- `pnpm` `10.33.2`

### 1. Clone

```bash
git clone https://github.com/smmehmedkhan/portfolio.git
cd portfolio
```

### 2. Install

```bash
pnpm install
```

### 3. Configure environment

```bash
cp .env.example .env.local
```

### 4. Run

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

All variables are validated at runtime via Zod (`src/lib/env.ts`).

> [!IMPORTANT]
> Minimum variables for local functionality:
>
> ```env
> NEXT_PUBLIC_SITE_URL=http://localhost:3000
> MONGODB_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/portfolio
> ARCJET_KEY=your-arcjet-key
> BREVO_API_KEY=your-brevo-api-key
> BREVO_SENDER_EMAIL=noreply@yourdomain.com
> BREVO_SENDER_NAME=Your Name
> ADMIN_EMAIL=admin@yourdomain.com
> ```

### Public (client-safe)

| Variable | Description | Required |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Production site URL | No |
| `NEXT_PUBLIC_EMAIL` | Contact email address | No |
| `NEXT_PUBLIC_GITHUB_URL` | GitHub profile URL | No |
| `NEXT_PUBLIC_LINKEDIN_URL` | LinkedIn profile URL | No |
| `NEXT_PUBLIC_TWITTER_URL` | Twitter / X profile URL | No |
| `NEXT_PUBLIC_FACEBOOK_URL` | Facebook profile URL | No |
| `NEXT_PUBLIC_INSTAGRAM_URL` | Instagram profile URL | No |
| `NEXT_PUBLIC_DISCORD_URL` | Discord profile URL | No |
| `NEXT_PUBLIC_SOURCE_URL` | Portfolio source repo URL | No |
| `NEXT_PUBLIC_API_URL` | API base URL | No |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager ID | No |

### Server-only

| Variable | Description | Required |
| --- | --- | --- |
| `MONGODB_URI` | MongoDB Atlas connection string | Yes |
| `MONGODB_DB_USERNAME` | Database username | No |
| `MONGODB_DB_PASSWORD` | Database password | No |
| `BREVO_API_KEY` | Brevo transactional email API key | Yes |
| `BREVO_SENDER_EMAIL` | Sender email address | Yes |
| `BREVO_SENDER_NAME` | Sender display name | Yes |
| `ADMIN_EMAIL` | Admin notification recipient | Yes |
| `ARCJET_KEY` | Arcjet security key (required in production) | Yes |
| `ARCJET_ENV` | `development` / `test` / `production` | No |
| `ARCJET_LOG_LEVEL` | `debug` / `info` / `warn` / `error` | No |
| `LOG_LEVEL` | Pino log level | No |
| `VERCEL_OIDC_TOKEN` | Auto-injected by Vercel at runtime | No |

See [`.env.example`](./.env.example) for a full template.

## Available Scripts

### Development

| Script | Description |
| --- | --- |
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server (standalone) |

### Quality

| Script | Description |
| --- | --- |
| `pnpm lint` | Run Biome + Stylelint checks |
| `pnpm lint:fix` | Auto-fix lint issues |
| `pnpm format` | Format with Biome + Stylelint |
| `pnpm check` | Run Biome CI check |
| `pnpm type-check` | TypeScript type checking |

### Testing

| Script | Description |
| --- | --- |
| `pnpm test` | Run all unit tests |
| `pnpm test:watch` | Unit tests in watch mode |
| `pnpm test:ui` | Open Vitest UI |
| `pnpm test:integration` | Run integration tests |
| `pnpm test:api` | Run API + security integration tests |
| `pnpm test:coverage` | Run tests with coverage report |
| `pnpm test:e2e` | Run all Playwright E2E tests |
| `pnpm test:e2e:ui` | Open Playwright UI |
| `pnpm test:a11y` | Accessibility E2E tests |
| `pnpm test:perf` | Performance E2E tests |
| `pnpm test:visual` | Visual regression E2E tests |

### Docker

| Script | Description |
| --- | --- |
| `pnpm docker:dev` | Start dev server in Docker with hot reload |
| `pnpm docker:dev:down` | Stop Docker dev containers |
| `pnpm docker:build` | Build production Docker image |
| `pnpm docker:run` | Run production Docker container |
| `pnpm docker:push` | Push image to Docker Hub |

## Architecture Snapshot

### Routes

| Route | Purpose |
| --- | --- |
| `/` | Hero, About, TechStack, CaseStudies, Testimonials, FAQ |
| `/about` | Profile, experience, education, GitHub contributions |
| `/projects` | Paginated project cards |
| `/contact` | Contact details + validated form |
| `/resume` | Embedded PDF resume + download |
| `/blocked` | Arcjet denial fallback page |

### API Endpoints

| Endpoint | Method | Flow |
| --- | --- | --- |
| `/api/v1/contact` | `POST` | validate -> persist -> admin notification + auto-reply |
| `/api/v1/newsletter` | `POST` | validate -> dedupe -> Brevo list -> persist -> welcome email |
| `/api/v1/unsubscribe` | `POST` | mark subscriber inactive |

## Testing Strategy

| Layer | Tools | Scope |
| --- | --- | --- |
| Unit | Vitest + RTL | UI primitives, providers, utilities, schema validation |
| Integration | Vitest | API routes, DB models, form/API flows, security checks |
| E2E | Playwright + axe-core | Functional journeys, a11y, perf, responsive, PWA, visual regression |

CI E2E execution is sharded as `3 browsers x 4 shards` for high parallelism.

## Security Posture

- Arcjet Shield blocks common attack patterns on API routes.
- Bot detection runs in `LIVE` mode in production and `DRY_RUN` in development.
- Rate limiting:
  - `/api/v1/contact`: 10 requests/hour
  - `/api/v1/newsletter`: 20 requests/hour
- Origin checks enforce production requests against `NEXT_PUBLIC_SITE_URL`.
- Security headers include CSP, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, and `Permissions-Policy`.

## CI/CD Pipeline

Pipeline summary:

1. `CI`: lint + type-check + unit tests + build (parallelized where possible).
2. `Validation`: integration and API-security suites, coverage artifact upload.
3. `E2E` (main branch path): Playwright browser matrix with sharding.
4. `CD` (main branch): Vercel production deploy + Docker build/push + GitHub release.
5. Nightly cron: quality checks, E2E matrix, bundle/security monitoring.

Workflows: [`.github/workflows`](./.github/workflows)

## Deployment

### Vercel (Primary)

Production deployment is automated from `main` via GitHub Actions.

Manual deploy:

```bash
vercel --prod
```

Required GitHub secrets include `VERCEL_TOKEN`, `ORG_ID`, `PROJECT_ID`, plus server environment variables.

### Docker (Secondary)

```bash
pnpm docker:build
pnpm docker:run
pnpm docker:push
```

Multi-arch image target: `linux/amd64` and `linux/arm64`.

## Contributing

1. Create a branch using a conventional prefix: `feat/`, `fix/`, `docs/`, `refactor/`, `test/`, `chore/`.
2. Validate changes locally: `pnpm lint && pnpm type-check && pnpm test`
3. Commit with [Conventional Commits](https://www.conventionalcommits.org/).
4. Open a pull request against `develop`.

## License

MIT - see [LICENSE](./LICENSE).

## Author

**Mehmed Khan** — Full-Stack Engineer

[smmehmedkhan.vercel.app](https://smmehmedkhan.vercel.app) · [GitHub](https://github.com/smmehmedkhan) · [LinkedIn](https://linkedin.com/in/smmehmedkhan) · [Twitter](https://twitter.com/sm_mehmed_khan)
