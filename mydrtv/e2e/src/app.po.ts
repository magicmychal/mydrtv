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

  clickLogout() {
    return element(by.id('logout')).click();
  }

  clickSignup(){
    return element(by.id('notUser')).click();
  }

  fillInputsSignup(){
    let x =  $$('#txtNameSignup').sendKeys("John"); 
             $$('#txtEmailSignup').sendKeys("john@gmail.com"); 
             $$('#txtPasswordSignup').sendKeys("123456"); 
             $$('txtGenderSignup').sendKeys("M");
             $$('txtCheckboxSignup').sendKeys(Key.SPACE);
    return x;
  }

  clickSignupButton(){
    return element(by.id('btnSignup')).click();
  }

  fillInputsLogin(){
    let result =  element(by.id('txtEmail')).sendKeys("john@gmail.com"); 
                  element(by.id('txtPassword')).sendKeys("123456"); 
    return result;
  }

  clickLoginButton(){
    return element(by.id('btnLogin')).click();
  }

  clickMembers(){
    return element(by.id('members')).click();
  }

  countMembers(){
    $$('.userBox').then( (usersBeforeSignup) => {
      let usersBefore = usersBeforeSignup.length;
      // console.log(usersBefore)
      return usersBefore;
    })
  }

}