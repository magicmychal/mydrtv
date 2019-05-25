import { AppPage } from './app.po';
import { browser, logging, $$ } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should click login dropdown', () => {
    page.navigateTo();
    expect(page.clickLoginDropdown());
    // browser.sleep(5000);
  });

  it('should fill out input fields in login dropdown', () => {
    expect(page.fillInputsLoginDropdown());
    //browser.sleep(5000);
  });

  it('should click login dropdown button', () => {
    expect(page.clickLoginDropdownButton())
    //browser.sleep(3000);
  }); 

  it('should navigate to members page by button-click', () => {
    expect(page.clickMembers())
    //browser.sleep(3000);
  });


  it('should count the members before signup', () => {
    expect(page.countMembers())
    //browser.sleep(3000);
    
  });

  it('should click on user dropdown', () => {
    expect(page.clickLoginDropdown())
    //browser.sleep(3000);
  });

  it('should click on logout', () => {
    expect(page.clickLogout())
    //browser.sleep(3000);
  });

  it('should navigate to the signup page by button-click', () => {
    expect(page.clickSignup())
    //browser.sleep(30000);
  });

  it('should fill out input fields in signup', () => {
    expect(page.fillInputsSignup())
    browser.sleep(30000);
  });

  it('should click signup button', () => {
    expect(page.clickSignupButton())
    //browser.sleep(3000);
  });

  it('should fill out input fields in login', () => {
    expect(page.fillInputsLogin())
    //browser.sleep(30000);
  });

  it('should click login button', () => {
    expect(page.clickLoginButton())
    //browser.sleep(3000);
  });

  it('should navigate to members page by button-click', () => {
    expect(page.clickMembers())
    //browser.sleep(3000);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

});
