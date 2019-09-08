
$(function(){
    $.ajaxSetup({
        xhrFields:{
            withCredentials:true
        }
    });
    let base_url = 'http://localhost:3000/';

    $("#addItem").on('click', function (e) {
        e.preventDefault();
        let part = {
            name: $("#item-name").val(),
            modelNumber: $("#model").val(),
            entryDate: $("#edate").val(),
            quantity: $("#qty").val(),
            details: $("#details").val(),
            company: $("#company").val(),
  
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




});

