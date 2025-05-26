export class SportsMan {
    constructor (
        public name: string,
        private age: number,
        readonly country: string,
    ) {}


    play () {
        console.log (`${this.name} is ${this.age} years old and playing for ${this.country}`)
    }
}