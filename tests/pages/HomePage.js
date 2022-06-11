const NativePage = require('./native.page.js');

//====================================================================================================================
//Author : Rashad Rouzdeen 
//Date   : 11.06.2022
//====================================================================================================================

class homePage extends NativePage {

  //====================================================================================================================
  //Locators
  //====================================================================================================================

  get linkDropDown() { return $('//a[text()="Dropdown"]') }
  get linkCheckBoxes() { return $('//a[text()="Checkboxes"]') }
  get linkFloatingMenu() { return $('//a[text()="Floating Menu"]') }
  get linkNotificationMessages() { return $('//a[text()="Notification Messages"]') }
  get linkAddRemoveElements() { return $('//a[text()="Add/Remove Elements"]') }



  //====================================================================================================================
  //Methods
  //====================================================================================================================

  async clickDropDown() {
    await (await this.linkDropDown).waitForClickable({ timeout: 10000 });
    await (await this.linkDropDown).click();
  }

  async clickCheckBoxes() {
    await (await this.linkCheckBoxes).waitForClickable({ timeout: 10000 });
    await (await this.linkCheckBoxes).click();
  }

  async clickFloatingMenu() {
    await (await this.linkFloatingMenu).waitForClickable({ timeout: 10000 });
    await (await this.linkFloatingMenu).click();
  }

  async clickNotificationMessages() {
    await (await this.linkNotificationMessages).waitForClickable({ timeout: 10000 });
    await (await this.linkNotificationMessages).click();
  }

  async clickAddRemoveElements() {
    await (await this.linkAddRemoveElements).waitForClickable({ timeout: 10000 });
    await (await this.linkAddRemoveElements).click();
  }

  

}


module.exports = new homePage();