// better way to type function 

function sayHello(name: string): void {
  console.log("Hello " + name);
}
sayHello("zoheb");

// arrow function 
const multiply = (x: number, y: number = 1): number => x * y;

// Use Generics for Reusable Logic

const identity = <T>(value: T): T => value;

identity<number>(10);
identity<string>("hello");