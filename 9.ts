// arrays 

//  typeScript has a specific syntax for typing arrays.

//  1. Basic Array Type 

// Way 1 (most common) 

let numbers:number[]=[1,2,3,]

// Way 2 (generic form) 

let numbers1: Array<number> = [1, 2, 3];

// 2. String Array 

let names: string[] = ["zoheb", "ibrahim", "kaif "];

// 3. Mixed Types (Union Arrays) 
let values: (number | string)[] = [1, "two", 3];

// 4. Array of Objects
type User = {
  id: number;
  name: string;
};

let users: User[] = [
  { id: 1, name: "zoheb" },
  { id: 2, name: "uddin" }
];

// 5. Readonly Arrays (cannot modify) 

const numbers3: readonly number[] = [1, 2, 3];

numbers[0] = 10;  // ❌ Error
numbers.push(4);  // ❌ Error

// 6. Tuple (Fixed-length array with fixed types)

let user2: [string, number] = ["zoheb", 20];
// First item must be a string

// Second item must be a number
// ----------------------

// 7. Array Methods Work Normally 

let nums: number[] = [1, 2, 3];

nums.push(4);    // ✔ OK
nums.push("hi"); // ❌ Error
