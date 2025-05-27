/*function drawRactrangle (options : {width: number, length:number}) {
    let width = options.width;
    let length = options.length;
}


drawRactrangle({width: 46, length: 546})

*/

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



