let passPercentage = 95;

if (passPercentage === 100) {
    console.log("🟢 Green Build");
} 
else if (passPercentage >= 90 && passPercentage < 100) {
    console.log("🟡 Stable — Investigate failures");
} 
else if (passPercentage >= 70 && passPercentage < 90) {
    console.log("🟠 Unstable");
} 
else if (passPercentage >= 0 && passPercentage < 70) {
    console.log("🔴 Broken Build — Block deployment");
} 
else {
    console.log("Invalid Percentage");
}