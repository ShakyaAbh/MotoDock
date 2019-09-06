$(function () {
  console.log("ready!");
  $.ajaxSetup({
    xhrFields: {
      withCredentials: true
    },
    crossDomain: true
  });


  $(function () {
    let tblBody = $("#tblbody3");
    let base_url = "http://localhost:3000/";
    let imageFile = "";

    function rowTemplate(reservation) {
      let oneRow = "<tr><td>" + reservation.email + "</td><td>" + reservation.date +
        "</td><td>" + reservation.time + "</td><td>" +
        reservation.numberofAdults + "</td><td>" + reservation.numberofChildren + "</td><td>";
      return oneRow;
    }

    $.ajax({
      type: "GET",
      url: base_url + "reservation",
      success: function (reservation) {
        let myRows = [];
        $.each(reservation, function (index, reservation) {
          myRows.push(rowTemplate(reservation));
        });
        tblBody.append(myRows);
      },
      error: function () {
        alert("error while getting data of reservation!");
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