
// When you want to pass a type to a Set, you need to use the <> syntax. 
// This is called a generic type parameter.

const set = new Set<number>(); 

set.add(1);
set.add(2);
set.add(1);

console.log(set); // Set { 1, 2 }