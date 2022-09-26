import stock from '../18,25-stock.js';

let nameArray = stock.map(({ name }) => `${name.charAt(0).toUpperCase()}${name.slice(1, name.length)}`);

console.log(nameArray);
