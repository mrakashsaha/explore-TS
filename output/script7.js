"use strict";
// Learn about function signature
let newVar;
newVar = "Akash";
let add; //this is the signature part of a function
add = (a, b) => {
    return a + b;
};
console.log(add(2, 3));
let calculation;
calculation = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(calculation(23, 23, "add"));
let userDetails;
userDetails = (nid, userInformation) => {
    return 0;
};
