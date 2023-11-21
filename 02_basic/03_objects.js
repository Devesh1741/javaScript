// singleton
//objects literals

const mysym = Symbol("key1")

const JsUser = {
    name: "Devesh",
    "full name": "Devesh Shukla",
    [mysym]: "mysym1",
    age: 21,
    location: "Allahabad",
    email: "Devesh01741@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.name);
// console.log(JsUser["name", "email", "isLoggedIn", "full name"]);
// console.log(JsUser[mysym]);

JsUser.email = "ds1071244@gmail.com"
// Object.freeze(JsUser)
JsUser.email= "ds1071@google.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Helllo JS user");
}

JsUser.greetingtwo = function(){
    console.log(`Helllo JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());