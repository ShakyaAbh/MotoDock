$(function () {
   

    let base_url = 'http://localhost:3000/';

    
    var u= localStorage.getItem('user');
    if(!u){
       location.replace('http://localhost:3001/customer/login');
    }
    $("#logout").on('click', function (e) {
        e.preventDefault();
        localStorage.removeItem('user');
      alert("You have been logged out successfully!");
      window.location.href="http://localhost:3001/customer/login"


    });

          



});