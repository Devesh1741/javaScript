// console.log("hello dev")
// console.log("hello dev")
// console.log("hello dev")
// console.log("hello dev")
// console.log("hello dev")

function sayMyName(){
console.log("hello dev")
console.log("hello dev")
console.log("hello dev")
console.log("hello dev")
console.log("hello dev")
}

// console.log(sayMyName());
//sayMyName // is a referance 

// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }


function addTwoNumbers(num1, num2){
    
    // let result = num1 + num2
    // return result
    return num1 + num2 // when we do return than we found result otherwise not
}

const result = addTwoNumbers(5, 5)
// console.log("Result: ", result);


function loginUserMessage(username = "dev"){
    if (username === undefined)
     {
        console.log("Please enter a userename ");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("dev"))
// console.log(loginUserMessage())

function calculateCartPrice(...number1){ // Rest operator
    return number1
}

// console.log(calculateCartPrice(200, 300, 250));

const user = {
    username: "devesh",
    price:2000
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "dev",
    price: 500
})

const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400, 500]))




