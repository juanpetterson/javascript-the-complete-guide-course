const { generateText } = require('./util');

test('should output name and age', () => {
  const text = generateText('Juan', 27);
  expect(text).toBe('Juan (27 years old)');
  const text2 = generateText('Ruro', 27);
  expect(text2).toBe('Ruro (27 years old)');
});

test('should output data-less text', () => {
  const text = generateText('', null);
  expect(text).toBe(' (null years old)');
  const text2 = generateText();
  expect(text2).toBe('undefined (undefined years old)');
});
