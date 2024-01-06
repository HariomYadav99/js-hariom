

function sayMyName(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("I");
    
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(3,4)
// addTwoNumbers(3, "a")
// addTwoNumbers(3,"4")
// addTwoNumbers(3,null)

function addTwoNumbers(number1, number2){
    // console.log(number1 + number2);
    // let result = number1 + number2
    // console.log("Hariom")
    // return result
    //console.log("Hariom")

    return number1 + number2

}

// addTwoNumbers(3,4)
// addTwoNumbers(3, "a")
// addTwoNumbers(3,"4")
// addTwoNumbers(3,null)

const result = addTwoNumbers(3,5)
// console.log("Result: ", result);


// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }


function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}


function loginUserMessage(username ="Harry"){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}


// console.log(loginUserMessage("Hariom"))
// console.log(loginUserMessage(""))
//console.log(loginUserMessage())


// rest operator(...) or spread operator
function calculateCartPrice(...num1){ // ...==> rest operator
    return num1
}

console.log(calculateCartPrice(200,400,500))



// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }

// //console.log(calculateCartPrice(200,400,500,2000))

const user ={
    userName: "hariom",
    price : 199    
}

function handObject(anyobject){
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`)
}

// handObject(user)
handObject({
    userName: "Harry",
    price: 499
})

const myNewArray = [200, 400, 500, 600]

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 500, 600]))