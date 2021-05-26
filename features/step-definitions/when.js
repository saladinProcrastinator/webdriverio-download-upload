import { When } from '@cucumber/cucumber';

When(/^I accept the cookies$/, () => {
    if ($('.welcome__button--accept').isDisplayed()) { // Conditional implementation for supporting 
                                                      // single and multiple cucumber scenario execution
        $('.welcome__button--accept').waitForClickable();
        $('.welcome__button--accept').click();
    }
});

When(/^I agree to the terms of service$/, () => {
    if ($('.terms-conditions button').isDisplayed()) { // Conditional implementation for supporting 
                                                      // single and multiple cucumber scenario execution
        $('.terms-conditions button').waitForClickable();
        $('.terms-conditions button').click();
    }
});

When(/^I upload file \"(.+)\"$/, (fileName) => {
    const path = require('path');
    var filePath = path.join(__dirname, `../../resources/${fileName}`);
    // for docker run the path is different
    if (browser.config.services == "docker") {
        filePath = browser.uploadFile(filePath);
    }
    $('//input[@type = \'file\']').setValue(filePath);
});

When(/^I toggle to \"(.+)\"$/, (toggleOption) => {
    $('.transfer__toggle-options').click();
    $('.transfer__option').waitForDisplayed();
    $(`.//label[text()='${toggleOption}']`).click();
});

When(/^I click \"(.+)\" button$/, (buttonName) => {
    $(`.//button[text()='${buttonName}']`).waitForClickable();
    $(`.//button[text()='${buttonName}']`).click();
});

When(/^I click \"(.+)\" button in the download widget$/, (buttonName) => {
    $('.//*[text()=\'Ready when you are\']').waitForClickable();
    $(`.//button[text()='${buttonName}']`).click();
});