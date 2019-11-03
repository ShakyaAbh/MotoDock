const assert = require('assert');
const { Given, When, Then } = require('cucumber');
function booking(view){
    return 'BookingSuccess'

}

Given('Customer is in Booking page', function () {
    // Write code here that turns the phrase above into concrete actions
   // return 'pending';
   this.view='BookingSuccess';
  });


  When('Customer input booking information', function () {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    this.acutalAnswer=booking(this.view);
  });



  Then('Customer should get message {string}', function (expectedAnswer) {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    assert.equal(this.acutalAnswer,expectedAnswer);
  });
