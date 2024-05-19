type Obj  = { 
    id: string; 
    name: string;
    age: number;
}

//Never is a type that removes itself from the union type.
//Never can live in its own but cannot be assigned with any other type.
type Example2 =  'id' | 'name' | never;

type Example =   { 
    [K in keyof Obj] : Obj[K] extends string ? K : never; 
}[keyof Obj];


type  ExtractKeyStrings<T>=   { 
    [K in keyof T] : T[K] extends string ? K : never; 
}[keyof T];

