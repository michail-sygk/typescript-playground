// Constraints Generics allow you to specify a 
//constraint on what type of data is allowed to be used with a generic type. 
//For example, you may want to limit a generic type to only accept types that have a
// certain property. This is done using the extends keyword.
type GetPromiseReturnType<T extends (...args : any)=>void> = Awaited<ReturnType<T>>;

type Result = GetPromiseReturnType<() => Promise<{
    firtname : string;
    lastname : string;
}>>;


