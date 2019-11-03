$(function () {
   

    let base_url = 'http://localhost:3000/';

    
    var u= localStorage.getItem('admin');
    if(!u){
       location.replace('http://localhost:3001/admin/login');
    }
    $("#logout").on('click', function (e) {
        e.preventDefault();
        localStorage.removeItem('admin');
      alert("You have been logged out successfully!");
      window.location.href="http://localhost:3001/admin/login"


    });

          



});