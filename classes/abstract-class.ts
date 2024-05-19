abstract class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  display(): void {
    console.log(this.name);
    this.age = 20;
  }

  abstract find(string: string): Person;
}

class Employee extends Person {
  empCode: number;

  constructor(name: string, code: number) {
    super(name); // must call super()
    this.empCode = code;
  }

  find(name: string): Person {
    // execute AJAX request to find an employee from a db
    return new Employee(name, 1);
  }

  display(): void {
    console.log("Employee Code: " + this.empCode);
    super.display();
  }
}

let emp: Person = new Employee("James", 100);
emp.display();
console.log(emp.find("Steve"));
