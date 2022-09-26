import stock from '../18,25-stock.js';

stock.forEach(({ name, price }) => {
	console.log(`${name.charAt(0).toUpperCase()}${name.slice(1, name.length)}: R$ ${price.toFixed(2).replace('.', ',')}`);
});
