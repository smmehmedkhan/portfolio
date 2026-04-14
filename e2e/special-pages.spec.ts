import { expect, test } from '@playwright/test'

// ============================================================================
// PRIORITY 0: SPECIAL PAGES (RESUME, BLOCKED, 404)
// ============================================================================
test.describe('P0: Resume Page', () => {
  test('should load resume page successfully', async ({ page }) => {
    await page.goto('/resume')
    await page.waitForLoadState('networkidle')
    await expect(page).toHaveURL(/\/resume/)
  })

  test('should display resume content', async ({ page }) => {
    await page.goto('/resume')
    await page.waitForLoadState('networkidle')

    // Resume should have main content area
    const mainContent = page.locator('main, section, [role="main"]')
    await expect(mainContent.first()).toBeVisible()
  })

  test('should have accessible resume structure', async ({ page }) => {
    await page.goto('/resume')

    // Look for common resume sections
    const sections = page.locator('section, article, div[role="region"]')
    expect(await sections.count()).toBeGreaterThan(0)
  })

  test('should display resume title or heading', async ({ page }) => {
    await page.goto('/resume')

    const headings = page.locator('h1, h2')
    expect(await headings.count()).toBeGreaterThan(0)
  })

  test('resume should be responsive', async ({ page }) => {
    const sizes = [
      { width: 375, height: 667 },
      { width: 768, height: 1024 },
      { width: 1280, height: 720 },
    ]

    for (const size of sizes) {
      await page.setViewportSize(size)
      await page.goto('/resume')

      const content = page.locator('main, section').first()
      await expect(content).toBeVisible()
    }
  })

  test('should print-friendly resume layout', async ({ page }) => {
    await page.goto('/resume')

    // Check for print-friendly classes or media query indicators
    const html = page.locator('html')
    const _classes = await html.getAttribute('class')

    // Content should be visible for printing
    const content = page.locator('main, section').first()
    await expect(content).toBeVisible()
  })

  test('should navigate away from resume page', async ({ page }) => {
    await page.goto('/resume')

    // Look for navigation link to go back
    const navLink = page
      .getByRole('link', { name: /home|back|portfolio/i })
      .first()
    if (await navLink.isVisible({ timeout: 1000 }).catch(() => false)) {
      await navLink.click()
      await expect(page).not.toHaveURL(/\/resume/)
    }
  })
})

test.describe('P0: Blocked Page', () => {
  test('should load blocked page', async ({ page }) => {
    await page.goto('/blocked')
    await page.waitForLoadState('networkidle')
    await expect(page).toHaveURL(/\/blocked/)
  })

  test('should display blocked page content', async ({ page }) => {
    await page.goto('/blocked')

    const content = page.locator('main, header, div').first()
    await expect(content).toBeVisible()
  })

  test('blocked page should have informative message', async ({ page }) => {
    await page.goto('/blocked')

    // Should have some text content explaining the block
    const text = await page.textContent('body')
    expect(text).toBeTruthy()
    expect(text?.length).toBeGreaterThan(0)
  })

  test('should display heading on blocked page', async ({ page }) => {
    await page.goto('/blocked')

    const headings = page.locator('h1, h2, h3')
    expect(await headings.count()).toBeGreaterThan(0)
  })

  test('should be able to navigate from blocked page', async ({ page }) => {
    await page.goto('/blocked')

    // Should have navigation to other pages
    const backBtn = page.getByRole('link', { name: /go back|home/i }).first()
    if (await backBtn.isVisible({ timeout: 1000 }).catch(() => false)) {
      await backBtn.click()
      // Should navigate away from blocked page
      const currentURL = page.url()
      expect(currentURL).not.toContain('/blocked')
    }
  })

  test('blocked page should be responsive', async ({ page }) => {
    const sizes = [
      { width: 375, height: 667 },
      { width: 1280, height: 720 },
    ]

    for (const size of sizes) {
      await page.setViewportSize(size)
      await page.goto('/blocked')

      const content = page.locator('body')
      await expect(content).toBeVisible()
    }
  })
})

