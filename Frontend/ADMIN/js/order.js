$(function () {
    console.log("ready!");
    $.ajaxSetup({
      xhrFields: {
        withCredentials: true
      },
      crossDomain: true
    });
  
  
    $(function () {
      let tblBody = $("#tblbody2");
      let base_url = "http://localhost:3000/";
      let imageFile = "";
  
      function rowTemplate(order) {
        let oneRow = "<tr><td>" + order.User._id + "</td><td>" + order.Items._id +
          "</td><td>" + order.Items._id.price + "</td>";
        return oneRow;
      }
  
      $.ajax({
        type: "GET",
        url: base_url + "order",
        success: function (order) {
          let myRows = [];
          $.each(order, function (index, order) {
            myRows.push(rowTemplate(order));
          });
          tblBody.append(myRows);
        },
        error: function () {
          alert("error while getting data of order!");
        }
      });
  
      // $.ajax({
      //   type: "GET",
      //   url: base_url + "tables",
      //   success: function (tables) {
      //     let myRows = [];
      //     $.each(tables, function (index, tables) {
      //       myRows.push(rowTemplate(tables));
      //     });
      //     tblBody.append(myRows);
      //   },
      //   error: function () {
      //     alert("Something went wrong!");
      //   }
      // });
    });
  });