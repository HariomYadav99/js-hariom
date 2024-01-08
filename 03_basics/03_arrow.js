const user = {
    username : "Hariom",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website.`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Harry"
// user.welcomeMessage()


// console.log(this)

// function chit(){
//     let username = "Hariom"
//     console.log(this.username)
// }

// chit()


// const chai = function(){
//     let username = "Hariom"
//     console.log(this.username)
// }

// chai()

const chai = () => {
    let username = "Harry"
    console.log(this)
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
//     }
    
//     console.log(addTwo(3,4))

// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username : "Harriom"})

console.log(addTwo(3,4))


// const myArray = [2,3,4,5,6]
// myArray.forEach(function() {})
// myArray.forEach(() => {})
// console.log(myArray)