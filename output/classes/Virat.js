export class Virat {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} is ${this.age} years old and playing for ${this.country}`);
    }
}
