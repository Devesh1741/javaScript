const user = {
    username: "dev",
    Price: 100,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "devesh"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "dev"
//     console.log(this);
// }
// chai()


// const chai = function () {
//     let username = "dev"
//     console.log(this.username);
// }


const chai = () => {
    let username = "dev"
    console.log(this.username);
}

// const multiply = (num1, num2) => {
//     return num1 * num2
// }
// console.log(multiply(5, 4));


// const multiply = (num1, num2) => {
//     return num1 * num2
// }
// console.log(multiply(5, 4));

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({ username: "dev" })

console.log(addTwo(5, 7));