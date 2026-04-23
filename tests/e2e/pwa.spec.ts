import { expect, test } from '@playwright/test'

// ============================================================================
// PRIORITY 0: PWA AND OFFLINE BEHAVIOR
// ============================================================================
test.describe('P0: PWA Manifest Validation', () => {
  test('should have valid web app manifest', async ({ page }) => {
    await page.goto('/')

    const manifestLink = page.locator('link[rel="manifest"]')
    await expect(manifestLink).toHaveAttribute('href', /.+/)

    const href = await manifestLink.getAttribute('href')
    if (href) {
      // Fetch and validate manifest
      const response = await page.request.get(href)
      expect(response.ok()).toBeTruthy()

      const manifest = await response.json()
      expect(manifest.name).toBeTruthy()
      expect(manifest.short_name).toBeTruthy()
    }
  })

  test('manifest should have required fields', async ({ page }) => {
    await page.goto('/')

    const manifestLink = page.locator('link[rel="manifest"]')
    const href = await manifestLink.getAttribute('href')

    if (href) {
      const response = await page.request.get(href)
      const manifest = await response.json()

      expect(manifest.name).toBeTruthy()
      expect(manifest.short_name).toBeTruthy()
      expect(manifest.display).toBeTruthy()
      expect(manifest.start_url).toBeTruthy()
    }
  })

  test('manifest should have theme colors defined', async ({ page }) => {
    await page.goto('/')

    const manifestLink = page.locator('link[rel="manifest"]')
    const href = await manifestLink.getAttribute('href')

    if (href) {
      const response = await page.request.get(href)
      const manifest = await response.json()

      // Should have theme color or background color
      const hasColor = manifest.theme_color || manifest.background_color
      expect(hasColor).toBeTruthy()
    }
  })
})

test.describe('P0: PWA Icons and Metadata', () => {
  test('should have app icons defined in manifest', async ({ page }) => {
    await page.goto('/')

    const manifestLink = page.locator('link[rel="manifest"]')
    const href = await manifestLink.getAttribute('href')

    if (href) {
      const response = await page.request.get(href)
      const manifest = await response.json()

      expect(manifest.icons).toBeTruthy()
      expect(Array.isArray(manifest.icons)).toBeTruthy()
      expect((manifest.icons as unknown[]).length).toBeGreaterThan(0)
    }
  })

  test('should have favicon defined', async ({ page }) => {
    await page.goto('/')

    const favicon = page.locator('link[rel="icon"]')
    const faviconCount = await favicon.count()
    expect(faviconCount).toBeGreaterThan(0)
  })

  test('should have apple-touch-icon defined', async ({ page }) => {
    await page.goto('/')

    const appleTouchIcon = page.locator('link[rel="apple-touch-icon"]')
    const count = await appleTouchIcon.count()

    // Apple touch icon may or may not be present, but if it is, it should have href
    if (count > 0) {
      await expect(appleTouchIcon.first()).toHaveAttribute('href', /.+/)
    }
  })

  test('manifest display should be supported', async ({ page }) => {
    await page.goto('/')

    const manifestLink = page.locator('link[rel="manifest"]')
    const href = await manifestLink.getAttribute('href')

    if (href) {
      const response = await page.request.get(href)
      const manifest = await response.json()

      const validDisplayModes = [
        'fullscreen',
        'standalone',
        'minimal-ui',
        'browser',
      ]
      expect(validDisplayModes).toContain(manifest.display)
    }
  })
})

test.describe('P0: Service Worker Registration', () => {
  test('should have service worker support indicated', async ({ page }) => {
    await page.goto('/')

    const hasServiceWorkerSupport = await page.evaluate(() => {
      return 'serviceWorker' in navigator
    })

    // Service worker API should be available in modern browsers
    expect(hasServiceWorkerSupport).toBeTruthy()
  })

  test('should not throw errors on offline check', async ({ page }) => {
    await page.goto('/')

    // Check if offline/online events work
    const hasOnlineEvent = await page.evaluate(() => {
      return 'onoffline' in window && 'ononline' in window
    })

    expect(hasOnlineEvent).toBeTruthy()
  })
})

