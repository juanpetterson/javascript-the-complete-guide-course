// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNubmers = new Array(5, 2);
// // console.log(moreNubmers);

// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');

// const arrayItems = Array.from(listItems);

// console.log(arrayItems);

// const hobbies = ['Cooking', 'Sports'];
// const personalData = [30, 'Juan', { moreDetails: [] }];

// const analyticsData = [
//   [1, 1.6],
//   [2, 3, 4],
//   [5.4, 2.4]
// ];

// for (const data of analyticsData) {
//   for (const dataPoints of data) {
//     console.log(dataPoints);
//   }
// }

// console.log(personalData[1]);

// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Coding');
// hobbies.unshift('Reading');

// const poppedValue = hobbies.pop();
// console.log(poppedValue);

// const shifttedValue = hobbies.shift();

// console.log(shifttedValue);

// const removedElements = hobbies.splice(1, 0, 'Good Food'); //adding new item without removing
// // console.log(removedElements);

// const firstElement = (hobbies.splice = (0, 1)); //remove the first element and return it
// const lastElement = (hobbies.splice = (-1, 1)); //remove the last element and return it
// const allElement = (hobbies.splice = 0); //remove all elements

// //splice(index, numberOfElements, elementToPutInTheRemovedElements)

// console.log(hobbies);

// const testResults = [1, 5.3, 1.5, 10.99, -6, 10];
// const storedResults = testResults.slice(2, 5);

// testResults.push(67);

// console.log(testResults, storedResults);

// const personalData = [{ name: 'Juan' }, { name: 'Max' }];

// const juan = personalData.find((person, index, persons) => {
//   return person.name === 'Juan';
// });

// const juanIndex = personalData.findIndex((person, index, persons) => {
//   return person.name === 'Juan';
// });

// console.log(juan);
// console.log(juanIndex);

// const prices = [10.99, 3.99, 50, 40, 30];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// const newArray = prices.map((price, index, prices) => price + price * tax);

// const sortedPrices = prices.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (a === b) {
//     return 0;
//   } else {
//     return -1;
//   }
// });

// // console.log(sortedPrices.reverse());

// const sum = prices.reduce((prevValue, curValue) => curValue + prevValue, 0);

// console.log(sum);

// console.log(Math.min(...prices));

// const persons = [
//   { name: 'Juan', age: 27 },
//   { name: 'Manuel', age: 30 }
// ];

// const copiedPersons = [
//   ...persons.map(person => ({ name: person.name, age: person.age }))
// ];

// // const copiedPersons = [...persons];

// persons.push({ name: 'Priscila', age: 27 });
// persons[0].age = 25;

// console.log(persons);
// console.log(copiedPersons);

const nameData = ['Juan', 'Petterson', 'Heberle', 'Mr'];

const [firstName, lastName, ...rest] = nameData;

console.log(firstName, lastName, rest);
