Feature: Send message in contact form

  I want to send a valid message using contact form
  
  Scenario: contact form
    Given I open the store website
    And click on Contact us option in header
    When I fill all fields correctly
    And Click on Send button
    Then the message should be sent
