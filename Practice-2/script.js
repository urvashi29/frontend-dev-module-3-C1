console.log(true > false); //1 > 0
console.log(Number(true)); //1

console.log(undefined == null); //true
console.log(undefined === null); //false

console.log(true + false > 2); //

// OR Opeartor -> look for truth value first
console.log(true || true); //true
console.log(false || true); //true
console.log(false || false); //false

console.log(1 || 0); //1
console.log(null || 1); //1
console.log(undefined || null || 0); //

// AND Opeartor -> look for false value first
console.log(1 && 0); //0

//&& if all true values are present, then last(right side) is returned
console.log(1 && 2 && 3); //3

//|| if all true values are present, then first(left side) is returned
console.log(1 || 2 || 3); //1

console.log(1 && 2 && null && 3); //null

console.log(!(true > false)); //false

console.log(!0); //true

console.log(!!null); //false

//const is declare a variable with a block scope. It allows constant reference, not constant value
const str = "hello";
// str = "world";//it will give me error
console.log(str); //

//
const arr = [90, 10, 29, 39, 30];
arr[0] = 100;
// arr = [10, 20, 39, 12, 3];//this will give error
console.log(arr); //

// hoisting
// x = 10;
// console.log(x);
// var x;

//Implicit Coersion
console.log(2 + "2" - 2); //20
console.log("hello" + 20 - "world"); //NaN
console.log("hello" + 20 + 20);
console.log("20" / 10); //

// //Rules
//1. Check for operator predecence (Priority)
//2. Check the datatype of operand
// If either is string and + is present, then concatenate
// If either is string and + is not present, then check the type of string(numeric or non-numeric or alpha)
// If it is numeric string, then js will convert string to number
// If it is non-numeric, it will calculate to NaN

for (var i = 0; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

//0.2 approx seconds
// for (var i = 0; i <= 5; i++) {
//   console.log(i);
// }
