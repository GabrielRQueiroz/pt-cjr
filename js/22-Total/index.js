import stock from '../18,25-stock.js';

const total = stock.reduce((acc, { price, quantity }) => acc + price * quantity, 0);

console.log(total);
