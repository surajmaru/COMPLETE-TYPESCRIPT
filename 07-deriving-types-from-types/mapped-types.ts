type Operations = {
  readonly add: (a: number, b: number) => number;
  readonly sub: (a: number, b: number) => number;
};

type Results<T> = {
  -readonly [Key in keyof T]?: number;
};

let mathOperations: Operations = {
  add(a: number, b: number) {
    return a + b;
  },
  sub(a: number, b: number) {
    return a - b;
  },
};

let mathResults: Results<Operations> = {
  add: mathOperations.add(1, 2),
  sub: mathOperations.sub(2, 2),
};

mathResults.add = 10;
