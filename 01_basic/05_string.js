const name = " devesh"
const repoCount = 50 

// console.log(name +  repoCount + " Value"); // old technique to use

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('devesh')

console.log(gameName [0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('3'));
console.log(gameName.indexOf('es'));

const newString = gameName.substring(0, 4)
console.log(newString);

const  anotherString = gameName.slice(-8, 3)
console.log(anotherString);

const newStringOne = "   devesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://devesh.com/devesh%20shukla"
console.log(url.replace('%20', '_'));

console.log(url.includes('devesh'));

console.log(gameName.split('_'));

