class Course {
  #price;

  set price(value) {
    if (value < 0) {
      throw 'Invald value!';
    }

    this.#price = value;
    // this._price = value;
  }

  get price() {
    return `\$${this.#price}`;
    // return `\$${this._price}`;
  }

  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.#price = price;
    // this._price = price;
  }

  getPricePerUnit() {
    return (this.#price / this.length).toFixed(2);
  }

  printSummary() {
    return `${this.title} is a complete Course witch has ${
      this.length
    } modules and cost only ${this.#price}`;
  }
}

class PracticalCourse extends Course {
  constructor(title, length, price, numOfExercises) {
    super(title, length, price);
    this.numOfExercises = numOfExercises;
  }
}

class TheoreticalCourse extends Course {
  publish() {
    console.log('Publishing...');
  }
}

const course1 = new PracticalCourse('Title 1', 5, 29.99, 50);
// const course1 = new Course('Title 1', 5, 29.99);
const course2 = new TheoreticalCourse('Title 2', 7, 39.99);
// const course2 = new Course('Title 2', 7, 39.99);

course1.price = 200;

console.log(course1);
console.log(course2);

course2.publish();
