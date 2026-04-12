import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const auditPaths = [
  '/',
  '/about',
  '/projects',
  '/contact',
  '/resume',
  '/blocked',
]

test.describe('P3: Accessibility Audit', () => {
  for (const route of auditPaths) {
    test(`should surface accessible landmarks and meaningful content on ${route}`, async ({
      page,
    }) => {
      await page.goto(route)

      // Ensure the page is hydrated and visible before auditing
      await expect(page.locator('main')).toHaveCount(1)
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible()

      // Run the Axe accessibility audit
      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice'])
        .analyze()

      // Assert there are no violations
      expect(accessibilityScanResults.violations).toEqual([])
    })
  }
})
