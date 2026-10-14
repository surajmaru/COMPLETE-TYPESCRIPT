let names: Array<string> = ["Suraj", "Jay"];

type Store<T> = {
  [prop: string]: T;
};

let store: Store<string | boolean> = {};
store.name = "Suraj";
store.isNew = true;

let nameStore: Store<string> = {};
nameStore.name = "Suraj";
// nameStore.number = 2;

function merge<T, U>(a: T, b: U) {
  return [a, b];
}

const ids = merge(1, "2");
// const ids = merge<number>(1, 2);

function mergeObj<T extends object, U extends object>(a: T, b: U) {
  return { ...a, ...b };
}

const merged = mergeObj({ name: "Suraj" }, { age: 22 });
console.log(merged);

//
class User<T> {
  constructor(public id: T) {}
}

const user = new User("hi");
user.id;
