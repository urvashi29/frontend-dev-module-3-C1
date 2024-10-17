// http method: get(), post(), update(), delete()
// url: 'api'

// AJAX
// https://jsonplaceholder.typicode.com/users | GET

$(document).ready(function () {
  // $.ajax()

  $.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    method: "GET",
    dataType: "json",
    headers: {
      "x-rapidapi-key": "790d86839cmsh8e4edc9dd8ffc56p19fb3ejsn819cdbc59bdb",
      Authorization: "Bearer myToken",
      ids: "",
    },
    success: function (res) {
      console.log(res);
    },
    error: function (xhr) {
      if (xhr.status == 404) {
        //style website
      }
      console.log(xhr);
    },
  });

  // $.get(api, function(res, status){})
  $.get(
    "https://jsonplaceholder.typicode.com/posts/",
    function (response, status) {
      console.log(response, status);
    }
  );

  // $.post(), $.delete()

  //   Promise Based
  $("#user").click(function () {
    $.ajax({
      url: "https://jsonplacehole.com/posts",
      method: "GET",
    })
      .done(function (res) {
        console.log(res);
        $("#result").text("Successful API call");
      })
      .fail(function (xhr, status, error) {
        console.log(xhr, status, error);
        $("#result").text("Error occured!");
      });

    let name = "alina";
    let job = "manager";

    $.ajax({
      url: "https://reqres.in/api/users",
      method: "POST",
      data: {
        name: name,
        job: job,
      },
    })
      .done(function (res) {
        alert("Account created");
        console.log(res);
      })
      .fail(function (err) {
        console.log(err);
      });
  });
});

// GET Request
// https://jsonplaceholder.typicode.com/posts/
// https://jsonplaceholder.typicode.com/users
// https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001

// https://rapidapi.com/ - try to use movie API

// POST request
// https://reqres.in
//  {
//   name: "morpheus",
//   job: "leader",
// };

//Task
//Try get the data movie API, E-commerce and console data (Rapid Api & fake Store API)
//Get the data from user and do post request
