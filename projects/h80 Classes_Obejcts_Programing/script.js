// let obj = {
//     a: 1,
//     b: "Raj"
// }

// console.log(obj)

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

class Animal{
    constructor(name){
        this.name = name
        console.log("object is created...")
    }

    eats(){
        console.log("Kha rha hoon")
    }
jumps(){
    console.log("Kood rha hoon")
}
}

class Lion extends Animal {
    constructor(name){
        super(name)
        console.log("Objectg is created and he is a Lion...")
    }

    eats(){
        console.log("Kha rha hoon Roar")
    }
}

let a = new Animal("Bunny");
console.log(a)

let l = new Lion("Shera")
console.log(l)