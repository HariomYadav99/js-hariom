// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);  // True
// console.log("02" > 1);  // True



/*
AVOIDED this kind of comparison.
*/
// console.log(null > 0);  // false (1)
// console.log(null == 0);  // false (2)
// console.log(null >= 0);  // True (3)

// the reason is that an equality check == and comparisons > <
//  >= <= work differently.
// Comparisons convert null to a number, treating it as 0.
// That's why (3) null >= 0 is true and (1) null> 0 is false.


// console.log(undefined == 0);  // false
// console.log(undefined > 0);   // false
// console.log(undefined < 0);   // false

// === ---> Strict Check

console.log("2" === 2);
