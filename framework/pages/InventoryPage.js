import config from "../config/config";

export default class inventoryPage {
  constructor(page) {
    this.page = page;
  }

  async waitForInventoryPageLoad() {
    await this.page.waitForURL(config.baseUrl + "/inventory.html");
  }

  async clickHamburgerMenuButton() {
    await this.page.click("//*[@id='react-burger-menu-btn']");
  }

  async clickHamburgerMenuCloseButton() {
    await this.page.click("//*[@id='react-burger-cross-btn']");
  }

  async clickInventoryItemButton() {
    await this.page.click("#item_4_title_link div");
  }

  async waitForInventoryItemPageLoad() {
    await this.page.waitForURL(config.baseUrl + "/inventory-item.html?id=4");
  }
  async clickBackToProductsButton() {
    await this.page.click("button[data-test='back-to-products']");
  }
}