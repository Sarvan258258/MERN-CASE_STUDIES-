let firstName : string = "Sarvan";
let score : number = 50;

console.log("Fist Name : ", firstName);
console.log("Score : ", score);

let globalNum = 41;

class Numbers {
    numVal : number = 13;
    static sval = 10;

    storeNum() : void {
        let localNum = 14;
        console.log("Local Num : ", localNum);
    }
}

console.log("Global Number : ", globalNum);
console.log("Static Number : ", Numbers.sval);
const numbers : Numbers = new Numbers();
console.log("Class Scope : ", numbers.numVal);
numbers.storeNum();

const city : string = "Vizag";
const temperature : number = 28;
const isRaining : boolean = false;

function weatherReport(cityName : string, temp: number, isRaining : boolean) : void {
    console.log(`In ${cityName}, it is ${temp}C. Is it Raining : ${isRaining}.`)
}

weatherReport(city, temperature, isRaining);