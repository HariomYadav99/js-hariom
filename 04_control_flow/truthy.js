const userEmail = "hariomYadav@gamil.com"

if(userEmail){
    console.log("Got user Email.")
}
else{
    console.log("Don't have user Email")
}

const userEmail1 = ""

if(userEmail1){
    console.log("Got user Email.")
}
else{
    console.log("Don't have user Email")
}

const userEmail2 = []

if(userEmail2){
    console.log("Got user Email.")
}
else{
    console.log("Don't have user Email")
}

// falsy values-->
// false, 0 , -0, BigInt, 0n, "" , null, undefined, Nan.

// truthy values--> 
// "0", 'false', " ", [], {} , function(){}, 


if (userEmail2.length===0){
   console.log("array is empty")
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty")
}

// Nullish Coalescing Operator(??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1= undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// Terniary Operator
// Condition ? true: false 

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("More than 80")