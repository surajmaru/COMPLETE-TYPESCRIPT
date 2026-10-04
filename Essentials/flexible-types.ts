// "any" type
let age: any = 34;

// ..

age = "34";
age = true;
age = {};
age = [];

// "union" types.
let age2: string | number = 23;

age2 = 23;
age2 = "23";

// age2 = []; // not allowed
// age2 = true; // not allowed
