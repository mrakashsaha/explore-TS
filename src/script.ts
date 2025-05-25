// Explicit Declearation of type in variable.

let a: string;

let b: number;

a="Akash Kumar Saha";
b= 56;



let x: string | boolean;

x=true;


// For array

let arr: (number | string) [] = [23, 12, 12, 121, 1]

arr.push(6);
arr.push("Akash");
// arr.push(true) Error will shown

console.log(arr)



// For object

let myObject : object;

myObject = {
 name: "Akash",
 age: 26, 

}


console.log (myObject);



// If I want a object follow a specific structure then 

let myObject2 : {
    name: string, 
    age: number, 
    isAdult: boolean,
}


myObject2 = {
    name: "Akash Kumar Saha",
    age: 22,
    isAdult: true,
}


// Exception in javascript array is an object so,

let myObjArray : object;

myObjArray = [213, 213, 12, 12];

console.log (myObjArray)