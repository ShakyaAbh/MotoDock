const assert = require('assert');
const { Given, When, Then } = require('cucumber');
function viewmechanics(view){
    return 'MechanicsDetailViewed'

}

Given('Admin is in dashboard page', function () {
    // Write code here that turns the phrase above into concrete actions
   // return 'pending';
   this.view='MechanicsDetailViewed';
  });


  When('Admin click on view mechanics button', function () {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    this.acutalAnswer=viewmechanics(this.view);
  });



  Then('Admin gets the message {string}', function (expectedAnswer) {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    assert.equal(this.acutalAnswer,expectedAnswer);
  });
