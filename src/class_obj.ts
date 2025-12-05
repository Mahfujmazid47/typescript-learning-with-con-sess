// The four pillars of Object-Oriented Programming (OOP) are 
// ==> abstraction, 
// ==> encapsulation, 
// ==> inheritance, and 
// ==> polymorphism. 
// 
// These principles help organize code, manage complexity by allowing objects to interact in a structured way, and enable developers to build flexible and reusable software.  


class Pizza {
    toppings: string;
    size: number;

    constructor(toppings: string, size: number) {
        this.toppings = toppings;
        this.size = size;
    }

    serve() {
        return ` ${this.toppings} ${this.size}`
    }
}

const pizza = new Pizza("chesee", 10);
const pizza1 = new Pizza("margerita", 12);
console.log(pizza1.serve());
console.log(pizza.serve());