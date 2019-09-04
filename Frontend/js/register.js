
$(function(){
    $.ajaxSetup({
        xhrFields:{
            withCredentials:true
        }
    });
    let base_url = 'http://localhost:3000/';

    $("#btn-register").on('click', function (e) {
        e.preventDefault();
        var f=$("#fname").val();
        var l=$("#lname").val();
        var em=$("#email").val();
        var u=$("#uname").val();
        var c=$("#contact").val();
        var p =$("#pwd").val();
        var cp =$("#cpwd").val();
        var len = Math.ceil(Math.log10(c));
        if(f==""||l==""||em==""||u==""||c==""||p==""||cp==""){
            alert("Please input all fields");
        }

        else if(!validateEmail(em)){
            alert("Please enter a valid email address!")

            if(len<11 || len>10){
                alert("Contact should be of 10 digits");
            }

           
        }

        else if(p!==cp){
            alert("Passwords do not match!");
        }

        else{

        let user = {
            firstName: $("#fname").val(),
            lastName: $("#lname").val(),
            email: $("#email").val(),
            contact: $("#contact").val(),
            username: $("#uname").val(),
            password: $("#pwd").val(),
            
        };
        $.ajax({
            type: 'POST',
            url: base_url + 'users/signup',
            data: user,
            success: function (user) {
                alert('succesffully registered');
                window.location.href='/index.html';
            },
            error: function (error) {
                alert("Username Already Exists");
            }
        });

    }

   
    });


   
});

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  