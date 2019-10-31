
$(function(){
   
    let base_url = 'http://localhost:3000/';
  

    $("#customer_register").on('click', function (e) {
        e.preventDefault();
        
        
        let user = {
            fullName: $("#fullname").val(),
            mobileNumber: $("#mobile").val(),
            email: $("#email").val(),
            password: $("#pwd").val(),
            username: $("#username").val()
  
        };

   


        
        $.ajax({
            type: 'POST',
            url: base_url + 'users/signup',
            data: user,
            success: function (user) {
                   alert("User Successfully added!");
                   location.reload();
     
               
                
            },
            error: function (error) {
            //     const a= JSON.stringify(error);
            //     const b = JSON.parse(a);
            //    const c= b.responseText;
            //   const d= JSON.parse(c);
            //   alert(d.err.message);

            }
        });

        
    });

    $('#form').submit(function (event) {
      
       if( $("#fullname").val()==null){
  alert("clicked");
       }
     })

    



  



});
