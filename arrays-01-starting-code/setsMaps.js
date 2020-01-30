// const ids = new Set([1, 2, 3]);
// ids.add('hi');
// ids.add('hi');

// for (const entry of ids.entries()) {
//   console.log(entry);
// }

// for (const entry of ids.values()) {
//   console.log(entry);
// }

// const person1 = { name: 'Juan' };
// const person2 = { name: 'Manuel' };

// const personData = new Map([[person1, [{ date: 'yesterday', price: 10 }]]]);
// // console.log(personData);
// console.log(personData.get(person1));

let person = { name: 'Juan' };

const persons = new WeakSet();
persons.add(person);
