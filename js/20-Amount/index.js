import stock from '../18,25-stock.js';

let nameArray = stock
	.filter(({ available }) => available)
	.map(({ name, quantity }) => ({
		name: name,
		quantity: quantity,
	}))
	.sort((a, b) => a.quantity - b.quantity);

console.log(nameArray);
