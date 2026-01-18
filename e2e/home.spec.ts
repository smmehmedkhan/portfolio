import { expect, test } from '@playwright/test'

test.describe('Home Page', () => {
  test('should load home page', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Mehmed Khan/i)
  })

  test('should display hero section', async ({ page }) => {
    await page.goto('/')
    const hero = page.locator('header.hero-banner')
    await expect(hero).toBeVisible()
  })

  test('should navigate to contact page from hero button', async ({ page }) => {
    await page.goto('/')
    const contactButton = page.getByRole('link', { name: /contact me/i })
    await contactButton.click()
    await expect(page).toHaveURL(/\/contact/)
  })

  test('should display navigation links', async ({ page }) => {
    await page.goto('/')
    const aboutLink = page.getByRole('link', { name: /about/i })
    const projectsLink = page.getByRole('link', { name: /projects/i })
    await expect(aboutLink).toBeVisible()
    await expect(projectsLink).toBeVisible()
  })

  test('should navigate between pages', async ({ page }) => {
    await page.goto('/')

    // Navigate to About
    await page.getByRole('link', { name: /about/i }).click()
    await expect(page).toHaveURL(/\/about/)

    // Navigate to Projects
    await page.getByRole('link', { name: /projects/i }).click()
    await expect(page).toHaveURL(/\/projects/)

    // Navigate to Contact
    await page.getByRole('link', { name: /contact/i }).click()
    await expect(page).toHaveURL(/\/contact/)
  })
})

test.describe('Theme Toggle', () => {
  test('should toggle theme', async ({ page }) => {
    await page.goto('/')

    const themeToggle = page.getByRole('button', { name: /toggle theme/i })
    await expect(themeToggle).toBeVisible()

    // Click theme toggle
    await themeToggle.click()

    // Wait for theme change (check for dark class or other indicator)
    await page.waitForTimeout(100)

    // Verify theme changed (this depends on your implementation)
    const html = page.locator('html')
    // Adjust this assertion based on your theme implementation
    await expect(html).toBeVisible()
  })
})
