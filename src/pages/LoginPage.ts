import { Page, Locator } from '@playwright/test';

export class LoginPage {
  private readonly page: Page;
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    
    // Using the precise attributes visible in your screenshot's DOM
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    
    // Targets the error container visible in the form layout
    this.errorMessage = page.locator('[data-test="error"]');
  }

  // Uses the relative path '/' because we configured the baseURL in your config file
  async navigateTo() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async getErrorMessageText(): Promise<string> {
    return await this.errorMessage.innerText();
  }
}