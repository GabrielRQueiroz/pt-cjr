import stock from '../18,25-stock.js';

const findFood = (name) => stock.some(({ name: foodName }) => foodName === name);

console.log('Banana:', findFood('banana'));
console.log('Apple:', findFood('apple'));
console.log('Pineapple:', findFood('pineapple'));
