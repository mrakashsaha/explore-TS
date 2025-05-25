// Learn about function signature

let newVar: string;

newVar = "Akash"


let add: (x: number, y: number) => number;  //this is the signature part of a function


add = (a: number, b: number) => {

    return a + b;
}

console.log(add(2, 3))



let calculation: (x: number, y: number, z: string) => number;


calculation = (a: number, b: number, c: string) => {
    if (c === "add") {
        return a + b;
    }

    else {
        return a - b;
    }
}


console.log(calculation(23, 23, "add"))



let userDetails: (id: number | string, userInfo: {
    name: string,
    age: number,
    isAdult: boolean,
}) => number;


userDetails = (nid: number | string, userInformation: {
    name: string,
    age: number,
    isAdult: boolean,
}) => {
    return 0;
}