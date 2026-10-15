type StringArray = string[];

// type ElementType<T extends any[]> = T[number];

// type Example1 = ElementType<StringArray>;

const text = "hello";

// type Example2 = ElementType<typeof text>;

type GetElementType<T> = T extends any[] ? T[number] : never;

type Example1 = GetElementType<StringArray>;
type Example2 = GetElementType<typeof text>;

type FullnameOrNothing<T> = T extends { firstName: string; lastName: string }
  ? string
  : never;

function getFullName<T extends object>(person: T): FullnameOrNothing<T> {
  if (
    "firstName" in person &&
    "lastName" in person &&
    person.firstName &&
    person.lastName
  ) {
    return `${person.firstName} ${person.lastName}` as FullnameOrNothing<T>;
  }
  throw new Error("no first name or last name found!!");
}

const name1 = getFullName({});
const name2 = getFullName({ firstName: "Suraj" });
const name3 = getFullName({ firstName: "Suraj", lastName: "Maru" });
