const assert = require('assert');
const { Given, When, Then } = require('cucumber');
function cprofileview(view){
    return 'CheckYourProfile'

}

Given('Customer is in Dashboard page', function () {
    // Write code here that turns the phrase above into concrete actions
   // return 'pending';
   this.view='CheckYourProfile';
  });


  When('Customer click on their profile', function () {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    this.acutalAnswer=cprofileview(this.view);
  });



  Then('Customer will get message {string}', function (expectedAnswer) {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    assert.equal(this.acutalAnswer,expectedAnswer);
  });
