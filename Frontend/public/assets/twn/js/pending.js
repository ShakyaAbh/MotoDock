$(function () {
   

    let base_url = 'http://localhost:3000/';
    let bookingBody=$("#booking");
    var y= getCookie('userCookie');
    $("#pending").on('click', function(e){
        e.preventDefault();
        window.location.href="http://localhost:3001/admin/booking";     

    });
    $("#processing").on('click', function(e){
        e.preventDefault();
        window.location.href="http://localhost:3001/admin/processing";     

    });
    $("#completed").on('click', function(e){
        e.preventDefault();
        window.location.href="http://localhost:3001/admin/completed";     

    });


        function bookingTemplate(booking) {
                    let bookingRow = 
                   ' <tr>'+
                    '<td>'+booking.bike.model+'</td>'+
                    '<td>'+booking.service.name+'</td>'+
                    '<td>'+booking.service.price+'</td>'+
                    '<td>'+booking.date+'</td>'+
                    '<td>'+booking.book_status+'</td>'+
                    '<td>'+booking.payment+'</td>'+
                    '<td><button type="button" id="update-password" booking_id="'+booking._id+'" class="btn assign">'+
                    'Assign'+
                '</button></td>'+
                '</tr>';
                    return bookingRow;
                }
    
                $.ajax({
                    type: 'GET',
                    url: base_url + 'bookings/book?book=Pending',
                    success: function (bookings) {
                        let bookingRows = [];
                        $.each(bookings, function (index, booking) {
                            bookingRows.push(bookingTemplate(booking));
                        });
                        bookingBody.append(bookingRows);
                    },
                    error: function () {
                        // alert('Something went wrong!');
                    }
                });
    
         
        



 


      bookingBody.on('click', '.assign', function () {
      
        $("#bid").val( $(this).attr('booking_id'));
         $('#myModal').modal('show');
      });

      $("#assign_mechanic").on('click', function(e){
        e.preventDefault();
        var bid= $("#bid").val();

        let booking = {
            book_status: "processing",
            mechanic: $("#mechanic_id").val(),
           
        };
        $.ajax({
            type: 'PUT',
            url: base_url + 'bookings/'+bid,
            data: booking,
            success: function (bibookingke) {
                alert("Assigned");
             
                location.reload();

                
            },
            error: function () {
                // alert("Fill all the form fields!");
            }
        });
         
        

    });


            let tblBody = $("#mechanic_id");
            function rowTemplate(mechanic) {
                let oneRow = "<option value='"+mechanic._id+"'>" + mechanic.firstName +"</option>";
                return oneRow;
            }
            $.ajax({
                type: 'GET',
                url: base_url + 'mechanics',
                success: function (mechanics) {
                    let myRows = [];
                    $.each(mechanics, function (index, mechanic) {
                        myRows.push(rowTemplate(mechanic));
                    });
                    tblBody.append(myRows);
                },
                error: function () {
                    // alert('Something went wrong!');
                }
            });


function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

});