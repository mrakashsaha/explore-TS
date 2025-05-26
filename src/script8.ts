class Player {
    name: string;
    age: number;
    country: string;

    constructor (n:string, a: number, c: string) {
        this.name = n;
        this.age = a;
        this.country = c;
    }


    play() {
        console.log(`${this.name} from ${this.country} is playing now`);
    }
}


const player1 = new Player("Akash", 54, "BD");
const player2 = new Player("Priyanka", 54, "BD");

player1.play();
player2.play();

const players : Player [] = [];

players.push(player1)
players.push(player2)

console.log(players)


