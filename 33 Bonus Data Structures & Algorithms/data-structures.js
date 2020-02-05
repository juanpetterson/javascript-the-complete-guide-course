const age = [30, 29, 54];

// [30,29,54]
age.push(60); // => Constant Time Complexity: O(1)
age.unshift(10); // Linear Time Complexity: O(n)O

const myAge = age[1]; // => Constant Time Complexity: O(1);

// ---

const namePopularity = [
  { userName: 'Juan', usages: 5 },
  { userName: 'Ruro', usages: 10 }
];

const usages = namePopularity.find(person => person.userName === 'Ruro').usages;
// BEST CASE: ConstantTime Complexity => O(1)
// WORST CASE: Linear Complexity => O(n)

const nameMap = {
  juan: 5,
  ruro: 10
};

const usages2 = nameMap['ruro']; // Constant Time Complexity: O(1)

// const nameRealMap = new Map();
