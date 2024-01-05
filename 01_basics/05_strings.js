const name = " Hariom "
const repoCount = 50;

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Hariom-hy-harry')
console.log(gameName);

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('H'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newString1 = "   hariom     "
console.log(newString1)
console.log(newString1.trim())

const url = "https://hariom.com/hariom%20yadav"

console.log(url.replace('%20', '_'))

console.log(url.includes('hariom'))

console.log(gameName.split('-'))

