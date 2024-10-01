//display in js
console.log("Hello World"); //debugging purpose
// alert("hello");//alert display
// document.write("Almabetter!");//testing purpose

//DOM methods selectors
// getElementById()

// innerHTML is used to change element content
console.log(document.getElementById("num")); //<p></p>
console.log(typeof document.getElementById("num")); //object
console.log(document.getElementById("num").innerHTML); //22700

document.getElementById("num").innerHTML = "30000";

// getElementsByClassName()
let itemsCollection = document.getElementsByClassName("items");
console.log(itemsCollection);
console.log(itemsCollection.length);

let arr = [];

//iterating through HTML collection
for (let i = 0; i < itemsCollection.length; i++) {
  console.log(itemsCollection[i].innerHTML); //
  arr.push(itemsCollection[i].innerHTML);
}

console.log(arr);

