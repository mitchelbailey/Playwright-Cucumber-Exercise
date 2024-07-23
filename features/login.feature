Feature: Login Feature
  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario: Validate the login page title
    Then I should see the title "Swag Labs"

  Scenario: Validate login error message
    Then I will login as 'locked_out_user'
    Then I should see the locked out error message as "Epic sadface: Sorry, this user has been locked out."
    

    # I would extend the Login page testing to include all of the possible error messages on the page
    # Test out all of the different users:
    # standard_user, locked_out_user, problem_user, performance_glitch_user, error_user, visual_user

    # Logout Flow: Test you can login and then logout and have the correct text on screen