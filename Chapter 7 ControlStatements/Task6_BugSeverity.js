let impactScore = 9;

if (impactScore >= 9 && impactScore <= 10) {
    console.log("Severity: Critical — Block release");
} 
else if (impactScore >= 7 && impactScore <= 8) {
    console.log("Severity: High");
} 
else if (impactScore >= 4 && impactScore <= 6) {
    console.log("Severity: Medium");
} 
else if (impactScore >= 1 && impactScore <= 3) {
    console.log("Severity: Low");
} 
else {
    console.log("Invalid Score");
}