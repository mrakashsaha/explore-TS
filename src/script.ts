// Custom type is called type alias in TS

type stringOrNum = string | number
type userType = {
    name: string,
    age: number,
}

const userdetails = (
    id: stringOrNum,
    user: userType,
) : void => {
    console.log (`User Id is ${id}, name is ${user.name} and age is ${user.age}`)
}

const sayHello = (user: userType) => {
    console.log (`Hello ${user.age>50 ? "Sir" : "Mr."} ${user.name}`)
}
