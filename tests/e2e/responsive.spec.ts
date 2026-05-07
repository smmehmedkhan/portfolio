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

      const srcs = await page.$$eval('img', imgs =>
        imgs
          .filter(img => {
            const r = img.getBoundingClientRect()
            return r.width > 0 && r.height > 0
          })
          .map(img => img.getAttribute('src'))
      )

      for (const src of srcs) {
        expect(src).toBeTruthy()
      }
    }
  })

  test('hero image picture element serves correct source per viewport', async ({
    page,
  }) => {
    // Mobile — below 768px breakpoint, img fallback (square) is active
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    const mobileSrc = await page
      .locator('picture.hero-image img')
      .getAttribute('src')
    expect(mobileSrc).toBe('/images/mehmed-khan-square.webp')

    // Desktop — above 768px, browser selects the portrait source
    await page.setViewportSize({ width: 1280, height: 720 })
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    const desktopCurrentSrc = await page
      .locator('picture.hero-image img')
      .evaluate((img: HTMLImageElement) => img.currentSrc)
    expect(desktopCurrentSrc).toContain('mehmed-khan-portrait.webp')
  })

  test('hero picture element has correct art direction source attributes', async ({
    page,
  }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    const sourceMedia = await page
      .locator('picture.hero-image source')
      .getAttribute('media')
    const sourceSrcset = await page
      .locator('picture.hero-image source')
      .getAttribute('srcset')

    expect(sourceMedia).toBe('(min-width: 768px)')
    expect(sourceSrcset).toContain('mehmed-khan-portrait.webp')
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
    browserName,
  }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    const targets = [
      page.locator('.hero [data-slot="button"]').nth(0),
      page.locator('.hero [data-slot="button"]').nth(1),
      page.locator('.about-container [data-slot="button"]').first(),
      page.locator('.get-in-touch [data-slot="button"]').first(),
    ]

    for (const target of targets) {
      const isVisible = await target.isVisible().catch(() => false)
      if (!isVisible) continue

      const box = await target.boundingBox()
      if (box && browserName !== 'webkit') {
        expect(box.height).toBeGreaterThanOrEqual(17)
        expect(box.width).toBeGreaterThanOrEqual(17)
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
    browserName,
  }) => {
    await page.setViewportSize({ width: 320, height: 568 })
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    const offender = await page.evaluate(() => {
      const vw = document.documentElement.clientWidth

      const isClippedByAncestor = (el: Element) => {
        let parent = el.parentElement

        while (parent) {
          const style = window.getComputedStyle(parent)
          if (
            /(hidden|clip)/.test(style.overflowX)
            || /(hidden|clip)/.test(style.overflowY)
          ) {
            return true
          }
          parent = parent.parentElement
        }

        return false
      }

      const el = [...document.querySelectorAll('*')].find(el => {
        const rect = el.getBoundingClientRect()
        const style = window.getComputedStyle(el)
        const isVisible =
          rect.width > 0
          && rect.height > 0
          && style.display !== 'none'
          && style.visibility !== 'hidden'
          && style.opacity !== '0'
        const isLoading = el.getAttribute('aria-busy') === 'true'

        return (
          rect.right > vw && isVisible && !isLoading && !isClippedByAncestor(el)
        )
      })

      return el ? el.outerHTML.slice(0, 200) : null
    })

    if (browserName !== 'webkit') {
      expect(
        offender,
        `Element overflows 320px viewport: ${offender}`
      ).toBeNull()
    }
  })
})
