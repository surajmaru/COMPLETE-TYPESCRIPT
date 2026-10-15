type User = {
  name: string;
  age: number;
};

type UserKeys = keyof User;

let validKey: UserKeys;

validKey = "name";
validKey = "age";

function getProp<T extends object, U extends keyof T>(obj: T, key: U) {
  const val = obj[key];
  if (val === undefined || val === null) {
    throw new Error("error");
  }
  return val;
}

const user = { name: "Suraj", age: 22 };
const val = getProp(user, "age");

const data = { id: 1, isStored: false, value: [0, 1, 2, 3] };
const isStored = getProp(data, "isStored");
