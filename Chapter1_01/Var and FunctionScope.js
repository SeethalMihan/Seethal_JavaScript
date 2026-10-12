
function testVar() {
    var message = "Hello from function";
    console.log(message);
}

testVar();

// var is function-scoped
var status = "Pending";

if (true) {
    var status = "Completed";
    console.log("Inside block:", status);
}

console.log("Outside block:", status);