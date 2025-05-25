"use strict";
// Custom type is called type alias in TS
const userdetails = (id, user) => {
    console.log(`User Id is ${id}, name is ${user.name} and age is ${user.age}`);
};
const sayHello = (user) => {
    console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
};
