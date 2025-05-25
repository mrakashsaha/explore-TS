"use strict";
// Dynamic types
let unknown;
unknown = "Akash";
console.log(unknown);
unknown = 564;
console.log(unknown);
unknown = true;
console.log(unknown);
// We should not normally use any type of variable. If we use any then its not a typescript, its work like normal javascript.
// Any type in Array
let myArray = [];
myArray.push("Akash");
myArray.push(true);
myArray.push(454);
console.log(myArray);
// Anytype in Object;  
let myObjectX;
myObjectX = {
    name: 4654,
    age: "Akash Kumar Saha"
};
console.log(myObjectX);
