import { IsPlayer } from "../interface/isPlayer.js";

export class Virat implements IsPlayer {
    name: string;
    age: number;
    country: string;


    constructor(n: string, a: number, c: string) {
        this.name = n;
        this.age = a;
        this.country = c;
    }

    play() {
        console.log(`${this.name} is ${this.age} years old and playing for ${this.country}`)
    }

}