import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getLoginButton(){
    return element(by.id('dropdownMenu1'));
  }
  getWelcomeHeadline() {
    return element(by.css('app-welcome h1')).getText() as Promise<string>;
  }
  getWelcomeSubtext() {
    return element(by.css('app-welcome p')).getText() as Promise<string>;
  }
}
