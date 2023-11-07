

Feature: Request Quotation
    Scenario: users requests for a quotation
        Given I am on homepage
        When I navigate to request Quotation Page
        And I fill the required Fields
        And I click on the request Quotation button
        Then I Should see a confirmation message for quest quotation