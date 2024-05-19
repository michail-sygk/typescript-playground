let userAny: any; // Simply means turn of the Typescript 'type-checks'
let userUnknown: unknown;

userAny.myThing();
userUnknown.myThing(); // we cannot access undeclared methods in unknown.

type IUserRole = 'ADMIN' | 'MANAGER' | 'PLAYER';
type IUser = {
  firstName: string;
  lastName: string;
  type: IUserRole;
};

/**
 * Common use cases for unknown type in Tyscript
 *
 * Parsing data from external sources: When parsing data from external sources, such as JSON responses or user input, the type of the data
 * may be unknown. In this case, using the unknown type can help ensure that the data is properly
 * validated and converted before being used in the application.
 */
function parseData(data: unknown): number {
  if (typeof data === 'number') {
    return data;
  } else if (typeof data === 'string') {
    return parseInt(data, 10);
  } else {
    throw new Error('Invalid data format');
  }
}

/**
 * Using dynamic objects: When working with objects that have dynamic properties, such as configuration objects or event payloads, the type of the properties may be unknown.
 * In this case, using the unknown type can help ensure that the properties are properly checked and accessed.
 */
interface Config {
  [key: string]: unknown;
}

function getConfigValue(config: Config, key: string): string {
  const value = config[key];
  if (typeof value === 'string') {
    return value;
  } else {
    throw new Error('Invalid config value');
  }
}

/**
 * Writing generic code: When writing generic code, the types of the input and output values may be unknown. In this case,
 * using the unknown type can help ensure that the code is properly checked and typed.
 */

function mapUnknown<T>(value: unknown, mapper: (value: unknown) => T): T {
  return mapper(value);
}

function mapUnknownToString(value: unknown): string {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value.toString();
  } else {
    return '';
  }
}

const unknownValue: unknown = 'hello world';
const mappedValue: string = mapUnknown(unknownValue, mapUnknownToString);
console.log(mappedValue); // "HELLO WORLD"
