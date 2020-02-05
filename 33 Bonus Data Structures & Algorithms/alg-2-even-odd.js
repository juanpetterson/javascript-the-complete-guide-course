function isEvenOrOdd(number) {
  // const result = number % 2;

  // if (result === 0) {
  //   return 'Even';
  // }

  // return 'Odd';

  return number % 2 ? 'Odd' : 'Even';
}

console.log(isEvenOrOdd(10)); // 'Even'
console.log(isEvenOrOdd(11)); // 'Odd'
