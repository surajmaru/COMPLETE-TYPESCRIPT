// Function overloading in TypeScript allows you to define multiple ways a single function can be called by providing multiple call signatures (parameter types and return types) followed by a single implementation.

function getLenght(val: any[]): number;
function getLenght(val: string): string;

function getLenght(val: string | any[]) {
  if (typeof val === "string") {
    const numberOfWords = val.split(" ").length;
    return `${numberOfWords} Words`;
  }

  return val.length;
}

const numOfWords = getLenght("wow this works");
numOfWords.length;
const numItems = getLenght(["one", "two"]);
