type TestType = {
  readonly a: string;
  b: number;
  c?: boolean;
};

const test: TestType = {
  a: "a",
  b: 1,
  c: true,
};

test.b++;

type ArrayType = ["1", 2, 3];

type Item = ArrayType[number];

type GroceryList = {
  readonly [fruit: string]: number;
};

type RemoveReadonly<T> = {
  -readonly [P in keyof T]: T[P];
};

const groceryList: RemoveReadonly<GroceryList> = {
  apple: 1,
  banana: 2,
  orange: 3,
};

groceryList.apple = 2;

type GroceryItem = keyof typeof groceryList;
