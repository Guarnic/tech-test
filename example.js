const { Product, CarInsurance } = require('./src/coTest');

// Productos de ejemplo
const productsAtDayZero = [
  new Product('Medium Coverage', 10, 20),
  new Product('Full Coverage', 2, 0),
  new Product('Mega Coverage', 0, 80),
  new Product('Super Sale', 3, 6),
];

const carInsurance = new CarInsurance(productsAtDayZero);

const productPrinter = function (product) {
  console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
};

console.log('Día 0:');
console.log('name, sellIn, price');
carInsurance.products.forEach(productPrinter);
console.log('');

// Simular 5 días
for (let i = 1; i <= 30; i += 1) {
  console.log(`Día ${i}:`);
  console.log('name, sellIn, price');
  carInsurance.updatePrice().forEach(productPrinter);
  console.log('');
}
