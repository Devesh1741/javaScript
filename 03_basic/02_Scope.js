// var c = 200  Global Scope
let a = 100
if (true) {
    let a = 10
    const b = 30
    // var c = 20 Block Scope
    // console.log("Inner:", a);
}

// console.log(a);
// console.log(b);
// console.log(c);


// Nested Scoping

function one() {


    const username = "dev"

    function two() {
        const website = "youtube"
        console.log(website);
    }
    console.log(website);

    two()
}

if (true) {
    const username = "dev"
    if (username === "dev ") {
        const website = "Youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// ++++++++++++++ Intresting ++++++++++

function addone(num) {
    return num + 1
}

addone(5)

const addTwo = function (num) {
    return nun + 2
}

addTwo(5)
