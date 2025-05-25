// Learn about function type.


const myFunc = (a: string, b: string, c: string = "Akash") : void => {

    console.log(c)
    
    console.log (`Hello ${a} and ${b}`)
}


myFunc('3', '4', "Priyanka")

const myFunc2 = (a: string, b: string, c: string = "Akash") : string => {

    return a + b + c;
}


console.log(myFunc2('3', '4', "Priyanka"))