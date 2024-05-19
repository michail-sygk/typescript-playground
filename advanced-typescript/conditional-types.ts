// Example 1 

type SomeType = string;  
type MyConditionalType = SomeType extends string ? string : null;
//     ^? 

// Example 2
function someFunction<T>(value: T) {
    const someOtherFunction = (someArg: T extends boolean ? "TYPE A" : "TYPE B") => { 
        const a: "TYPE A" | "TYPE B" = someArg;
    };
    return someOtherFunction;
}

const result =  someFunction(true) // ✅
//        ^?


 // Example 3 
 type StringOrNot<T> = T  extends string ? never: never;

const  test : StringOrNot<string> = 'hello'; 
//       ^?

export {}