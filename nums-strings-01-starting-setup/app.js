function randomIntBetween(min, max) {
  // min: 5, max: 10
  return Math.floor(Math.random() * (max - min + 1) + min); // 10.9999999999
}

function productDescription(strings, productName, productPrice) {
  console.log(strings);
  console.log(productName);
  console.log(productPrice);

  // let priceCategory = 'pretty cheap regarding its price';

  if (productPrice > 20) {
    priceCategory = 'fairly priced';
  }

  // return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`;

  return { name: productName, price: productPrice };
}

const productName = 'Javascript Course';
const productPrice = 29.99;

const productOutput = productDescription`This product (${productName}) is ${productPrice}.`;

console.log(productOutput);

const regex = /^\S+@\S+\.\S+$/;
