// const tinderUser = new object()
const tinderUser = {}


tinderUser.id = "dev123"
tinderUser.name = "dev"
tinderUser.isLoggedIN = false
// console.log(tinderUser);

const regularUser = {
    email: "dev@gmail.com",
    fullname: {
        userfullname: {
            firstname: "devesh",
            lastname: "Shukla"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "dev@gmail.com"
    },
    {

    },
    {

    },
    
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIN'));





