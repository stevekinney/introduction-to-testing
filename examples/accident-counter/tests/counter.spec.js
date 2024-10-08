import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173');
});

test('it has a counter', async ({ page }) => {
  const count = page.getByTestId('counter-count');
  const incrementButton = page.getByRole('button', { name: /increment/i });

  await incrementButton.click();
});
