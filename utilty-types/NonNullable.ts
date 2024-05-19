type myType = string | number | null | boolean | undefined;
type noNulls = NonNullable<myType>;

const newType: myType = 5;
const notNullType: noNulls = null;

const notUndefined: noNulls = undefined;

const canItBeZero: noNulls = 0;

const canItBeFalse: noNulls = false;
/* 
You cannot define noNulls types at all. or undefined 
*/
