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

  it('should count members before signup, log out, signup, login, go to members, count members after signup', () => {
    expect(page.signupUser())
    //browser.sleep(10000);
    
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

});
