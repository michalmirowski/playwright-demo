import { BasePage } from './base.page';
import { ContactPage } from './contact.page';
import { Locator, Page } from '@playwright/test';

export class MainPage extends BasePage {
  contactLink: Locator;

  constructor(page: Page) {
    super(page);
    this.contactLink = this.page.getByTestId('nav-contact');
  }

  async clickContactLink(): Promise<ContactPage> {
    this.contactLink.click();
    return new ContactPage(this.page);
  }
}
