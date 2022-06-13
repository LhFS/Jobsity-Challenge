Feature: Send message in contact form with one field blank

  I want to send one message with one or more fields blank
  
  Scenario: contact form with blank field
    Given I open the store website
    And click on Contact us option in header
    When I let some fields empty
    And Click on Send button
    Then the message should not be sent