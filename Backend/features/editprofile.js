const assert = require('assert');
const { Given, When, Then } = require('cucumber');
function editprofile(view){
    return 'ProfileEditedSuccessfully'

}

Given('Customer edit their profile informtion', function () {
    // Write code here that turns the phrase above into concrete actions
   // return 'pending';
   this.view='ProfileEditedSuccessfully';
  });


  When('Customer click on edit profile', function () {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    this.acutalAnswer=editprofile(this.view);
  });



  Then('Customer get message {string}', function (expectedAnswer) {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    assert.equal(this.acutalAnswer,expectedAnswer);
  });
