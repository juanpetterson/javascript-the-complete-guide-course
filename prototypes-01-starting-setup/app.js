// class AgedPerson {
//   printAge() {
//     console.log(this.age);
//   }
// }

class Person {
  name = 'Juan';

  constructor() {
    // super();
    this.age = 27;
  }

  greet = () => {
    console.log(`Hi, I am ${this.name}`);
  };
}

// function Person() {
//   this.name = 'Juan';
//   this.age = 27;
// }

// Person.prototype.greet = function() {
//   console.log(`Hi, I am ${this.name}`);
// };

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   }
// };

// Person.prototype.printAge = function printAge() {
//   console.log(this.age);
// };

// const person = new Person();
// person.greet();
// person.printAge();

// console.log(person.__proto__);

// const p = new Person();
// console.log(p);

// const button = document.getElementById('btn');
// button.addEventListener('click', p.greet);

const course = {
  title: 'Javascript',
  rating: 5
};

// console.log(Object.getPrototypeOf(course));
Object.setPrototypeOf(course, {
  // ...Object.getPrototypeOf(course),
  printRating: function() {
    console.log(`${this.rating}/5`);
  }
});

const student = Object.create(
  {
    printProgress: function() {
      console.log(this.progress);
    }
  },
  {
    name: {
      configurable: true,
      enumerable: true,
      value: 'Juan',
      writable: false
    },
    progress: {
      configurable: true,
      enumerable: true,
      value: 0.8,
      writable: false
    }
  }
);

// student.name = 'Juan';

// Object.defineProperty(student, 'progress', {
configurable: true,
  // enumerable: true,
  // value: 0.8,
  // writable: false
  // });

  student.printProgress();

console.log(student);
