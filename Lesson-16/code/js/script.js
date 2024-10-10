// Browser Events
// Event Propogation
// Event Delegation
// Node Types

// Event Propogation
// addEventListener(event name, function, options(boolean value));

// bubbling -> false (by default) | inward to outward

// document.querySelector("#grandparent").addEventListener("click", function (e) {
//   console.log("Grand Parent Div clicked");
// }, false);

// document.querySelector("#parent").addEventListener("click", function (e) {
//   console.log("Parent Div clicked");
//   e.stopPropagation();
// }, false);

// document.querySelector("#child").addEventListener("click", function (e) {
//   console.log("Child Div clicked");
//   e.stopPropagation();
// }, false);

// capturing -> true | outward to inward
document.querySelector("#grandparent").addEventListener(
  "click",
  function (e) {
    console.log("Grand Parent Div clicked");
  },
  true
);

document.querySelector("#parent").addEventListener(
  "click",
  function (e) {
    console.log("Parent Div clicked");
  },
  false
);

document.querySelector("#child").addEventListener(
  "click",
  function (e) {
    console.log("Child Div clicked");
    e.stopPropagation();
  },
  false
);

// Event Delegation: attaching events
document.querySelector("#delegate").addEventListener("click", function (e) {
  console.log(e.target); //
  console.log(e.target.tagName);
  console.log(e.target.innerHTML);
});

document.querySelector("#list").addEventListener("click", function (e) {
  alert(e.target.innerHTML);
});
