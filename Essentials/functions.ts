// returned value type from this funciton.
function add(a: number, b: number): number {
  return a + b;
}

// void type.
function log(message: string): void {
  console.log(message);
}

// never type.
function logAndThrow(errorMessage: string): never {
  console.log(errorMessage);
  throw new Error(errorMessage);
}

//
const logMsg = (msg: string) => {
  console.log(msg);
};

// Function as a type.
function performJob(cb: (message: string) => void) {
  // ..
  cb("job done!");
}

performJob(log);

//
type User = {
  name: string;
  age: number;
  greet: () => string;
};

let user3: User = {
  name: "Suraj",
  age: 21,
  greet() {
    console.log("hi");
    return this.name;
  },
};

user3.greet();
