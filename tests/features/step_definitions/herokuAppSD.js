const { Given, When, Then } = require('cucumber');

const loginPage = require('../../pages/loginPage.js');
const homePage = require('../../pages/homePage.js');
const dropdownPage = require('../../pages/HomePage/dropdownPage.js');
const checkBoxPage = require('../../pages/HomePage/checkBoxPage.js');
const floatingMenuPage = require('../../pages/HomePage/floatingMenuPage.js');
const notificationMessagesPage = require('../../pages/HomePage/notificationMessagesPage');
const addRemoveElementsPage = require('../../pages/HomePage/addRemoveElementsPage');


Given('I am on the login page _herokuApp', async () => {
    await loginPage.openURL();
});

When('I click dropdown text _herokuApp', async () => {
    await homePage.clickDropDown();
});

When('I can click option1 _herokuApp', async () => {
    await dropdownPage.clickDropDown_option1();
});

When('I click checkbox text _herokuApp', async () => {
    await homePage.clickCheckBoxes();
});

When('I can click checkbox1 _herokuApp', async () => {
    await checkBoxPage.clickCheckbox_1();
});

When('I click floating menu text _herokuApp', async () => {
    await homePage.clickFloatingMenu();
});

When('I can click news _herokuApp', async () => {
    await floatingMenuPage.clickNews();
});

When('I click notification message text _herokuApp', async () => {
    await homePage.clickNotificationMessages();
});

When('I can click Click here _herokuApp', async () => {
    await notificationMessagesPage.click_ClickHere();
});

When('I click add remove elements text _herokuApp', async () => {
    await homePage.clickAddRemoveElements();
});

When('I can click add element _herokuApp', async () => {
   await addRemoveElementsPage.clickAddElement();
});

When('I can click delete _herokuApp', async () => {
    await addRemoveElementsPage.clickDelete();
 });

Then('I should be able to see option1 is selected _herokuApp', async () => {
    await dropdownPage.verifyDropDown_Option1();
});

Then('I should be able to see checkBox1 is checked _herokuApp', async () => {
    await checkBoxPage.verifyCheckbox_1();
});

Then('I should be able to see changed url _herokuApp', async () => {
    await floatingMenuPage.verifyFloatingMenuURL();
});

Then('I should be able to see notification message _herokuApp', async () => {
    await notificationMessagesPage.verifyNotificationMessage();
});

Then('I should be able to see delete button _herokuApp', async () => {
    await addRemoveElementsPage.verifyDeleteButton();
});

Then('I should not be able to see delete button _herokuApp', async () => {
    await addRemoveElementsPage.verifyNoDeleteButton();
});