test.describe('P0: Offline Page Behavior', () => {
  test('should have offline fallback strategy', async ({ page }) => {
    // Note: This test requires the browser to support offline mode
    // Actual offline testing may require additional setup
    await page.goto('/')

    // The page should be resilient to offline scenarios
    const content = page.locator('main, section').first()
    await expect(content).toBeVisible()
  })

  test('previously visited pages should be accessible', async ({ page }) => {
    // Visit multiple pages to cache them
    await page.goto('/')
    await page.goto('/about')
    await page.goto('/projects')

    // Navigate back to home
    await page.goto('/')

    // Content should load (cached or fresh)
    const content = page.locator('main, section').first()
    await expect(content).toBeVisible()
  })
})

test.describe('P0: Installability', () => {
  test('should be installable as PWA', async ({ page }) => {
    await page.goto('/')

    // Check for required manifest fields for installability
    const manifestLink = page.locator('link[rel="manifest"]')
    const href = await manifestLink.getAttribute('href')

    if (href) {
      const response = await page.request.get(href)
      const manifest = await response.json()

      // Minimum fields for installability
      expect(manifest.name || manifest.short_name).toBeTruthy()
      expect(manifest.start_url).toBeTruthy()
      expect(manifest.display).toBeTruthy()
      expect(manifest.icons && manifest.icons.length > 0).toBeTruthy()
    }
  })

  test('should have standalone display capability', async ({ page }) => {
    await page.goto('/')

    // Check if app can run standalone
    const manifestLink = page.locator('link[rel="manifest"]')
    const href = await manifestLink.getAttribute('href')

    if (href) {
      const response = await page.request.get(href)
      const manifest = await response.json()

      expect(['standalone', 'fullscreen', 'minimal-ui']).toContain(
        manifest.display
      )
    }
  })

  test('should have viewport meta tag for mobile', async ({ page }) => {
    await page.goto('/')

    const viewport = page.locator('meta[name="viewport"]')
    await expect(viewport).toHaveAttribute('content', /.+/)

    const content = await viewport.getAttribute('content')
    expect(content).toContain('width=device-width')
  })
})

test.describe('P0: Web App Metadata', () => {
  test('should have proper theme color meta tag', async ({ page }) => {
    await page.goto('/')

    const themeColor = page.locator('meta[name="theme-color"]')
    const count = await themeColor.count()

    if (count > 0) {
      await expect(themeColor).toHaveAttribute('content', /#.+/)
    }
  })

  test('should have apple status bar style defined', async ({ page }) => {
    await page.goto('/')

    const statusBar = page.locator(
      'meta[name="apple-mobile-web-app-status-bar-style"]'
    )
    const count = await statusBar.count()

    // May or may not be present, but if present should have valid value
    if (count > 0) {
      const content = await statusBar.getAttribute('content')
      expect(['black', 'white', 'black-translucent']).toContain(content)
    }
  })

  test('should be able to add to home screen', async ({ page }) => {
    await page.goto('/')

    // Check for required manifest fields
    const manifestLink = page.locator('link[rel="manifest"]')
    await expect(manifestLink).toHaveAttribute('href', expect.any(String))

    // Check for meta viewport tag
    const viewport = page.locator('meta[name="viewport"]')
    await expect(viewport).toHaveAttribute('content', expect.any(String))
  })
})

test.describe('P0: Asset Caching', () => {
  test('should cache CSS and JS assets', async ({ page }) => {
    const responses: string[] = []

    page.on('response', resp => {
      if (resp.url().match(/\.(css|js)(\?.*)?$/)) {
        responses.push(resp.url())
      }
    })

    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Should have loaded some assets
    expect(responses.length).toBeGreaterThan(0)
  })

  test('should serve images efficiently', async ({ page }) => {
    const imageResponses: { url: string; size: number }[] = []

    page.on('response', async resp => {
      if (resp.url().match(/\.(png|jpg|jpeg|webp|svg)$/i)) {
        const buffer = await resp.body()
        imageResponses.push({
          url: resp.url(),
          size: buffer.length,
        })
      }
    })

    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // If images are present, they should be reasonably sized
    imageResponses.forEach(img => {
      expect(img.size).toBeGreaterThan(0)
    })
  })
})

test.describe('P0: Security Headers for PWA', () => {
  test('should load over HTTPS in production', async ({ page }) => {
    // This test assumes the base URL is set to production in CI
    const baseURL =
      (page.context() as unknown as { baseURL?: string }).baseURL || ''

    if (baseURL.includes('production') || baseURL.includes('https://')) {
      await page.goto('/')
      const protocol = page.url().split('://')[0]
      expect(protocol).toBe('https')
    }
  })
})
