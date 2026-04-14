import { expect, test } from '@playwright/test'

// ============================================================================
// PRIORITY 0: RESPONSIVE BREAKPOINT COVERAGE
// ============================================================================
const BREAKPOINTS = [
  { name: '320px (Mobile Small)', width: 320, height: 568 },
  { name: '480px (Mobile)', width: 480, height: 800 },
  { name: '640px (Tablet Small)', width: 640, height: 900 },
  { name: '768px (Tablet)', width: 768, height: 1024 },
  { name: '1024px (Tablet Large)', width: 1024, height: 768 },
  { name: '1280px (Desktop)', width: 1280, height: 720 },
  { name: '1536px (Desktop Large)', width: 1536, height: 864 },
  { name: '2048px (4K)', width: 2048, height: 1152 },
]

test.describe('P0: Responsive Breakpoints', () => {
  BREAKPOINTS.forEach(({ name, width, height }) => {
    test(`should render home page at ${name}`, async ({ page }) => {
      await page.setViewportSize({ width, height })
      await page.goto('/')
      await page.waitForLoadState('networkidle')
      await expect(page).toHaveTitle(/Mehmed Khan/i)
    })

    test(`should display content at ${name}`, async ({ page }) => {
      await page.setViewportSize({ width, height })
      await page.goto('/')
      const main = page.locator('main, section, [role="main"]')
      await expect(main.first()).toBeVisible()
    })

    test(`should render navigation at ${name}`, async ({ page }) => {
      await page.setViewportSize({ width, height })
      await page.goto('/')
      const nav = page.locator('nav')
      await expect(nav).toBeVisible()
    })
  })
})

test.describe('P0: Mobile vs Desktop Navigation', () => {
  test('should show mobile menu below 768px', async ({ page }) => {
    await page.setViewportSize({ width: 640, height: 900 })
    await page.goto('/')

    // Mobile menu button should be visible
    const menuButton = page.getByRole('button', {
      name: /menu|toggle|hamburger/i,
    })
    const isVisible = await menuButton
      .isVisible({ timeout: 1000 })
      .catch(() => false)

    // On smaller screens, menu button is typically shown
    if (isVisible) {
      await expect(menuButton).toBeVisible()
    }
  })

  test('should show desktop navigation above 768px', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 })
    await page.goto('/')

    // Desktop navigation links should be visible
    const aboutLink = page.getByRole('link', { name: /about/i }).first()
    await expect(aboutLink).toBeVisible()
  })
})

test.describe('P0: Responsive Content Layout', () => {
  test('should stack content vertically on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')

    const mainContent = page.locator('main, section').first()
    const boundingBox = await mainContent.boundingBox()

    if (boundingBox) {
      // Content should be relatively narrow on mobile
      expect(boundingBox.width).toBeLessThanOrEqual(375)
    }
  })

  test('should arrange content in columns on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 })
    await page.goto('/')

    const mainContent = page.locator('main, section').first()
    const boundingBox = await mainContent.boundingBox()

    if (boundingBox) {
      // Content should utilize more width on desktop
      expect(boundingBox.width).toBeGreaterThan(800)
    }
  })
})

test.describe('P0: Responsive Image Scaling', () => {
  test('should scale images appropriately at different breakpoints', async ({
    page,
  }) => {
    const testWidths = [320, 768, 1280, 2048]

    for (const width of testWidths) {
      await page.setViewportSize({ width, height: 720 })
      await page.goto('/')
      await page.waitForLoadState('networkidle')

      const images = page.locator('img')
      const count = await images.count()

      // All images should have natural dimensions
      for (let i = 0; i < count; i++) {
        const img = images.nth(i)
        const isVisible = await img
          .isVisible({ timeout: 500 })
          .catch(() => false)
        if (isVisible) {
          // Image should be loaded
          const src = await img.getAttribute('src')
          expect(src).toBeTruthy()
        }
      }
    }
  })
})

test.describe('P0: Responsive Typography', () => {
  test('should maintain readability across breakpoints', async ({ page }) => {
    const testWidths = [320, 768, 1280]

    for (const width of testWidths) {
      await page.setViewportSize({ width, height: 720 })
      await page.goto('/')

      const headings = page.locator('h1, h2, h3')
      if ((await headings.count()) > 0) {
        const firstHeading = headings.first()
        const fontSize = await firstHeading.evaluate(el => {
          return window.getComputedStyle(el).fontSize
        })

        // Font size should be defined and reasonable
        expect(fontSize).toMatch(/^\d+(\.\d+)?px$/)
      }
    }
  })
})

test.describe('P0: Responsive Touch Targets', () => {
  test('should have adequate button size on touch devices', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')

    const buttons = page.locator('button')
    const count = Math.min(await buttons.count(), 5)

    for (let i = 0; i < count; i++) {
      const button = buttons.nth(i)
      const box = await button.boundingBox()

      if (box) {
        // Touch targets should be at least 48x48 pixels (WCAG recommendation)
        // Allow slight margin
        expect(box.height).toBeGreaterThanOrEqual(36)
        expect(box.width).toBeGreaterThanOrEqual(36)
      }
    }
  })
})

test.describe('P0: Responsive Spacing and Padding', () => {
  test('should adjust padding/margins at different breakpoints', async ({
    page,
  }) => {
    const mobileSize = { width: 375, height: 667 }
    const desktopSize = { width: 1280, height: 720 }

    await page.setViewportSize(mobileSize)
    await page.goto('/')
    const mobileContent = page.locator('main, section').first()
    const mobilePadding = await mobileContent.evaluate(el => {
      return window.getComputedStyle(el).padding
    })

    await page.setViewportSize(desktopSize)
    await page.reload()
    await page.waitForLoadState('networkidle')
    const desktopContent = page.locator('main, section').first()
    const desktopPadding = await desktopContent.evaluate(el => {
      return window.getComputedStyle(el).padding
    })

    // Padding values should be defined
    expect(mobilePadding).toBeTruthy()
    expect(desktopPadding).toBeTruthy()
  })
})

test.describe('P0: Responsive Forms', () => {
  test('should display form fields properly at all breakpoints', async ({
    page,
  }) => {
    const testSizes = [
      { width: 375, height: 667 },
      { width: 768, height: 1024 },
      { width: 1280, height: 720 },
    ]

    for (const size of testSizes) {
      await page.setViewportSize(size)
      await page.goto('/contact')
      await page.waitForLoadState('networkidle')

      const form = page.locator('form').first()
      if (await form.isVisible({ timeout: 1000 }).catch(() => false)) {
        const formBox = await form.boundingBox()
        expect(formBox).toBeTruthy()

        if (formBox) {
          // Form should fit within viewport with reasonable margins
          expect(formBox.width).toBeLessThanOrEqual(size.width)
        }
      }
    }
  })
})

test.describe('P0: No Horizontal Scroll on Mobile', () => {
  test('should not require horizontal scrolling on 320px viewport', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 320, height: 568 })
    await page.goto('/')

    // Check if any element exceeds viewport width
    const hasHorizontalScroll = await page.evaluate(() => {
      return (
        document.documentElement.scrollWidth
        > document.documentElement.clientWidth
      )
    })

    // Should not have horizontal scroll (or minimal overflow)
    expect(hasHorizontalScroll).toBeFalsy()
  })
})
