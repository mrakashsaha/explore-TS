"use strict";
// Generics reuseable block of code which can be used as type
const addId = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
// let user = addId ({name: "Akash Kumar Saha", age: 45});
// let user2 = addId ({name: "Priyanka Acharjee", age: 56});
const user = { name: "Akash", age: 46 };
addId(user);
console.log(addId(user));
// Use of Generic in interface
