export class SportsMan {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} is ${this.age} years old and playing for ${this.country}`);
    }
}
