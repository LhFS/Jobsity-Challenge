Feature: Feedback form

  I want to send a message using Feedback form
  
  Scenario: Website in mobile screens
    Given I open the Zero Bank website
    And I can navigate to Feedback
    And I see the page of Feedback
    When I fill all fields of the form with correct information
    And I click on Send Message button
    Then the message should be sent successfully