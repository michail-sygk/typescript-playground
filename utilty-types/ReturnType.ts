// Explain ReturnType in typescript 
// ReturnType<T> is a utility type that takes a function type T as an argument a
// nd returns the return type of that function.
//
//Let's write an example to understand it better:
//

type Michail = {
    firstname : string;
    lastname : string;
}
type GetPerson = () => Person;

type GetPersonReturnType = ReturnType<GetPerson>;