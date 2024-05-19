/*
Record <Keys, Type> 
Constructs an object type whose property keys are Keys and whose property values are Type. 
This utility can be used to map the properties of a type to another type.

Where to use Record 
Creating a dictionary or lookup table - The Record type is 
often used to create a dictionary or lookup table with a specific set of keys and values. 
This can be useful when you need to store a collection of data and look up the data by a specific key. For example:


*/
interface User {
  name: string;
  email: string;
}

const users: Record<string, User> = {
  user1: { name: 'Alice', email: 'alice@example.com' },
  user2: { name: 'Bob', email: 'bob@example.com' },
  user3: { name: 'Charlie', email: 'charlie@example.com' },
};

const aRecord: Record<string, number> = {
  name: 1,
  //   sykelakis: '21', expects the value to be a key.
};

type StartShip = {
  name: string;
  enableJump: boolean;
};

const starShips: Record<string, StartShip>[] = [
  {
    Explorer1: { enableJump: true, name: 'The trooper' },
  },
];

/* 
Creating a tuple or array with a specific length and type - The Record type can also 
be used to create a tuple or array with a specific length and type. For example:
*/
type ThreeNumbers = Record<0 | 1 | 2, number>;
const numbers: ThreeNumbers = [1, 2, 3];

/* 
Creating an object with specific properties and values - The Record type can also be used to create an 
object with specific properties and values. For example: */

type Point = {
  x: number;
  y: number;
};

const points: Record<keyof Point, number>[] = [];
points.push({ x: 1, y: 10 });
