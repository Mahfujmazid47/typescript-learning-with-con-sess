// নীচে TypeScript-এর Primitive এবং Non-Primitive (Reference) Types একদম পরিষ্কারভাবে, বাংলায়, আপনার নিয়ম অনুযায়ী (where/how/importance/sequence + summary) সাজিয়ে দিচ্ছি।
// সব কোড Roboto, bold, green থাকছে।

// ✅ 1. Primitive Types (মূলধারার টাইপ – immutable, copy হয় value হিসেবে)

// TypeScript-এ Primitive মানে যে টাইপগুলো directly value ধরে, reference নয়।
// এগুলো immutable এবং অনেক দ্রুত প্রসেস হয়।

// 🔵 Primitive Types:
// 1️⃣ number

// ব্যবহার: গণনা, API numeric data, ID, price ইত্যাদি।

// উদাহরণ:

// const price: number = 199;
// const pi: number = 3.1416;
// const age: number = 22;

// 2️⃣ string

// ব্যবহার: নাম, মেসেজ, API string, UI text।

// উদাহরণ:

// const userName: string = "Mahfuj";
// const message: string = `Hello TypeScript`;

// 3️⃣ boolean

// ব্যবহার: conditional logic, state control, flags, API status।

// const isLoggedIn: boolean = true;
// const isAdmin: boolean = false;

// 4️⃣ null

// ব্যবহার: যখন value নেই কিন্তু ইচ্ছাকৃতভাবে empty রাখা হয়।

// const data: null = null;

// 5️⃣ undefined

// ব্যবহার: value assign না করলে default undefined।

// let x: undefined = undefined;

// 6️⃣ symbol

// ব্যবহার: unique keys তৈরি করতে (অ্যাডভান্স প্রজেক্টে)।

// const id1: symbol = Symbol("id");
// const id2: symbol = Symbol("id");

// 7️⃣ bigint

// ব্যবহার: বড় সংখ্যা (Number limit এর বাইরে)।

// const big: bigint = 12345678901234567890n;

// 8️⃣ any (Primitive নয়, কিন্তু পরীক্ষায় আসে বলে যোগ করছি)

// ব্যবহার: পান্ডেমিক টাইপ — avoid করা উচিত।

// let data: any = "Hello";
// data = 20;

// 🔴 Primitive Types summary table
// Type	উদাহরণ	কখন ব্যবহার করবেন
// number	10	calculation
// string	"Hi"	text
// boolean	true	conditions
// null	null	empty state
// undefined	undefined	uninitialized
// symbol	Symbol()	unique keys
// bigint	123n	বড় সংখ্যা
// ✅ 2. Non-Primitive (Reference) Types

// এগুলো reference হিসেবে stored হয়, অর্থাৎ copy করলে একই memory location share করে।
// এই কারণে এগুলো mutable।

// 🟢 Non-Primitive Types:
// 1️⃣ object

// সবচেয়ে important.
// ব্যবহার: user data, product, config, settings, API response।

// const user: { name: string; age: number } = {
//   name: "Mahfuj",
//   age: 22,
// };

// 2️⃣ array

// list বা collection রাখার জন্য।

// const numbers: number[] = [1, 2, 3];
// const names: string[] = ["a", "b", "c"];


// Generic version:

// const nums: Array<number> = [10, 20, 30];

// 3️⃣ tuple

// Array-এর মতো, কিন্তু fixed number of items + fixed টাইপ।

// const person: [string, number] = ["Mahfuj", 22];

// 4️⃣ function

// function নিজেও object type।

// const greet: (name: string) => string = (name) => {
//   return `Hello ${name}`;
// };

// 5️⃣ class

// OOP structure। Component, Model, Service বানাতে ব্যবহার হয়।

// class User {
//   constructor(public name: string, public age: number) {}
// }

// const u1 = new User("Mahfuj", 22);

// 6️⃣ enum

// Fixed small set of values → যেমন: role, status ইত্যাদি।

// enum Role {
//   Admin,
//   User,
//   Guest,
// }

// const userRole: Role = Role.Admin;


// 7️⃣ void 
//  jokhon kono function kono kisu return korbe na but console.log korte pare


// 8️⃣ object Literal vs Object type
// const product = {
//   name: "Laptop",
//   price: 50000,
// };


// Type defined:

// type Product = {
//   name: string;
//   price: number;
// };

// const p1: Product = { name: "PC", price: 40000 };

// 🔴 Primitive vs Non-Primitive (মূল পার্থক্য)
// Feature	Primitive	Non-Primitive
// Store	Value	Reference
// Mutable	No	Yes
// Example	number, string	object, array
// Copy	আলাদা value	একই reference share
// 🟣 Where & How & Importance & Sequence
// ⭐ Where to use:

// Primitive: basic value, small data, simple logic।

// Non-Primitive: API response, user data, list, function, class।

// ⭐ How to use:

// Primitive = direct assign

// Non-Primitive = structure, objects, arrays, types, interfaces।

// ⭐ Importance:

// Primitive ensures data integrity

// Non-Primitive ensures complex application building

// ⭐ Sequence to learn:

// number, string, boolean

// null / undefined

// array

// object

// tuple

// function

// class

// enum

// 📌 Full Recall Summary (Ultra-Short Notes)
// Primitive

// number

// string

// boolean

// null

// undefined

// symbol

// bigint

// Non-Primitive

// object

// array

// tuple

// function

// class

// enum

// Key differences

// Primitive → value based

// Non-Primitive → reference based