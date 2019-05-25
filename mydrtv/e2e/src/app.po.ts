import { browser, by, element, Key, $$ } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  clickLoginDropdown(){
    return element(by.id('dropdownMenu1')).click();
  }

  fillInputsLoginDropdown(){
    let result =  element(by.id('txtEmail')).sendKeys("caroline@gmail.com"); 
                  element(by.id('txtPassword')).sendKeys("123456"); 
    return result;
  }

  clickLoginDropdownButton() {
    return element(by.id('loginBtn')).click();
  }

  clickMembers(){
    return element(by.id('members')).click();
  }
  
  signupUser(){
    //browser.sleep(1000);
    $$('.userBox').then( (usersBeforeSignup) => {
      let numberOfUsersBefore = usersBeforeSignup.length;
      //console.log(numberOfUsersBefore)

      element(by.id('dropdownMenu1')).click();
      //browser.sleep(1000);
      element(by.id('logout')).click();
      //browser.sleep(1000);
      element(by.id('notUser')).click();
      //browser.sleep(1000);

      $$('#txtNameSignup').sendKeys("John"); 
      $$('#txtEmailSignup').sendKeys("john@gmail.com"); 
      $$('#txtPasswordSignup').sendKeys("123456"); 
      $$('#txtGenderSignup').sendKeys("M");
      $$('#txtCheckboxSignup').sendKeys(Key.SPACE);
      //browser.sleep(1000);

      element(by.id('btnSignup')).click();
      //browser.sleep(1000);

      $$('#txtEmailLogin').sendKeys("john@gmail.com");
      $$('#txtPasswordLogin').sendKeys("123456");
      //browser.sleep(1000);

      element(by.id('btnLogin')).click();
      //browser.sleep(1000);
      element(by.id('members')).click();
      //browser.sleep(1000);

      $$('.userBox').then((usersAfterSignup) => {
        expect(usersAfterSignup.length - numberOfUsersBefore).toEqual(1);
        //console.log(usersAfterSignup.length);
      })
    })
  }
}