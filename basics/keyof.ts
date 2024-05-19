interface Person {
  name: string;
  age: number;
  city: string;
}

type PersonKeys = keyof Person; // "name" '| "age" | "city"

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person: Person = {
  name: 'Michail',
  age: 10,
  city: 'Heraklion',
};

const personName: string = getProperty(person, 'name');

type ReadOnlyPerson = { readonly [P in keyof Person]: Person[P] };
const readOnlyPerson: ReadOnlyPerson = { name: 'Michail', age: 30, city: 'Heraklion' };
readOnlyPerson.name = ' ';
