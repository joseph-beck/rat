import { test, expect } from '@playwright/test';

test.describe('rat', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://127.0.0.1:5173');
  });

  test('has title rat', async ({ page }) => {
    await expect(page).toHaveTitle(/rat/);
  });
});
