Feature: User registration
  In order to access the authenticated section
  As a visitor
  I want to register an account

  Scenario: Register an account
    When I register a new account
    And I confirm it from the received email
    Then I should be able to login
