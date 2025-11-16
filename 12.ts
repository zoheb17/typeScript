// TypeScript Enums 

// 1. Numeric Enum (Default) 

enum Direction {
    up,
    down,
    left,
    right
}

let move : Direction= Direction.up;

// Values automatically become numbers: 
"Up = 0"
"Down = 1"
"Left = 2"
"Right = 3"

// 2. String Enum 
// String enums are more readable and often preferred.

enum Colors {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}
let c: Colors = Colors.Green;


// 3. Mixed Enum
// (Not commonly used, but allowed)

enum Result {
  Pass = "PASS",
  Fail = 0
}

// 4. Enum in Objects / Logic 
enum Role {
  Admin,
  User,
  Guest
}

function check(role: Role) {
  if (role === Role.Admin) {
    console.log("Full access");
  }
}

// 5. Reverse Mapping (Numeric Enums Only)

enum Fruit {
  Apple,
  Banana
}

console.log(Fruit.Apple); // 0
console.log(Fruit[0]);    // "Apple"





// 6. Const Enums (compiler optimized)

const enum Size {
  Small,
  Medium,
  Large
}

let s = Size.Small;

// Compiles to simple numbers

// More efficient, no extra code

// When to Use Enums ----


// ✔ Multiple fixed options (roles, status, categories)
// ✔ Better readability than plain strings
// ✔ Prevent invalid values