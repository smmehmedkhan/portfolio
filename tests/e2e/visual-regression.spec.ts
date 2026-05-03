import { expect, test } from '@playwright/test'

const routes = ['/', '/about', '/projects', '/contact', '/resume', '/blocked']

const viewports = [
  { name: 'mobile', width: 375, height: 667 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1024, height: 768 },
  { name: 'desktop-lg', width: 1440, height: 900 },
]

test.describe('P3: Visual Regression', () => {
  for (const route of routes) {
    for (const viewport of viewports) {
      test(`should match visual baseline for ${route} at ${viewport.name}`, async ({
        page,
      }) => {
        await page.setViewportSize({
          width: viewport.width,
          height: viewport.height,
        })

        // Freeze all Motion (Framer Motion) JS-driven animations at their
        // final state. Motion respects prefers-reduced-motion when
        // MotionConfig reducedMotion="user" is set in the app root.
        await page.emulateMedia({ reducedMotion: 'reduce' })

        const response = await page.goto(route)
        expect(response?.ok()).toBeTruthy()

        await page.waitForLoadState('networkidle')
        await page.waitForSelector('main')
        await page.waitForFunction(() => document.fonts.ready)
        await page.addStyleTag({
          content: 'nextjs-portal { display: none !important; }',
        })

        const cleanRoute = route === '/' ? 'home' : route.slice(1)
        const screenshotName = `visual-${cleanRoute}-${viewport.name}.png`

        await expect(page).toHaveScreenshot(screenshotName, {
          animations: 'disabled',
          maxDiffPixelRatio: 0.05,
        })
      })
    }
  }
})
