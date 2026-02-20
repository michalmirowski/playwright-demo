import { MessageModel } from '../models/message.model';
import { BasePage } from './base.page';
import { Locator, Page } from '@playwright/test';

export class ContactPage extends BasePage {
  url = '/contact';
  contactFormHeader: Locator;
  firstNameInput: Locator;
  lastNameInput: Locator;
  emailInput: Locator;
  subjectInput: Locator;
  messageInput: Locator;
  messageError: Locator;
  sendButton: Locator;
  alertSuccess: Locator;
  alertDanger: Locator;

  constructor(page: Page) {
    super(page);
    this.contactFormHeader = this.page.getByRole('heading', {
      name: 'Contact',
    });
    this.firstNameInput = this.page.getByTestId('first-name');
    this.lastNameInput = this.page.getByTestId('last-name');
    this.emailInput = this.page.getByTestId('email');
    this.subjectInput = this.page.getByTestId('subject');
    this.messageInput = this.page.getByTestId('message');
    this.messageError = this.page.getByTestId('message-error');
    this.sendButton = this.page.getByTestId('contact-submit');
    this.alertSuccess = this.page.getByRole('alert');
    this.alertDanger = this.page.locator('.alert-danger');
  }

  async sendMessage(message: MessageModel): Promise<ContactPage> {
    await this.firstNameInput.fill(message.firstName);
    await this.lastNameInput.fill(message.lastName);
    await this.emailInput.fill(message.email);
    await this.subjectInput.selectOption(message.subject);
    await this.messageInput.fill(message.message);
    await this.sendButton.click();
    return new ContactPage(this.page);
  }
}
