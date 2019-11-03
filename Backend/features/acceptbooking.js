const assert = require('assert');
const { Given, When, Then } = require('cucumber');
function acceptbooking(view){
    return 'BookingAccepted'

}

Given('Admin is in admin dashboard  ', function () {
    // Write code here that turns the phrase above into concrete actions
   // return 'pending';
   this.view='BookingAccepted';
  });


  When('Admin click Acceptbooking when gets notification from customer', function () {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    this.acutalAnswer=acceptbooking(this.view);
  });



  Then('Customer receive message {string}', function (expectedAnswer) {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    assert.equal(this.acutalAnswer,expectedAnswer);
  });
