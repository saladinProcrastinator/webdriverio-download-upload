import { Given} from '@cucumber/cucumber';

Given(/^I open the WeTransfer home page$/, () => {
    browser.url("/");
    $('.spinner__finished').waitForExist();
});

Given(/^I open \"(.+)\" the transferred link$/, (url) => {
    browser.url(url);
    $('.spinner__finished').waitForExist();
});