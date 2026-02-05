import { expect, test } from '@playwright/test';

test('open contact page', async ({ page }) => {
  // Arrange
  await page.goto('/');

  // Act
  await page.getByTestId('nav-contact').click();

  // Assert
  await expect.soft(page).toHaveTitle(/Contact Us/);
  await expect(page.getByRole('heading', { name: 'Contact' })).toBeVisible();
});
