/*
class PlayerX {
    private name: string;
    readonly age: number;
    public country: string;

    constructor (n:string, a: number, c: string) {
        this.name = n;
        this.age = a;
        this.country = c;
    }


    play() {
        console.log(`${this.name} from ${this.country} is playing now`);
    }
}


const playerX1 = new PlayerX("Akash", 54, "BD");
const playerX2 = new PlayerX("Priyanka", 54, "BD");


const playersX : PlayerX [] = [];

console.log(playerX1.name)

*/


class MyPlayer {
    constructor (
        public name : string,
        private age: number,
        readonly country: string,
    ) {}
}


const myp1 = new MyPlayer ("Akash", 45, "Bangladesh")

console.log(myp1.name);
console.log(myp1.age);  //beacuse private we can't show this outside of the class
console.log(myp1.country)  // we can show beccause it is only readonly but cannot change the value outside of the class