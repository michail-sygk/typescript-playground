/* 
It would be possible to create a custom type which will indicates what excactly a react hook 
would be able to return. It normal situations react hooks send an object with different 
properties or an array  
The real question is why would you want to do that? 

*/

type GenericTypeCustomHook = Record<string, number>;

type GenericTypeArrayOfItems = '';

export const item: GenericTypeCustomHook = {
  string: 0,
  string2: 15,
};

const customLoggingHook = (): void => {};
