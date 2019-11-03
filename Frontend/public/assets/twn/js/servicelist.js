$(function () {
   

    let base_url = 'http://localhost:3000/';
    
    let imageFile = '';
    
    var y= getCookie('userCookie');

    var queryString= window.location.href;
    var url= new URL(queryString);
    var id = url.searchParams.get("id");
    $("#fileToUpload").on('change', function () {
        let formData = new FormData();
        let files = $("#fileToUpload").get(0).files;
        if (files.length > 0) {
            formData.append("imageFile", files[0]);
        }
        // $("#add-hero").prop("disabled", true);
        $.ajax({
            type: 'POST',
            url: base_url + 'upload',
            contentType: false,
            cache: false,
            processData: false,
            data: formData,
            success: function (data) {
                imageFile = data.filename;
                // $("#add-hero").prop("disabled", false);
            },
            error: function () {
                alert("Image upload failed!");
            }
        });
    });

    $("#add-service").on('click', function(e){
        e.preventDefault();

        let part = {
            name: $("#name").val(),
            price: $("#price").val(),
            image: imageFile
        };
        $.ajax({
            type: 'POST',
            url: base_url + 'parts',
            data: part,
            success: function (part) {
                alert("Added");
                imageFile = '';
                location.reload();

                
            },
            error: function () {
                alert("Fill all the form fields!");
            }
        });
         
        

    });
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
                                                    '<a href="" class="btn view" data-toggle="modal" service_id="'+service._id+'">View Details</a>'+
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
                    alert('Something went wrong!');
                }
            });

    chooseService.on('click', '.view', function () {
        $.ajax({
            type: 'GET',
            url: base_url + 'parts/'+$(this).attr('service_id'),
            success: function (service) {
                $("#service_id").val(service._id);
                $("#vname").val(service.name);
                $("#vprice").val(service.price);
                $('#viewModal').modal('show');



            },
            error: function () {
                alert("Fill all the form fields!");
            }
        });
    });

    $("#update-service").on('click', function(e){
        e.preventDefault();
         var sid= $("#service_id").val();
        let part = {
            name: $("#vname").val(),
            price: $("#vprice").val()
        };
        $.ajax({
            type: 'PUT',
            url: base_url + 'parts/'+sid,
            data: part,
            success: function (part) {
                alert("Updated");
                location.reload();

                
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