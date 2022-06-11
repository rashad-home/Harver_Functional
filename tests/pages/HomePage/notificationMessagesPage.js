const NativePage = require('../native.page.js');

//====================================================================================================================
//Author : Rashad Rouzdeen 
//Date   : 11.06.2022
//====================================================================================================================

class notificationMessagesPage extends NativePage {

  //====================================================================================================================
  //Locators
  //====================================================================================================================

  get linkClickHere() { return $('//a[text()="Click here"]') }

  

  //====================================================================================================================
  //Verification
  //====================================================================================================================


  get lblNotificationMessage() { return $('//div[contains(text(),"Action")]') }
 

  //====================================================================================================================
  //Methods
  //====================================================================================================================

  async click_ClickHere() {
    await (await this.linkClickHere).waitForEnabled({ timeout: 10000 });
    await (await this.linkClickHere).click();
  }


  //====================================================================================================================
  //Verifications
  //====================================================================================================================

  async verifyNotificationMessage() {
    await (await this.lblNotificationMessage).waitForDisplayed({ timeout: 10000 });
    await expect(await this.lblNotificationMessage).toBeExisting();
  }

}


module.exports = new notificationMessagesPage();