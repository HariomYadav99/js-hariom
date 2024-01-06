// singleton---> 
// Object.create

// object literals

const mySym = Symbol("Key1")

const jsUser = {
    name: "Hariom",
    "full name": "Hariom Yadav",
    [mySym]:"myKey1",
    age: 19,
    location:"Noida",
    email: "Hariom@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser.mySym)
// console.log(jsUser[mySym])
// console.log(typeof jsUser.mySym)

myArray = ["H", "A"]

jsUser.email= "Hariomyadavcse@gmail.com"
//Object.freeze(jsUser)
// console.log(jsUser.email)
// console.log(jsUser["email"])

jsUser.email="AKshaykumar@gamil.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello js user! ")
}
console.log(jsUser.greeting());
// console.log(jsUser.greeting);

jsUser.greeting2 = function(){
    console.log(`Good Morning, ${this.name}`);
}

console.log(jsUser.greeting2())