import { test, expect } from '@playwright/test';

/** @type {import('../start-server').DevelopmentServer} */
test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173');
});

test('it should load the page', async ({ page }) => {
  await expect(page).toHaveTitle('Task List');
});

test('it should add a task', async ({ page }) => {
  const input = page.getByLabel('Create Task');
  const submit = page.getByRole('button', { name: 'Create Task' });

  await input.fill('Learn Playwright');
  await submit.click();

  const heading = await page.getByRole('heading', { name: 'Learn Playwright' });

  await expect(heading).toBeVisible();
});
