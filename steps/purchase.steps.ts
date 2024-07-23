import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Purchase } from '../pages/purchase.page';

Then('I will select the cart', async () => {
  await new Purchase(getPage()).selectTheCart();
});

Then('I will select the checkout', async () => {
  await new Purchase(getPage()).selectTheCheckout();
});

Then('I will fill in the first name {string} and last name {string} and postal code {string}', async (firstName, lastName, postalCode) => {
  await new Purchase(getPage()).fillPersonalForm(firstName, lastName, postalCode);
});

Then('I will select the personal continue', async () => {
  await new Purchase(getPage()).selectPersonalFormContinue()
});

Then('I will select finish', async () => {
  await new Purchase(getPage()).selectFinish()
});

Then('I will validate the thank you text as {string}', async (expectedMessage) => {
  await new Purchase(getPage()).validateThankYouText(expectedMessage)
});