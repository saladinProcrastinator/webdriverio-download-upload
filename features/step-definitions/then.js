import { Then } from '@cucumber/cucumber';
import { waitUnzipAndCheckDownload } from '../../utils/file';


Then(/^I see \"(.+)\" text is visible$/, (text) => {
    $('.uploader--complete').waitForEnabled({ timeout: 120000 }); // Changing the default timeout of 10 seconds to 120 seconds as uploading takes more time
    console.log("$('.uploader--complete').getText(): " + $('.uploader--complete').getText());
    browser.waitUntil(() => $('.uploader--complete').getText().includes(`${text}`),
        {
            timeoutMsg: `${text} - is not visible`
        });
    expect($('.uploader--complete')).toHaveTextContaining(text);
});

Then(/^I see \"(.+)\" text is visible in the download widget$/, (text) => {
    browser.waitUntil(() => $('.downloader__complete').getText().includes(`${text}`),
    {
        timeoutMsg: `${text} - is not visible`
    });
    expect($('.downloader__complete')).toHaveTextContaining(text);
});

Then(/^I see \"(.+)\" button is visible$/, (buttonName) => {
    expect($(`.//button[text()='${buttonName}']`)).toBeExisting();
});

Then(/^The files \"(.+)\" and \"(.+)\" and \"(.+)\" have been downloaded as \"(.+)\"$/, (file1, file2, file3, zipName) => {
    waitUnzipAndCheckDownload(zipName, 60000, file1, file2, file3);
});
