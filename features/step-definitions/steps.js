import { Given, When, Then } from '@wdio/cucumber-framework';

import RegisterPage from '../pageobjects/register.page.js';

const pages = {
    register: RegisterPage
}

Given(/^I am on the register (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I input email (\w+)$/, async (email) => {
    await RegisterPage.inputEmail.setValue(email)
});

When(/^I input phone number (\w+)$/, async (mobilePhone) => {
    await RegisterPage.inputPhone.setValue(mobilePhone)
});

When(/^I input password (\w+)$/, async (password) => {
    await RegisterPage.inputPassword.setValue(password)
});

When(/^I reinput password (\w+)$/, async (confirmPassword) => {
    await RegisterPage.reinputPassword.setValue(confirmPassword)
});

When(/^I input first name (\w+)$/, async (firstName) => {
    await RegisterPage.inputFirstName.setValue(firstName)
});

When(/^I input last name (\w+)$/, async (lastName) => {
    await RegisterPage.inputLastName.setValue(lastName)
});

When(/^I input kabupaten (\w+)$/, async (cityAndProvince) => {
    await RegisterPage.inputCityProvince.click()
    await RegisterPage.inputCityProvince.setValue(cityAndProvince)
});

When(/^I click button daftar $/, async (firstName) => {
    await RegisterPage.btnDaftar.click()
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});
