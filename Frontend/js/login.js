
$(function(){
    $.ajaxSetup({
        xhrFields:{
            withCredentials:true
        }
    });
    let base_url = 'http://localhost:3000/';

    $("#btn-login").on('click', function (e) {
        e.preventDefault();

        if($("#username").val()==""){
            alert("Username is empty");
        }

        if($("#password").val()==""){
            alert("Password is empty");
        }

        if($("#password").val()!==""&& $("#username").val()!==""){
        let user = {
            username: $("#username").val(),
            password: $("#password").val(),
            
        };
        $.ajax({
            type: 'POST',
            url: base_url + 'users/login',
            data: user,
            success: function (user) {
                if(user.admin==true){
                 alert("Welcome admin")
                }

                else{
                   
                    alert("Welcome staff")



                }
     
               
                
            },
            error: function (error) {
                alert("Username or Password Incorrect");
            }
        });

    }
    });


    $("#btn-register").on('click', function(e){
        e.preventDefault();
/*
        let pwd= $("#pwd").val();
        let cpwd= $("#cpwd").val();
        if(pwd==cpwd){
            alert('Successfully register');
            window.location.href='/signup.html';
        }

        */
     
            window.location.href='/signup.html';
        

    });

});

