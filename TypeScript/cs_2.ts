let favoriteFruit : string = "Banana";
console.log("My Favorite Fruit is ", favoriteFruit);

function printDouble(val : number) : void {
    console.log("Double : ", val * 2);
}

printDouble(2);
printDouble(4);

class Person {
    private name : string;
    constructor(name : string) {
        this.name = name;
    }

    getName() : void {
        console.log(`My name is ${this.name}.`);
    }
}


const person1 : Person = new Person("sarvan");
person1.getName();
