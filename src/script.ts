// const country = "I love Bangladesh";
// console.log (country);




let playerName = "Sakib Al Hasan";
let age = 34;

console.log (playerName, age);

playerName = "56";   //Whenever I declear the playerName as a string it automatically consider the variable type as a string, it wont accept any value without string. that's why the error is showing

 age = 50;

console.log(playerName, age)

// =========Exception ==========

let playerName2;

console.log(typeof(playerName2))  // as it is undefined asign

playerName2 = "Akash Kumar Saha"
playerName2 = 56;

// If I do like this there won't show any error. If we decelar and defined at the same line then it will happend.



function multiply (a : number, b : number) {  // set type explicitly

    return a*b;

}

console.log (multiply(12, 12));  // any string sent as parameter


// Array 

let fruits = ["apple", "banana", "orange"];

fruits.push("Pineapple");   //If I sent number here TS will detect error

console.log(fruits)



let mixed = [46, "Akash", "Batash", true, {ok: "hello"}];


mixed.push("ok")

mixed.push ( {
    ok: "fine"
})

console.log(mixed)


// Object


let person = {
    name: "Shakib Al Hasan",
    age: 35,
    isCaptain: true
}


person.name = "Virat Kholi";