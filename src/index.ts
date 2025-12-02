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

//node --watch src/index.ts  OR  cd src -->  THEN node --watch index.ts

// tsc i -g typescript           --> Globally installed 

// tsc --init           --> tsconfig.json file 

