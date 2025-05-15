import { test, expect, Page } from '@playwright/test';
import { HomePage } from '../pages/home-page';

//AAA
//POM

const URL = 'https://playwright.dev/';
let homePage: HomePage;


test.beforeEach(async ({ page }) => {
    await page.goto(URL);
    homePage = new HomePage(page);
});

async function clickGetStarted() {
    homePage.clickGetStarted();
}

test.describe('Playwright website', () => {
    test('has title', async ({ }) => {
        await homePage.assertPageTitle();
    });

    test('get started link', async ({ }) => {
        await clickGetStarted();
        await homePage.assertPageHeading();
    });

    test('check Java page', async ({ page }) => {
        await clickGetStarted();
        await homePage.hoverNode();
        await homePage.clickJava();
        await homePage.assertPageUrl(/java/);
        await homePage.assertNodeDescriptionNotVisible();
        await homePage.assertJavaDescriptionVisible();
    });

});

