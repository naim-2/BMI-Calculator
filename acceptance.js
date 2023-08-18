const puppeteer = require('puppeteer');
const assert = require('assert');
try{
    (async () => {
    const browser = await puppeteer.launch({headless:true});
    const page = await browser.newPage();
    await page.goto("https://bmi-calculator-8hed.onrender.com/");
    const height = await page.$('#height')
    await height.type('180' )
    const weight = await page.$('#weight')
    await weight.type('90' )
    const submitBMI = await page.$('#submitBtn')
    await submitBMI.click()
    const viewBMI = await page.$('#viewBtn')
    await viewBMI.click()
    const navigationPromise = page.waitForNavigation({ waitUntil: ['load', 'networkidle2'] });
    await navigationPromise;
    const pageTitle = await page.title();
    assert(pageTitle === 'Report');
    console.log("Title matched successfully");
    await browser.close();
    })();
} catch (err) {
    console.error(err);
}