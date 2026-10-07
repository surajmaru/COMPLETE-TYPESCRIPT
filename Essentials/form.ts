const inputEl = document.getElementById("user-name") as HTMLInputElement;

// const inputEl = document.getElementById("user-name"); // This variable will yeild HTMLElement | null.

// const inputEl = document.getElementById("user-name")!; // now this contains only the "HTMLelement" and not "null".

// if (!inputEl) {
//   throw new Error("Element not found!!");
// }

console.log(inputEl?.value);
