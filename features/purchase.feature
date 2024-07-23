Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
  Then I will login as 'standard_user'
  Then I will add the backpack to the cart
  Then I will select the cart
  Then I will select the checkout
  Then I will fill in the first name 'Bilbo' and last name 'Baggins' and postal code '3000'
  Then I will select the personal continue
  Then I will select finish
  Then I will validate the thank you text as 'Thank you for your order!'


  # Empty Cart: Test the cart page without any products selected so that no products are shown on the cart page

  # Test the Continue shopping button goes back to the previous page  

  # Test the Remove buttons so that the product is removed from the cart

  # Test you can select a product and view it's detail page

  # Test error messages shown on the page when entering a name and postal code

  # Test that the Total Price shown on the confirmation screen is the correct amount for the products purchased

  # Test the product information on the confirmation screen is correct  

  # Test the Back to home button on the success screen
