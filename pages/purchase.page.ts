import { expect, Page } from "@playwright/test"

export class Purchase {
    private readonly page: Page
    private readonly cartLink: string = 'a[class="shopping_cart_link"]'
    private readonly checkoutButton: string = 'button[id="checkout"]'

    private readonly firstNameField: string = 'input[id="first-name"]'
    private readonly lastNameField: string = 'input[id="last-name"]'
    private readonly postcodeField: string = 'input[id="postal-code"]'

    private readonly personalFormContinueButton: string = 'input[id="continue"]'
    private readonly finishButton: string = 'button[id="finish"]'
    private readonly thankYouText: string = 'h2[class="complete-header"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async selectTheCart() {
        await this.page.locator(this.cartLink).click()
    }

    public async selectTheCheckout() {
        await this.page.locator(this.checkoutButton).click()
    }

    public async fillPersonalForm(firstName: string, lastName: string, postalCode: string) {
        await this.page.locator(this.firstNameField).fill(firstName)
        await this.page.locator(this.lastNameField).fill(lastName)
        await this.page.locator(this.postcodeField).fill(postalCode)
    }

    public async selectPersonalFormContinue() {
        await this.page.locator(this.personalFormContinueButton).click()
    }

    public async selectFinish() {
        await this.page.locator(this.finishButton).click()
    }

    public async validateThankYouText(expectedMsg: string) {
        const thankYouMsg = this.page.locator(this.thankYouText)
        await expect(thankYouMsg).toHaveText(expectedMsg)
    }
}

