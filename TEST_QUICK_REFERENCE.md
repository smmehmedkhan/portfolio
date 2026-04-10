# Quick Test Reference Guide

## Overview
This portfolio project now has comprehensive testing coverage with 290+ tests across unit, integration, E2E, and API testing layers.

## Quick Commands

### Run All Tests
```bash
pnpm test
```

### Run Tests in Watch Mode
```bash
pnpm test:watch
```

### Run E2E Tests
```bash
pnpm test:e2e
```

### Run E2E Tests with UI
```bash
pnpm test:e2e:ui
```

### Generate Coverage Report
```bash
pnpm test -- --coverage
```

## Test Organization

### Unit Tests
**Location**: `tests/`
**Command**: `pnpm test tests/ -- --run`
**Coverage**:
- UI Components (Button, Input, Badge, Card, Label)
- Utility functions (cn/tailwind-merge)
- Schema validation (Contact, Newsletter)

### Integration Tests
**Location**: `tests/integration/`
**Command**: `pnpm test tests/integration/ -- --run`
**Coverage**:
- Form flows
- Validation with schemas
- Data transformations

### API Tests
**Location**: `tests/api/`
**Command**: `pnpm test tests/api/ -- --run`
**Coverage**:
- Endpoint validation
- Security middleware
- Email notifications

### E2E Tests
**Location**: `e2e/`
**Command**: `pnpm test:e2e`
**Coverage**:
- Core user journeys
- Responsive breakpoints (8 sizes)
- PWA features
- Special pages

## Test Execution by Priority

### Priority 0 (Critical Paths)
```bash
# Core user journeys
pnpm test:e2e -- home.spec.ts

# Responsive design
pnpm test:e2e -- responsive.spec.ts

# PWA features
pnpm test:e2e -- pwa.spec.ts

# Special pages
pnpm test:e2e -- special-pages.spec.ts
```

### Priority 1 (Component & Integration)
```bash
# Component tests
pnpm test tests/components/UIComponents.test.tsx -- --run

# Utility tests
pnpm test tests/lib/utilities.test.ts -- --run

# Schema validation
pnpm test tests/schemas/validation.test.ts -- --run

# Form integration
pnpm test tests/integration/forms.integration.test.ts -- --run
```

### Priority 2 (API & Security)
```bash
# API endpoints
pnpm test tests/api/endpoints.test.ts -- --run

# Security tests
pnpm test tests/api/security.test.ts -- --run

# Email notifications
pnpm test tests/api/email.test.ts -- --run
```

## Build and Test Together

```bash
# Build and run E2E tests
pnpm build && pnpm test:e2e

# Build and run all tests
pnpm build && pnpm test
```

## CI/CD Pipeline

### Main Test Workflow
**Trigger**: Push to main/develop, Pull Requests
**File**: `.github/workflows/test.yml`
**Jobs**:
1. Setup & Lint (5-10 min)
2. Unit/Integration Tests (5-10 min)
3. E2E Tests (15-20 min)
4. API/Security Tests (5 min)
5. Build Verification (5 min)
6. Test Summary

**Status Check URL**: GitHub Actions tab under workflow runs

### Nightly Workflow
**Trigger**: Daily at 2 AM UTC (or manual dispatch)
**File**: `.github/workflows/nightly.yml`
**Coverage**:
- Cross-browser E2E (Chromium, Firefox, WebKit)
- Performance monitoring
- Security audit
- Code quality
- Coverage analysis

## Debugging Tests

### Debug Specific E2E Test
```bash
pnpm test:e2e -- home.spec.ts --debug
```

### Debug Unit Test with UI
```bash
pnpm test:ui
```

### Inspect E2E Test
```bash
pnpm test:e2e -- --headed  # Run with browser visible
```

### Run Single Test
```bash
pnpm test -- --grep "should load home page"
```

### View Playwright Report
```bash
pnpm exec playwright show-report
```

## Coverage Targets

- **Line Coverage**: >80%
- **Branch Coverage**: >75%
- **Function Coverage**: >80%
- **Statement Coverage**: >80%

## Common Issues

### Tests Failing Locally But Passing in CI
- Ensure Node.js version matches: `node --version` (should be 24.x)
- Clear cache: `rm -rf node_modules/.vite pnpm-lock.yaml && pnpm install`
- Rebuild: `pnpm build`

### E2E Tests Timing Out
- Increase timeout in playwright.config.ts
- Check if dev server is running: `pnpm dev` in another terminal
- Verify browser installation: `pnpm exec playwright install`

### Coverage Reports Not Generated
- Check if vitest coverage is installed: `pnpm add -D @vitest/coverage-v8`
- Ensure test:coverage config in vitest.config.ts

## Test File Structure

```
tests/
├── api/
│   ├── endpoints.test.ts     (API tests)
│   ├── security.test.ts      (Security tests)
│   └── email.test.ts         (Email notification tests)
├── components/
│   ├── Button.test.tsx       (Button component)
│   └── UIComponents.test.tsx (Comprehensive UI tests)
├── integration/
│   └── forms.integration.test.ts (Form integration)
├── lib/
│   ├── utils.test.ts         (Existing util tests)
│   └── utilities.test.ts     (Comprehensive util tests)
├── schemas/
│   └── validation.test.ts    (Schema validation)
└── setup.ts                  (Vitest setup)

e2e/
├── home.spec.ts             (Core journeys + theme)
├── responsive.spec.ts       (Responsive breakpoints)
├── pwa.spec.ts              (PWA & offline)
└── special-pages.spec.ts    (Resume, blocked, 404)

.github/workflows/
├── test.yml                 (Main test pipeline)
└── nightly.yml              (Nightly tests)
```

## Adding New Tests

### For E2E Tests
1. Create file: `e2e/new-feature.spec.ts`
2. Use existing tests as template
3. Follow naming: `test('should...')`
4. Import from `@playwright/test`

### For Unit Tests
1. Create file: `tests/[category]/feature.test.ts`
2. Use vitest `describe`, `it`, `expect`
3. Follow naming: `describe('Feature', () => { it('should...') })`
4. Import testing utilities from `@testing-library/react`

### Configuration
- E2E: `.playwright.config.ts`
- Unit: `vitest.config.ts`
- CI: `.github/workflows/test.yml`

## Resources

- [Playwright Documentation](https://playwright.dev/)
- [Vitest Documentation](https://vitest.dev/)
- [Testing Library](https://testing-library.com/)
- [Jest Matchers](https://github.com/testing-library/jest-dom)

## Support

For questions about tests or CI/CD:
1. Check `TESTING_STRATEGY.md` for comprehensive guide
2. Check `TESTING_PROGRESS.md` for implementation details
3. Review existing test files for patterns
4. Check GitHub Actions logs for CI failures

## Performance Notes

- Unit tests: ~5-10 seconds
- E2E tests: ~20-30 seconds
- Full suite: ~45-60 seconds
- CI execution: ~15-20 minutes (all jobs parallel)

---

**Last Updated**: April 10, 2026
**Total Tests**: 290+
**All Passing**: ✅
