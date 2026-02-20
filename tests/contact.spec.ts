import { prepareRandomMessage } from '../src/factories/message.factory';
import { ContactPage } from '../src/pages/contact.page';
import { expect, test } from '@playwright/test';

test.describe('Verify contact page', () => {
  let contactPage: ContactPage;

  test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page);
    await contactPage.goto();
  });

  test('send valid message', async ({}) => {
    // Arrange
    const expectedMessage =
      'Thanks for your message! We will contact you shortly.';
    const messageData = prepareRandomMessage();

    // Act
    await contactPage.sendMessage(messageData);

    // Assert
    await expect(contactPage.alertSuccess).toContainText(expectedMessage);
  });

  test('cannot send message shorter than 50 characters', async ({}) => {
    // Arrange
    const expectedError = 'Message must be minimal 50 characters';
    const messageData = prepareRandomMessage(49);

    // Act
    await contactPage.sendMessage(messageData);

    // Assert
    await expect(contactPage.messageError).toContainText(expectedError);
  });

  test('cannot send message longer than 250 characters', async ({}) => {
    // Arrange
    const expectedError =
      'The message field must not be greater than 250 characters.';
    const messageData = prepareRandomMessage(251);

    // Act
    await contactPage.sendMessage(messageData);

    // Assert
    await expect(contactPage.alertDanger).toContainText(expectedError);
  });

  test('cannot send empty message', async ({}) => {
    // Arrange
    const expectedError = 'Message is required';
    const messageData = prepareRandomMessage(251);
    messageData.message = '';

    // Act
    await contactPage.sendMessage(messageData);

    // Assert
    await expect(contactPage.messageError).toContainText(expectedError);
  });
});
