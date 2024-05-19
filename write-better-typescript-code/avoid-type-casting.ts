type Person2 = {
  age: number;
  address: {
    city: string;
  };
};

/**
 * With typecasting we can do something like :
 *
 * This will lead on unexpected behavior and we can acess properties that still we have not set any kind of value. use instead type Definition.
 */
const benny = { age: 2 } as Person2;
console.log(benny.address.city);
