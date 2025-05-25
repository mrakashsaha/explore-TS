"use strict";
// Learn about function type.
const myFunc = (a, b, c = "Akash") => {
    console.log(c);
    console.log(`Hello ${a} and ${b}`);
};
myFunc('3', '4', "Priyanka");
const myFunc2 = (a, b, c = "Akash") => {
    return a + b + c;
};
console.log(myFunc2('3', '4', "Priyanka"));
