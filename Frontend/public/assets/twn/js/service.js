$(function () {
   

        let base_url = 'http://localhost:3000/';
        
        var y= localStorage.getItem('user');
    
        var queryString= window.location.href;
        var url= new URL(queryString);
        var id = url.searchParams.get("id");
    
        let chooseService=$("#chooseService");
        function serviceTemplate(service) {
                    let serviceRow = 
                    '<div class="col-lg-3">'+
                        '<div class="myBike">'+
                           '<div class="bikeImgDash">'+
                            '<img src="'+base_url+'uploads/'+ service.image+'"class="img img-responsive">'+
                                       '</div>'+
                                                        '<h5>'+service.name+'</h5>'+
                                                        '<p>Rs. '+service.price+'</p>'+
                                                        '<a href="" class="btn service" service_id="'+service._id+'">Get Service</a>'+
                                                    '</div>'+
                                                '</div>';
                    return serviceRow;
                }

                $.ajax({
                    type: 'GET',
                    url: base_url + 'parts',
                    success: function (services) {
                        let serviceRows = [];
                        $.each(services, function (index, service) {
                            serviceRows.push(serviceTemplate(service));
                        });
                        chooseService.append(serviceRows);
                    },
                    error: function () {
                        // alert('Something went wrong!');
                    }
                });

        chooseService.on('click', '.service', function () {
            let booking = {
                user: y,
                bike: id,
                service: $(this).attr('service_id'),
                date: new Date()
            };
            $.ajax({
                type: 'POST',
                url: base_url + 'bookings',
                data: booking,
                success: function (bike) {
                    alert("Service Requested");

                },
                error: function () {
                    alert("Fill all the form fields!");
                }
            });
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