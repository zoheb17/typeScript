// A type alias in TypeScript lets you create a custom name for any type.
// It’s one of the simplest and most useful features in TypeScript.

// Type Aliases

// We've been using object types and union types by writing them directly in type annotations. This is convenient, but it's common to want to use the same type more than once and refer to it by a single name.

// A type alias is exactly that - a name for any type. The syntax for a type alias is.

type Point = {

x: number;

y: number;

};

// Exactly the same as the earlier example

function printCoord(pt: Point) {

console.log("The coordinate's x value is" + pt.x);

} console.log("The coordinate's y value is" + pt.y);

// Reference

printCoard({x: 180, y: 180});

// You can actually use a type allas to give a name to any type at all, not just an object type. For example, a type alias can name a union