Feature: Send a file using the contact form

  I want to send a valid message using contact form and in this message send one file
  
  Scenario: contact form with file
    Given I open the store website
    And click on Contact us option in header
    When I fill all fields correctly
    And I attach one file
    And Click on Send button
    Then the message should be sent