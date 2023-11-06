let score = "33aab"
console.log(typeof score);
console.log(typeof (score));

let valueIntNumber = Number(score)
console.log(typeof valueIntNumber);
console.log(valueIntNumber);

// "33" => 33
//"33aab" => NaN
//true => 1; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);
console.log();

// 1 => true; 0 => false
// "" => false
// "devesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
console.log(someNumber);





//************************************** Operation *************************
let value = 3 
let negValue = -value
//console.log(negValue);

//console.log(2-2);
//console.log(2+2);
//console.log(2*2);
//console.log(2**2); //4
//console.log(2/3);
//console.log(2%3);

let str1 = "hello"
let str2 = " devesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + "2"); //same as previous value
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32  this are depend on first come and first serve
// console.log( (3 + 4) * 5 % 3); //this is the right technique

// console.log(+true);
// console.log(+"");


let num1, num3, num4;

num1 = num2 = num3 = 2 + 2 // Totally avoid this

let gameCounter = 100 
++gameCounter; //prefics
gameCounter++; //postfics
console.log(gameCounter);
