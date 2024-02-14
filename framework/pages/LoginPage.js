import config from '../config/config'


export default class LoginPage {
    constructor(page) {
      this.page = page;
    }
  
    async navigateToLoginPage() {
      await this.page.goto(config.baseUrl);
    }
  
    async enterUsername(testname) {
      await this.page.getByPlaceholder('Username').fill(testname);
    }
  
    async enterPassword(testpass) {
      await this.page.getByPlaceholder('Password').fill(testpass);
    }
  
    async clickLoginButton() {
      await this.page.click('[data-test="login-button"]');
    }
  
    async waitForinventoryPage() {
      await this.page.waitForURL(config.baseUrl + "/inventory.html");
    }
  }
