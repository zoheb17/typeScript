// object user 


const user={
    name:"zoheb",
    age:21
}
// 1. Using any for objects

// This turns off all type safety

interface User {
  name: string;
  age: number;
}

let user1: User = { name: "John", age: 20 };