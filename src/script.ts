// Generics reuseable block of code which can be used as type

const addId = <T extends {name: string;age: number;}> (obj: T) => {
    let id : number = Math.floor(Math.random()*100);
    return {...obj, id}
}



// let user = addId ({name: "Akash Kumar Saha", age: 45});
// let user2 = addId ({name: "Priyanka Acharjee", age: 56});


const user = {name: "Akash", age: 46}

addId(user)

console.log(addId(user))



// Use of Generic in interface


interface APIResponse <T> {
    status: number;
    type: number;
    data: T;
}

const response1: APIResponse <object> = {
    status: 200,
    type: 1,
    data: {name: "Cooling fan", price: 200}
}


// ENUM Types optional type

enum RType {SUCCESS, FAILED, UNAUTHINCATED, FORBIDDEN};


const response2 : APIResponse <object> = {
    status: 200, 
    type: RType.FAILED,
    data: {name: "Fridge", price: 56}
}

console.log (response2)