
$(function(){
   
    let base_url = 'http://localhost:3000/';
    let imageFile = '';
    let viewBody=$("#parts-view");
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


    $("#addItem").on('click', function (e) {
        e.preventDefault();
        let part = {
            name: $("#item-name").val(),
            modelNumber: $("#model").val(),
            entryDate: $("#edate").val(),
            quantity: $("#qty").val(),
            details: $("#details").val(),
            company: $("#company").val(),
            image:imageFile
  
        };
        $.ajax({
            type: 'POST',
            url: base_url + 'parts',
            data: part,
            success: function (user) {
                   alert("Part Successfully added!");
                   location.reload();
     
               
                
            },
            error: function (error) {
                alert("Problem Adding");
            }
        });

    
    });

    function rowTemplate(part) {
        let oneRow = '<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">'+
        '<div class="tile">'+
            '<div class="wrapper">'+
                '<div class="header">'+part.name+'</div>'+

                '<div class="banner-img">'+
                    '<img src="'+base_url+"uploads/"+ part.image+'" alt="Image 1" />'+
                '</div>'+

                '<div class="footer">'+
                    '<a href="#" class="Cbtn Cbtn-primary details" part_id='+part._id+' > View </a>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</div>';
        return oneRow;
    }

    
    $.ajax({
        type: 'GET',
        url: base_url + 'parts',
        success: function (parts) {
            let myRows = [];
            $.each(parts, function (index, part) {
                myRows.push(rowTemplate(part));
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
          url: base_url + 'parts/' + $(this).attr('part_id'),
          success: function (part) {
            $("#pid").val(part._id);
            $("#iname").val(part.name);
            $("#imodel").val(part.modelNumber);
            $("#iedate").val(part.entryDate);
            $("#iqty").val(part.quantity);
            $("#idetails").val(part.details);
            $("#icompany").val(part.company);



            $('#myModal').modal('show');
          }
      })
      });


      $("#edit-item").on('click', function(e){
        e.preventDefault();
        var item_id= $('#pid').val();
        let part = {
            name: $("#iname").val(),
            modelNumber: $("#imodel").val(),
            entryDate: $("#iedate").val(),
            quantity: $("#iqty").val(),
            details: $("#idetails").val(),
            company: $("#icompany").val(),
            
        };
        $.ajax({
            type: 'PUT',
            url: base_url + 'parts/'+ item_id,
            data: part,
            success: function (part) {
                alert("Updated Successfully");
                window.location.href='/spareParts.html';
            
            },
            error: function () {
                alert("Fill all the form fields!");
            }
        });
    });



});
