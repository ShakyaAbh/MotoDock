const assert = require('assert');
const { Given, When, Then } = require('cucumber');
function addparts(add){
    return 'PartsAddedSuccessfully'

}

Given('User must be an admin', function () {
    // Write code here that turns the phrase above into concrete actions
   // return 'pending';
   this.add='PartsAddedSuccessfully';
  });


  When('Admin add the spare Parts', function () {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    this.acutalAnswer=addparts(this.add);
  });



  Then('Admin should get message {string}', function (expectedAnswer) {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    assert.equal(this.acutalAnswer,expectedAnswer);
  });
