// class User {
//   name: string;
//   private age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

interface Greetable {
  name: string;
}

interface Printable {
  print(): void;
}

class User implements Greetable, Printable {
  constructor(public name: string, private age: number) {}

  print(): void {
    console.log(this.name);
  }
}

class Admin extends User {
  constructor(name: string, age: number, public permissions: string[]) {
    super(name, age);
  }
}

const user = new User('Juan', 27);

console.log(user.name);

const num1Input = document.getElementById('num1') as HTMLInputElement;
const num2Input = <HTMLInputElement>document.getElementById('num2'); // Just to show other available syntax
const buttonElement = document.querySelector('button')!;

function add(a: number, b: number): number {
  return a + b;
}

type PrintMode = 'console' | 'alert';
enum OutputMode {
  CONSOLE,
  ALERT
}

function printResult(result: number, printMode: OutputMode) {
  if (printMode === OutputMode.CONSOLE) {
    console.log(result);
  } else if (printMode === OutputMode.ALERT) {
    alert(result);
  }
}

// const result = add(5, 3);
// let isDone = false;

// console.log(result);

interface CalculationContainer {
  res: number;
  print(): void;
}

// type CalculationResults = {
//   res: number;
//   print: () => void;
// }[];

type CalculationResults = CalculationContainer[];

// const results: Array<CalculationContainer> = [];
const results: CalculationResults = [];
const names = ['Juan'];

buttonElement.addEventListener('click', () => {
  const num1 = +num1Input.value;
  const num2 = +num2Input.value;

  const result = add(num1, num2);
  const resultContainer = {
    res: result,
    print() {
      console.log(this.res);
    }
  };

  results.push(resultContainer);
  // console.log(results);
  // results[0].print();

  printResult(result, OutputMode.CONSOLE);
  printResult(result, OutputMode.ALERT);
});

function logAndEcho<T>(value: T) {
  console.log(value);

  return value;
}

logAndEcho<string>('Hi there!');
