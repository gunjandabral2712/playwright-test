import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';

test.describe('SauceDemo Login Tests', () => {

  test('should successfully log in with standard_user', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateTo();
    
    // Using credentials explicitly visible in your screenshot
    await loginPage.login('standard_user', 'secret_sauce');

    // Asserts that login succeeded and routed to the inventory management app
    await expect(page).toHaveURL('inventory.html');
  });

  test('should show error when logging in with locked_out_user', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateTo();
    await loginPage.login('locked_out_user', 'secret_sauce');

    // Asserts that the error text container appears and contains the system rejection message
    const errorText = await loginPage.getErrorMessageText();
    expect(errorText).toContain('Sorry, this user has been locked out.');
  });
  
});