//  Interface

// Basic Interface

interface User {
  id: number;
  name: string;
}

const user: User = {
  id: 1,
  name: "Alice"
};


// 2. Optional Properties


interface Person {
  name: string;
  age?: number;
}

//  3. Readonly Properties

interface Car {
  readonly model: string;
  year: number;
}
const c: Car = { model: "BMW", year: 2020 };
c.model = "Audi"; // ❌ Error


// 4. Interface with Methods 


interface Animal {
  name: string;
  sound(): void;
}

const dog: Animal = {
  name: "Dog",
  sound() {
    console.log("Woof");
  }
};

// 5. Interface for Function Types       