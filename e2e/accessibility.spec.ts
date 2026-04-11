import type { Page } from '@playwright/test'
import { expect, test } from '@playwright/test'

type AccessibilitySnapshot = { role?: string } | null

type PageWithAccessibility = Page & {
  accessibility: {
    snapshot: () => Promise<AccessibilitySnapshot>
  }
}

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
      await page.goto(route, { waitUntil: 'networkidle' })
      await expect(page.locator('header')).toHaveCount(1)
      await expect(page.locator('main')).toHaveCount(1)

      const duplicateIds = await page.evaluate(() => {
        const ids = [...document.querySelectorAll('[id]')].map(el => el.id)
        return ids.filter((id, index) => id && ids.indexOf(id) !== index)
      })
      expect(duplicateIds).toEqual([])

      const missingAltImages = await page.evaluate(() =>
        [...document.querySelectorAll('img')]
          .filter(img => !img.alt || img.alt.trim().length === 0)
          .map(img => img.outerHTML)
      )
      expect(missingAltImages).toEqual([])

      const unlabeledInputs = await page.evaluate(() => {
        const controls = [
          ...document.querySelectorAll('input,textarea,select'),
        ].filter(element => {
          const type = element.getAttribute('type')?.toLowerCase() || ''
          if (
            type === 'hidden'
            || type === 'submit'
            || type === 'button'
            || type === 'reset'
          ) {
            return false
          }
          return true
        })

        return controls
          .filter(element => {
            const id = element.id
            const hasLabel = id
              ? !!document.querySelector(`label[for="${id}"]`)
              : false
            const hasAriaLabel =
              !!element.getAttribute('aria-label')
              || !!element.getAttribute('aria-labelledby')
            return !(hasLabel || hasAriaLabel)
          })
          .map(element => element.outerHTML)
      })
      expect(unlabeledInputs).toEqual([])

      const pageRole = await (
        page as PageWithAccessibility
      ).accessibility.snapshot()
      expect(pageRole).toBeTruthy()
      expect(pageRole?.role).toBe('document')
    })
  }
})
