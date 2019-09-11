const assert = require('assert');
const { Given, When, Then } = require('cucumber');

function adminlogin(login){
    return 'LoginSuccess'

}
Given('User is an admin', function () {
    // Write code here that turns the phrase above into concrete actions
   // return 'pending';
   this.login='LoginSucess';
  });


  When('User input username and password', function () {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    this.acutalAnswer=adminlogin(this.login);
  });



  Then('User should get message {string}', function (expectedAnswer) {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    assert.equal(this.acutalAnswer,expectedAnswer);
  });
