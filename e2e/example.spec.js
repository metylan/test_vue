// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/');
});

const TODO_ITEMS = [
  'buy some cheese',
  'feed the cat',
  'book a doctors appointment'
];

test.describe('Test e2e', () => {
  test('play the timer', async ({ page }) => {
    // Create 1st todo.
    await page.locator.get('#start').fill(TODO_ITEMS[0]);
  });
});
