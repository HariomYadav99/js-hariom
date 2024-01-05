let score = null;
let score1 = 33;
let score2 = "33abc";
let score3 = undefined;
let score4 = true;
let score5 = "Hariom";


console.log(typeof score);
console.log(typeof score1);
console.log(typeof(score2));
console.log(typeof score3);
console.log(typeof score4);
console.log(typeof score5);

let valueInNumber = Number(score);
let valueInNumber1 = Number(score1);
let valueInNumber2 = Number(score2);
let valueInNumber3 = Number(score3);
let valueInNumber4 = Number(score4);
let valueInNumber5 = Number(score5);


console.log(typeof valueInNumber);
console.log(typeof valueInNumber1);
console.log(typeof valueInNumber2);
console.log(typeof valueInNumber3);
console.log(typeof valueInNumber4);
console.log(typeof valueInNumber5);


console.log(valueInNumber);
console.log(valueInNumber1);
console.log(valueInNumber2);
console.log(valueInNumber3);
console.log(valueInNumber4);
console.log(valueInNumber5);

// "33" ==> 33
// "33ava" ==> (NaN not a number)
// true ==> 1 ; false ==> 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

let isLoggedIn1 = "";
let booleanIsLoggedIn1 = Boolean(isLoggedIn1);
console.log(booleanIsLoggedIn1);

let isLoggedIn2 = "Hariom";
let booleanIsLoggedIn2 = Boolean(isLoggedIn2);
console.log(booleanIsLoggedIn2);


// 1 ==> true; 0==> false
// "" ==> false
// "Hariom"==> true.

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

// ************ Operations*************

let value = 3;
let negValue = -value;
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = "Hello";
let str2 = " Hariom";
let str3 = str1 +str2;
console.log(str3);

console.log("1" + 2);
console.log(1 +"2");
console.log("1" + 2 +2);
console.log(1 + 2 + "2");
console.log(((3 + 4) * 5) % 3);
console.log(true);
console.log(+true);
console.log(+"");

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2

let gameCounter = 100;
// gameCounter++;
console.log(gameCounter);

++gameCounter;
console.log(gameCounter);