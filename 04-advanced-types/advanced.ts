//  index types
type Storage = {
  [props: string]: boolean | number;
};

// same as above.
let someObj: Record<string, number | boolean>;

let store: Storage = {};

store.id = 5;
store.isOpen = false;
// store.name = "Suraj";

// as const
let roles = ["admin", "guest", "editor"] as const;

const firstRole = roles[0];

// satisfies keyword

const dataEntries = {
  entrie1: 0.2,
  entrie2: 0.4,
} satisfies Record<string, number>;

dataEntries.entrie1;
