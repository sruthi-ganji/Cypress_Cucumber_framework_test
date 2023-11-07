Feature: Edit Profile

  Scenario: User edits their profile
    Given I log in susccessfully with register account
    When I click the edit profile tab
    When I update my profile information
    When I click the update user button
    Then I should see a confirmation message for the profile update