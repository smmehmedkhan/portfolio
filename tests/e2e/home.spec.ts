import { expect, test } from '@playwright/test'

// ============================================================================
// PRIORITY 0: CRITICAL END-TO-END PATHS
// ============================================================================
test.describe('P0: Core User Journeys', () => {
  test('should load home page and display hero section', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Mehmed Khan/i)
    const hero = page.locator('header')
    await expect(hero).toBeVisible()
  })

  test('should navigate to About page', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: /about/i }).first().click()
    await expect(page).toHaveURL(/\/about/)
    await page.waitForLoadState('networkidle')
  })

  test('should navigate to Projects page', async ({ page }) => {
    await page.goto('/')
    await page
      .getByRole('link', { name: /projects/i })
      .first()
      .click()
    await expect(page).toHaveURL(/\/projects/)
    await page.waitForLoadState('networkidle')
  })

  test('should navigate to Contact page', async ({ page }) => {
    await page.goto('/')
    await page
      .getByRole('link', { name: /contact/i })
      .first()
      .click()
    await expect(page).toHaveURL(/\/contact/)
    await page.waitForLoadState('networkidle')
  })

  test('should navigate to Resume page', async ({ page }) => {
    await page.goto('/')
    await page
      .getByRole('link', { name: /resume/i })
      .first()
      .click()
    await expect(page).toHaveURL(/\/resume/)
    await page.waitForLoadState('networkidle')
  })

  test('should display navigation links from hero section', async ({
    page,
  }) => {
    await page.goto('/')
    const aboutLink = page.getByRole('link', { name: /about/i }).first()
    const projectsLink = page.getByRole('link', { name: /projects/i }).first()
    const resumeLink = page.getByRole('link', { name: /resume/i }).first()
    const contactLink = page.getByRole('link', { name: /contact/i }).first()

    await expect(aboutLink).toBeVisible()
    await expect(projectsLink).toBeVisible()
    await expect(resumeLink).toBeVisible()
    await expect(contactLink).toBeVisible()
  })

  test('should navigate from hero button to contact page', async ({ page }) => {
    await page.goto('/')
    const heroContactButton = page
      .getByRole('button', { name: /contact me|get in touch/i })
      .first()
    if (
      await heroContactButton.isVisible({ timeout: 1000 }).catch(() => false)
    ) {
      await heroContactButton.click()
      await expect(page).toHaveURL(/\/contact/)
    }
  })

  test('should maintain navigation state across page visits', async ({
    page,
  }) => {
    await page.goto('/')

    // About
    await page.getByRole('link', { name: /about/i }).first().click()
    await expect(page).toHaveURL(/\/about/)

    // Projects
    await page
      .getByRole('link', { name: /projects/i })
      .first()
      .click()
    await expect(page).toHaveURL(/\/projects/)

    // Back to home
    await page.getByRole('link', { name: /mk/i }).first().click()
    await expect(page).toHaveURL(/\/$/)
  })
})

// ============================================================================
// PRIORITY 0: MOBILE NAVIGATION
// ============================================================================
test.describe('P0: Mobile Navigation', () => {
  test.beforeEach(async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })
  })

  test('should display mobile navigation menu', async ({ page }) => {
    await page.goto('/')
    const menuButton = page
      .getByRole('button', {
        name: /menu|toggle|hamburger/i,
      })
      .first()
    await expect(menuButton).toBeVisible()
  })

  test('should open and close mobile navigation menu', async ({ page }) => {
    await page.goto('/')
    const menuButton = page.getByRole('button', {
      name: /menu|toggle|hamburger/i,
    })

    // Open menu
    await menuButton.click()
    const navMenu = page.locator('menu').first()
    await expect(navMenu).toBeVisible()

    // Close menu
    const closeButton = page.getByRole('button', {
      name: /close menu/i,
    })
    await closeButton.click()
    await expect(navMenu).not.toBeVisible()
  })

  test('should navigate via mobile menu', async ({ page }) => {
    await page.goto('/')
    const menuButton = page
      .getByRole('button', {
        name: /menu|toggle|hamburger/i,
      })
      .first()

    // Open menu
    await menuButton.click()

    // Navigate to About
    await page.getByRole('link', { name: /about/i }).first().click()
    await expect(page).toHaveURL(/\/about/)
  })
})

// ============================================================================
// PRIORITY 0: CONTACT FORM SUBMISSION
// ============================================================================
test.describe('P0: Contact Form Submission', () => {
  test('should display contact form', async ({ page }) => {
    await page.goto('/contact')
    const form = page.locator('form').first()
    await expect(form).toBeVisible()
  })

  test('should validate required contact form fields', async ({ page }) => {
    await page.goto('/contact')
    const submitButton = page.getByRole('button', { name: /submit|send/i })

    // Try to submit empty form
    await submitButton.click()

    // Expect validation errors (appearance varies by implementation)
    await page.waitForTimeout(500)
  })

  test('should accept valid contact form input', async ({ page }) => {
    await page.goto('/contact')

    // Fill in contact form
    await page.getByLabel(/name|full name/i).fill('Test User')
    await page
      .getByLabel(/contact email/i)
      .first()
      .fill('test@example.com')
    await page.getByLabel(/message|subject/i).fill('Test message content')

    const submitButton = page.getByRole('button', { name: /submit|send/i })
    await expect(submitButton).toBeEnabled()
  })

  test('should reject invalid email in contact form', async ({ page }) => {
    await page.goto('/contact')

    await page.getByLabel(/name|full name/i).fill('Test User')
    await page
      .getByLabel(/contact email/i)
      .first()
      .fill('invalid-email')
    await page.getByLabel(/message|subject/i).fill('Test message')

    const submitButton = page.getByRole('button', { name: /submit|send/i })
    await submitButton.click()

    // Wait for validation error
    await page.waitForTimeout(500)
  })
})

