$(function () {
	$.ajaxSetup({
	  xhref:{
		  withCredentials: true
	  }
  
  });
  
  
	  let base_url = 'http://localhost:3000/';
  
	  $("#logout").on('click', function(e){
		e.preventDefault();
		  $.ajax({
			  type: "GET",
			  url: base_url + "users/logout",
			  success: function() {
			  
			   alert("logout");
			   window.location.href= "../login.html";
			   
			 
			  },
			  error: function() {
				alert("You are not logged in. Please Login!");
			  }
			});
		  // alert("sucess");
	  });
	  
	});
  
  
  