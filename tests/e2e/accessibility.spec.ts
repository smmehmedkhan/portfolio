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
      // Force all Motion-animated elements to their final state before axe runs.
      // emulateMedia alone is insufficient — Motion reduces duration but still
      // starts from initial (opacity: 0), so elements can still be mid-animation
      // when axe scans. The addStyleTag override ensures every element is fully
      // visible regardless of animation progress.
      await page.emulateMedia({ reducedMotion: 'reduce' })
      await page.goto(route)
      await page.addStyleTag({
        content:
          '*, *::before, *::after { animation-duration: 0s !important; transition-duration: 0s !important; opacity: 1 !important; transform: none !important; filter: none !important; }',
      })

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
