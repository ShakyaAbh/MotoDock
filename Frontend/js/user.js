$(function () {
  console.log("ready!");
  $.ajaxSetup({
    xhrFields: {
      withCredentials: true
    },
    crossDomain: true
  });


  $(function () {
    let tblBody = $("#tblbody1");
    let base_url = "http://localhost:3000/";
    let imageFile = "";

    function rowTemplate(users) {
      let users = {
        navUname: $("#username").val()
      };
      
      let oneRow = "<tr><td>" + users.firstname + "</td><td>" + users.lastname +
      "</td><td>" + users.username + "</td><td>" + users.address + "</td><td>" + 
      users.email + "</td><td>" + users.contacts + "</td><td>" + users.createdAt 
      + "</td><td>" + users.image + "</td><td></tr>";
      if (item.image !== "") {
        oneRow +=
          "<td><img src= " +
          base_url +
          "uploads/" +
          item.image +
          " width='60' /></td>";
      } else {
        // oneRow += "<td> No Image </td>";
      }
       ;
      return oneRow;
    }

    $.ajax({
      type: "GET",
      url: base_url + "users/findallusers",
      success: function (users) {
        let myRows = [];
        $.each(users, function (index, user) {
          myRows.push(rowTemplate(user));
        });
        tblBody.append(myRows);
      },
      error: function () {
        alert("Problem while fetching users data!");
      }
    });
  });
});