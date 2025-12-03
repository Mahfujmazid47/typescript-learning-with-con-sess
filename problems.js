// 1st problem
function formatValue(value) {
    if (typeof value === "string") {
        const result = value.toUpperCase();
        return result;
    };

    if (typeof value === "number") {
        const result = value * 10;
        return result;
    }

    if (typeof value === "boolean") {
        if (value === true) {
            return false;
        }

        if (value === false) {
            return true;
        }
    }
}

// console.log(formatValue('hello'));
// console.log(formatValue(5));
// console.log(formatValue(false));




// 2nd problem
function getLength(value) {
    if (typeof value === "string") {
        return value.length;
    }

    if (Array.isArray(value)) {
        return value.length
    }
}


// console.log(getLength('typescript'));
// console.log(getLength([10, 20, 30, 40,50]));










// 3rd Problem

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        // "Name: [name], Age: [age]"
        const result = `'Name: ${this.name}, Age: ${this.age}'`;
        return result
    }
}

const person1 = new Person('John Doe', 30);
console.log(person1.getDetails());

const person2 = new Person('Alice', 25);
console.log(person2.getDetails());