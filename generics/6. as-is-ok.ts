
// Considering that we know that Object.keys() returns an array of strings, we can use a type assertion 
//to tell the compiler not to worry about the actual type of the array elements
//  and just treat them as strings.
// By that way we can use the array elements as keys of the object.
const typeObjectKeys = <TObj extends {}>(object: TObj)=> {
    return Object.keys(object) as Array<keyof TObj>;
}



const result = typeObjectKeys({1 : 1, b : 2, c : 3});
//      ^? 


export {}