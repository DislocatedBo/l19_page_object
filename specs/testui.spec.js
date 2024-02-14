import { test, expect } from '@playwright/test';
import config from '../framework/config/config';
import Actions from '../framework/pages/action';

test.describe('Login', ()=>{
  
  test('successful login ', async ({ page }) => {
  const actions = new Actions(page);
  await actions.login(config.testname, config.testpass);
  await expect(page.url()).toBe(`${config.baseUrl}/inventory.html`);
  await expect(page.locator("span[class='title']")).toBeVisible();
});
})

test.describe('Hamburger', ()=>{

test('hamburger menu successfully opened', async ({ page }) => {
  const actions = new Actions(page);
  await actions.login(config.testname, config.testpass);
  await actions.hamburgerOpened();
  await expect(page.locator("#react-burger-cross-btn")).toBeVisible();
});

test('hamburger menu successfully closed', async ({ page }) => {
  const actions = new Actions(page);
  await actions.login(config.testname, config.testpass);
  await actions.hamburgerOpened();
  await actions.hamburgerClosed();
  await expect(page.locator("#react-burger-cross-btn")).not.toBeVisible();
});
})

test.describe('InventoryItem', ()=>{

    test('Inventory item is presents', async ({ page }) => {
      const actions = new Actions(page);
      await actions.login(config.testname, config.testpass);
      await actions.inventoryItem()
      await expect(page.locator("button[data-test='back-to-products']")).not.toBeVisible();
      await expect(page.locator("#item_0_title_link div")).toBeVisible();
    });
  
  })
