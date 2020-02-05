// BEST CASE [1] => O(1)
// WORST CASE [3,1] => O(n)
function getMin(numbers) {
  if (!numbers.length) {
    // 1 execution
    throw new Error('Should not be an empty array!');
  }

  let currentMin = numbers[0]; // 1 execution

  // 1 execution
  for (let i = 1; i < numbers.length; i++) {
    // 7 executions
    if (currentMin > numbers[i]) {
      currentMin = numbers[i]; // 0 - 7 executions
    }
  }

  return currentMin; // 1 execution
}

// Total = n => Linear Time Complexity => O(n)
// BEST CASE [1,2,3] => O(n^2)
// WORST CASE [3,2,1] => O(n^2)
// AVERAGE CASE [?,?,?] => O(n^2)
function getMin2(numbers) {
  if (!numbers.length) {
    throw new Error('Should not be an empty array!');
  }

  for (let i = 0; i < numbers.length; i++) {
    let outerElement = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      let innerElement = numbers[j];

      if (outerElement > innerElement) {
        //swap
        numbers[i] = innerElement;
        numbers[j] = outerElement;

        outerElement = numbers[i];
        innerElement = numbers[j];
      }

      // console.log(numbers);
    }
  }

  return numbers[0];
}

// Quadratic Time Complexity => n * n => O(n^2)

const testNumbers = [3, 1, 2, 8, 4, 7, 6, 0];

const min = getMin(testNumbers);
const min2 = getMin2(testNumbers);

console.log(min);
console.log(min2);
