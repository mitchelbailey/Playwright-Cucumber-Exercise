Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario Outline:  Validate product sort by price <sort>
    Then I will login as 'standard_user'
    Then I will sort the items by "<sort>"
    Then I will validate the sort items are "<items>"
  Examples:
    | sort | items |
    | Price (high to low) | 49.99, 29.99, 15.99, 15.99, 9.99, 7.99 |
    | Price (low to high) | 7.99, 9.99, 15.99, 15.99, 29.99, 49.99 |


# Product Sort by Name: Test the A to Z and Z to A sorting 