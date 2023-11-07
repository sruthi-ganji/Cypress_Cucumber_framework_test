
Feature: Login to the Insurance Website
    Background: Pre-conditons
        Given I am on the login page

    Scenario:  validate Login credentials
        When I enter a valid '<email>' and a password '<Password>'
        When I click the login button
        Then I should be logged in 

    Examples:
            | email                    | Password            | 
            | sruthiganji17@gmail.com  | 1234567890@S        | 

    Scenario: Validate Invalid Login Credentials
         When I enter a invalid '<email>' and a password '<Password>'
        When I click the login button
        Then I should get errorMessage

    Examples:
            | email                    | Password            |                    
            | sruthiganji7@gmail.com  | 1234567890          | 
           