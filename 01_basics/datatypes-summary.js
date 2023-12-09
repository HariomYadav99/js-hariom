//Data Type---how to store your data and how to access your data
// divide by two types
// 1. call by value
// 2. call by reference.

// Primitive (call by value)

/*
7 types---> 1.String, 2.Number, 3.Boolean, 4.Null, 5.Undefined, 6.Symbol, 7.BigInt 
*/

const score = 100;
const score1 = false;
const scoreValue = 100.3;
const isLogIn= false;
const outSideTemp = null;
let userEmail;
let userEmail1 = undefined;

const id =Symbol('123');
const anotherId =Symbol('123');

console.log(id === anotherId);

// const bigNumber = 3456634354354545354334n;

// Non-Primitive(Reference Type)
/*
all value reference can directly allocated memory.
Array, Objects, Functions.
*/

const heros = ["Shaktiman" , "Naagraj", "Dugal"]
let myObj = {
    name : "Hariom",
    age: 25,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(myObj);



