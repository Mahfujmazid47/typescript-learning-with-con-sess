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


const person1: [string, number] = ["Mahfuj", 22];


// enum ROLE {
//     Admin, 
//     User
// }

// const userRole : ROLE = ROLE.Admin;

// console.log(userRole)

//node --watch src/index.ts  OR  cd src -->  THEN node --watch index.ts

// tsc i -g typescript           --> Globally installed 

// tsc --init           --> tsconfig.json file 

