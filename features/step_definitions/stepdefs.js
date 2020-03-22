const fs = require('fs');
const { setWorldConstructor, Given, When, Then, After, Status } = require('cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');

async function takeScreenshot(driver) {
    const image = await driver.takeScreenshot();

    return new Promise((res, rej) => {
        const filename = `/tmp/test-${+new Date()}.png`;

        fs.writeFile(filename, image, 'base64', function (err) {
            if (err) return rej(err);

            console.log(`Screenshot save as ${filename}`);

            return res(image);
        });
    });
}

setWorldConstructor(function (args) {
    const screenSize = {
        width: 1920,
        height: 1080
    };

    this.driverPromise = new Builder()
        .forBrowser(process.env.SELENIUM_BROWSER)
        .setChromeOptions(new chrome.Options().headless().windowSize(screenSize))
        .setFirefoxOptions(new firefox.Options().headless().windowSize(screenSize))
        .build();
});

After(async function (testCase) {
    const driver = await this.driverPromise;
    
    if (testCase.result.status === Status.FAILED) {
        const image = await takeScreenshot(driver);
    }
    
    await driver.close();
});

Given('that I am on Google Search Page', async function () {
    const driver = await this.driverPromise;
    await driver.get('https://www.google.com');
});


When('I type what I want to find', async function () {
    const driver = await this.driverPromise;
    await driver.findElement(By.name('q')).sendKeys('cheese', Key.ENTER);
});


Then('I see the results', async function () {
    const driver = await this.driverPromise;
    const firstResult = await driver.wait(until.elementLocated(By.css('#res h3')), 10000);
});
