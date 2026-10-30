let expected = "Login Successful";
let actual = "Login Successful";

if (expected === actual) {
    console.log("✅ Test Passed");
} 
else {
    console.log("❌ Test Failed");
    console.log("Expected:", expected);
    console.log("Got:", actual);
}

let expected1 = "Login Successful";
let actual1= "Invalid Credentials";

if (expected1 === actual1) {
    console.log("✅ Test Passed");
} 
else {
    console.log("❌ Test Failed — Expected:", expected, "Got:", actual);
}