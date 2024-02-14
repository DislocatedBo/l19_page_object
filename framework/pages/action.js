 import LoginPage from './LoginPage';
import InventoryPage from './InventoryPage';


export default class Actions {
    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.inventoryPage = new InventoryPage(page);
    }
  
    async login(testname, testpass) {
      await this.loginPage.navigateToLoginPage();
      await this.loginPage.enterUsername(testname);
      await this.loginPage.enterPassword(testpass);
      await this.loginPage.clickLoginButton();
      await this.loginPage.waitForinventoryPage();
    }
  
    async hamburgerOpened() {
      await this.inventoryPage.clickHamburgerMenuButton();
    }

    async hamburgerClosed() {
      await this.inventoryPage.clickHamburgerMenuCloseButton();
    }

    async inventoryItem() {
      await this.inventoryPage.clickInventoryItemButton();
      await this.inventoryPage.waitForInventoryItemPageLoad();
      await this.inventoryPage.clickBackToProductsButton();
    }
  }
