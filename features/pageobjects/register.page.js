

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegisterPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputEmail () {
        return $('#email');
    }

    get inputPhone () {
        return $('#mobilePhone');
    }

    get inputPassword () {
        return $('#password');
    }

    get reinputPassword () {
        return $('#confirmPassword');
    }

    get inputFirstName () {
        return $('#firstName');
    }

    get inputLastName () {
        return $('#lastName');
    }

    get inputCityProvince () {
        return $('#cityAndProvince');
    }

    get btnDaftar () {
        return $('//p[text()="Daftar"]');
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('register');
    }
}

export default new RegisterPage();
