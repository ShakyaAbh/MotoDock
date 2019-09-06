$(function () {
  // console.log("ready!");
  $.ajaxSetup({
    xhrFields: {
      withCredentials: true
    },
    crossDomain: true
  });


  $(function () {
    let tblBody = $("#tblbody");
    let base_url = "http://localhost:3000/";
    let imageFile = "";

    function rowTemplate(item) {
      let oneRow = "<tr><td>" + item.name + "</td><td>" + item.desc + "</td><td>" + item.category + "</td><td>" + item.price + "</td>";
      if (item.image !== "") {
        oneRow +=
          "<td><img src= " +
          base_url +
          "uploads/" +
          item.image +
          " width='60' /></td>";
      } else {
        oneRow += "<td> No Image </td>";
      }
      oneRow +=
        '<td><button type="button" class="btn btn-danger delete" item_id=' +
        item._id +
        ">Delete</button>";
      oneRow +=
        ' <button type="button" data-toggle="modal" data-target="#exampleModal" class="btn btn-primary update" item_id=' + item._id +
        ">Edit Items </button></td></tr>";
      return oneRow;
    }

    $.ajax({
      type: "GET",
      url: base_url + "items",
      success: function (items) {
        let myRows = [];
        $.each(items, function (index, item) {
          myRows.push(rowTemplate(item));
        });
        tblBody.append(myRows);
      },
      error: function () {
        alert("fodd list error!");
      }
    });

    $("#fileToUpload").on("change", function () {
      let formData = new FormData();
      let files = $("#fileToUpload").get(0).files;
      if (files.length > 0) {
        formData.append("imageFile", files[0]);
      }
      // $("#add-item").prop("disabled", true);
      $.ajax({
        type: "POST",
        url: base_url + "upload",
        contentType: false,
        cache: false,
        processData: false,
        data: formData,
        success: function (data) {
          imageFile = data.filename;
          // $("#add-item").prop("disabled", false);
        },
        error: function () {
          alert("Image upload failed!");
        }
      });
    });

    $("#addItem").on("click", function () {
      let item = {
        name: $("#item-name").val(),
        desc: $("#desc").val(),
        price: $("#price").val(),
        category: $("#itemCategory").val(),
        image: imageFile
      };

      $.ajax({
        type: "POST",
        url: base_url + "items",
        data: item,
        success: function (item) {
          tblBody.append(rowTemplate(item));
          imageFile = "";
          $("#item-form").trigger("reset");
          alert("Item Added Successfully");
        },
        error: function () {
          alert("Fill all the form fields!");
        }
      });
    });

    let itemid;
    tblBody.on("click", '.update', function () {
      itemid = $(this).attr('item_id');
      $.ajax({
        type: 'GET',
        url: base_url + 'items/' + itemid,
        success: function (item) {
          console.log(item);
          $('#item-name').val(item.name);
          $('#desc').val(item.desc);
          $('#itemCategory').val(item.category);
          $('#price').val(item.price);

          $('#edit-items').show();
        },
        error: function () {
          console.log("error getting item info!");
        }
      });
    });

    $('#edit-item').on('click', function (e) {
      e.preventDefault();

      let item = {
        name: $("#item-name").val(),
        desc: $("#desc").val(),
        price: $("#price").val(),
        category: $("#itemCategory").val(),
        image: imageFile
      };
      $.ajax({
        type: 'PUT',
        url: base_url + 'items/' + itemid,
        data: item,
        success: function (item) {
          console.log(item);
          location.reload();
        }
      })
    });


    tblBody.on("click", ".delete", function () {
      if (confirm("Do you want to delete this Item?")) {
        $.ajax({
          type: "DELETE",
          url: base_url + "items/" + $(this).attr("item_id"),
          success: function () {
            location.reload();
          }
        });
      }
    });

  });
});