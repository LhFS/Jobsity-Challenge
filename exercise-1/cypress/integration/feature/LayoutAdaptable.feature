Feature: Layout Adaptable

  I want to see the website is responsive
  
  Scenario: Website in mobile screens
    Given I open the Zero Bank website
    Then I can see the navigational tabs
    And I see the page of Home
    When I change the screen to ipad-mini	
    Then I see the page is correctly visible in ipad-mini screen
    When I change the screen to iphone-xr
    Then I see the page is correctly visible in iphone-xr screen
    When I change the screen to samsung-s10
    Then I see the page is correctly visible in samsung-s10 screen
