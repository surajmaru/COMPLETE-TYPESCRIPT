// An enum (short for enumeration) is a special feature in TypeScript that allows you to define a set of named constants.

enum Role {
  Admin, // 0
  Editor, // 1
  Guest, // 2
}

// We can assign manually as well.
// enum Role {
//   Admin = 1,
//   Editor, // 2
//   Guest, // 3
// }

let userRole: Role = 0; // 0 => Admin, 1 => Editor, 2 => Guest

// ...

userRole = Role.Guest;

// Literal types.
let userRole2: "admin" | "editor" | "guest" = "admin";
// ..
userRole2 = "editor";

let possibleResults2: [1 | -1, number];
possibleResults2 = [1, -1];
// possibleResults2 = [3, -1]; // Wont work.
