Feature: Adding Spare part Details

    Spare Parts details description

Scenario: 

Given I go to "Dashboard"
When I navigate to the "Add part" page
And I click on "Add part" on the "dashboard" page
Then the "spare details" page should be displayed
And I fill "Spare Parts Details" form
Then "Spare Parts" should be added on "Inventory"
