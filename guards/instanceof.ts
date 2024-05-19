interface IMyClass {
  method(): void;
}

class MyClass implements IMyClass {
  a: number;

  constructor(a: number) {
    this.a = a;
  }
  method(): void {
    console.log('MyClass.method()');
  }
}

class InheriedClass extends MyClass {
  constructor() {
    super(15);
  }

  method() {
    console.log('InheriedClass.method()');
  }
}

let skata: any = new MyClass(15);
const skata2 = new InheriedClass();
console.log(skata.method());
console.log(skata2.method());

if (skata instanceof MyClass) {
  console.log('x is an instance of MyClass.');
}
console.log(skata2 instanceof MyClass);
