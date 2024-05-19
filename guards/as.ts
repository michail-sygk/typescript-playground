let variable: any = { name: 'John', age: 30 };

let y = variable as { name: string; age: number };
console.log(y.name); // "John"
console.log(y.age); // 30
