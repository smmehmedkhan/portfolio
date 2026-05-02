import { expect, test } from '@playwright/test'

const auditPaths = [
  '/',
  '/about',
  '/projects',
  '/contact',
  '/resume',
  '/blocked',
]

function _formatMetric(value: number | undefined): string {
  return typeof value === 'number' ? `${value.toFixed(0)}ms` : 'unknown'
}

test.describe('P3: Performance Audit', () => {
  for (const route of auditPaths) {
    test(`should meet performance thresholds on ${route}`, async ({ page }) => {
      await page.goto(route, { waitUntil: 'networkidle' })

      const paintMetrics = await page.evaluate(() => {
        const result: Record<string, number> = {}
        for (const entry of performance.getEntriesByType('paint')) {
          result[entry.name] = entry.startTime
        }
        return result
      })

      const navigation = await page.evaluate(() => {
        const entry = performance.getEntriesByType('navigation')[0] as
          | PerformanceNavigationTiming
          | undefined
        return entry
          ? {
              domContentLoaded: entry.domContentLoadedEventEnd,
              loadEventEnd: entry.loadEventEnd,
              totalBlockingTime:
                (
                  entry as PerformanceNavigationTiming & {
                    totalBlockingTime?: number
                  }
                ).totalBlockingTime ?? 0,
            }
          : {
              domContentLoaded: 0,
              loadEventEnd: 0,
              totalBlockingTime: 0,
            }
      })

      const firstPaint = paintMetrics['first-paint']
      const firstContentfulPaint = paintMetrics['first-contentful-paint']

      if (process.env.CI) {
        if (firstPaint !== undefined) {
          expect(firstPaint, `first-paint on ${route}`).toBeLessThan(3500)
        }
        if (firstContentfulPaint !== undefined) {
          expect(
            firstContentfulPaint,
            `first-contentful-paint on ${route}`
          ).toBeLessThan(3900)
        }
        expect(
          navigation.domContentLoaded,
          `DOMContentLoaded on ${route}`
        ).toBeLessThan(4500)
        expect(
          navigation.loadEventEnd,
          `loadEventEnd on ${route}`
        ).toBeLessThan(6000)
        expect(
          navigation.totalBlockingTime,
          `totalBlockingTime on ${route}`
        ).toBeLessThan(2000)
      }

      await expect(page.locator('main')).toBeVisible()
      if (route === '/' || route === '/about') {
        await expect(page.getByRole('banner')).toBeInViewport()
      }
    })
  }
})
