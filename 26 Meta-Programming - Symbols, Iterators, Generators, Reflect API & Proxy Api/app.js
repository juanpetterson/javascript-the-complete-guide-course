// Library land
const uid = Symbol('uid'); //identifier is optional, used only to debug/develop
console.log(uid);

const user = {
  // id: 'u1',
  [uid]: 'u1',
  name: 'Juan',
  age: 27,
  [Symbol.toStringTag]: 'User object'
};

user[uid] = 'u3';

// app land => Using the library

user.id = 'u2'; // this should not be possible!
console.log(user.toString());

const company = {
  curEmployee: 0,
  employees: ['Juan', 'Joao', 'Ruro'],
  next() {
    if (this.curEmployee >= this.employees.length) {
      return { value: this.curEmployee, done: true };
    }
    const returnValue = {
      value: this.employees[this.curEmployee],
      done: false
    };
    this.curEmployee++;
    return returnValue;
  },
  [Symbol.iterator]: function* employeeGenerator() {
    // let employee = company.next();

    // while (!employee.done) {
    //   yield employee.value;
    //   employee = company.next();
    // }

    let currentEmployee = 0;

    while (currentEmployee < this.employees.length) {
      yield this.employees[currentEmployee];
      // what we yield here in the end will be the returned value of the next method later and the generator function
      // will create an object with such a nerxt method where the next method will automatically
      // return an object with a value property
      currentEmployee++;
    }
  }
};

// console.log(company.next());
// console.log(company.next());
// console.log(company.next());
// console.log(company.next());
// console.log(company.next());

// let employee = company.next();

// while (!employee.done) {
//   console.log(employee.value);
//   employee = company.next();
// }

for (const employee of company) {
  console.log(employee);
}

console.log([...company]); // normally would not work, not like at least,
//but here it worls and print the company employees because the spread operator also
//behind the scenes looks for the Symbol.iterator

// const it = company.getEmployee();

// console.log(company.getEmployee().next());
// console.log(company.getEmployee().next());
// console.log(company.getEmployee().next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

const persons = ['Juan', 'Ruro']; // has in the __proto__ one property Symbol.iterator with one loop logic
console.log(persons);

// -- Reflect Api

const course = {
  title: 'JavaScript - The complete guide'
};

Reflect.setPrototypeOf(course, {
  toString() {
    return this.title;
  }
});

// Reflect.defineProperty(course, 'price', {
//   writable: true,
//   enumerable: true,
//   configurable: true,
//   value: 59.99
// });

// Reflect.defineProperty() // newer way
// Object.defineProperty() // older way

console.log(course);

// -- Proxy Api

const courseHandler = {
  get(obj, propertyName) {
    if (propertyName === 'length') {
      return 0;
    }
    return obj[propertyName] || 'NOT FOUND';
  },

  set(obj, propertyName, newValue) {
    if (propertyName === 'rating') {
      return;
    }
    obj[propertyName] = newValue;
  }
};

const pCourse = new Proxy(course, courseHandler);
pCourse.rating = 5;

console.log(pCourse.title, pCourse.length, pCourse.rating);
