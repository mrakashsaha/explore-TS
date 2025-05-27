/*function drawRactrangle (options : {width: number, length:number}) {
    let width = options.width;
    let length = options.length;
}


drawRactrangle({width: 46, length: 546})

*/
import { Virat } from "./classes/Virat.js";
function drawRactrangle(options) {
    let width = options.width;
    let length = options.length;
}
drawRactrangle({
    width: 40,
    height: 20,
    length: 40,
});
let v1;
v1 = new Virat("akash", 45, "India");
console.log(v1.country);
