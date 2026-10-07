function generateError(msg?: string) {
  throw new Error(msg);
}

generateError();
generateError("An error");

//
type Userr = {
  name: string;
  age: number;
  role?: "admin" | "guest";
};

// nullish coalescing
let input = "";
const didProvideInput1 = input || false; // op: false
const didProvideInput2 = input ?? false; // op: ""
