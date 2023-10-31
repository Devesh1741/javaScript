const accountId = 123;
let accountEmail = "devesh@dharawara.com"
var accountPassword = "123445"
accountCity = "Jaipur"
let accountState;

//accountId = 2 not allowed constant will never going to change
accountEmail = "dev@123.com"
accountPassword = "121"
accountCity = "allahabad"

console.log([accountId,accountEmail,accountPassword,accountCity,accountState]);

/* prefer not to use var because of issue in
 block scope and functional scope
*/