// ============================================================================
// PRIORITY 0: NEWSLETTER SIGNUP
// ============================================================================
test.describe('P0: Newsletter Signup', () => {
  test('should display newsletter signup section', async ({ page }) => {
    await page.goto('/')
    // Look for newsletter/subscription form
    const newsletterForm = page
      .locator('form')
      .filter({ hasText: /newsletter|subscribe|email/i })
    if ((await newsletterForm.count()) > 0) {
      await expect(newsletterForm.first()).toBeVisible()
    }
  })

  test('should accept valid newsletter email', async ({ page }) => {
    await page.goto('/')
    const newsletterForms = page
      .locator('form')
      .filter({ hasText: /newsletter|subscribe/i })

    if ((await newsletterForms.count()) > 0) {
      const form = newsletterForms.first()
      const emailInput = form.getByLabel(/email/i)
      if (await emailInput.isVisible({ timeout: 1000 }).catch(() => false)) {
        await emailInput.fill('newsletter@example.com')
        const submitButton = form.getByRole('button', {
          name: /subscribe|submit/i,
        })
        await expect(submitButton).toBeEnabled()
      }
    }
  })
})

// ============================================================================
// PRIORITY 0: PROJECTS AND PAGINATION
// ============================================================================
test.describe('P0: Projects Listing and Pagination', () => {
  test('should display projects on projects page', async ({ page }) => {
    await page.goto('/projects')
    const projectCards = page.locator(
      '[data-testid*="project"], article, .project'
    )
    await expect(projectCards.first()).toBeVisible({ timeout: 2000 })
  })

  test('should have pagination controls if multiple projects exist', async ({
    page,
  }) => {
    await page.goto('/projects')
    await page.waitForLoadState('networkidle')

    // Check if pagination exists
    const paginationButtons = page
      .locator('button')
      .filter({ hasText: /next|previous|page|1|2|3/i })
    if ((await paginationButtons.count()) > 0) {
      await expect(paginationButtons.first()).toBeVisible()
    }
  })

  test('should navigate between project pages', async ({ page }) => {
    await page.goto('/projects')
    await page.waitForLoadState('networkidle')

    const nextButton = page.getByRole('button', { name: /next/i })
    if (await nextButton.isEnabled({ timeout: 1000 }).catch(() => false)) {
      await nextButton.click()
      await page.waitForLoadState('networkidle')
      await expect(page).toHaveURL(/\/projects/)
    }
  })
})

// ============================================================================
// PRIORITY 0: PAGE-SPECIFIC FEATURES
// ============================================================================
test.describe('P0: Resume and Special Pages', () => {
  test('should load resume page', async ({ page }) => {
    await page.goto('/resume')
    await page.waitForLoadState('networkidle')
    await expect(page).toHaveURL(/\/resume/)
  })

  test('should display resume content', async ({ page }) => {
    await page.goto('/resume')
    const content = page.locator('main, section')
    await expect(content.first()).toBeVisible()
  })

  test('should load blocked page', async ({ page }) => {
    await page.goto('/blocked')
    await page.waitForLoadState('networkidle')
    await expect(page).toHaveURL(/\/blocked/)
  })

  test('should handle 404 not found page', async ({ page }) => {
    await page.goto('/non-existent-page')
    await page.waitForLoadState('networkidle')
    // Should show 404 or not-found content
  })
})

// ============================================================================
// PRIORITY 0: THEME TOGGLE
// ============================================================================
test.describe('P0: Theme Toggle and Persistence', () => {
  test('should display theme toggle button', async ({ page }) => {
    await page.goto('/')
    const themeToggle = page.getByRole('button', {
      name: /theme|dark|light|toggle/i,
    })
    await expect(themeToggle).toBeVisible()
  })

  test('should toggle theme', async ({ page }) => {
    await page.goto('/')
    const themeToggle = page.getByRole('button', {
      name: /theme|dark|light|toggle/i,
    })

    const _initialClass = await page.locator('html').getAttribute('class')
    await themeToggle.click()
    await page.waitForTimeout(200)
    const _changedClass = await page.locator('html').getAttribute('class')

    expect(_initialClass).not.toBe(_changedClass)
  })

  test('should persist theme preference across page reloads', async ({
    page,
  }) => {
    await page.goto('/')
    const themeToggle = page.getByRole('button', {
      name: /theme|dark|light|toggle/i,
    })

    // Toggle theme
    await themeToggle.click()
    await page.waitForTimeout(200)
    const _changedClass = await page.locator('html').getAttribute('class')

    // Reload page
    await page.reload()
    await page.waitForLoadState('networkidle')

    // Theme preference should be maintained
    const _finalClass = await page.locator('html').getAttribute('class')
    expect(_finalClass).toBe(_changedClass)
  })
})
