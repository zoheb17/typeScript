// TypeScript Tuples

// Basic Tuple

let person:[string,number]=["zoheb", 21]



// 2. Optional Tuple Elements   

let data1: [number, string?];

data = [1];
data = [1, "hello"];

// 3. Tuple with Rest Elements  

let value1: [string, ...number[]];

values = ["sum", 1, 2, 3];   // ✔ OK
values = ["sum"];            // ✔ OK
values = [1, 2, 3];          // ❌ Error


// 4. Readonly Tuples 

const point: readonly [number, number] = [10, 20];

point[0] = 5; // ❌ Cannot assign


// 5. Tuple Types in Functions 

function getUser(): [string, number] {
  return ["John", 30];
}

const [name1, age] = getUser();

// 6. Named Tuple Elements (TS 4.0+) 

// Makes tuples easier to understand. 

type UserTuple = [name: string, age: number];

const user4: UserTuple = ["Bob", 40];

// Summary Table

// Feature                              	Tuple	              Array

// Fixed length	                           ✔ Yes	             ❌ No

// Fixed types per index	               ✔ Yes	             ❌ No

// Can be readonly	                       ✔ Yes	             ✔ Yes

// Great for returning multiple values    ✔ Yes                  ✔ OK