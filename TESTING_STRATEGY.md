# Comprehensive Testing Strategy

This document defines the portfolio application's complete testing plan, ordered by priority and organized so future agents can work through each task independently.

## 1. Priority 0 - Critical End-to-End Paths

**Goal**: Validate the most important user journeys, responsiveness, navigation, and form flows.

### Task 1.1: Core user journeys

- Home page load and hero visibility
- Navigate to `About`, `Projects`, `Resume`, `Contact`
- Open and close mobile navigation menu
- Submit the contact form successfully
- Sign up for the newsletter successfully
- View project details and pagination behavior

### Task 1.2: Responsive breakpoint coverage

- Verify layout at 320px, 480px, 640px, 768px, 1024px, 1280px, 1536px, 2048px
- Confirm mobile menu appears below 768px and desktop nav appears above 768px
- Validate the page structure on small, medium, and large viewports

### Task 1.3: PWA and offline behavior

- Confirm the app manifest is valid and installable
- Validate service worker registration (if present)
- Verify basic offline page behavior for previously visited pages
- Confirm icons, name, and theme color values are correct

### Task 1.4: Resume and blocked pages

- Open the resume viewer and verify content loads
- Visit the blocked page path and confirm behavior
- Visit `404` / non-existent route and verify fallback page

## 2. Priority 1 - Core Unit and Integration Tests

**Goal**: Ensure business logic, validation, component rendering, and key interactions are correct.

### Task 2.1: Unit testing for components and utilities

- `Button`, `Input`, `Card`, `Dialog`, `Badge`, `Accordion`, `Pagination`, `Avatar`
- `TechStack` icons and labels rendering
- `Hero`, `Footer`, `Navbar`, `Testimonials`, `FAQ`, `CaseStudies`
- Utility functions in `src/lib/utils.ts`, `emailTemplates.ts`, `env.ts`, `mongodb.ts`
- Animation presets and motion utilities
- Theme provider behavior and local storage persistence

### Task 2.2: Schema and validation tests

- Contact form Zod schema validation rules
- Newsletter form Zod schema validation rules
- API request validation schemas in `src/schemas/contactSchema.ts` and `src/schemas/newsletterSchema.ts`

### Task 2.3: Integration testing for multi-component flows

- Contact form flow with validation, submission, and toast notification
- Newsletter signup flow with mocked API success/failure
- Navigation flow: mobile menu open/close, internal anchor navigation, route change behavior
- Error boundary behavior when child components throw errors
- Theme switcher and persistent dark/light mode handling

### Task 2.4: Data-driven rendering

- Projects list filtering, sorting, and pagination logic
- Experience and education list rendering from static data
- Testimonials and FAQ expansion behavior
- Social links, GitHub contributions, and external link rendering

## 3. Priority 2 - API, Security, and Backend Validation

**Goal**: Verify server-side endpoints, security behavior, and integration with external services.

### Task 3.1: API endpoint tests

- `POST /api/v1/contact`
  - Valid payload returns `200`
  - Missing required fields returns `400`
  - Invalid email returns `422`
  - Rate limiting returns `429`
- `POST /api/v1/newsletter`
  - Valid payload returns success status
  - Duplicate or invalid emails return correct error
- Unsubscribe and email management behavior if endpoints exist

### Task 3.2: Security and middleware tests

- Arcjet or bot detection behavior on contact/newsletter endpoints
- Origin and header validation for API requests
- Rate limiting enforcement and correct response codes
- Error handling for database failures and external provider failures

### Task 3.3: Email and notification flow

- Confirm admin notification email content generation
- Confirm user acknowledgement email template generation
- Validate payload assembly for Brevo integration
- Handle partial failures: saved contact but email send failed

## 4. Priority 3 - Accessibility and Performance

**Goal**: Meet WCAG AA accessibility standards, performance objectives, and visual quality.

### Task 4.1: Accessibility audit

- Run page-level accessibility checks on core routes
- Verify ARIA attributes on interactive elements
- Validate keyboard navigation for modals, dialogs, and menus
- Ensure alt text for images and accessible form labels
- Confirm color contrast ratios meet WCAG AA
- File: `e2e/accessibility.spec.ts`

