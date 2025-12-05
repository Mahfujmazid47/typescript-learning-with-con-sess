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

// const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails());

// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());










// 4th Problem

const filterByRating = (arr) => {

    const result = [];

    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            const obj = arr[i];
            if (obj.rating >= 4) {
                result.push(obj);
            }
        }
    }

    return result;
}

// const books = [
//     { title: 'Book A', rating: 4.5 },
//     { title: 'Book B', rating: 3.2 },
//     { title: 'Book C', rating: 5.0 },
// ];

// console.log(filterByRating(books));








// 5th Problem

const filterActiveUsers = (arr) => {

    const result = [];

    if(Array.isArray(arr)){
        for (let i = 0; i < arr.length; i++) {
            const obj = arr[i];
            if(obj.isActive === true){
                result.push(obj);
            }
        }
    }

    return result;
}


// const users = [
//   { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
//   { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
//   { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
// ];

// console.log(filterActiveUsers(users));















// 7th Problem

const getUniqueValues = (arr1, arr2) => {
    const result = [];

    
}