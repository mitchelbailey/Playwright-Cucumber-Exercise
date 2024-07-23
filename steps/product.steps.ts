import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});


Then('I will sort the items by {string}', async (sortItems: string) => {
  await new Product(getPage()).selectSortItems(sortItems)
});

Then('I will validate the sort items are {string}', async (sortItems: string) => {
  await new Product(getPage()).validateSortItems(sortItems)
});