### Task 4.2: Performance audit

- Run page performance thresholds on home, contact, and projects
- Verify `Next/Image` optimization and modern image formats
- Validate bundle size and hydration performance for main pages
- Assess animation performance and avoid jank on scroll-triggered effects
- File: `e2e/performance.spec.ts`

### Task 4.3: Visual regression and UI stability

- Capture snapshots of key screens at all breakpoints
- Confirm visual consistency for Hero, Projects, Resume, and Contact sections
- Validate button states, cards, dialog appearance, and theme switcher styling

## 5. Priority 4 - Additional Coverage and Long-term Maintenance

**Goal**: Expand coverage to edge cases, maintenance tests, and future-proofing.

### Task 5.1: Edge case and error tests

- Contact form backend failure handling
- Newsletter API error recovery and error toast display
- Missing project or user data fallback rendering
- Invalid route rendering for 404 page state

### Task 5.2: Regression and maintenance tasks

- Add tests for any new static data updates, such as projects or skills
- Add regression tests for browser/viewport-specific behavior
- Add documentation for test conventions and how to run each test suite
- Add CI job definitions for unit, integration, E2E, accessibility, and performance tests

### Task 5.3: Optional quality improvement tests

- Cross-browser checks for Chrome, Firefox, Safari via Playwright
- API load/stress tests for contact/newsletter endpoints
- Visual diff snapshots for animation and theme changes
- Lighthouse budget enforcement in CI

## Execution Plan

- `pnpm test`: run unit and integration tests
- `pnpm exec playwright test`: run end-to-end tests
- `pnpm exec playwright test --project=chromium`: targeted browser checks
- `pnpm exec playwright test e2e/accessibility.spec.ts`: run accessibility audit tests
- `pnpm exec playwright test e2e/performance.spec.ts`: run performance audit tests
- `pnpm exec playwright test e2e/visual-regression.spec.ts`: run visual regression tests
- `pnpm exec vitest run --coverage`: confirm coverage targets

## Notes for Implementation

- Keep task sections independent so future agents can complete them one-by-one.
- Prioritize P0 and P1 before P2 to ensure core user behavior is covered first.
- Document test file names and relevant components when writing test tasks.
- Use clear section headings and task bullets for easy handoff.

## Task Audit Checklist

Use this checklist when implementing and verifying each task.

- [ ] Priority 0: Core user journeys and responsive behavior
- [ ] Priority 0: PWA installability and offline validation
- [ ] Priority 0: Resume viewer and 404/blocked page coverage
- [ ] Priority 1: Component unit tests and utility coverage
- [ ] Priority 1: Schema validation and integration flow tests
- [ ] Priority 1: Theme persistence and error boundary tests
- [ ] Priority 2: API endpoint and security tests
- [ ] Priority 2: Email/Brevo notification flow validation
- [x] Priority 3: Accessibility audit with `axe-core`
- [x] Priority 3: Performance audit with Lighthouse
- [x] Priority 3: Visual regression snapshot coverage
- [x] Priority 4: Edge case fallback and error handling tests
- [ ] Priority 4: CI job definitions and regression documentation

## CI Task Audit Format

This section defines a simple console-style audit format for CI integration.

### CI checklist example

```text
[TEST-AUDIT] P0 End-to-end: PASS
[TEST-AUDIT] P1 Unit/Integration: PASS
[TEST-AUDIT] P2 API/Security: PASS
[TEST-AUDIT] P3 A11y/Performance: PASS
[TEST-AUDIT] P4 Regression/Maintenance: PASS
```

### Recommended CI steps

1. Run unit/integration tests and generate coverage:
   - `pnpm exec vitest run --coverage`
2. Run Playwright tests for critical paths:
   - `pnpm exec playwright test`
3. Run accessibility audits:
   - `pnpm exec axe-core ./public`
4. Run performance/lighthouse checks in CI or a dedicated audit job.
5. Publish or fail on unmet thresholds:
   - Coverage < 90%
   - Lighthouse score < 90
   - Unresolved accessibility violations
