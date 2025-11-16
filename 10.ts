// TypeScript Union Types 

// Basic Union Type 


let value:number | String;


value = 10;      // ✔ OK
value = "hello"; // ✔ OK
// value = true;    // ❌ Error

// Example: function that accepts number or string


function printId(id: number | string) {
  console.log("ID:", id);
}

// Type Narrowing with Union Types ===>Because union types can be many types, you often use checks:

function formatId(id: number | string): string {
  if (typeof id === "number") {
    return id.toFixed(2);  // number-specific method
  }

  return id.toUpperCase(); // string-specific method
}

// Union Types in Arrays 

let data: (number | string)[] = [1, "apple", 2, "banana"];


// Union Types in Type Aliases 

type Status = "success" | "error" | "loading";

let state: Status = "success"; // ✔ OK
state = "failed";              // ❌ Error

// Union Types with Objects 
type Dog = { bark: () => void };
type Cat = { meow: () => void };

function pet(animal: Dog | Cat) {
  if ("bark" in animal) {
    animal.bark();
  } else {
    animal.meow();
  }
// }
//  Why Union Types Are Useful

// Feature	                    |            Benefit
// -----------------------------------------------------------
// Flexible	                    |        One variable can support multiple types

// Safe	                        |        TypeScript checks each case

// Works with narrowing         |      	Less errors at runtime

// Great with string literals   |       Helps make enums and strict values