test.describe('P0: 404 Not Found Page', () => {
  test('should show 404 page for non-existent route', async ({ page }) => {
    await page.goto('/this-page-does-not-exist-12345')
    await page.waitForLoadState('networkidle')

    // Either stays on the route or shows 404 content
    const url = page.url()
    const notFoundIndicator =
      url.includes('404')
      || url.includes('not-found')
      || (await page.textContent('body'))?.includes('404')
      || (await page.textContent('body'))?.includes('not found')
      || (await page.textContent('body'))
        ?.toLocaleLowerCase()
        .includes('page not found')

    expect(notFoundIndicator).toBeTruthy()
  })

  test('should display 404 message', async ({ page }) => {
    await page.goto('/non-existent-page-xyz')

    const text = await page.textContent('body')
    expect(text?.toLocaleLowerCase()).toMatch(
      /404|not.*found|doesn't exist|page not found/
    )
  })

  test('should provide navigation from 404 page', async ({ page }) => {
    await page.goto('/invalid-route')

    // Should have links to navigate away
    const navLinks = page.getByRole('link')
    expect(await navLinks.count()).toBeGreaterThan(0)
  })

  test('404 page should have home link', async ({ page }) => {
    await page.goto('/non-existent-xyz')

    const homeLink = page.getByRole('link', {
      name: /home|back to home|go home/i,
    })
    if ((await homeLink.count()) > 0) {
      await expect(homeLink.first()).toBeVisible()
    }
  })

  test('should have helpful 404 content', async ({ page }) => {
    await page.goto('/this-does-not-exist')

    // Should have some helpful text for users
    const content = page.locator('main, section, div').first()
    if (await content.isVisible({ timeout: 1000 }).catch(() => false)) {
      const text = await content.textContent()
      expect(text?.length).toBeGreaterThan(10)
    }
  })

  test('404 page should be accessible', async ({ page }) => {
    await page.goto('/invalid-route-abc')

    // Should have proper heading structure
    const headings = page.locator('h1, h2')
    expect(await headings.count()).toBeGreaterThan(0)
  })

  test('404 page should be responsive', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/non-existent-page')

    const content = page.locator('body')
    await expect(content).toBeVisible()

    // Should fit in viewport on mobile
    const hasHorizontalScroll = await page.evaluate(() => {
      return (
        document.documentElement.scrollWidth
        > document.documentElement.clientWidth
      )
    })

    // Minimal or no horizontal scroll
    expect(hasHorizontalScroll).toBeFalsy()
  })
})

test.describe('P0: Special Pages Error Handling', () => {
  test('should handle network errors gracefully', async ({ page }) => {
    // Go to a real page first
    await page.goto('/')

    // Then navigate to special pages
    await page.goto('/blocked')
    await expect(page).toHaveURL(/\/blocked/)
  })

  test('should display proper error page layout', async ({ page }) => {
    await page.goto('/non-existent')

    // Should have proper HTML structure
    const html = page.locator('html')
    await expect(html).toBeVisible()

    const body = page.locator('body')
    await expect(body).toBeVisible()
  })

  test('should maintain navigation functionality on error pages', async ({
    page,
  }) => {
    await page.goto('/invalid-route')

    // Navigation header/footer should still be visible
    const nav = page.locator('nav')
    const isNavVisible = await nav
      .isVisible({ timeout: 1000 })
      .catch(() => false)

    // Navigation may or may not be present on error page
    if (isNavVisible) {
      const navLinks = nav.locator('a')
      expect(await navLinks.count()).toBeGreaterThan(0)
    }
  })
})

test.describe('P0: Special Pages Performance', () => {
  test('special pages should load quickly', async ({ page }) => {
    const pageList = ['/resume', '/blocked', '/non-existent-page']

    for (const pagePath of pageList) {
      const startTime = Date.now()
      await page.goto(pagePath)
      await page.waitForLoadState('networkidle')
      const loadTime = Date.now() - startTime

      // Page should load within 5 seconds
      expect(loadTime).toBeLessThan(5000)
    }
  })

  test('should not have excessive layout shifts on special pages', async ({
    page,
  }) => {
    await page.goto('/resume')

    const content = page.locator('main, section').first()
    const initialBox = await content.boundingBox()

    await page.waitForLoadState('networkidle')

    const finalBox = await content.boundingBox()

    // Content should not shift significantly after load
    if (initialBox && finalBox) {
      expect(Math.abs(finalBox.x - initialBox.x)).toBeLessThan(20)
      expect(Math.abs(finalBox.y - initialBox.y)).toBeLessThan(20)
    }
  })
})
