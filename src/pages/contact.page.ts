import { BasePage } from './base.page';
import { Locator, Page } from '@playwright/test';

export class ContactPage extends BasePage {
  url = '/contact';
  contactFormHeader: Locator;

  constructor(page: Page) {
    super(page);
    this.contactFormHeader = this.page.getByRole('heading', {
      name: 'Contact',
    });
  }
}
