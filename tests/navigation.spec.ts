import { MainPage } from '../src/pages/main.page';
import { expect, test } from '@playwright/test';

test.describe('Verify navigation', () => {
  let mainPage: MainPage;

  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    await mainPage.goto();
  });

  test('open contact page', async ({}) => {
    // Arrange
    const expectedHeader = 'Contact Us';

    // Act
    const contactPage = await mainPage.clickContactLink();
    await contactPage.waitForPageToLoadUrl();

    // Assert
    expect.soft(await contactPage.getTitle()).toContain(expectedHeader);
    await expect(contactPage.contactFormHeader).toBeVisible();
  });
});
