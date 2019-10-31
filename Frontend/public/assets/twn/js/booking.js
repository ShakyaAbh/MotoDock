$(function () {
   

    let base_url = 'http://localhost:3000/';
    
    var y= getCookie('userCookie');

    let bookingBody=$("#booking");
    function bookingTemplate(booking) {
                let bookingRow = 
               ' <tr>'+
                '<td>'+booking.bike.model+'</td>'+
                '<td>'+booking.service.name+'</td>'+
                '<td>'+booking.service.price+'</td>'+
                '<td>'+booking.date+'</td>'+
                '<td>'+booking.book_status+'</td>'+
                '<td>'+booking.payment+'</td>'+
                '<td>'+booking.mechanic.firstName+'</td>'+
            '</tr>';
                return bookingRow;
            }

            $.ajax({
                type: 'GET',
                url: base_url + 'bookings/user?user='+y,
                success: function (bookings) {
                    let bookingRows = [];
                    $.each(bookings, function (index, booking) {
                        bookingRows.push(bookingTemplate(booking));
                    });
                    bookingBody.append(bookingRows);
                },
                error: function () {
                    alert('Something went wrong!');
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