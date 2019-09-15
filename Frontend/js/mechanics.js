
$(function(){
   
    let base_url = 'http://localhost:3000/';
    let imageFile = '';
    let viewBody=$("#mechanics-view");
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


    $("#addMechanic").on('click', function (e) {
        e.preventDefault();
        let mechanic = {
            firstName: $("#fname").val(),
            lastName: $("#lname").val(),
            address: $("#address").val(),
            contact: $("#contact").val(),
            shift: $("#shift").val(),
            image: imageFile
  
        };
        $.ajax({
            type: 'POST',
            url: base_url + 'mechanics',
            data: mechanic,
            success: function (user) {
                   alert("Mechanic Successfully added!");
                   location.reload();
     
               
                
            },
            error: function (error) {
                alert("Problem Adding");
            }
        });

    
    });

    function rowTemplate(mechanic) {
        let oneRow = '<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">'+
        '<div class="tile">'+
            '<div class="wrapper">'+
                '<div class="header">'+mechanic.firstName+'</div>'+

                '<div class="banner-img">'+
                    '<img src="'+base_url+"uploads/"+ mechanic.image+'" alt="Image 1" />'+
                '</div>'+

                '<div class="footer">'+
                    '<a href="#" class="Cbtn Cbtn-primary details" mechanic_id='+mechanic._id+' > View </a>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</div>';
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
            viewBody.append(myRows);
        },
        error: function () {
            alert('Something went wrong!');
        }
    });


    viewBody.on('click', '.details', function () {

     
        $.ajax({
          type: 'GET',
          url: base_url + 'mechanics/' + $(this).attr('mechanic_id'),
          success: function (mechanic) {
            $("#mid").val(mechanic._id);

            $("#mfname").val(mechanic.firstName);
            $("#mlname").val(mechanic.lastName);
            $("#maddress").val(mechanic.address);
            $("#mcontact").val(mechanic.contact);
            $("#mshift").val(mechanic.shift);



            $('#myModal').modal('show');
          }
      })
      });


      $("#edit-mechanic").on('click', function(e){
        e.preventDefault();
        var mechanic_id= $('#mid').val();
        let mechanic = {
            firstName: $("#mfname").val(),
            lastName: $("#mlname").val(),
            address: $("#maddress").val(),
            contact: $("#mcontact").val(),
            shift: $("#mshift").val()
            
        };
        $.ajax({
            type: 'PUT',
            url: base_url + 'mechanics/'+ mechanic_id,
            data: mechanic,
            success: function (mechanic) {
                alert("Updated Successfully");
                window.location.href='/mechanics.html';
            
            },
            error: function () {
                alert("Fill all the form fields!");
            }
        });
    });



});
