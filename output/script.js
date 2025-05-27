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
const response1 = {
    status: 200,
    type: 1,
    data: { name: "Cooling fan", price: 200 }
};
// ENUM Types optional type
var RType;
(function (RType) {
    RType[RType["SUCCESS"] = 0] = "SUCCESS";
    RType[RType["FAILED"] = 1] = "FAILED";
    RType[RType["UNAUTHINCATED"] = 2] = "UNAUTHINCATED";
    RType[RType["FORBIDDEN"] = 3] = "FORBIDDEN";
})(RType || (RType = {}));
;
const response2 = {
    status: 200,
    type: RType.FAILED,
    data: { name: "Fridge", price: 56 }
};
console.log(response2);
