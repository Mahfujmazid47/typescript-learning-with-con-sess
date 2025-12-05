type TPerson = {
    name: string;
    age: number;
    city: string,
    married: boolean
}

const person: TPerson = {
    name: "Ash",
    age: 24,
    city: "Dinajpur",
    married: true
}

// console.log(person)

const numbers: number[] = [1, 2, 3];
const names: string[] = ["a", "b", "c"];


// const person1: [string, number] = ["Mahfuj", 22];


// enum ROLE {
//     Admin, 
//     User
// }

// const userRole : ROLE = ROLE.Admin;

// console.log(userRole)





// * --> Generic 
function fName<T>(value: T): T | undefined {
    return value;
}

let result = fName<string>('name');
let result1 = fName<number>(2);
// console.log(result, result1)






// 6th Problem

interface Book {
    title: string
    author: string
    publishedYear: number
    isAvailable: boolean
}


const printBookDetails = (obj: Book) => {
    const title = obj.title;
    const author = obj.author;
    const publishedYear = obj.publishedYear;
    const availability = obj.isAvailable;

    if (availability === false) {
        console.log(`Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: No`)
    }

    else {
        console.log(`Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: Yes`)
    }
}

// const myBook: Book = {
//   title: 'The Great Gatsby',
//   author: 'F. Scott Fitzgerald',
//   publishedYear: 1925,
//   isAvailable: true,
// };

// const myBook2: Book = {
//   title: 'The Great Gatsby',
//   author: 'F. Scott Fitzgerald',
//   publishedYear: 1925,
//   isAvailable: false,
// };

// printBookDetails(myBook);
// printBookDetails(myBook2);








// 7th Problem

const getUniqueValues = <T>(arr1: Array<T>, arr2: Array<T>) => {
    const result = [];

    for (let i = 0; i < arr1.length; i++) {
        const num1 = arr1[i]; // 1, 2, 3, 4, 5

        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            
        }

        for (let j = 0; j < arr2.length; j++) {
            const num2 = arr2[j]; // 3, 4, 5, 6, 7

        }
    }
    // return result;
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));






















//node --watch src/index.ts  OR  cd src -->  THEN node --watch index.ts

// tsc i -g typescript           --> Globally installed

// tsc --init           --> tsconfig.json file 

