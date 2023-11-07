
Feature: Retrieve Quotation

Scenario: User retrieves a quotation
    Given I am logged in as a registered insurance customer
    When I navigate to the Quotation retrieval page
    When I type identification number for quotation retrieval
    When I click the "Retrieve Quotation" button
    Then I should see the quotation details