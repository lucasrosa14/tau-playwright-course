import { expect, type Locator, type Page } from "@playwright/test"; 

export class HomePage {
    //variables
    readonly page: Page;
    readonly getStartedLink: Locator;
    readonly title: RegExp;
    readonly heading: Locator;
    readonly nodeLink: Locator;
    readonly javaLink: Locator;
    readonly nodeLabel: Locator;
    readonly javaLabel: Locator;
    readonly nodeDescription: string = 'Installing Playwright';
    readonly javaDescription: string = `Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project's pom.xml as described below. If you're not familiar with Maven please refer to its documentation.`;

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.getStartedLink = page.getByRole('link', { name: 'Get started' });
        this.title = /Playwright/;
        this.heading = page.getByRole('heading', { name: 'Installation' });
        this.nodeLink = page.getByRole('button', {name: 'Node.js'});
        this.javaLink = page.getByRole('navigation', { name: 'Main' }).getByText('Java');
        this.nodeLabel = page.getByText(this.nodeDescription, {exact:true});
        this.javaLabel = page.getByText(this.javaDescription);
    }

    //methods
    async clickGetStarted() {
        await this.getStartedLink.click();
    }

    async assertPageTitle() {
        await expect(this.page).toHaveTitle(this.title);
    }

    async assertPageHeading() {
        await expect(this.heading).toBeVisible();
    }

    async hoverNode() {
        await this.nodeLink.hover();
    }
    
    async clickJava() {
        await this.javaLink.click();
    }

    async assertPageUrl(pageUrl: RegExp) {
        await expect(this.page).toHaveURL(pageUrl);
    }

    async assertNodeDescriptionNotVisible() {
        await expect(this.nodeLabel).not.toBeVisible();
    }

    async assertJavaDescriptionVisible() {
        await expect(this.javaLabel).toBeVisible();
    }


}

export default HomePage;