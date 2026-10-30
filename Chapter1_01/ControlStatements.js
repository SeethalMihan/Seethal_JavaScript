// Control statements: if, else if, else, and nested if.
// Each exercise is followed by a working answer.

// Exercise 1: Check whether someone is old enough to vote.
let age = 27;

if (age >= 18) {
    console.log("Allowed to vote");
} else {
    console.log("Not allowed to vote");
}

// Exercise 2: Print a grade for a score from 0 to 100.
let score = 95;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else if (score >= 70) {
    console.log("Grade C");
} else if (score >= 60) {
    console.log("Grade D");
} else {
    console.log("Fail");
}

// Exercise 3: Show the access message for a logged-in user's role.
let isLoggedIn = true;
let userRole = "editor";

if (isLoggedIn) {
    if (userRole === "admin") {
        console.log("Admin can do everything");
    } else if (userRole === "editor") {
        console.log("Welcome Editor - edit access granted");
    } else if (userRole === "viewer") {
        console.log("Welcome Viewer - read-only access granted");
    } else {
        console.log("Unknown user role");
    }
} else {
    console.log("You are not logged in");
}

// Exercise 4: Check whether a number is even or odd.
let number = 72;

if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}
