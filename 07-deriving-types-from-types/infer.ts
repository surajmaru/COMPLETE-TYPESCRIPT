function add(a: number, b: number) {
  return a + b;
}

type AddFn = typeof add;
type AddFnReturnedValueType<T> = T extends (...args: any[]) => infer RV
  ? RV
  : never;

type ReturnedValueType = AddFnReturnedValueType<AddFn>;
