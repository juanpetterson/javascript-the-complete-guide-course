const puppeteer = require('puppeteer');
const { generateText, checkAndGenerate } = require('./util');

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

test('should generate a valid text output', () => {
  const text = checkAndGenerate('Juan', 27);
  expect(text).toBe('Juan (27 years old)');
});

test('should create an element with text and corret class', async () => {
  const browser = await puppeteer.launch({
    headless: true
  });
  const page = await browser.newPage();
  await page.goto(
    'file:///C:/www/javascript-course/31%20Introduction%20to%20Testing/index.html'
  );
  await page.click('input#name');
  await page.type('input#name', 'Ruro');
  await page.click('input#age');
  await page.type('input#age', '27');
  await page.click('#btnAddUser');
  const finalText = await page.$eval('.user-item', el => el.textContent);
  expect(finalText).toBe('Ruro (27 years old)');
}, 10000);
