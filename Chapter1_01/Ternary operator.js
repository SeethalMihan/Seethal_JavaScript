let marks = 75;

let result = marks >= 50 ? "Pass" : "Fail";

console.log(result);






let nunumber = 7;

let Status = nunumber % 2 === 0 ? "Even" : "Odd";

console.log(Status);

let age = 17;

let eligibility = age >= 18
    ? "Eligible to vote"
    : "Not eligible to vote";

console.log(eligibility);


let num = 8;

let numberType = num % 2 === 0 ? "Even" : "Odd";

console.log(numberType);


let actualTitle = "Login Page";
let expectedTitle = "Login Page";

let testStatus = actualTitle === expectedTitle
    ? "PASS"
    : "FAIL";

console.log(testStatus);




let a = 100;
let b = 200;
let c = 150;

let biggest = a > b
    ? (a > c ? a : c)
    : (b > c ? b : c);

console.log(biggest);