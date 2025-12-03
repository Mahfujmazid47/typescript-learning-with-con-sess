// ঠিক আছে, এবার আমি আপনাকে TypeScript-এর Advanced & Most Important Types/Features খুব সংক্ষিপ্ত, পরিষ্কার, মনে রাখার মতোভাবে দেবো —
// (where + how + importance + sequence + examples + summary)
// এবং সব কোড Roboto bold green থাকবে।

// ✅ 1. never

// যে ফাংশন কখনো value return করে না (infinite loop / error throw)।

// const throwErr = (msg: string): never => {
//   throw new Error(msg);
// };


// Where: error handling
// Importance: unreachable code detect
// Sequence: পরে শিখবেন, advanced

// ✅ 2. unknown

// যে কোনো টাইপ আসতে পারে, কিন্তু direct ব্যবহার করা যায় না (safe any)।

// let data: unknown = "Hello";
// if (typeof data === "string") {
//   console.log(data.toUpperCase());
// }


// Where: API response, dynamic value
// Importance: type safety
// Sequence: any → unknown



// ⚡ Other Types
// ✅ 4. Literal Types

// Value নিজেই টাইপ হয়।

// let direction: "left" | "right" = "left";


// Where: fixed options
// Importance: reduce bugs

// ✅ 5. Optional (?)

// property বা parameter হয়ও পারে, নাও হতে পারে।

// const user: { name: string; age?: number } = { name: "Mahfuj" };


// Where: API optional fields
// Importance: flexible model

// ✅ 6. Function Type

// ফাংশন কী রিটার্ন করবে এবং parameter কী হবে।

// const sum: (a: number, b: number) => number = (a, b) => a + b;


// Where: callbacks, events
// Importance: error-free functions

// ✅ 7. Union (|)

// একটি ভেরিয়েবল একাধিক টাইপ নিতে পারে।

// let id: number | string = 10;
// id = "A12";

// ✅ 8. Intersection (&)

// একাধিক টাইপকে merge করে।

// type A = { name: string };
// type B = { age: number };
// type C = A & B;

// const person: C = { name: "Mahfuj", age: 22 };

// ✅ 9. Type Alias

// টাইপের shortcut নাম।

// type User = { name: string; age: number };

// ✅ 10. Generic

// Reusable type → dynamic type handle করে।

// const wrap = <T>(value: T): T => value;
// const result = wrap<number>(10);

// ✅ 11. Generic + extends

// Generic কে restrict করতে।

// const display = <T extends { name: string }>(obj: T) => {
//   console.log(obj.name);
// };

// ✅ 12. Rest

// বহু parameter একত্রে ধরে।

// const total = (...nums: number[]) => nums.reduce((a, b) => a + b);

// ✅ 13. Spread

// object বা array কে expand করা।

// const obj = { a: 1 };
// const newObj = { ...obj, b: 2 };

// ✅ 14. Ternary

// condition short form।

// const age = 18;
// const status = age >= 18 ? "Adult" : "Minor";

// ✅ 15. Nullish Coalescing (??)

// null বা undefined হলে fallback দেয়।

// const name = userInput ?? "Guest";

// ✅ 16. Optional Chaining (?.)

// property নেই হলে error throw না করে undefined দেয়।

// const city = user?.address?.city;

// ✅ 17. Nullable

// টাইপ nullable হলে:

// let value: string | null = null;

// 🧩 Utility Types (Most Useful)
// ✅ 18. Partial<T>

// সব properties optional করে দেয়।

// type User = { name: string; age: number };
// const u: Partial<User> = { name: "Mahfuj" };

// ✅ 19. Record<K, T>

// একটি object তৈরি করে যেখানে keys একই টাইপের এবং values একই টাইপের।

// const marks: Record<string, number> = {
//   math: 90,
//   physics: 88,
// };

// ✅ 20. Pick<T, Keys>

// টাইপ থেকে শুধুমাত্র কিছু property নেয়।

// type User = { name: string; age: number; email: string };
// type UserInfo = Pick<User, "name" | "email">;

// ✅ 21. Omit<T, Keys>

// টাইপ থেকে property বাদ দেয়।

// type WithoutEmail = Omit<User, "email">;

// ✅ 22. Awaited<T>

// Promise resolve type বের করতে।

// type Result = Awaited<Promise<string>>; // string

// 📌 Where + How + Importance + Sequence
// ⭐ Sequence (আপনি এভাবে শিখলে clear হবে)

// Union

// Literal

// Optional

// Function types

// Alias

// Intersection

// Generic

// Rest, Spread

// Nullish coalescing

// Optional chaining

// Utility types (Partial → Pick → Omit → Record → Awaited)

// 📌 Full Recall Summary (Ultra Short)
// Core Types

// never → no return

// unknown → safe any

// void → no value returned

// Other Types

// Literal → fixed values

// Optional → ?

// Function → (a: number) => number

// Union → |

// Intersection → &

// Alias → type

// Generic → <T>

// Generic extends → constraints

// Rest → ...

// Spread → ...

// Ternary → ? :

// Nullish → ??

// Optional chaining → ?.

// Nullable → string | null

// Utility Types

// Partial → সব optional

// Pick → কিছু নেয়

// Omit → কিছু বাদ

// Record → key/value map

// Awaited → Promise result