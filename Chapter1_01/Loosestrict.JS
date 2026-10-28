let a = 10;
let b = "10";

console.log(a == b); // true



console.log(5 == "5");       // true
console.log(10 == 20);       // false
console.log(true == 1);      // true
console.log(false == 0);     // true
console.log("" == 0);        // true
console.log(null == undefined); // true



let mb = 10;
let nc = "10";

console.log(mb === nc); // false


let d = 100;
let e = "100";

console.log(d == e);  // true
console.log(d === e); // false

console.log(d != e);  // false
console.log(d !== e); // true