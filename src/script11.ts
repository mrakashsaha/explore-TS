/*function drawRactrangle (options : {width: number, length:number}) {
    let width = options.width;
    let length = options.length;
}


drawRactrangle({width: 46, length: 546})

*/

import { Virat } from "./classes/Virat.js";
import { IsPlayer } from "./interface/isPlayer.js";

// Above task we can do with interface.

interface RectangleOptions {
    width: number,
    length: number,
    height: number,
}


function drawRactrangle (options : RectangleOptions) {
    let width = options.width;
    let length = options.length;
}




drawRactrangle ({
    width: 40, 
    height: 20,
    length: 40,
})



let v1 : IsPlayer;

v1 = new Virat("akash", 45, "India")

console.log(v1.country)