displayClicked = () => {
  alert("Button Clicked!");
};

validate = () => {
  // how to capture user input
  const name = document.querySelector("#name").value;
  alert(name);
};

changeInput = () => {
  console.log(document.querySelector("#age").value);
};

keyUp = () => {
  document.querySelector("#number").style.backgroundColor = "yellow";
};

focusEle = (e) => {
  document.querySelector("#email-address").style.backgroundColor = "red";
};

// Attach event to an element through js
// selector.addEventListener(event name, function to be called)
document.querySelector("#email-address").addEventListener("focus", focusEle);

document.querySelector("#email").addEventListener("keydown", function (e) {
  console.log(this); //input
  this.style.backgroundColor = "pink";
});

document.querySelector("#form").addEventListener("submit", function (e) {
  e.preventDefault(); //prevent the default behavior of an event
  // e: refers to event, It is created automatically when an event fires
  console.log(e); //event
  console.log(e.type); //submit
  console.log(e.target); //element on which event is attached
  document.querySelector("#submitted").textContent = "Form Submitted";
});

// Remove event
document.querySelector("#number").removeEventListener("keyup", keyUp);
