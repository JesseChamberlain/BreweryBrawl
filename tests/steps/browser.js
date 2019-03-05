const { Given, When, Then } = require('cucumber');

const {webdriver, Builder,Key, until} = require('selenium-webdriver'),
    test = require('selenium-webdriver/testing'),
    assert = require('assert');

selenium = require('selenium-webdriver');
By = require('selenium-webdriver').By;
Keys = require('selenium-webdriver').keys;
chrome = require('selenium-webdriver/chrome');

let driver;

Given(/^browse to web site "([^"]*)"$/, async function(url) {

    driver = new selenium.Builder()
        .withCapabilities(selenium.Capabilities.chrome())
        .build();

    return driver.get(url);

});

When(/^input keyword "([^"]*)"$/, async function (keyword) {

    await driver.findElement({ name: "query" }).sendKeys(keyword);

    await driver.sleep(1000);

    await driver.findElement({ css: ".ghost-button" }).click();

    await driver.sleep(2000);

});



Then(/^search result should contain "([^"]*)"$/, async function (keyword) {

    await driver.sleep(2000);

    let result = await driver.findElement({ id: "brewery-results" }).getText();

    console.log(result);

    driver.quit();

    return assert.ok(result.includes(keyword));
    
});