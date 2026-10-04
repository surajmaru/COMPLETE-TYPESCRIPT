let hobbies = ["sports", "cooking"];
// hobbies.push(10); // can't do

//
// let users: (string | number)[]; // array of strings or an array of numbers.
// Both are logically the same.
let users: Array<string | number>; // Generic type.

users = [1, "suraj"];
users = [1, 2];
users = ["jay", "suraj"];

// "Tuples" Array of fixed length with defined types.
let possibleResults: [number, number]; // [1, -1]
possibleResults = [1, -1];
// possibleResults = [5, 10, 12]; // Rejected

// Object type definition.
let user: {
  name: string;
  age: number | string;
  hobbies: string[];
  role: { description: string; id: number };
} = {
  name: "suraj",
  age: 23,
  hobbies: ["cycling", "embedded stuff"],
  role: {
    description: "Frontend engineer",
    id: 1,
  },
};

//
let val: {} = "something";
// let val: {} = 12;
// let val: {} = {};
// let val: {} = true;
// This means "any" value accepted which is not undefined or null.

// let val: {} = null; // wont work
// let val: {} = undefined; // wont work

//
// const someObj = {
//   0: "suraj",
//   1: 22,
// };
let data: Record<string, number | string>;
// object with key,value pair.
data = {
  entry1: "suraj",
  entry2: 21,
  //   entry3: true,
};
