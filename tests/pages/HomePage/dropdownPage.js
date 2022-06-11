const NativePage = require('../native.page.js');

//====================================================================================================================
//Author : Rashad Rouzdeen 
//Date   : 11.06.2022
//====================================================================================================================

class dropdownPage extends NativePage {

  //====================================================================================================================
  //Locators
  //====================================================================================================================

  get linkDropDown_option1() { return $('//select[@id="dropdown"]/descendant::option[text()="Option 1"]') }

  

  //====================================================================================================================
  //Verification
  //====================================================================================================================


  get selectDropDown_option1() { return $('//select[@id="dropdown"]/descendant::option[text()="Option 1"][@selected="selected"]') }
 

  //====================================================================================================================
  //Methods
  //====================================================================================================================

  async clickDropDown_option1() {
    await (await this.linkDropDown_option1).waitForEnabled({ timeout: 10000 });
    await (await this.linkDropDown_option1).click();
  }

  

  //====================================================================================================================
  //Verifications
  //====================================================================================================================

  async verifyDropDown_Option1() {
    await (await this.selectDropDown_option1).waitForDisplayed({ timeout: 10000 });
    await expect(await this.selectDropDown_option1).toBeExisting();
  }

  

}


module.exports = new dropdownPage();