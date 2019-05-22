import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display read login button text', () => {
    page.navigateTo();
    expect(page.getLoginButton().getText()).toEqual('Login');
  });
  
  it('should display welcome page headline', () => {
    page.navigateTo();
    expect(page.getWelcomeHeadline()).toEqual('Danish cinema at its best');
  });

  it('should display welcome page subtext', () => {
    page.navigateTo();
    expect(page.getWelcomeSubtext()).toEqual('Discover the cultural film heritage of Denmark');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
