// Basically a generic allows you to create `function` types that are flexible regarding the type of data they accept.
type myGenericType<TData>  = { 
    data: TData
}

type Example1 = myGenericType<{name : string}>;
