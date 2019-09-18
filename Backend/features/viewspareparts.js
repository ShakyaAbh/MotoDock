const assert = require('assert');
const { Given, When, Then } = require('cucumber');

Given('I go to {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'Dashboard';
  });

  When('I navigate to the {string} page', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'Add part';
  });

  When('I click on {string} on the {string} page', function (string, string2) {
    // Write code here that turns the phrase above into concrete actions
    return 'spare details';
  });

  
  Then('the {string} page should be displayed', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'Spare Parts Details';
  });

  
  Then('I fill {string} form', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'Spare Parts';
  });

  
  Then('{string} should be added on {string}', function (string, string2) {
    // Write code here that turns the phrase above into concrete actions
    return 'View Spare Parts';
  });

  
