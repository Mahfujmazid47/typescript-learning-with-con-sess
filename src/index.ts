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





// * --> Generic 
function fName<T>(value: T): T | undefined {
    return value;
}

let result = fName<string>('name');
let result1 = fName<number>(2);
// console.log(result, result1)



// 1st problem
function formatValue(value: any) {
    if (typeof value === "string"){
        const result = value.toUpperCase();
        return result;
    };

    if(typeof value=== "number"){
        const result = value * 10;
        return result;
    }

    if(typeof value === "boolean"){
        if(value === true){
            return false;
        }

        if(value === false){
            return true;
        }
    }
}

// console.log(formatValue('hello'));
// console.log(formatValue(5));
// console.log(formatValue(false));




// 2nd problem
function getLength (value : any) {
    if(typeof value === "string"){
        return value.length;
    }

    if(Array.isArray(value)){
        return value.length
    }
}


// console.log(getLength('typescript'));
// console.log(getLength([10, 20, 30, 40,50]));






// 3rd Problem
















//node --watch src/index.ts  OR  cd src -->  THEN node --watch index.ts

// tsc i -g typescript           --> Globally installed

// tsc --init           --> tsconfig.json file 

