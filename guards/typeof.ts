let x: unknown;

if (typeof x === 'string') {
  console.log(x.toUpperCase());
}

// Path: guards\instanceof.ts
class Foo {
  foo = 123;
  common = '123';
}

class Bar {
  bar = 123;
  common = '123';
}

function doStuff(arg: Foo | Bar) {
  if (arg instanceof Foo) {
    console.log(arg.foo);
    // console.log(arg.bar); // Error!
  }
  if (arg instanceof Bar) {
    // console.log(arg.foo); // Error!
    console.log(arg.bar);
  }

  console.log(arg.common);
}





