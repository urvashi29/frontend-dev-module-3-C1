// Structure
//when DOM is ready run ready function
// $(document).ready(function () {
//write code
// });

//Jquery Selector
$(document).ready(function () {
  // syntax
  // $(css selector)

  // id selector
  $("#sample").hide();

  // class selector
  $(".item").hide();

  // element selector
  // select a "h2" element and change it's text Content
  $("h2").text("Welcome to our site!"); //textContent in js

  //universal selector
  // $('*');

  //descandant selector or Child selector
  // $('ul > li');

  // $('li:first-child')

  //   select all the even p who are child of div tag
  $("div > p:even").hide();
});

//Jquery HTML Manipulation (get & set)
// text(): similar to textContent in js
// html(): similar to innerHTML in js
// val(): similar to "value" prop of input (user input capture)
// attr(): similiar to attribute metho of js

$(document).ready(function () {
  // get

  // text()
  console.log($("div > p:first-child").text()); //return the text content of first p tag

  // html()
  console.log($("div").html());

  // val()
  //   attached click event on button (click event js)
  $("#btn").click(function () {
    let name = $("#name").val(); //"document.getElementById('name').value" in js
    alert(name);
  });

  //   attr()
  console.log($("a").attr("href"));

  //   set (update or change)
  $("h2").text("Hello World!");

  $("#test").html("<p>Lorem</p>");

  $("#name").val("alina");

  $("a").attr("href", "https://www.gmail.com");
});

//how to add new element
//append(): add the element in the end
// perpend(): add the element the start
// before(): add element before a specific element
//  after(): add element after a specific element

$(document).ready(function () {
  var txt = $("<li></li>"); //new li is created
  txt.text("ReactJs"); //text content is added to li
  $("ul").append(txt);

  $("ul").prepend("<li>NextJs</li>");

  $("#test").before("<h3>Lorem<h3>");
  $("#test").after("<h3>Lorem<h3>");

  //remove()
  $("#remove").remove();
});

//Manipulating CSS
// addClass()
// removeClass()
// toggleClass()
// css()

$(document).ready(function () {
  $("#change").click(function () {
    $(".test").removeClass("test");
    $("h2").addClass("add test");
    $("#test").toggleClass("add");

    console.log($("#test").hasClass("add")); //return true, if class is present otherwise false

    $("#name").css({
      "background-color": "yellow",
      "font-size": "20px",
    });
  });
});

// Effects

$(document).ready(function () {
  // click event using click() method
  $("#effect").click(function () {
    // hide() & show() & toggle()
    // $("#test").hide(2000, function () {}); //2000 ms
    // $("#sample").show(1000, function () {});

    // fadeIn(): visible the element with fading effect, fadeOut(): hide the element, fadeToggle()
    // $("#test").fadeOut("slow", function() {});
    // $("#test").fadeOut(2000, function(){});
    // $("#sample").fadeIn(1000, function () {});

    // slideUp: hide the element & slideDown: visible the element, slideToggle()
    // $("#test").slideUp(2000);
    $("#sample")
      .delay(2000)
      .slideDown(1000, function () {
        alert("Sliding Down!");
      });
  });
});

// 1000ms = 1s

//event Handling
// mouseenter(), keyup(), keydown(), change()
$(document).ready(function () {
  $("#name").hover(function (e) {
    console.log(e);
    console.log(e.target);
  });
});

//attach 2 event togather using on()
$(document).ready(function () {
  $("#attach").on({
    click: function (e) {
      $(this).css({ "background-color": "pink" });
    },
    mouseover: function (e) {
      $(this).css({ "font-size": "30px" });
    },
  });

  $("a").click(function (e) {
    e.preventDefault();
    // e.stopPropagation();
  });

  $("img").width("100px");
  $("img").height("100px");
});

//animate
$(document).ready(function () {
  $("#box").click(function () {
    $("#animate").animate({
      opacity: "0.5",
      height: "200px",
      width: "200px",
      padding: "20px"
    });
  });
});


