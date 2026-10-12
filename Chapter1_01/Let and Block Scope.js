
let testStatus = "pending";

if (testStatus === "pending") {
    let executionTime = 2000;

    console.log(
        "Inside the IF block:",
        executionTime
    );
}

{
    let executionTime = 5000;

    console.log(
        "Inside another block:",
        executionTime
    );
}

console.log("Test status:", testStatus);