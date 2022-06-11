const NativePage = require('../native.page.js');

//====================================================================================================================
//Author : Rashad Rouzdeen 
//Date   : 11.06.2022
//====================================================================================================================

class addRemoveElementsPage extends NativePage {

  //====================================================================================================================
  //Locators / verification
  //====================================================================================================================

  get btnAddElement() { return $('//button[@onclick="addElement()"]') }
  get btnDelete() { return $('//button[@onclick="deleteElement()"]') }

 

  //====================================================================================================================
  //Methods
  //====================================================================================================================

  async clickAddElement() {
    await (await this.btnAddElement).waitForEnabled({ timeout: 10000 });
    await (await this.btnAddElement).click();
  }

  async clickDelete() {
    await (await this.btnDelete).waitForEnabled({ timeout: 10000 });
    await (await this.btnDelete).click();
  }


  //====================================================================================================================
  //Verifications
  //====================================================================================================================

  async verifyDeleteButton() {
    await (await this.btnDelete).waitForDisplayed({ timeout: 10000 });
    await expect(await this.btnDelete).toBeExisting();
  }

  async verifyNoDeleteButton() {
    await expect(await this.btnDelete).not.toBeExisting();
  }

}


module.exports = new addRemoveElementsPage();