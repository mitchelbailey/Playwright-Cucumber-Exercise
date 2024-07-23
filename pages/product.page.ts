import { expect, Page } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly sortItemsSelect : string = 'select[class="product_sort_container"]'
    private readonly sortItemsList: string = 'div[class="inventory_item_price"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async selectSortItems(sortItems: string) {
        await this.page.locator(this.sortItemsSelect).selectOption(sortItems)
    }

    public async validateSortItems(sortItems: string) {
        const priceItems = sortItems.replace(/\s/g, '')
        const priceList = priceItems.split(',')
 
        const itemsList = await this.page.locator(this.sortItemsList).all()

        for (let i = 0; i < itemsList.length; i++) {
            await expect(itemsList[i]).toHaveText("$" + priceList[i])
        }
    }
}
