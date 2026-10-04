// explicitly setting types to a variable.
let userName: string;

let userAge = 38;

// ..

userName = "Suraj";
// userAge = "23";

function add(a: number, b = 5) {
  return a + b;
}

add(10);
// add("10"); // will not work
add(10, 6);
// add(10, "6"); // Not allowed too
