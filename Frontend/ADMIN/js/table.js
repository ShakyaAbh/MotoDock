$(function () {
    // $ (function(){
    console.log("ready!");
    $.ajaxSetup({
      xhrFields: {
        withCredentials: true
      },
      crossDomain: true
    });
  
  
    $(function () {
      let tblBody = $("#tblbody");
      let base_url = "http://localhost:3000/";
  
      // function rowTemplate(table) {
      //   // let oneRow = "<tr><td>" + table.tableNumber +"</td>";
      
      //   // oneRow +=
      //   //   '<td> <button type="button" data-toggle="modal" data-target="#exampleModal" class="btn btn-primary update" item_id=' + item._id +
      //   //   ">Add Table </button></td></tr>";
      //   // return oneRow;
      // }
  
      // $.ajax({
      //   type: "GET",
      //   url: base_url + "tables",
      //   success: function (tables) {
      //     let myRows = [];
      //     $.each(tables, function (index, table) {
      //       myRows.push(rowTemplate(table));
      //     });
      //     tblBody.append(myRows);
      //   },
      //   error: function () {
      //     alert("Problem while getting tables data!");
      //   }
      // });
  
      $("#addtable").on("click", function () {
        let tables = {
          tableNumber: $("#table-number").val()
        };
  
        $.ajax({
          type: "POST",
          url: base_url + "tables",
          data: tables,
          success: function (table) {
            tblBody.append(rowTemplate(table));
            // imageFile = "";
            $("#table-form").trigger("reset");
            alert("Table Added Successfully");
          },
          error: function () {
            alert("Fill all the form fields!");
          }
        });
      });
    });
  });