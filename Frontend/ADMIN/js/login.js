
$(function(){
    $.ajaxSetup({
        xhrFields:{
            withCredentials:true
        }
    });
    let base_url = 'http://localhost:3000/';

    $("#btnLogin").on('click', function (e) {
        e.preventDefault();

        if($("#logname").val()==""){
            alert("Username is empty");
        }

        if($("#pswd").val()==""){
            alert("Password is empty");
        }

        if($("#pwd").val()!==""&& $("#logname").val()!==""){
        let user = {
            username: $("#logname").val(),
            password: $("#pswd").val(),
            
        };
        $.ajax({
            type: 'POST',
            url: base_url + 'users/login',
            data: user,
            success: function (user) {
                if(user.admin==true){
                 alert("Welcome admin");
                 window.location.href='/dashboard.html';

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

