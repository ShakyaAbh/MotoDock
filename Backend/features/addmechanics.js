const assert = require('assert');
const { Given, When, Then } = require('cucumber');
function addmechanics(add){
    return 'MechanicsAddedSuccessfully'

}

Given('Admin is in admin dashboard', function () {
    // Write code here that turns the phrase above into concrete actions
   // return 'pending';
   this.add='MechanicsAddedSuccessfully';
  });


  When('Admin add the new mechanics', function () {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    this.acutalAnswer=addmechanics(this.add);
  });



  Then('Admin should get the message {string}', function (expectedAnswer) {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    assert.equal(this.acutalAnswer,expectedAnswer);
  });
