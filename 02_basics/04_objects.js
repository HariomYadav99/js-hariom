// const tinderUser = new Object() // Singleton objects
const tinderUser = {}  // NOn singleton objects

tinderUser.id = "1334abc"
tinderUser.name = "Hariom"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email:"Some@gmail.com",
    fullname:{
        userfullname: {
            firstname: "Hariom",
            lastname: "Yadav"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1:"A",
    2:"B"
}

const obj2 = {
    3:"a",
    4:"b"
}

const obj4 = {
    5:"a",
    6: "b"
}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 =  {
    ...obj1, ...obj2
}
// console.log(obj3)

const users = [
    {
        id:1,
        email: "hariomgom@gmail.com",
    },
    {
        id:1,
        email: "hariomgom@gmail.com",
    },
    {
        id:1,
        email: "hariomgom@gmail.com",
    },
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIn'))
console.log(tinderUser.hasOwnProperty('isLogged'))