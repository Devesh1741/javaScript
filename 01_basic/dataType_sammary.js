// Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoogedIn = false
const outsideTemp = null

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 123333333333444444322n


// Reference ( Non primitive)
 
// Array, Object, Functions

const heros = ("shaktiman", "naagraj", "doga");

let myObj = {
    name: "hitesh", 
    age: 22
}

const myfunction = function(){
console.log("Hello dev");

}
myfunction()

console.log(typeof bigNumber);



//********************************** Memory ***************

// Stack (Primitive), Heap (Non-Primitive)

let mycollege = "Ecc"

let mypg = "iim"

console.log(mypg);
console.log(mycollege);

let userOne = {
    email: "userdev@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "devesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);
