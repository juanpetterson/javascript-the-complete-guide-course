function createTaxCalculator(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }

  return calculateTax;
}

// const vatAmount = calculateTax(100, 0.19);
// const incomeTax = calculateTax(100, 0.25);

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

let username = 'Juan';

function greetUser() {
  const name = username;
  console.log('Hi ' + name);
}

username = 'Manuel';

greetUser();

// function powerOf(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }

// function powerOf(x, n) {
//   if (n === 1) {
//     return x;
//   }
//   return x * powerOf(x, n - 1);
// }

function powerOf(x, n) {
  return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3));

const myself = {
  name: 'Juan',
  friends: [
    {
      name: 'Max',
      friends: [
        {
          name: 'Chris',
          friends: [
            {
              name: 'Joao',
              friends: [
                {
                  name: 'Jo'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'Manuel'
    }
  ]
};

function getFriendNames(person) {
  const collectedNames = [];

  if (!person.friends) {
    return [];
  }

  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...getFriendNames(friend));
  }

  return collectedNames;
}

console.log(getFriendNames(myself));
